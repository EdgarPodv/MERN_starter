import React, {useState, useEffect} from 'react';
import * as ContactService from '../../services/ContactService';
import * as CalendarService from '../../services/CalenderService';
import Message from '../Message';

const ContactsList = (props)=>{

    const [contacts, setContacts] = useState([]);
    const [message, setMessage] = useState(null);
    const [status, setStatus] = useState(null);

    useEffect(async ()=>{
        const result = await ContactService.fetchGoogleContacts();
        const {status, message, data} = result;
        if (status=='success'){
            setContacts(data)
        }
        else {
            setStatus(status);
            setMessage(message);
        }
    },[])

    const sendInvite = async (e)=>{

        e.preventDefault();
        const result = await CalendarService.sendGoogleInvite(e.target.id);
        const {status, message, data} = result;
        if (status=='success'){
            setStatus(status);
            setMessage(message);
        }
        else {
            setStatus(status);
            setMessage(message);
        }
    }

    return (
        <div>
            <br/>
            <h5>Google Contacts List</h5>

            {
                contacts.length>0 ?
                <table>
                   <thead>
                        <tr>
                           <td>Name</td>
                           <td>Email</td>
                        </tr>
                   </thead>
                   <tbody>
                   {
                        contacts.map(function(contact){
                            return (
                                <tr id={contact.email}>
                                    <td>{contact.name}</td>
                                    <td>{contact.email}</td>
                                    <td>
                                        <button id={contact.email} onClick={sendInvite}>
                                            Send Invite for next hour
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                   </tbody>
                </table> 
                : null
            }
            <br/>
            {message ? <Message status={status} message={message}/> : null}
        </div>
       
    )
}

export default ContactsList;
