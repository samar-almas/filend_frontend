type InputFieldProps = {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
  errorMessage: string;
  pattern?: string;
  labelText: string;
  labelFor: string;
  id: string;
  name: string;
  type: string;
  required: boolean;
  isFormSubmitted: boolean;
};

const InputField = ({
  value,
  handleChange,
  id,
  name,
  type,
  errorMessage,
  labelText,
  labelFor,
  pattern,
  required,
  isFormSubmitted,
}: InputFieldProps) => {
  const isPatternInvalid =
    pattern && isFormSubmitted && !new RegExp(pattern).test(String(value));
  return (
    <>
      <label htmlFor={labelFor} className="text-base mt-2">
        {labelText}
      </label>
      <input
        type={type}
        className={`block border ${
          isPatternInvalid ? "border-red-500" : "border-grey-light"
        } w-full p-3 rounded mb-1`}
        name={name}
        id={id}
        value={value}
        onChange={handleChange}
        required={required}
        pattern={pattern}
      />
      {isPatternInvalid && <span className="text-red-500">{errorMessage}</span>}
      <br />
    </>
  );
};
export default InputField;
