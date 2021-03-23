import React, {useState, useContext, useEffect} from 'react';
import {AuthContext} from '../context/AuthContext';


const Home = ()=>{

    const [user, setUser] = useState({name: "", photo: ""});
    const authContext = useContext(AuthContext);

    useEffect(()=>{
        if (authContext.isAuthenticated)
            setUser({name: authContext.user.name, photo: authContext.user.profilePic});
    },[]);

    return (
        <div>
            <br/>
            <h5>GOOGLE APIs</h5>
            <div>
                {
                    authContext.isAuthenticated ? 
                    <div> 
                        <img src={user.photo} alt="No Photo" ></img>
                        <p>Welcome {user.name}</p> 
                    </div>
                    : null
                }
            </div>
        </div>
       
    )
}

export default Home;
