import React from 'react';
import { Carousel } from 'flowbite-react';
import 'flowbite/dist/flowbite.css';
import banner1 from '../assets/beranda.png';
import banner2 from '../assets/penjual.png';

const Home = () => {
  return (
    <div className="bg-brandPrimary" id="home">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
        <Carousel className="w-full max-auto">
          {/*Slide 1*/}
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div className="container flex justify-end">
              <img src={banner1} alt="" />
            </div>
            {/*Text*/}
            <div>
              <h1 className="text-custom-40 font-semibold mb-8 text-black leading-snug">
                <span className="text-white leading-snug"> PaDi UMKM </span>{' '}
                Hadir SebagaiSolusi Bisnis bagi UMKM, BUMN dan Pemerintah{' '}
              </h1>
              <p className="text-black text-base mb-9">
                Mempertemukan UMKM berkualitas dengan perusahaan BUMN maupun
                Swasta untuk mendapatkan transaksi dengan harga dan kualitas
                terbaik.
              </p>
            </div>
          </div>
          {/*Slide 2*/}
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div className="container flex justify-end">
              <img src={banner2} alt="" />
            </div>
            {/*Text*/}
            <div>
              <h1 className="text-custom-40 font-semibold mb-8 text-black leading-snug">
                Yuk jadi vendor langganan BUMN bersama{' '}
                <span className="text-white leading-snug"> PaDi UMKM </span>{' '}
              </h1>
              <p className="text-black text-base mb-9">
                Bersama kita majukan perekonomian Indonesia
              </p>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
