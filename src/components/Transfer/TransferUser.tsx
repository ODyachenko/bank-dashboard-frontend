import { FC } from 'react';
import avatar from '../../assets/img/avatar.png';

const TransferUser: FC = () => {
  return (
    <div className="text-center">
      <img
        className="w-12 h-12 rounded-full mx-auto mb-3"
        src={avatar}
        alt="user avatar"
      />
      <span className="block text-xs">Livia Bator</span>
      <span className="text-xs text-secondary-blue">Director</span>
    </div>
  );
};

export default TransferUser;
