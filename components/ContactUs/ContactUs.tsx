import React from 'react';
import Container from '../Container';
import { MdEmail } from 'react-icons/md';
import { IoLocation } from 'react-icons/io5';

const ContactUs = () => {
  return (
    <div id="contact_us" className="pb-10 sm:pb-16">
      <Container>
        <div className="rounded-3xl bg-green px-7 py-10">
          <div>
            <h2 className="text-center text-[1.3em] sm:text-[2em] font-poppins font-extrabold">
              GET IN TOUCH
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="lg:pl-5">
              <h3 className="text-white text-[1.2em] sm:text-[3em]">
                Let us
                <br className="hidden lg:block" /> unlock
                <br className="hidden lg:block" />
                <span className="text-[#3F393D]">your business potential</span>
              </h3>
              {/* Socials */}
              <div className="pt-8 space-y-5">
                <div className="flex items-center gap-4">
                  <MdEmail size={22} className="text-[#3F393D]" />
                  <span className="text-white text-xl font-poppins font-medium">
                    predpointanalytics@gmail.com
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <IoLocation size={22} className="text-[#3F393D]" />
                  <span className="text-white text-xl font-poppins font-medium">
                    HSR Layout, Bangalore
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full bg-[#EEE] py-4 px-8 rounded-2xl">
              <h4 className="text-xl font-poppins font-medium text-[#2E0249]">
                Interested in...
              </h4>
              {/* Button group */}
              <div className="space-y-3 py-5">
                <div className="flex items-center gap-5">
                  <button className="btn_primary">Generative AI</button>
                  <button className="btn_primary">Forecast AI</button>
                </div>
                <div className="flex items-center gap-5">
                  <button className="btn_primary">Anomaly Detection</button>
                  <button className="btn_primary">Other</button>
                </div>
              </div>
              {/* Form */}
              <form>
                <div>
                  <div className="py-8 flex flex-col gap-y-12">
                    <div>
                      <input
                        type="text"
                        placeholder="Your name"
                        className="bg-transparent focus:opacity-100 opacity-60 pb-2 w-full focus:outline-none border-b-2 text-xl font-poppins text-[#2E0249] placeholder:text-[#2E0249] border-[#3F393D]"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Your email"
                        className="bg-transparent focus:opacity-100 opacity-60 pb-2 w-full focus:outline-none border-b-2 text-xl font-poppins text-[#2E0249] placeholder:text-[#2E0249] border-[#3F393D]"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Your message"
                        className="bg-transparent focus:opacity-100 opacity-60 pb-2 w-full focus:outline-none border-b-2 text-xl font-poppins text-[#2E0249] placeholder:text-[#2E0249] border-[#3F393D]"
                      />
                    </div>
                  </div>
                  <div className="pt-10 pb-20">
                    <button
                      className="btn_submit min-w-[70%] mx-auto"
                      type="submit"
                    >
                      <svg
                        width={24}
                        height={25}
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M23.9467 1.52859C24.0013 1.39229 24.0146 1.24298 23.9851 1.09917C23.9556 0.955352 23.8846 0.823358 23.7808 0.719548C23.6769 0.615738 23.5449 0.544678 23.4011 0.515177C23.2573 0.485676 23.108 0.499031 22.9717 0.553587L1.15121 9.28209H1.14971L0.471713 9.55209C0.343298 9.60331 0.231541 9.68903 0.148786 9.79978C0.0660314 9.91053 0.0154997 10.042 0.00277284 10.1797C-0.00995397 10.3173 0.0156194 10.4558 0.0766681 10.5799C0.137717 10.7039 0.231865 10.8087 0.348713 10.8826L0.963713 11.2726L0.965213 11.2756L8.45771 16.0426L13.2247 23.5351L13.2277 23.5381L13.6177 24.1531C13.6918 24.2695 13.7967 24.3632 13.9206 24.4238C14.0446 24.4845 14.1829 24.5098 14.3203 24.4969C14.4577 24.484 14.5888 24.4335 14.6994 24.3509C14.8099 24.2683 14.8955 24.1567 14.9467 24.0286L23.9467 1.52859V1.52859ZM21.1972 4.36359L9.95621 15.6046L9.63371 15.0976C9.57462 15.0045 9.49575 14.9257 9.40271 14.8666L8.89571 14.5441L20.1367 3.30309L21.9037 2.59659L21.1987 4.36359H21.1972Z"
                          fill="#EEEEEE"
                        />
                      </svg>
                      <span>Submit</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactUs;
