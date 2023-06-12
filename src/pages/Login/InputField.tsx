type InputFiledProps = {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  labelText: string;
  labelFor: string;
  id: string;
  name: string;
  type: string;
  isRequired: boolean;
};

const InputFiled = ({
  handleChange,
  value,
  labelText,
  labelFor,
  id,
  name,
  type,
  isRequired,
}: InputFiledProps) => {
  return (
    <>
      <label htmlFor={labelFor} className="text-base mt-2">
        {labelText}
      </label>
      <input
        type={type}
        className="block border border-grey-light w-full p-3 rounded mb-4"
        name={name}
        id={id}
        value={value}
        onChange={handleChange}
        required={isRequired}
      />
    </>
  );
};
export default InputFiled;
