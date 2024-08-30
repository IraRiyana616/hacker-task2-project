import React from 'react';
import aboutImg from '../assets/about.png';

const About = () => {
  return (
    <div id="about" style={{ marginTop: '90px' }}>
      {/* About Text */}
      <div className="px-4 lg:px-14 max-w-screen-2x1 mx-auto my-8">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <img src={aboutImg} alt="" className="w-[370px] h-[370px]" />
          </div>
          {/* VISI */}
          <div className="md:w-3/5 mx-auto">
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5">
              Visi Kami
            </h2>
            <p className="md:w-3/4 text-sm text-neutralGrey mb-8 nowrap">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </p>
            {/* MISI */}
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5">
              Misi Kami
            </h2>
            <p className="md:w-3/4 text-sm text-neutralGrey mb-3 nowrap">
              1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </p>
            <p className="md:w-3/4 text-sm text-neutralGrey mb-3 nowrap">
              2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </p>
            <p className="md:w-3/4 text-sm text-neutralGrey mb-3 nowrap">
              3. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
