const mysql = require('mysql2');

// We have a working database for you at the following URL
// To use it, replace <cslogin> with your CS login. Also,
// replace <banner ID> with your banner id (with the B)!
const username = '<cslogin>';
const bannerID = '<bannerid>';

const pool = mysql.createConnection({
    host: 'bdognom-v2.cs.brown.edu',
    user: username,
    password: bannerID,
    database: 'cdquery1',
});

/**
 * Prints out the degrees of Beyonce and the size of the set of reachable artists. 
 * See the pseudocode in the handout for a guide on how to implement this!
 * (Feel free to change these variables once you get it working!).
 * (Hint 1: You should use promises here to keep queries asynchronous!)
 */
async function related(pool) {
    const artist0 = 'Beyonce';
    /**
     * IMPORTANT (Please Read):
     * There is a shared_disk table that has 2 fields,
     * artist1 and artist2 (note that these are the ids, not the names!); 
     * This indicates that artist1 and artist2 appear on the same disk (they are related).
     * Use this collection to perform your queries. 
     * Do not manually compute the the sharing yourselves as this will overwhelm the database
     * system during lab hours.
     * If we find that you manually computed the sharing, we may deduct points!
     */
    // Here is an example query that gets the record for Beyonce in the artist table.
    // To ensure that your connection is working, you should see the Beyonce record
    // printed in your console.
    let [rows, fields] = await pool.promise().query(`SELECT * FROM artist WHERE name='${artist0}'`);
    console.log(rows);
    console.log(`TODO: provide your implementation of related() for ${artist0}`);
}

function close() {
    pool.end(function(err) {
        // all connections in the pool have ended
        if (err) throw err;
    });
}

// Call the related function once the connection has been created
related(pool).then(() => close());