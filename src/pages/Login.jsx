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
        localStorage.setItem("uuid", response.data.token);
        navigate(searchParams.get("redirect") + "?id=" + searchParams.get("id"));
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