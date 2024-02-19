const Subheadline = ({ children, className }) => {
  return (
    <p className={`text-lg text-gray-primary ${className}`}>
      {children}
    </p>
  );
};

export default Subheadline;