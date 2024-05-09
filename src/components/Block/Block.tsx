import { FC } from 'react';
import { BlockType } from '../../../@types';

const Block: FC<BlockType> = ({ children, title, className }) => {
  return (
    <div
      className={`block bg-white rounded-2xl p-4 xl:py-8 xl:px-5 ${
        className ? className : ''
      } `}
    >
      <h2 className="subtitle mb-3 lg:mb-4 lg:text-lg xl:mb-5 xl:text-xl">
        {title}
      </h2>
      {children}
    </div>
  );
};

export default Block;
