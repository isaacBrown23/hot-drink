import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import TopNav from "../Components/TopNav";
import data from '../data.json'
export default function Checkout() {
    const [itemsIds, setItemsIds] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        const ids = []
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key.startsWith('cart')) {
                ids.push(key.replace('cart-', ''));
            }
        }

        if (ids.length == 0) {
            navigate('/')
        }

        setItemsIds(ids)
    }, [])

    function getPrice() {
        let price = 0
        const items = data.filter((items) => itemsIds.includes(items.id))
        items.map((item) => {
            price = price += item.sale ?? item.price
        })

        return price.toFixed(2)
    }

    getPrice()

    function handleSubmit(e) {
        e.preventDefault()
        navigate('/success')
    }

    return (
        <>
            <TopNav name="Checkout" />
            <div className="checkout">
                <form onSubmit={handleSubmit} className="checkout__content">
                    <div className="checkout__content-left">
                        <h2 className="checkout__content-title">Contact info</h2>
                        <div className="checkout__content-split">
                            <input type="text" required placeholder="Name" />
                            <input type="email" required placeholder="Email" />
                        </div>
                        <h2 className="checkout__content-title">Payment Information</h2>
                        <div className="checkout__content-split">
                            <input type="number" required placeholder="Credit/Debit Card Number" />
                            <input type="month" required placeholder="Card Expiry Date" />
                        </div>
                        <div className="checkout__content-split">
                            <input type="number" required length="4" placeholder="CVV Security Code" />
                            <input type="text" required placeholder="Name on Card" />
                        </div>
                    </div>

                    <div className="checkout__content-right">
                        <div>

                            <h2 className="checkout__content-title">Shipping Address</h2>
                            <div className="checkout__content-split">
                                <input type="text" required placeholder="Street Address" />
                                <input type="text" placeholder="Apartment/Suite Number" />
                            </div>
                            <div className="checkout__content-split">
                                <input type="text" required placeholder="City" />
                                <input type="text" required placeholder="State" />
                            </div>
                            <div className="checkout__content-split">
                                <input type="text" required length="4" placeholder="Postal Code" />
                                <input type="text" required placeholder="Country" />
                            </div>
                        </div>
                        <div className="checkout__content-right-final">
                            <p>Total: ${getPrice()}</p>
                            <button>Checkout</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}