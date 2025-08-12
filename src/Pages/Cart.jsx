import { Link, NavLink } from 'react-router';
import TopNav from '../Components/TopNav';
import data from '../data.json';
import img from '../assets/products/image.png';
import { useEffect, useState } from 'react';
import Sales from '../Components/Sales';
import Footer from '../Components/Footer';

export default function Cart() {
  const [itemsIds, setItemsIds] = useState([]);

  useEffect(() => {
    const ids = []
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith('cart')) {
        ids.push(key.replace('cart-', ''));
      }
    }

    setItemsIds(ids)
  }, [])



  const matchingItems = data.filter((item) => itemsIds.includes(item.id));

  function price() {
    let total = 0;

    matchingItems.forEach((item) => {
      const price = item.sale ?? item.price; // use salePrice if exists, else price
      total += Number(price); 
    });

    return total.toFixed(2);
  }
  function handleUpdateCount(e, id) {
    localStorage.setItem(`cart-${id}`, e.target.value)
  }

  function handleRemove(e, id) {
    localStorage.removeItem(`cart-${id}`)
    setItemsIds((prev) => prev.filter((itemId) => itemId !== id));
  }




  return (
    <>
      <TopNav name="Cart" />
      <div className="cart">
        <div className="cart__top">
          <p>
            Total: ({itemsIds.length} items) ${price()}
          </p>
          {itemsIds.length > 0 && <NavLink to="/checkout">Proceed to checkout</NavLink>}
        </div>
        {
          itemsIds.length > 0 ? (
            <div className="cart__items">
              {matchingItems.map((item, index) => (
                <div key={index} className="cart__items-item">
                  <div className="cart__items-item-left">
                    <Link to={`/products/${item.id}`}>
                      <img src={img} alt="name" />
                    </Link>
                  </div>
                  <div className="cart__items-item-right">
                    <Link to={`/products/${item.id}`}>{item.name}</Link>
                    <div className="cart__items-item-right-price">
                      <p>${item.sale ? item.sale.toFixed(2) : item.price.toFixed(2)}</p>
                      {
                        item.sale && (
                          <p>${item.price.toFixed(2)}</p>
                        )
                      }
                    </div>
                    <div className="cart__items-item-right-form">
                      <input type="number" name="" id="" onBlur={(e) => handleUpdateCount(e, item.id)} defaultValue={localStorage.getItem(`cart-${item.id}`) ? localStorage.getItem(`cart-${item.id}`) : 1} min="1" max="25" />
                      <button onClick={(e) => handleRemove(e, item.id)} >
                        <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M6.02564 0C6.40713 0 6.75641 0.186472 7.00272 0.432187C7.24897 0.677902 7.4359 1.02637 7.4359 1.40698V2.04651H9.61538C9.82779 2.04651 10 2.21831 10 2.43023C10 2.64215 9.82779 2.81395 9.61538 2.81395H8.97436V9.59302C8.97436 9.97362 8.78744 10.3221 8.54118 10.5678C8.29487 10.8135 7.94559 11 7.5641 11H2.4359C2.0544 11 1.70512 10.8135 1.45884 10.5678C1.21255 10.3221 1.02564 9.97362 1.02564 9.59302V2.81395H0.384615C0.172198 2.81395 0 2.64215 0 2.43023C0 2.21831 0.172198 2.04651 0.384615 2.04651H2.5641V1.40698C2.5641 1.02637 2.75101 0.677902 2.9973 0.432187C3.24358 0.186472 3.59286 0 3.97436 0H6.02564ZM1.79487 9.59302C1.79487 9.72405 1.86437 9.88721 2.0027 10.0252C2.14103 10.1632 2.30457 10.2326 2.4359 10.2326H7.5641C7.69544 10.2326 7.85897 10.1632 7.99728 10.0252C8.13564 9.88721 8.20513 9.72405 8.20513 9.59302V2.81395H1.79487V9.59302ZM3.97436 0.767442C3.84304 0.767442 3.67949 0.836783 3.54116 0.974789C3.40284 1.1128 3.33333 1.27596 3.33333 1.40698V2.04651H6.66667V1.40698C6.66667 1.27596 6.59718 1.1128 6.45882 0.974789C6.32051 0.836783 6.15697 0.767442 6.02564 0.767442H3.97436Z"
                            fill="white"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}

            </div>
          ) : (
            <div className="cart__empty">
              <svg aria-label='Cart' width="126" height="126" viewBox="0 0 126 126" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M39.1931 105.441C44.8467 105.441 49.4298 110.043 49.4298 115.72C49.4298 121.398 44.8467 126 39.1931 126C33.5395 126 28.9564 121.398 28.9564 115.72C28.9564 110.043 33.5395 105.441 39.1931 105.441ZM103.538 105.441C109.192 105.441 113.775 110.043 113.775 115.72C113.775 121.398 109.192 126 103.538 126C97.8845 126 93.3014 121.398 93.3014 115.72C93.3014 110.043 97.8845 105.441 103.538 105.441ZM16.846 0.0688324C18.5795 0.374178 19.9965 1.7054 20.3763 3.48199L25.9002 29.3703H121.612C122.942 29.3704 124.202 29.9761 125.034 31.0167C125.866 32.0579 126.183 33.425 125.897 34.7281L116.243 78.3765L116.237 78.3707C115.449 81.9591 113.472 85.1699 110.621 87.4743C107.77 89.7799 104.222 91.0422 100.562 91.0481H43.346C39.6397 91.1086 36.0254 89.8803 33.1151 87.5718C30.5468 85.5341 28.6665 82.7651 27.7111 79.6442L27.3569 78.2849L18.0685 34.7396C18.0546 34.6773 18.0397 34.6136 18.0285 34.5503L12.5388 8.81108H4.38713C1.96469 8.81055 0 6.83833 0 4.40553C0.000614202 1.97332 1.96507 0.000581533 4.38713 0H16.0862L16.846 0.0688324ZM35.937 76.4375L36.0969 77.0572C36.5314 78.4746 37.3868 79.7335 38.5533 80.6592C39.8874 81.7177 41.5493 82.2746 43.2489 82.237H100.545C102.209 82.234 103.824 81.6613 105.12 80.6134C106.417 79.5655 107.316 78.104 107.674 76.4722L107.68 76.4663L116.146 38.1814H27.7796L35.937 76.4375Z" fill="white" />
              </svg>
              <p>There is nothing here, it.</p>
            </div>
          )
        }

      </div>
      <p className="cart__bottom">You might like...</p>
      <Sales />
      <Footer/>
    </>
  );
}
