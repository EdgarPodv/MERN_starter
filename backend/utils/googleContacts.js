const {google} = require('googleapis');
const contacts = google.people('v1');
const config = require('../config/config');

const client = new google.auth.OAuth2({

    clientId: config.google.clientId,
    clientSecret:config.google.clientSecret
});

exports.fetchContacts = async (token) => {

    return new Promise((resolve, reject)=>{

        client.setCredentials({
            access_token: token
        });
        
        contacts.people.connections.list({
            resourceName: 'people/me',
            personFields: 'names,emailAddresses',
            auth: client 
        }, function (err, response) {
            if (err)
                reject(null);

            const connections = response.data.connections;
            let contacts = [];

            if (connections) { 
                connections.forEach((person) => {
                    let p = {name:"", email:""}
                    if (person.names && person.names.length > 0) 
                        p.name = person.names[0].displayName;
                    if (person.emailAddresses && person.emailAddresses.length > 0) 
                        p.email = person.emailAddresses[0].value;
                    contacts.push(p)
                });           
                resolve(contacts);
            } else {
                resolve(null);
            }
        });
    })
    
}
