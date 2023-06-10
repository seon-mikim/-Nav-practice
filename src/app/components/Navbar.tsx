'use client';

import { usePathname } from 'next/navigation';
import NavItem from './NavItem';
import { NavItemData } from '@/constants/NavItemData';


export default function Navbar() {
  const pathname = usePathname();
  const notRenderNavItem = pathname !== '/signup' && pathname !== '/login';

  return (
    <div>
      <div className="flex justify-between text-center fixed bottom-0 w-screen mb-4">
        {notRenderNavItem && NavItemData.map((navItem) => <NavItem navItem={navItem} key={navItem.pathName} />)}
      </div>
    </div>
  );
}
