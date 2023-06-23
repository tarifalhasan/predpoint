'use client';

import React from 'react';
import Container from '../Container';
import Logo from '@/components/Logo/Logo';

import { NavLinks } from '@/data';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div
      className={`fixed  bg-white top-0  w-full py-5 hidden border xl:block border-navbar-border  z-50 transition-colors duration-300 `}
    >
      <Container>
        <div className=" flex items-center justify-between">
          <div>
            <>
              <Logo />
            </>
          </div>
          <ul className=" flex items-center gap-12">
            {NavLinks.map((data, i) => (
              <li key={i}>
                <Link
                  className=" text-lg   font-outfit  font-medium"
                  href={data.href}
                  aria-label={data.lebel}
                >
                  {data.lebel}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
