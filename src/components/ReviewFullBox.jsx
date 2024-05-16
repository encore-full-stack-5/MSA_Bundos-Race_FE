import RatingToStart from "../atom/RatingToStar"

const ReviewFullBox = (props) => {
    return (
        <div id={"reviewFullBox" + props.id}>
            <div className="flex flex-row items-center">
                <div className="flex-1 flex flex-col min-h-44">
                    <RatingToStart rating={props.rating} />
                    <div className="flex flex-row gap-2 text-gray-400 text-xs pb-2">
                        <div>
                            {props.name}
                        </div>
                        <div> · </div>
                        <div>
                            {props.date}
                        </div>
                    </div>
                    <div className="text-stone-500 flex flex-row gap-2" style={{fontSize:"10pt"}}>
                        {props.options.map((option, i) => (
                            <div>
                                {option}
                            </div>
                        ))}
                    </div>
                    <div className="text-sm text-stone-600 pt-3">
                        {props.content}
                    </div>
                </div>
                <img 
                    src={""}
                    alt=""
                    style={{width:"90px", height:"90px", margin:"40px"}}
                />
            </div>
            <hr className="mt-5 mb-4" />
        </div>
    )
}
export default ReviewFullBox