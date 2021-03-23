export const sendGoogleInvite = async (email) => {
    const loginData = JSON.parse(localStorage.getItem('loginData'));
    return fetch('/api/calendars/sendGoogleInvite', {
        method: 'POST',
        headers: {
            'Authorization': loginData.accessToken,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
    })
    .then(res => res.json())
    .then(data => {
        return data;
    });
};