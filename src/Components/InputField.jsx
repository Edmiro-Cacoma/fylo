const InputField = ({
  children,
  label,
  nameGroup,
  validation,
  innerRef,
  className = "",
  ...rest
}) => {
  return (
    <div className="flex-[2]">
      <input
        className={`w-full min-h-12 rounded-full border-2 border-white px-4 py-3 ${
          validation ? "!border-light-red" : ""
        } ${className}`}
        aria-label={label}
        name={nameGroup}
        {...rest}
        {...innerRef}
      />
      {children}
    </div>
  );
};
export default InputField;
