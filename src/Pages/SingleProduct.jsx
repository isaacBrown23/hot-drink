import { useNavigate, useParams } from 'react-router';
import TopNav from '../Components/TopNav';
import data from '../data.json';
import img from '../assets/products/image.png';
import { useEffect } from 'react';
import { span } from 'framer-motion/client';
import Sales from '../Components/Sales';
import Footer from '../Components/Footer';

export default function SingleProduct() {
  const navigate = useNavigate();
  const projectId = useParams().id;
  const productInfo = data.find((item) => item.id == projectId);
  useEffect(() => {
    if (!productInfo) {
      navigate('/');
    }
  }, [productInfo, navigate]);



  const roast = ['light', 'light to medium', 'medium', 'medium-dark', 'dark'];

  const roastIndex = roast.indexOf(productInfo.roast.toLowerCase());

  function addToCart(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const quantity = formData.get('quantity');
    const isInCart = localStorage.getItem(`cart-${productInfo.id}`);

    if (isInCart) {
      localStorage.setItem(`cart-${productInfo.id}`,  Number(quantity) + Number(isInCart));
    }else{
      
      localStorage.setItem(`cart-${productInfo.id}`, quantity);
    }

    navigate('/cart')

  }

  return (
    <>
      <TopNav key={projectId} name={productInfo.name}/>
      <div className="single-product">
        <div className="single-product__top">
          <div className="single-product__top-left">
            <img src={img} alt={productInfo?.name} />
          </div>
          <div className="single-product__top-right">
            <h1>{productInfo?.name}</h1>
            <div className="single-product__top-right-price">
              <p>${productInfo?.sale ? productInfo?.sale : productInfo?.price}</p>
              {productInfo?.sale && <p>${productInfo?.price}</p>}
            </div>
            <p className="single-product__top-right-text">{productInfo?.longDescription}</p>
            <form onSubmit={addToCart} className="single-product__top-right-nav">
              <button>Add to cart</button>
              <input type="number" name="quantity" min="1" defaultValue={localStorage.getItem(`cart-${productInfo.id}`) ?? 1} max="25" />
            </form>
            <div className="single-product__top-right-roast">
              <p>Roast Level</p>
              <div className="single-product__top-right-roast-items">
                {roast.map((item, index) => (
                  <span
                    key={index}
                    className={`single-product__top-right-roast-items-circle ${
                      index <= roastIndex ? 'single-product__top-right-roast-items-circle-active' : undefined
                    }`}
                  ></span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <p  className="single-product__text">You might like...</p>
      <Sales />
      <Footer />
    </>
  );
}
