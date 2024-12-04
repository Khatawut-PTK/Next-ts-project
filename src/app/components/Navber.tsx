import React from 'react';
import { Breadcrumb } from 'antd';
import "../globals.css";

function Navbar() {
  return (
    <nav className="bg-opacity-30 backdrop-blur-lg bg-cover bg-center flex justify-between w-full p-5"
    >
      <Breadcrumb
        items={[
          {
            title: 'Next-Pro',
          },
        ]}
        className='text-xl font-bold'
      />
      <Breadcrumb
        items={[
          {
            title: <a href="./login" className="text-lg">Sign In</a>,
          },
          {
            title: <a href="./register" className="text-lg">Sign Up</a>,
          },
        ]}
      />
    </nav>
  )
}

export default Navbar;
