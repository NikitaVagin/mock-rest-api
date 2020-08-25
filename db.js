const MongoClient = require('mongodb').MongoClient;


let state = {
    db: null
}

exports.connect = (url, done) => {
    const client = new MongoClient(url, { useUnifiedTopology: true });

    if(state.db) {
        return done();
    }
    client.connect(function(err) {
        if(err){
            return done(err);
        }
        state.db = client.db('RestApi');
        done();
    })
}

exports.get = () =>{
    return state.db
}
