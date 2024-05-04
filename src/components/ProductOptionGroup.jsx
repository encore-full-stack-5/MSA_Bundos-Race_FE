import ProductOptionItem from '../components/ProductOptionItem'

const ProductOptionGroup = (props) => {
    return (
        <select className="border border-gray-300 bg-white py-2 px-4" style={{fontSize:"10.5pt"}} required={props.require}
            onInvalid={e => e.target.setCustomValidity('필수 선택 옵션입니다')}
            onInput={e => e.target.setCustomValidity('')}
        >
            <option value={""} hidden>{props.name}</option>
            {props.options.map((e) => (
                <ProductOptionItem group={props.id} id={e.id} name={e.name} price={e.price} qty={e.qty}/>
            ))}
        </select>
    )
}
export default ProductOptionGroup