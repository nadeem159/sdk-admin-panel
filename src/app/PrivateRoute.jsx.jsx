import {Navigate, Outlet} from 'react-router-dom'

const PrivateRoute = () =>{
    const auth = sessionStorage.getItem('user');
    return auth ? <Outlet /> : <Navigate to={"/login"} />
 }
 
 export default PrivateRoute;