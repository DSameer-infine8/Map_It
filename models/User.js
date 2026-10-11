const supabase = require('../db/supabase');
const bcrypt = require('bcrypt');

class UserInstance {
    constructor(data = {}) {
        this.id = data.id || null;
        this._id = data.id || null;
        this.name = data.name || '';
        this.email = data.email || '';
        this.password = data.password || '';
        this.otp = data.otp || null;
        this.otpExpiry = data.otpExpiry ? new Date(data.otpExpiry) : null;
        this.isVerified = data.isVerified === true;
        this.created_at = data.created_at || null;
    }

    async comparePassword(candidatePassword) {
        if (!this.password || !candidatePassword) return false;
        return bcrypt.compare(candidatePassword, this.password);
    }

    async save() {
        if (!this.id) {
            let hashedPassword = this.password;
            if (!this.password.startsWith('$2b$') && !this.password.startsWith('$2a$')) {
                hashedPassword = await bcrypt.hash(this.password, 10);
            }
            const { data, error } = await supabase
                .from('users')
                .insert({
                    name: this.name,
                    email: this.email.trim(),
                    password: hashedPassword,
                    otp: this.otp || null,
                    otpExpiry: this.otpExpiry ? new Date(this.otpExpiry).toISOString() : null,
                    isVerified: this.isVerified
                })
                .select()
                .single();
            if (error) throw error;
            this.id = data.id;
            this._id = data.id;
            this.password = data.password;
            return this;
        } else {
            const updatePayload = {
                name: this.name,
                email: this.email.trim(),
                otp: this.otp || null,
                otpExpiry: this.otpExpiry ? new Date(this.otpExpiry).toISOString() : null,
                isVerified: this.isVerified
            };
            if (this.password && !this.password.startsWith('$2b$') && !this.password.startsWith('$2a$')) {
                updatePayload.password = await bcrypt.hash(this.password, 10);
                this.password = updatePayload.password;
            }
            const { data, error } = await supabase
                .from('users')
                .update(updatePayload)
                .eq('id', this.id)
                .select()
                .single();
            if (error) throw error;
            return this;
        }
    }
}

const User = function(data) {
    return new UserInstance(data);
};

User.findOne = async function(filter = {}) {
    let query = supabase.from('users').select('*');
    if (filter.email) {
        query = query.ilike('email', filter.email.trim());
    } else if (filter.id) {
        query = query.eq('id', filter.id);
    } else if (filter._id) {
        query = query.eq('id', filter._id);
    }
    const { data, error } = await query.maybeSingle();
    if (error) throw error;
    if (!data) return null;
    return new UserInstance(data);
};

User.findById = async function(id) {
    if (!id) return null;
    return User.findOne({ id });
};

module.exports = User;
