import PropTypes from "prop-types";

function Button({ display, onClick }) {
  return (
    <>
      <button
        onClick={onClick}
        className="mt-5 w-full rounded-xl bg-[hsl(278,68%,11%)] p-4 text-white"
        type="submit"
      >
        {display}
      </button>
    </>
  );
}

Button.propTypes = {
  display: PropTypes.string,
  onClick: PropTypes.any,
};

export default Button;
