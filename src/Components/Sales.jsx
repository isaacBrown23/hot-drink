import { Link } from 'react-router';
import products from '../data.json';
import img from '../assets/products/image.png';
export default function Sales({title}) {
  const random = [...products]; 

  for (let i = random.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [random[i], random[j]] = [random[j], random[i]]; 
  }
  const items = random.filter((item) => item.sale).slice(0, 10);

  return (
    <section className="sales">
      <p className="sales__title">{title}</p>
      <div className="sales__items">
        {items.map((item) => (
          <Link className="sales__items-item" to={`/products/${item.id}`} key={item.id}>
            <img className="sales__items-item-img" src={img} alt={item.name} />
            <p className="sales__items-item-name">{item.name}</p>
            <div className="sales__items-item-price">
              <p className="sales__items-item-price-sale">${item.sale.toFixed(2)}</p>
              <p className="sales__items-item-price-price"> ${item.price.toFixed(2)}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
