
import React from 'react'
import HeaderItem from './HeaderItem'
import {MdArrowBackIos} from 'react-icons/md'

export interface HeaderProps {
    headerTitle?: string

 
}

export default function Header({headerTitle}: HeaderProps) {
  return (
    <HeaderItem LeftIcon={<MdArrowBackIos />} headerTitle={headerTitle} />
  )
}
