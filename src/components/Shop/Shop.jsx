import { useEffect, useState } from "react";
import "./Shop.css"
import Product from "../Product/Product";
import CartDetails from "../CartDetails/CartDetails";

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    
    const handleAddToCart = product => { 
        const newCart = [...cart, product];
        setCart(newCart);
        console.log(product)
    }

    return (
        <div className='shop'>
            {/* <h3>All Products { products.length}</h3> */}
            <div className="container">
                <div className="shop-container">
                    <div className="products-container">
                        {
                            products.map(product => <Product
                                key={product.id}
                                product={product}
                                handleAddToCart={handleAddToCart}
                            />)
                        }
                    </div>
                    <div className="cart-container">
                        <CartDetails cart={cart} />
                    </div>
                </div>
           </div>
        </div>
    );
};

export default Shop;