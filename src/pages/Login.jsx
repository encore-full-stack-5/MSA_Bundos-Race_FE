import axios from "axios";
import { useEffect } from "react"
import { useNavigate, useSearchParams  } from "react-router-dom"

const Login = (props) => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate(); 

    const parseLogin = async () => {
        console.log(searchParams.toString());
        console.log();
        console.log(searchParams.get("redirect"));
        console.log(searchParams.get("token"));
        
        const response = await axios.get("http://localhost:9009/api/v1/auth?token=" + searchParams.get("token"));

        localStorage.setItem("uuid", response.data.token);
        navigate(searchParams.get("redirect"),{replace:true});
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