import RatingToStart from "../atom/RatingToStar"

const ReviewSmallBox = (props) => {
    return (
        <div className="flex flex-row gap-3 cursor-pointer" onClick={() => props.onClick(props.id)}>
            <div className="flex-1 flex flex-col">
                <RatingToStart rating={props.rating}/>
                <div className="flex flex-row gap-2 text-gray-400 text-xs">
                    <div>{props.name}</div>
                    <div>{props.date}</div>
                </div>
                <div className="flex-1 text-gray-600 overflow-hidden text-ellipsis" style={{fontSize:"9.5pt", display:"-webkit-box", WebkitLineClamp:"2", webkitBoxOrient:"vertical"}}>
                    {props.content}
                </div>
            </div>
            <img 
                src=""
                alt=""
                style={{width:"80px"}} className="aspect-square"
            />
        </div>
    )
}
export default ReviewSmallBox