const Button = ({ text, className, type, onClick }) => {
  return onClick ? (
    <button className={className} type={type} onClick={onClick}>
      {text}
    </button>
  ) : (
    <button className={className} type={type}>
      {text}
    </button>
  );
};
export default Button;
