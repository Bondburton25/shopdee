import { Link } from 'react-router-dom';
import data from '../data';

function HomeScreen() {
  return (
    <div>
      <h1>List product</h1>
      <div className="products">
        {data.products.map((product) => (
          <div className="product" key={product.slug}>
            <a href={`/product/${product.slug}`}>
              <Link to={`/product/${product.slug}`}>
                <img src={product.image} alt={product.name} />
              </Link>
            </a>
            <div className="product-info">
              <a href={`/product/${product.slug}`}>
                <Link to={`/product/${product.slug}`}>
                  <p>{product.name}</p>
                </Link>
              </a>
              <p>
                <strong>${product.price}</strong>
              </p>
              <button type="button" className="btn btn-primary">
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeScreen;
