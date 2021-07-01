const ButtonGroup = (props) => {
  return (
    <span className="card-list__button-group">
      <button
        type="button"
        className="card-list__button-group__prev-button"
        disabled={!props.havePrev}
        onClick={props.onPrev}
      >
        Prev
      </button>
      <button
        type="button"
        className="card-list__button-group__next-button"
        disabled={!props.haveNext}
        onClick={props.onNext}
      >
        Next
      </button>
    </span>
  );
};

export default ButtonGroup;
