import "./loader.scss";
import loaderImg from "./img/loading.gif";

export default function Loader() {
  return (
    <div className="loader__container">
      <h2>Идет поиск</h2>
      <img src={loaderImg} alt="loading..." />
    </div>
  );
}
