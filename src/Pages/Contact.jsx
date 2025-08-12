import { useState } from 'react';
import TopNav from '../Components/TopNav';

export default function Contact() {
  const [sent, setSent] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    e.target.reset();

    setSent(true);

    setTimeout(() => {
      setSent(false);
    }, 7000);
  }
  return (
    <div className="contact">
      <TopNav name="Contact" />
      <div className="contact__box">
        <form onSubmit={handleSubmit} className="contact__box-content">
          <h2>Contact us</h2>
          <div className="contact__box-content-split">
            <input required type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
          </div>

          <textarea required className="contact__box-content-textarea" placeholder="Message" name="" id=""></textarea>
          <button className="contact__box-content-btn">Send</button>
          <p style={{ opacity: sent ? 1 : 0 }} className="contact__box-content-message">
            Your message has been sent.
          </p>
        </form>
      </div>
    </div>
  );
}
