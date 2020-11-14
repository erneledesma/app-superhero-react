import React from 'react';

const LoginScreen = ({ history }) => {


    const handleLogin = () => {
        // console.log('click');
        history.replace('/');
     
    }

    return ( 

        <div className=" container mt-5" >
            <h1>Login</h1>
            <hr />

            <button className="btn btn-primary"
                onClick={ handleLogin}
            >
                Ingresar
            </button>
        </div>
     );
}
 
export default LoginScreen;