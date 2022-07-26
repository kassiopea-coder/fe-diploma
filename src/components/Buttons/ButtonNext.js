import "./buttonNext.scss";

const ButtonNext = ({ text, onClick }) => {
  return (
    <div className="button__next-block">
      <button className="next__button" onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

export default ButtonNext;
