export const fetchGoogleContacts = async (code) => {
    const loginData = JSON.parse(localStorage.getItem('loginData'));
    return fetch('/api/contacts/google', {
        method: 'GET',
        headers: {
            'Authorization': loginData.accessToken,
            'Content-Type': 'application/json',
        }
    })
    .then(res => res.json())
    .then(data => {
        return data;
    });
};