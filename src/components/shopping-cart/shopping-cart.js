import ShoppingCartList from "./shopping-cart-list";
import laptopCaseImage from "./../../assets/images/laptop-case.jpg";
import Command from "../../model/command-model";

let command1 = new Command(1,"titre 1",laptopCaseImage,20,2)

const LIST_COMMANDES = [
    command1.reduction(20),
    new Command(2,"titre 2",laptopCaseImage,10,6),
    new Command(3,"titre 3",laptopCaseImage,26,1),
]
const ShoppingCart = () => {
    return (
        <div>
            <div>
                <br />
                <div className="container border w-75 m-5">
                    <div className="d-flex justify-content-between align-items-center p-4">
                        <input type="search" className="form-control w-25" placeholder="Search By Title" />
                        <p className="m-0">Total : 100.24$</p>
                    </div>
                    {/* list shopping cart  */}
                    <ShoppingCartList listCommandes = {LIST_COMMANDES} />
                    <div className="d-flex justify-content-between align-items-center p-1">
                        <nav aria-label="Page navigation example">
                            <ul className="pagination m-0">
                                <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item"><a className="page-link" href="#">Next</a></li>
                            </ul>
                        </nav>
                        <button className="btn btn-primary"> Checkout
                            <i className="fas fa-check-square m-1" />
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ShoppingCart
