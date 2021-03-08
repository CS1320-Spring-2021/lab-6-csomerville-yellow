const { MongoClient } = require('mongodb');

// We have a working database for you at the following URL
// To use it, replace <cslogin> with your CS login. Also,
// replace <banner ID> with your banner id (with the B)!
const username = '<cslogin>';
const bannerID = '<bannerid>';

/**
 * Prints out the degrees of Beyonce and the size of the set of reachable artists. 
 * See the pseudocode in the handout for a guide on how to implement this!
 * (Feel free to change these variables once you get it working!).
 * (Hint 1: You should use promises here to keep queries asynchronous!)
 */
async function related(db) {
    /**
     * IMPORTANT (Please Read):
     * There is a shared_disk collection that is indexed by artist1 (the name), 
     * and returns an object with the "value" key holding an object of the
     * related artists (artists that have a shared disk) and the number of shared
     * disks. The number of shared disks is not important for this task.
     * Use this collection to perform your queries. 
     * Here is an example response:
     * 
     * { 
     * "_id" : "'ramblin' Jimmie Dolan", 
     * "value" : { 
     * "Skeets Mcdonald" : 1, 
     * "Tennessee Ernie Ford" : 1, 
     * "Merle Travis" : 1, 
     * "Jack Guthrie" : 1, 
     * "Wanda Jackson" : 1, 
     * "Jerry Reed" : 1, 
     * "Gene Vincent" : 1, 
     * "Tommy Sands" : 1, 
     * "Dick Dale" : 1, 
     * "Sonny James" : 1, 
     * "Gene O'quin" : 1, 
     * "Leon Chappel" : 1, 
     * "Milo Twins" : 1, 
     * "Louvin Brothers" : 1 
     * } 
     * }
     * 
     * Do not manually compute the the sharing yourselves as this will overwhelm the database
     * system during lab hours.
     * If we find that you manually computed the sharing, we may deduct points!
     */
    const artist0 = 'Beyonce';
    const collection = db.collection("cds");
    // Here is an example query to the database to get the Beyonce document.
    // To ensure your connection is working properly, you should see the Beyonce document printed
    // in the console.
    collection.find({ "artist": artist0 }).toArray(function(err, docs) {
        if (err) throw err;
        console.log(docs);
    })
    console.log(`TODO: provide your implementation of related() for ${artist0}`);
}

// Database URL (Do NOT modify this!)
const databaseUrl = `mongodb://${username}:${bannerID}@bdognom-v2.cs.brown.edu/cdquery1`;
// Create a mongo client and connect to the database
let client = new MongoClient(databaseUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
// Connect to the database and then call related()
client.connect(function(err, client) {
    if (err) throw err;
    // print whether client is connected to database    
    if (client.isConnected()) {
        console.log('UPDATE: Successfully established connection with server');
    }

    let db = client.db("cdquery1");

    related(db).then(() =>
        client.close()
    );
});