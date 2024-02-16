import { FC, CSSProperties, ReactNode } from 'react';

const navStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
};

interface NavbarProps {
  children: ReactNode;
}

const Navbar: FC<NavbarProps> = ({ children }): JSX.Element => {
  return <nav style={navStyle}>{children}</nav>;
};

export default Navbar;
