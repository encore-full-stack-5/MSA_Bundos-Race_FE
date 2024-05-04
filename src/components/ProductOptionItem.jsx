const ProductOptionItem = (props) => {
    return (
        <option id={"group" + props.group + "option" + props.id} value={props.id} className="text-gray-500" style={{fontSize:"10pt"}}>
            {props.name}
            {props.price > 0 ? " (+" + props.price + "원)" : ""}
        </option>
    )
}
export default ProductOptionItem