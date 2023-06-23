import Link from 'next/link';
import React from 'react';

interface Props {
  classes?: string;
}

const Logo: React.FC<Props> = ({ classes }) => {
  return (
    <Link href={'/'}>
      <span className={`${classes} text-[1.875em] font-extrabold font-outfit`}>
        Predpoint.
      </span>
    </Link>
  );
};

export default Logo;
