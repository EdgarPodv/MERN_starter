const {google} = require('googleapis');
const calendar = google.calendar('v3')
const moment = require( 'moment' );
const config = require('../config/config');

const client = new google.auth.OAuth2({

    clientId: config.google.clientId,
    clientSecret:config.google.clientSecret
});

exports.sendInvite = async (token, email) => {

    return new Promise((resolve, reject)=>{

        client.setCredentials({
            access_token: token
        });

        const startTime = moment.utc().add(1, 'hours').format("YYYY-MM-DDTHH:mm:SS"); 
        const endTime = moment.utc().add(2, 'hours').format("YYYY-MM-DDTHH:mm:SS"); 
        
        const event = {
            'summary': 'Google APIs demo',
            'location': 'Test',
            'description': 'Google APIs Demo',
            'start': {
              'dateTime': startTime,
              'timeZone': 'UTC',
            },
            'end': {
              'dateTime': endTime,
              'timeZone': 'UTC',
            },
            'attendees': [
              {'email': email}
            ]
        };

        calendar.events.insert({
            auth: client,
            calendarId: 'primary',
            resource: event,
            sendUpdates: 'all',
        }, function(err, event) {
            if (err) {
              resolve(false);
            }
            else {
              resolve(true);
            }
        });
    })
    
}
