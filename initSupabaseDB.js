const fs = require('fs');
const path = require('path');
const supabase = require('./db/supabase');

async function seed() {
    console.log("Reading data from initDB.js...");
    const content = fs.readFileSync(path.join(__dirname, 'initDB.js'), 'utf8');

    const startIndex = content.indexOf('let data = [');
    if (startIndex === -1) {
        throw new Error("Could not find 'let data = [' in initDB.js");
    }

    const dataStart = content.indexOf('[', startIndex);
    const endIndex = content.lastIndexOf('];');
    if (endIndex === -1) {
        throw new Error("Could not find ending '];' in initDB.js");
    }

    const arrayString = content.substring(dataStart, endIndex + 1);
    console.log(`Extracted array string of length ${arrayString.length}`);

    // Evaluate the array
    const data = eval(arrayString);
    console.log(`Found ${data.length} cards to seed.`);

    // Clean data records for Supabase
    const preparedCards = data.map(item => ({
        name: item.name,
        skill: item.skill,
        type: item.type,
        for: item.for || null,
        desc: item.desc || null,
        what: item.what || [],
        why: item.why || [],
        when: item.when || [],
        iconURL: item.iconURL || null,
        months: item.months || 0,
        NumUsers: item.NumUsers || 0,
        technologies: item.technologies || [],
        roadmap: item.roadmap || [],
        clickedBy: item.clickedBy || []
    }));

    // Insert/upsert in batches of 10
    const batchSize = 10;
    for (let i = 0; i < preparedCards.length; i += batchSize) {
        const batch = preparedCards.slice(i, i + batchSize);
        console.log(`Upserting batch ${Math.floor(i / batchSize) + 1} of ${Math.ceil(preparedCards.length / batchSize)} (cards ${i + 1} - ${i + batch.length})...`);
        
        const { error } = await supabase
            .from('cards')
            .upsert(batch, { onConflict: 'name' });

        if (error) {
            console.error("Error upserting batch:", error);
            throw error;
        }
    }

    console.log("✅ All cards successfully seeded into Supabase!");

    // Verify count in database
    const { count, error: countErr } = await supabase
        .from('cards')
        .select('*', { count: 'exact', head: true });

    if (countErr) {
        console.error("Error counting cards:", countErr);
    } else {
        console.log(`Total cards in Supabase: ${count}`);
    }
}

seed().then(() => {
    console.log("Seeding complete!");
    process.exit(0);
}).catch(err => {
    console.error("Seeding failed:", err);
    process.exit(1);
});
