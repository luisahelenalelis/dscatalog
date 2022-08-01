import './styles.css';

import ProductImg from 'assets/images/product.png';
import ProductPrice from 'components/ProductPrice';


const ProductCard = () => {

    return (
        <div className="base-card product-card">
            <div className="card-top-container">
                <img src={ProductImg} alt="Nome do produto" />
            </div>
            <div className="card-botton-container">
                <h6>Computador Desktop - Intel Core i7</h6>
                <ProductPrice />
            </div>
        </div>
    );
};

export default ProductCard;