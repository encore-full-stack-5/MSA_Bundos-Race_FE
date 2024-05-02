import { Link } from "react-router-dom"

const HomeCategoryBox = (props) => {
    return (
        <Link to={props.link}>
            <div style={{width:"70px"}} className="flex flex-col gap-2 items-center">
                <img 
                src={props.img}
                alt=""
                className="w-12 h-12"
                />
                <div style={{fontSize:"9.5pt"}}>
                    {props.name}
                </div>
            </div>
        </Link>
    )
}
export default HomeCategoryBox