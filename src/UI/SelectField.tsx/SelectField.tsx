import { FC } from 'react';
import { SelectFieldType } from '../../../@types';

const SelectField: FC<SelectFieldType> = ({ className, label, options }) => {
  return (
    <label className={`block ${className ? className : ''}`}>
      <span className="block text-base mb-3">{label}</span>
      <select
        name="country"
        autoComplete="country-name"
        className="block w-full rounded-xl cursor-pointer border-0 py-4 px-5 text-gray-900 shadow-sm ring-1 ring-inset  ring-border-gray focus:ring-2 focus:ring-inset focus:ring-primary-blue  sm:leading-6"
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  );
};

export default SelectField;
