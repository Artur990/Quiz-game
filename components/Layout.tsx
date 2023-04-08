import React from 'react'
import { Link } from 'react-router-dom'

export interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="bg-bgColor ">
      <p className=" text-center  text-primaryColor sm:text-start ">
        {/* QUIZ GAME */}
      </p>
      <main>{children}</main>
    </div>
  )
}

export default Layout
