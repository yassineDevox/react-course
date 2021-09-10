import ShoppingCartItem from "./shopping-cart-item"
import laptopCaseImage from "./../../assets/images/laptop-case.jpg";

const ShoppingCartList = () => {
    return (
        <ul className="list-group">
            {/* list des produits  */}
            {[1, 2, 3, 4].map(v => 
                <ShoppingCartItem 
                    key={v}
                    title={"titre "+v} 
                    image={laptopCaseImage}
                    price={`${v} $`} />)}

        </ul>

    )
}

export default ShoppingCartList
