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
        from: `"Map_it" <${process.env.EMAIL_USER}>`,  // sender name + email
        to: email,
        subject: 'OTP Verification - Map_it',
        html: `
        <div style="font-family: Arial, sans-serif; max-width: 500px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 10px; background-color: #fafafa;">
            
            <!-- Logo -->
            <div style="text-align: center; margin-bottom: 20px;">
                <img src="https://drive.google.com/file/d/1H1Bxo7SmFbv5reV_RxSeyzFhb3id7bZs/view?usp=sharing" alt="Map_it Logo" width="80" style="border-radius: 50%;"/>
            </div>
            
            <!-- Title -->
            <h2 style="text-align: center; color: #333;">OTP Verification</h2>
            
            <!-- Message -->
            <p style="font-size: 16px; color: #555;">
                Hello 👋,<br><br>
                Thank you for signing up with <b>Map_it</b>! <br>
                Please use the following One-Time Password (OTP) to verify your account:
            </p>
            
            <!-- OTP Box -->
            <div style="text-align: center; margin: 20px 0;">
                <span style="display: inline-block; font-size: 24px; font-weight: bold; letter-spacing: 4px; padding: 10px 20px; background-color: #ff7b00; color: white; border-radius: 8px;">
                    ${otp}
                </span>
            </div>
            
            
            <!-- Footer -->
            <p style="font-size: 12px; color: #999; text-align: center; margin-top: 30px;">
                If you didn’t request this, please ignore this email. <br>
                © ${new Date().getFullYear()} Map_it. All rights reserved.
            </p>
        </div>
    `
    });


    req.flash('success_msg', 'User registered. Please verify OTP sent to email.');

    // ✅ Redirect so session is saved and next request has pendingEmail
    req.flash('otp_stage', true);
    res.redirect('/recommend');
}));


router.post('/home/register', wrapAsync(async (req, res) => {
    const { name, email, password } = req.body;
    req.session.pendingEmail = email;

    let user = await User.findOne({ email });

    if (user) {
        req.flash('error_msg', 'User already exists.Try to Log-In');
        return res.redirect('/register');
    }

    const otp = generateOTP();
    const otpExpiry = new Date(Date.now() + 10 * 60 * 1000);

    user = new User({ name, email, password, otp, otpExpiry });
    await user.save();

    await transporter.sendMail({
        from: `"Map_it" <${process.env.EMAIL_USER}>`,  // sender name + email
        to: email,
        subject: 'OTP Verification - Map_it',
        html: `
        <div style="font-family: Arial, sans-serif; max-width: 500px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 10px; background-color: #fafafa;">
            
            <!-- Logo -->
            <div style="text-align: center; margin-bottom: 20px;">
                <img src="/images/advance.png" alt="Map_it Logo" width="80" style="border-radius: 50%;"/>
            </div>
            
            <!-- Title -->
            <h2 style="text-align: center; color: #333;">OTP Verification</h2>
            
            <!-- Message -->
            <p style="font-size: 16px; color: #555;">
                Hello 👋,<br><br>
                Thank you for signing up with <b>Map_it</b>! <br>
                Please use the following One-Time Password (OTP) to verify your account:
            </p>
            
            <!-- OTP Box -->
            <div style="text-align: center; margin: 20px 0;">
                <span style="display: inline-block; font-size: 24px; font-weight: bold; letter-spacing: 4px; padding: 10px 20px; background-color: #ff7b00; color: white; border-radius: 8px;">
                    ${otp}
                </span>
            </div>
            
            <!-- Footer -->
            <p style="font-size: 12px; color: #999; text-align: center; margin-top: 30px;">
                If you didn’t request this, please ignore this email. <br>
                © ${new Date().getFullYear()} Map_it. All rights reserved.
            </p>
        </div>
    `
    });


    req.flash('success_msg', 'User registered. Please verify OTP sent to email.');

    // ✅ Redirect so session is saved and next request has pendingEmail
    req.flash('otp_stage', true);
    res.redirect('/register');
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




router.post('/home/verify-otp', wrapAsync(async (req, res) => {
    const { otp } = req.body;
    const email = req.session.pendingEmail;

    if (!email) {
        req.flash('error_msg', 'No pending verification.');
        return res.redirect('/home');
    }

    const user = await User.findOne({ email });
    if (!user) {
        req.flash('error_msg', 'User not found');
        return res.redirect('/home');
    }
    if (user.isVerified) {
        req.flash('error_msg', 'User already verified.Try to Log-in');
        return res.send('Successfully registered');
    }
    if (user.otp !== otp || user.otpExpiry < new Date()) {
        req.flash('error_msg', 'Invalid or expired OTP');
        return res.redirect('/home');
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


    req.flash('success_msg', 'Email verified successfully & The User Registered.');
    res.redirect("/home");
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
        from: `"Map_it" <${process.env.EMAIL_USER}>`,  // sender name + email
        to: email,
        subject: 'Resend OTP Verification - Map_it',
        html: `
        <div style="font-family: Arial, sans-serif; max-width: 500px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 10px; background-color: #fafafa;">
            
            <!-- Logo -->
            <div style="text-align: center; margin-bottom: 20px;">
                <img src="/images/advance.png" alt="Map_it Logo" width="80" style="border-radius: 50%;"/>
            </div>
            
            <!-- Title -->
            <h2 style="text-align: center; color: #333;">OTP Verification</h2>
            
            <!-- Message -->
            <p style="font-size: 16px; color: #555;">
                Hello 👋,<br><br>
                Thank you for signing up with <b>Map_it</b>! <br>
                Please use the following New One-Time Password (OTP) to verify your account:
            </p>
            
            <!-- OTP Box -->
            <div style="text-align: center; margin: 20px 0;">
                <span style="display: inline-block; font-size: 24px; font-weight: bold; letter-spacing: 4px; padding: 10px 20px; background-color: #ff7b00; color: white; border-radius: 8px;">
                    ${otp}
                </span>
            </div>
            
            <!-- Footer -->
            <p style="font-size: 12px; color: #999; text-align: center; margin-top: 30px;">
                If you didn’t request this, please ignore this email. <br>
                © ${new Date().getFullYear()} Map_it. All rights reserved.
            </p>
        </div>
    `
    });

    req.flash('success_msg', 'OTP resent successfully. Please check your email.');
    // ✅ Redirect so session is saved and next request has pendingEmail
    req.flash('otp_stage', true);
    res.redirect('/register');
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



router.post('/home/login', wrapAsync(async (req, res) => {
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
    res.redirect("/home");
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