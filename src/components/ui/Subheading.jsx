const Subheadline = ({ children, className }) => {
  return (
    <p className={`text-xl text-gray-primary ${className}`}>
      {children}
    </p>
  );
};

export default Subheadline;