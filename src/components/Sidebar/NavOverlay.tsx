import { FC } from 'react';
import { useAppSelector } from '../../hooks/hooks';

const NavOverlay: FC = () => {
  const { showNavbar } = useAppSelector((state) => state.nav);

  return (
    <div
      className={`overlay bg-overlay-color fixed top-0 bottom-0 right-0 left-0 z-10 ${
        showNavbar ? 'block' : 'hidden'
      } lg:hidden`}
    ></div>
  );
};

export default NavOverlay;
