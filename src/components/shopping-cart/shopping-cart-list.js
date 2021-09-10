import ShoppingCartItem from "./shopping-cart-item"

const ShoppingCartList = (props) => {
    return (
        <ul className="list-group">
            {/* list des produits  */}
            {props.listCommandes.map(command => 
                <ShoppingCartItem 
                    key={command.id}
                    title={command.title} 
                    image={command.image}
                    price={command.price} 
                    quantite={command.quantite}/>)}

        </ul>

    )
}

export default ShoppingCartList
