import {Navigate, Route, Routes} from "react-router-dom";
import {Login} from "../auth";
import {CalendarPage} from "../calendar";
import {getEnvVariables} from "../helpers/index.js";

export const AppRouter = () => {
    const authStatus = 'not-authenticated';
    console.log(getEnvVariables());
    return (
        <Routes>
            {
                ( authStatus === 'not-authenticated')
                    ? <Route path='/auth/*' element={ <Login /> } />
                    : <Route path='/*' element={ <CalendarPage/> } />
            }
            <Route path='/*' element={ <Navigate to='/auth/login'/>} />
        </Routes>
    )
};