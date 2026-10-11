const supabase = require('../db/supabase');

class CardInstance {
    constructor(data = {}) {
        this.id = data.id || null;
        this._id = data.id || null;
        this.name = data.name || '';
        this.skill = data.skill || '';
        this.type = data.type || '';
        this.for = data.for || '';
        this.desc = data.desc || '';
        this.what = data.what || [];
        this.why = data.why || [];
        this.when = data.when || [];
        this.iconURL = data.iconURL || '';
        this.months = data.months != null ? data.months : 0;
        this.NumUsers = data.NumUsers != null ? data.NumUsers : 0;
        this.technologies = data.technologies || [];
        this.roadmap = data.roadmap || [];
        this.clickedBy = data.clickedBy || [];
        this.created_at = data.created_at || null;
        this.updated_at = data.updated_at || null;
    }

    async save() {
        if (!this.id) {
            const { data, error } = await supabase
                .from('cards')
                .insert({
                    name: this.name,
                    skill: this.skill,
                    type: this.type,
                    for: this.for,
                    desc: this.desc,
                    what: this.what,
                    why: this.why,
                    when: this.when,
                    iconURL: this.iconURL,
                    months: this.months,
                    NumUsers: this.NumUsers,
                    technologies: this.technologies,
                    roadmap: this.roadmap,
                    clickedBy: this.clickedBy
                })
                .select()
                .single();
            if (error) throw error;
            this.id = data.id;
            this._id = data.id;
            return this;
        } else {
            const { data, error } = await supabase
                .from('cards')
                .update({
                    name: this.name,
                    skill: this.skill,
                    type: this.type,
                    for: this.for,
                    desc: this.desc,
                    what: this.what,
                    why: this.why,
                    when: this.when,
                    iconURL: this.iconURL,
                    months: this.months,
                    NumUsers: this.NumUsers,
                    technologies: this.technologies,
                    roadmap: this.roadmap,
                    clickedBy: this.clickedBy,
                    updated_at: new Date().toISOString()
                })
                .eq('id', this.id)
                .select()
                .single();
            if (error) throw error;
            return this;
        }
    }
}

const Card = function(data) {
    return new CardInstance(data);
};

Card.find = async function(filter = {}) {
    let query = supabase.from('cards').select('*');
    if (filter && filter.type) {
        query = query.eq('type', filter.type);
    }
    const { data, error } = await query;
    if (error) throw error;
    return (data || []).map(row => new CardInstance(row));
};

Card.findOne = async function(filter = {}) {
    let query = supabase.from('cards').select('*');
    if (!filter) filter = {};
    if (filter.name) {
        query = query.eq('name', filter.name);
    } else if (filter.skill) {
        query = query.eq('skill', filter.skill);
    } else if (filter.id) {
        query = query.eq('id', filter.id);
    } else if (filter._id) {
        query = query.eq('id', filter._id);
    }
    const { data, error } = await query.maybeSingle();
    if (error) throw error;
    if (!data) return null;
    return new CardInstance(data);
};

Card.findById = async function(id) {
    if (!id) return null;
    return Card.findOne({ id });
};

Card.findByIdAndUpdate = async function(id, update, options = {}) {
    const card = await Card.findById(id);
    if (!card) return null;

    if (update && update.$addToSet && update.$addToSet.clickedBy) {
        const userIdStr = update.$addToSet.clickedBy.toString();
        let clickedBy = Array.isArray(card.clickedBy) ? card.clickedBy : [];
        if (!clickedBy.includes(userIdStr)) {
            clickedBy.push(userIdStr);
        }
        card.clickedBy = clickedBy;
        card.NumUsers = clickedBy.length;
    }

    await card.save();
    return card;
};

module.exports = Card;