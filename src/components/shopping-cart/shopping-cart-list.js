import ShoppingCartItem from "./shopping-cart-item"

const ShoppingCartList = (props) => {
    console.log(props)
    return (
        <ul className="list-group">
            {/* list des produits  */}
            {props.listCommandes.map(c => 
                <ShoppingCartItem 
                    key={c.id}
                    title={c.title} 
                    image={c.image}
                    price={c.price} 
                    quantite={c.quantite}
                    onClickAddQuantite={()=>props.onAddQuantite(c.id)}
                    />)}

        </ul>

    )
}

export default ShoppingCartList
