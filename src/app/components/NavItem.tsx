'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IconType } from 'react-icons/lib';

interface NavItemProps {
  navItem: {
    pathName: string;
    name: string;
    Icon: IconType;
  };
}

export default function NavItem({ navItem }: NavItemProps) {
  const pathName = usePathname();

  return (
    <div key={navItem.pathName} className="mx-auto">
      <Link href={navItem.pathName} className={`${pathName === navItem.pathName ? 'text-black' : 'text-neutral-400'}`}>
        <div className="w-10 h-10">
          <navItem.Icon className="text-xl text-center mx-auto" />
          <span className="text-[10px] text-center font-bold">{navItem.name}</span>
        </div>
      </Link>
    </div>
  );
}
