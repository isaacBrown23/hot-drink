import { NavLink } from 'react-router';
// import '../styles/test.css';
export default function Banner({title, img,subtitle, btn}) {

  return (
    <nav className="banner">
    
      <div className="banner__left">
      
        <h1 className="banner__left-h1">{title}</h1> <p className="banner__left-p"> {subtitle} </p>
        {btn && <NavLink to="/products" className="banner__left-btn">Explore collection</NavLink>}
      </div>
      <div className="banner__right">
      
        <img src={img} alt={title} />
      </div>
    </nav>
  );
}
