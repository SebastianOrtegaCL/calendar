import {useDispatch, useSelector} from "react-redux";
import calendarApi from "../api/calendarApi.js";

export const useAuthStore = () => {
    const {status, user, errorMessage} = useSelector( state => state.auth)
    const dispatch = useDispatch();

    const startLogin = async({email,password}) => {
        console.log({email, password})
        try {
            const response = await calendarApi.post('/auth', {email, password});
            console.log({response});
        }catch(err){
            console.log(err);
        }
    }

  return {
    // properties
    status,
    user,
    errorMessage,

    // methods
    startLogin
  }
};