import ProductOptionItem from "../components/ProductOptionItem";

const ProductOptionGroup = (props) => {
  return (
    <span
      className="border border-gray-300 bg-white py-2 px-4"
      style={{ fontSize: "10.5pt" }}
      required={props.require}
      onInvalid={(e) => e.target.setCustomValidity("필수 선택 옵션입니다")}
      onInput={(e) => e.target.setCustomValidity("")}
      name="options"
    >
      {props.options.map((e, i) => (
        <ProductOptionItem
          groupIndex={props.id}
          optionIndex={i}
          name={props.name + "/ " + e.name}
          price={e.price}
        />
      ))}
    </span>
  );
};
export default ProductOptionGroup;
