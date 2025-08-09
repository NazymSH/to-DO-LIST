import React from 'react';
import {Navigate} from 'react-router-dom';

function ProtedRoute({isAuth,children}){
    return isAuth? children:<Navigate to='/Login'></Navigate>
    
}export default ProtedRoute;