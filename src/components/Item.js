import React, {useState} from "react";

function Item({ name, category }) {

  const [isInCart, setIsInCart] = useState(false);
  const handleCartToggle = () => {
    setIsInCart((prevIsInCart) => !prevIsInCart);
  };
  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleCartToggle} className="addToCart">{isInCart ? "Remove From Cart" : "Add to Cart"}</button>
      <span>{category}</span>
    </li>
  );
}

export default Item;
