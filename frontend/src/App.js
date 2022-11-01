import data from './data';

function App() {
  return (
    <div>
      <header>
        <a href="/">Shopdee</a>
      </header>
      <main>
        <h1>List product</h1>
        <div className="products">
          {data.products.map((product) => (
            <div key={product.slug} className="product">
              <a href={`/products/${product.slug}`}>
                <img src={product.image} alt={product.name} />
              </a>
              <div className="product-info">
                <a href={`/products/${product.slug}`}>
                  <p>{product.name}</p>
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
      </main>
    </div>
  );
}

export default App;
