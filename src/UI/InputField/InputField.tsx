import { FC } from 'react';
import { InputFieldType } from '../../../@types';

const InputField: FC<InputFieldType> = ({
  type,
  label,
  placeholder,
  className,
}) => {
  return (
    <label className={`block ${className ? className : ''}`}>
      <span className="block text-base mb-3">{label}</span>
      <input
        className="border border-solid border-border-gray text-gray-text rounded-xl py-4 px-5"
        type={type}
        placeholder={placeholder}
      />
    </label>
  );
};

export default InputField;
