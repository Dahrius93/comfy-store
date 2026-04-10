const FormInput = ({ label, name, type, defaultValue, size }) => {
  return (
    <div className="fieldset">
      <label htmlFor={name} className="label">
        <span className="fieldset-label capitalize">{label}</span>
      </label>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        className={`input input-bordered ${size}`}
      />
    </div>
  );
};
export default FormInput;
