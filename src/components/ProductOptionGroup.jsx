import ProductOptionItem from '../components/ProductOptionItem'

const ProductOptionGroup = (props) => {
    return (
<<<<<<< HEAD
        <select className="border border-gray-300 bg-white py-2 px-4" style={{fontSize:"10.5pt"}} required={props.require}
=======
        <select 
            id={"group" + props.id} 
            onChange={props.onChange}
            className="border border-gray-300 bg-white py-2 px-4" style={{fontSize:"10.5pt"}} required={props.require}
>>>>>>> fd4061b007a617cc626f162383288fdecfcea531
            onInvalid={e => e.target.setCustomValidity('필수 선택 옵션입니다')}
            onInput={e => e.target.setCustomValidity('')}
            name="options"
        >
            <option value={""} hidden>{props.name}</option>
            {props.options.map((e, i) => (
                <ProductOptionItem groupIndex={props.id} optionIndex={i} name={props.name + ": " + e.name} price={e.price} qty={e.amount}/>
            ))}
        </select>
    )
}
export default ProductOptionGroup