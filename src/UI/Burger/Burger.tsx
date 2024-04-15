import { FC, useState } from 'react';
import './styles.scss';

const Burger: FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <div
      className={`hamburger hamburger--arrowalt js-hamburger ${
        isActive ? 'is-active' : ''
      } lg:hidden`}
      onClick={() => setIsActive(!isActive)}
    >
      <div className="hamburger-box">
        <div className="hamburger-inner"></div>
      </div>
    </div>
  );
};

export default Burger;
