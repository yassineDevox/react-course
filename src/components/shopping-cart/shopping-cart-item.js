
const ShoppingCartItem = (props) => {
    console.log(props)
    return (
        <li className="list-group-item d-flex justify-content-between ">
                <div className="border d-flex align-items-center">
                    <img width={80} src={props.image} alt="laptop-case" />
                    <div className="p-2">
                        <h6>{props.title}</h6>
                        <p className="m-0">{props.price} $</p>
                    </div>
                </div>
                <div className="d-flex align-items-center border justify-content-end">
                    <button 
                        className="btn btn-warning m-1" 
                        onClick={()=>{alert(-1)}} 
                    
                    >-</button>
                    <input type="number" value={props.quantite} className="form-control w-25 m-1" />
                    <button
                        onClick={props.onClickAddQuantite} 
                        className="btn btn-success m-1 fw-bold">+</button>
                    <button className="btn btn-danger m-1 fw-bold"><i className="fas fa-trash" /></button>
                </div>
            </li>
    )
}

export default ShoppingCartItem
