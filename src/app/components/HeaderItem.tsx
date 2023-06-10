'use client'

import { useRouter } from "next/navigation"
import { HeaderProps } from "./Header"
import { IconType } from "react-icons"

interface HeaderItemProps {
  headerTitle?: string 
  LeftIcon?: React.ReactNode
}

export default function HeaderItem({headerTitle, LeftIcon}: HeaderItemProps) {
  const router = useRouter()
  const clickHandle = () => {
  router.back()
  }

  return (
    <div>
        <div onClick={clickHandle}>
        {LeftIcon}
        </div>
        {/* <LeftIcon onClick={clickHandle}/> */}
        <div>{headerTitle}</div>
        {/* <rightIcon onClick={clickHandle}/> */}
    </div>
  )
}
