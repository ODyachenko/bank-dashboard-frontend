import { FC } from 'react';
import './styles.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { setShowNavbar } from '../../redux/slices/navSlice';

const Burger: FC = () => {
  const { showNavbar } = useAppSelector((state) => state.nav);
  const dipatch = useAppDispatch();

  return (
    <div
      className={`hamburger hamburger--arrowalt js-hamburger ${
        showNavbar ? 'is-active' : ''
      } lg:hidden`}
      onClick={() => dipatch(setShowNavbar(!showNavbar))}
    >
      <div className="hamburger-box">
        <div className="hamburger-inner"></div>
      </div>
    </div>
  );
};

export default Burger;
