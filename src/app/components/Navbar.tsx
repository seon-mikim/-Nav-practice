'use client'

import NavItem from './NavItem'
import { usePathname } from 'next/navigation'  
import {HiHome} from 'react-icons/hi'
import {HiHeart} from 'react-icons/hi'
import {HiSearch} from 'react-icons/hi'
import {HiChartBar} from 'react-icons/hi'
import {HiUser} from 'react-icons/hi'

export default function Navbar() {
  const pathname = usePathname()
  return (
    <div>
      {
        pathname !== '/signup' && pathname !== '/login'&&
        <div className='flex justify-between text-center fixed bottom-0 w-screen mb-4'>
          <NavItem name='전체뉴스' param='/' Icon={HiHome}/>
          <NavItem name='관심뉴스' param='/favoriteNews' Icon={HiHeart}/>
          <NavItem name='검색' param='/search' Icon={HiSearch}/>
          <NavItem name='차트' param='/chart' Icon={HiChartBar}/>
          <NavItem name='My' param='/my' Icon={HiUser}/>
        </div>
      }
    </div>
  )
}
