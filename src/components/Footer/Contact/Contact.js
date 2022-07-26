import { Link } from "react-router-dom";
import "./contact.scss";

export default function Contact({ contactIcon, contactAlt, contactText }) {
  return (
    <li>
      <Link to="/">
        <div className="contact__container">
          <div className="img">
            <img src={contactIcon} alt={contactAlt} className="icon__image" />
          </div>
          <div className="text">
            <span>{contactText}</span>
          </div>
        </div>
      </Link>
    </li>
  );
}
