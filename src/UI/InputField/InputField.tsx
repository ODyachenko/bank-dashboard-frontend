import { FC } from 'react';
import { InputFieldType } from '../../../@types';

const InputField: FC<InputFieldType> = ({ type, label, placeholder }) => {
  return (
    <label>
      <span className="block text-base mb-3">{label}</span>
      <input
        className="border-border-gray text-gray-text rounded-3xl py-4 px-5"
        type={type}
        placeholder={placeholder}
      />
    </label>
  );
};

export default InputField;
