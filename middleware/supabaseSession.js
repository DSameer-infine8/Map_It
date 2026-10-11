const session = require('express-session');
const supabase = require('../db/supabase');

class SupabaseSessionStore extends session.Store {
    constructor(options = {}) {
        super();
        this.table = options.table || 'sessions';
    }

    async get(sid, callback) {
        try {
            const { data, error } = await supabase
                .from(this.table)
                .select('sess, expire')
                .eq('sid', sid)
                .maybeSingle();

            if (error || !data) {
                return callback(null, null);
            }

            if (new Date(data.expire) < new Date()) {
                await this.destroy(sid, () => {});
                return callback(null, null);
            }

            const sess = typeof data.sess === 'string' ? JSON.parse(data.sess) : data.sess;
            return callback(null, sess);
        } catch (err) {
            return callback(err);
        }
    }

    async set(sid, sess, callback) {
        try {
            const maxAge = (sess.cookie && sess.cookie.maxAge) || 7 * 24 * 60 * 60 * 1000;
            const expire = new Date(Date.now() + maxAge).toISOString();

            const { error } = await supabase
                .from(this.table)
                .upsert({
                    sid,
                    sess,
                    expire
                });

            if (callback) {
                return callback(error || null);
            }
        } catch (err) {
            if (callback) {
                return callback(err);
            }
        }
    }

    async destroy(sid, callback) {
        try {
            const { error } = await supabase
                .from(this.table)
                .delete()
                .eq('sid', sid);

            if (callback) {
                return callback(error || null);
            }
        } catch (err) {
            if (callback) {
                return callback(err);
            }
        }
    }

    async touch(sid, sess, callback) {
        return this.set(sid, sess, callback);
    }
}

module.exports = SupabaseSessionStore;
