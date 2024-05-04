const ReviewSmallBox = (props) => {

    const makeStar = () => {
        let star = ""
        for(let i=0; i<props.rating; i++) {
            star += "★"
        }
        for(let i=0; i<5-props.rating; i++) {
            star += "☆"
        }
        return star
    }


    return (
        <div className="flex flex-row gap-3">
            <div className="flex-1 flex flex-col">
                <div style={{fontSize:"14pt", color:"orangered"}} className="flex items-center">
                    {makeStar()}&nbsp;<span className="font-bold text-sm text-black">{props.rating}</span>
                </div>
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