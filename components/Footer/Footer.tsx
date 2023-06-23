import { NavLinks } from '@/data';
import Link from 'next/link';
import Container from '../Container';

export default function Footer() {
  return (
    <footer className="bg-white ">
      <Container>
        <div className=" px-6 py-8 mx-auto">
          <hr className="my-10 border-gray-200 " />
          <div className="flex flex-col items-center sm:flex-row sm:justify-between">
            <p className="text-sm font-outfit text-gray-500">
              © Copyright 2021. All Rights Reserved.
            </p>
            <div className="flex mt-3 -mx-2 sm:mt-0">
              {NavLinks.map((link, i) => (
                <Link
                  className="mx-2 font-outfit text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 "
                  href={link.href}
                  key={i}
                >
                  {link.lebel}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
