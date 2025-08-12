import Banner from '../Components/Banner';
import TopNav from '../Components/TopNav';
import image from '../assets/banner-products.png';
import { Link } from 'react-router';
import products from '../data.json';
import img from '../assets/products/image.png';
import Footer from '../Components/Footer';

export default function Products() {
  const random = [...products];

  for (let i = random.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [random[i], random[j]] = [random[j], random[i]];
  }
  const items = random;
  return (
    <div>
      <TopNav name="Products"></TopNav>
      <Banner
        btn={false}
        img={image}
        title="Make your day right with a perfect cup of coffee."
        subtitle="Our beans are freshly ground just before we ship them—so you get the boldest flavor and smoothest subtlety in every sip."
      />

      <div className="sales__items sales__items-products">
        {items.map((item) => (
          <Link className="sales__items-item" to={`/products/${item.id}`} key={item.id}>
            <img className="sales__items-item-img" src={img} alt={item.name} />
            <p className="sales__items-item-name">{item.name}</p>
            <div className="sales__items-item-price">
              {}
              <p className="sales__items-item-price-sale">
                ${item.sale ? item.sale?.toFixed(2) : item.price?.toFixed(2)}
              </p>
              {item.sale && <p className="sales__items-item-price-price"> ${item.price?.toFixed(2)}</p>}
            </div>
          </Link>
        ))}
      </div>
      <Footer/>
    </div>
  );
}
