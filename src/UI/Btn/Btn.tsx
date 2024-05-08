import { FC } from 'react';
import { BtnType } from '../../../@types';

const Btn: FC<BtnType> = ({ value, handler, className }) => {
  return (
    <button
      onClick={handler}
      className={`bg-primary-blue text-base text-white font-medium text-center rounded-xl cursor-pointer py-3 px-4 transition-all lg:w-32 hover:bg-hover-blue ${
        className ? className : ''
      }`}
      type="submit"
    >
      {value}
    </button>
  );
};

export default Btn;
