import React, { FC } from 'react';
import { BtnType } from '../../../@types';

const Btn: FC<BtnType> = ({ value, handler, className }) => {
  return (
    <button
      onClick={handler}
      className={`bg-primary-blue text-base text-white font-medium text-center rounded-xl py-3 px-4 ${
        className ? className : ''
      }`}
      type="submit"
    >
      {value}
    </button>
  );
};

export default Btn;
