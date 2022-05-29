import React from 'react'

const Datastore = require('@seald-io/nedb')

const users = new Datastore();

const JJPMaster = {
    username: "wwww",
    hash: "na"
}
users.loadDatabase((err) => { 
    users.find({ username: JJPMaster.username }, (err, docs) => {
        if(docs === null) {
            users.insert(JJPMaster, (err, doc) => {
                console.log("Record added to NoSQL database:", doc.username);
                console.log(doc);
            });
        }
        else {
            console.error("Already exists in NoSQL database.");
            console.log(users.find({ username: JJPMaster.username }));  
        }
    });
    users.find({}, function (err, docs){
        console.log(docs);
    });

})


export default function SignUp() {
    return (
        <div>
        </div>
    )
}
