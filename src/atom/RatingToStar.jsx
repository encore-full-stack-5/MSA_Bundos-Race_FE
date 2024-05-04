const RatingToStart = (props) => {
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
        <div style={{fontSize:"14pt", color:"orangered"}} className="flex items-center">
            {makeStar()}&nbsp;<span className="font-bold text-sm text-black">{props.rating}</span>
        </div>
    )
}
export default RatingToStart