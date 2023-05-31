import { useDispatch } from "react-redux";

export const ProductsBill = ({ product }) => {
    const dispatch = useDispatch();

    return (
        <div className="flex p-1 sm:p-2 border-b border-b-gray-200">
            <div className="product-image mr-2 border border-grey-200 rounded-lg w-full sm:w-1/3">
                <img src={product.imageUrl} alt={product.name} />
            </div>
            <div className="product-info">
                <h1><b>{product.name}</b></h1>
               
            </div>
            <div className="product-price-qt flex flex-col items-center justify-center">
                <div className="price"><b>Price : </b>{`Rs.${product.price}`}</div>
                <div className="quantity flex">
                    <span className="p-2"><b>Quantity : </b>{product.amount}</span>
                </div>
            </div>
        </div>
    )
}

