import { FC } from 'react';
import { useNavConfig } from './use-nav-config';
import { NavbarItem } from './navbar-item';

export const Navbar: FC = () => {
  const { navItems } = useNavConfig();
  return (
    <nav data-testid="navbar">
      <ul className="flex">
        {navItems.map((item) => (
          <NavbarItem item={item} key={item.path} />
        ))}
      </ul>
    </nav>
  );
};
