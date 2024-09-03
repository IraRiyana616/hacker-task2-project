import Footers from '/src/components/footer/Footer';
import Navbar from '/src/components/header/Navbar';
import React from 'react';

const Contacts = () => {
  const services = [
    // Card 1
    {
      id: 1,
      title: 'Layanan Pengguna',
      description: 'WhatsApp : +62 812 9000 7820',
      image: '/src/assets/icons/pembayaran.png',
    },
    // Card 2
    {
      id: 2,
      title: 'Kantor Kami',
      description:
        'Jln. Prof. Dr. Soepomo No. 139, Jakarta Selatan, DKI Jakarta,12810 Indonesia',

      image: '/src/assets/icons/pemesanan.png',
    },
  ];
  return (
    <div
      className=" mx-auto bg-white "
      id="service"
      style={{ marginTop: '82px' }}>
      <Navbar />
      {/* About Services */}

      {/* Card */}
      <div className="text-center px-16 my-8 bg-white ">
        <h2 className="py-8 text-custom-30 font-neutralGrey font-semibold mb-2 text-black">
          Hubungi Kami
          <p
            className=" text-custom-17 text-neutralGrey "
            style={{ fontWeight: 'normal' }}>
            Silakan menghubungi Kami secara langsung.
          </p>
        </h2>
      </div>
      {/* Cards Component */}
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 md:w-120 mx-auto gap-12">
        {services.map((service) => (
          <div
            key={service.id}
            className=" 
      text-center mx-auto rounded-md shadow-lg cursor-pointer 
      hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 
      transition-all duration-300 border border-grey900 bg-white "
            style={{ width: '500px', height: '250px', padding: '16px' }} // Update dimensions here
          >
            <div className="bg-[#E8F5E9] mb-4 h-16 w-16 mx-auto rounded-tl-3xl rounded-br-3xl flex items-center justify-center">
              <img src={service.image} alt="" className="w-[65px] h-[65px]" />
            </div>

            <h4 className="text-2xl font-bold text-neutralDGrey mb-2 px-2">
              {service.title}
            </h4>
            <p className="text-sm text-neutralDGrey">{service.description}</p>
          </div>
        ))}
      </div>
      <Footers />
    </div>
  );
};

export default Contacts;
