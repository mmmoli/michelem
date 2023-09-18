import { NavItem } from './navbar-types';

export const useNavConfig = () => {
  const navItems: NavItem[] = [
    { label: '/home', path: '/' },
    { label: '/about', path: '/about' },
    { label: '/projects', path: '/projects' },
  ];
  return { navItems };
};
