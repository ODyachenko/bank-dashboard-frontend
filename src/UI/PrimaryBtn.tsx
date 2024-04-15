import { FC } from 'react';
import { PrimaryBtnType } from '../../@types';

const PrimaryBtn: FC<PrimaryBtnType> = ({ value }) => {
  return (
    <button
      className="block w-48 text-lg text-white bg-primary-blue rounded-2xl p-4 cursor-pointer"
      type="submit"
    >
      {value}
    </button>
  );
};

export default PrimaryBtn;
