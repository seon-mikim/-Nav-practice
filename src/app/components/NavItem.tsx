'use client'

import Link from "next/link"   
import { usePathname } from 'next/navigation'                                                                                
import { IconType } from 'react-icons/lib'


interface NavItemProps {
    name: string
    param: string
    Icon:IconType
}

export default function NavItem({name, param, Icon}:NavItemProps) {
 const pathName = usePathname()

  return (
  <div className="mx-auto">
      <Link href={param} className={`${pathName === param?  'text-black': 'text-neutral-400'}`} >
        <div className="w-10 h-10">
         <Icon className="text-xl text-center mx-auto"/>
          <span className='text-[10px] text-center font-bold'>
            {name}
          </span>
        </div>
      </Link>
  </div>
  )
}
