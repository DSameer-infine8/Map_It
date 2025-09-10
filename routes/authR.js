const express = require('express');
require('dotenv').config();
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const wrapAsync = require("../middleware/asyncWrap");
const User = require('../models/User');
const bcrypt = require('bcrypt');



const router = express.Router({ mergeParams: true });


// Email Transporter Setup
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});




// Generate OTP
const generateOTP = () => crypto.randomInt(100000, 999999).toString();

router.post('/register', wrapAsync(async (req, res) => {
    const { name, email, password } = req.body;
    req.session.pendingEmail = email;

    let user = await User.findOne({ email });

    if (user) {
        req.flash('error_msg', 'User already exists');
        return res.redirect('/recommend');
    }

    const otp = generateOTP();
    const otpExpiry = new Date(Date.now() + 10 * 60 * 1000);

    user = new User({ name, email, password, otp, otpExpiry });
    await user.save();

    await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'OTP Verification',
        text: `Your OTP is: ${otp}`
    });

    req.flash('success_msg', 'User registered. Please verify OTP sent to email.');

    // ✅ Redirect so session is saved and next request has pendingEmail
    req.flash('otp_stage', true);
    res.redirect('/recommend');
}));





router.post('/verify-otp', wrapAsync(async (req, res) => {
    const { otp } = req.body;
    const email = req.session.pendingEmail;

    if (!email) {
        req.flash('error_msg', 'No pending verification.');
        return res.redirect('/recommend');
    }

    const user = await User.findOne({ email });
    if (!user) {
        req.flash('error_msg', 'User not found');
        return res.redirect('/recommend');
    }
    if (user.isVerified) {
        req.flash('error_msg', 'User already verified');
        return res.send('Successfully registered');
    }
    if (user.otp !== otp || user.otpExpiry < new Date()) {
        req.flash('error_msg', 'Invalid or expired OTP');
        return res.redirect('/recommend');
    }

    user.isVerified = true;
    user.otp = undefined;
    user.otpExpiry = undefined;
    await user.save();

    // session handling
    delete req.session.pendingEmail;
    req.session.verifiedEmail = email;

    // directly use the same `user` object instead of querying again
    req.session.userId = user._id.toString();

    console.log("Verified Email:", req.session.verifiedEmail);
    console.log("User ID:", req.session.userId);

    req.flash('success_msg', 'Email verified successfully. You can now log in.');
    setTimeout(() => {
        res.redirect("/recommend/quiz");
    }, 2000);
}));

router.post('/resend-otp', wrapAsync(async (req, res) => {
    const email = req.session.pendingEmail;
    if (!email) {
        req.flash('error_msg', 'No pending verification.');
        return res.redirect('/register');
    }


    const user = await User.findOne({ email });

    if (!user) {
        req.flash('error_msg', 'User not found');
        return res.redirect('/resend-otp');
    }
    if (user.isVerified) {
        req.flash('error_msg', 'User already verified');
        return res.redirect('/login');
    }

    const otp = generateOTP();
    user.otp = otp;
    user.otpExpiry = new Date(Date.now() + 10 * 60 * 1000);
    await user.save();

    await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: user.email,
        subject: 'Resend OTP Verification',
        text: `Your new OTP is: ${otp}`
    });

    req.flash('success_msg', 'OTP resent successfully. Please check your email.');
    res.redirect('/verify');
}));

router.post('/login', wrapAsync(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });


    if (!user) {
        req.flash('error_msg', 'User not found');
        return res.redirect('/recommend');
    }
    if (user.isVerified !== true) {
        req.flash('error_msg', 'Email not verified. Please verify OTP.');
        return res.redirect('/recommend');
    }
    if (!password) {
        req.flash('error_msg', 'Password is required');
        return res.redirect('/recommend');
    }
    if (!(await user.comparePassword(password))) {
        req.flash('error_msg', 'Incorrect password');
        return res.redirect('/recommend');
    }


    req.session.user = { id: user._id, email: user.email, name: user.name };
    // directly use the same `user` object instead of querying again
    req.session.userId = user._id.toString();

    console.log("User ID:", req.session.userId);
    req.flash('success_msg', 'Login successful');
    req.session.verifiedEmail = email;
    setTimeout(() => {
        res.redirect("/recommend/quiz");
    }, 2000);
}));


router.post('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            req.flash('error_msg', 'Error logging out');
            return res.redirect('/dashboard');
        }
        res.clearCookie('connect.sid'); // clear session cookie
        req.flash('success_msg', 'Logged out successfully');
        res.redirect('/login');
    });
});


module.exports = router;