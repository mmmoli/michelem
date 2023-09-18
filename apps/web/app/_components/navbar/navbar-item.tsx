import { Button } from '@michelem/ui';
import Link from 'next/link';
import { FC } from 'react';
import { NavItem } from './navbar-types';

export interface NavbarItemProps {
  item: NavItem;
}

export const NavbarItem: FC<NavbarItemProps> = ({ item }) => {
  return (
    <li className="mr-[2px]">
      <Button asChild>
        <Link href={item.path}>{item.label}</Link>
      </Button>
    </li>
  );
};
