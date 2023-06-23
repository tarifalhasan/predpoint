import React from 'react';
import Container from '../Container';
import heroImage from '@/assets/images/Hero Image.png';
import Image from 'next/image';
const Hero = () => {
  return (
    <Container>
      <div className=" py-10 gap-10 sm:py-16 grid lg:grid-cols-2">
        <div>
          <h1 className=" text-[2rem] sm:text-[4em] capitalize font-outfit leading-[120%]">
            delivering <br className=" hidden lg:block" /> high-impact
            <br className=" hidden lg:block" /> solutions to
            <br className=" hidden lg:block" /> hard problems.
          </h1>
          <p className=" pt-2 font-roboto_serif capitalize text-[1.2em] sm:text-[2em] ">
            based on our groundbreaking <br className=" hidden lg:block" />
            research in statistical <br className=" hidden lg:block" />
            methodology.
          </p>
        </div>
        <div>
          <Image
            className=" w-full h-full object-cover"
            src={heroImage}
            alt="hero-image"
          />
        </div>
      </div>
    </Container>
  );
};

export default Hero;
