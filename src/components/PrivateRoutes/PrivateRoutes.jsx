import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation()
    if(loading){
<span className="loading loading-ring loading-lg"></span>

    }
    if(user){
        return children;

    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivateRoute;