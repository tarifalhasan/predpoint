import React from 'react';
import Container from '../Container';
import h from '@/assets/images/humbegar.svg';
import Image from 'next/image';
import { SolutionsData } from '@/data';
const Solutions = () => {
  return (
    <Container>
      <div id="solutions" className=" py-10 sm:py-16">
        <div className=" flex justify-center items-center gap-2">
          <Image src={h} alt="sd" width={38} height={37.5} />
          <h2 className=" text-[1.2em] sm:text-[2em]  font-normal font-outfit">
            SOLUTIONS
          </h2>
        </div>
        <div className=" grid pt-12  gap-11 lg:grid-cols-2">
          {SolutionsData.map((data, i) => (
            <div
              key={i}
              className={`px-7 h-[450px] py-7 rounded-3xl ${
                i === 0 || i === 3 ? 'bg-yellow' : 'bg-sky'
              }`}
            >
              <h2
                className={` capitalize font-outfit font-extrabold tracking-[3.6px] text-[1.6em] sm:text-[2.250em]`}
              >
                {data.name}
              </h2>
              <ul className="list-disc space-y-1 pt-7  pl-6	">
                {data.featuresList.map((data, i) => (
                  <li
                    className=" text-[1em] md:text-[1.500em] tracking-[0.48px]  capitalize leading-[30.1px]
                   font-roboto_slap"
                    key={i}
                  >
                    {data}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Solutions;
