export const login = async (code) => {
    return fetch('/api/auth/google', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
    })
    .then(res => res.json())
    .then(data => {
        if (data.status == 'success'){
            console.log(data.data)
            localStorage.setItem('loginData', JSON.stringify(data.data));
        }
            
        return data;
    });
};

export const isAuthenticated = ()=>{

    return new Promise((resolve, reject)=>{
        const loginData = JSON.parse(localStorage.getItem('loginData'));
        if (!loginData)
            resolve({isAuthenticated: false, user: null,});
        else
            resolve({isAuthenticated: true, user: loginData});
    });
}

export const logout = ()=>{

    return new Promise((resolve, reject)=>{
        localStorage.removeItem('loginData')
        resolve({isAuthenticated: false, user: null,});
    });
}