import React from 'react';

const Services = () => {
  const services = [
    // Card 1
    {
      id: 1,
      title: 'Akun',
      description: 'Cara Buyer Membatalkan Penawaran Tender Kilat',
      image: '/src/assets/icons/akun.png',
    },
    // Card 2
    {
      id: 2,
      title: 'Pemesanan',
      description: 'Cara Terima dan Checkout Tender Kilat',
      image: '/src/assets/icons/pemesanan.png',
    },
    // Card 3
    {
      id: 3,
      title: 'Pembayaran & Perpajakan',
      description: 'Fitur Saldo Refund bagi Pembeli B2B PaDi UMKM',
      image: '/src/assets/icons/pembayaran.png',
    },
  ];
  return (
    <div className="md:px-14 px-4 py-6 max-w-screen-xl mx-auto">
      <div className="text-center my-8">
        <h2 className="text-custom-30 font-neutralGrey font-semibold mb-2">
          Pilih Topik Sesuai Kendalamu
        </h2>
      </div>
      {/* Cards Component */}
      <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
        {services.map((service) => (
          <div
            key={service.id}
            className="text-center mx-auto rounded-md shadow cursor-pointer 
      hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 "
            style={{ width: '350px', height: '170px', padding: '8px 4px' }}>
            <div className="bg-[#E8F5E9] mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl flex items-center justify-center">
              <img src={service.image} alt="" className="w-[55px] h-[55px]" />
            </div>

            <h4 className="text-2xl font-bold text-neutralDGrey mb-2 px-2">
              {service.title}
            </h4>
            <p className="text-sm text-neutralDGrey">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
