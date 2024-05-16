import axios from "axios";
import { useEffect } from "react"
import { useNavigate, useSearchParams  } from "react-router-dom"
import { useRecoilValue } from 'recoil';
import { address } from '../store/address';

const Login = (props) => {
    const [searchParams] = useSearchParams();
    const link = useRecoilValue(address);
    const navigate = useNavigate(); 

    const parseLogin = async () => {
        const response = await axios.get(link+"/auth?token=" + searchParams.get("token"));
<<<<<<< HEAD

        localStorage.setItem("uuid", response.data.token);
        navigate(searchParams.get("redirect"));
=======
        localStorage.setItem("uuid", response.data.token);
        navigate(searchParams.get("redirect") + "?id=" + searchParams.get("id"));
>>>>>>> fd4061b007a617cc626f162383288fdecfcea531
        window.location.reload();
    }

    useEffect(()=>{
        parseLogin();
    },[]);

    return (
        <></>
    )
}
export default Login