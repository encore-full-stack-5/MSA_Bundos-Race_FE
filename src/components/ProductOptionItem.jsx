const ProductOptionItem = (props) => {
    return (
        <option 
            id={"group" + props.groupIndex + "option" + props.optionIndex} 
            value={props.groupIndex + "_" +props.optionIndex} 
            disabled={props.qty === 0}
            className={props.qty === 0 ? "text-gray-400"  : "text-stone-500" }
            style={{fontSize:"10pt"}}
        >
            {props.name}
            {props.price > 0 ? " (+" + props.price + "원)" : ""}
            {props.qty === 0 ? " (품절)" : ""}
        </option>
    )
}
export default ProductOptionItem