export default function Tentang() {
    return (
      <>
        <section className="min-h-[80vh] pt-48 text-black">
          <div className="w-full flex flex-col items-center font-poppins font-[600]">
            <h1 className="text-[58px]">TENTANG</h1>
            <p className="text-[32px]">
              Ingin tahu lebih dalam mengenai{" "}
              <span className="bg-[#F89B11]">PlastiKita</span>?
            </p>
            <p className="text-[32px]">Yuk simak halaman ini</p>
          </div>
        </section>
        <section className="min-h-[170vh] bg-tentang bg-cover bg-center relative">
          <svg className="absolute top-0 left-0 w-full" viewBox="0 0 1440 200">
            <path
              fill="white"
              d="M0,160 C400,260 600,60 1440,160 L1440,0 L0,0Z"
            />
          </svg>
          <div className="absolute w-10/12 bg-linear-to-b px-32 py-24 rounded-tr-[60px] rounded-bl-[60px] from-[#2F4F12] to-[#65853D] -bottom-72 left-1/2 -translate-x-1/2">
            <div className="flex flex-row gap-10 justify-center w-full mb-14">
              <button className="rounded-full bg-[#90C444] px-9 py-3 font-poppins font-[600] text-[26px] shadow-2xl">
                Visi
              </button>
              <button className="rounded-full bg-[#DDFBE4] px-9 py-3 text-[#166534] font-poppins font-[600] text-[26px] shadow-2xl">
                Misi
              </button>
            </div>
            <p className="font-poppins font-[500] text-center mx-auto italic text-[24px] w-10/12">
              Menjadi platform edukasi digital yang inovatif dan terpercaya
              dalam memberikan pengetahuan ilmiah dan praktis mengenai dampak
              polusi plastik serta cara penanganannya, guna membangun masyarakat
              yang lebih sadar lingkungan, berperilaku bertanggung jawab, dan
              berkontribusi pada tercapainya Planet Bebas Polusi Plastik.
            </p>
          </div>
        </section>
        <section className="min-h-[200vh] bg-[#f7e7c4]">
          <div className=" bg-trash-doodle bg-cover bg-center h-[100vh] relative">
            <h1 className="text-[#3F3313] font-sora font-[800] text-[58px] text-center absolute bottom-0 left-1/2 -translate-x-1/2">
              Tentang
            </h1>
          </div>
          <div className=" bg-trash-doodle bg-cover bg-center min-h-screen pt-8 pb-16">
            <p className="font-poppins font-[500] text-black text-[20px] w-9/12 text-center mx-auto mb-24">
              Indonesia memiliki lebih dari 700 bahasa daerah, namun banyak di
              antaranya terancam punah karena sedikitnya penutur muda.
              Modernisasi dan pendidikan yang fokus pada bahasa Indonesia
              menyebabkan bahasa lokal semakin jarang digunakan, kecuali upaya
              pelestarian seperti pengajaran di sekolah atau pembuatan media
              digital.
            </p>
            <div className="flex flex-row gap-10 w-full justify-center">
                <div className="w-5/12 h-[552px] rounded-[50px] bg-produksi-sampah bg-cover bg-center relative">
                    <div className="bg-[#3B3B0E] rounded-t-[20px] w-6/12 px-10 py-4 absolute -top-12 left-1/2 -translate-x-1/2">
                        <h1 className="font-poppins font-[500] text-24px text-center">Produksi & Sampah Plastik Indonesia (2024)</h1>
                    </div>
                </div>
                <div className="w-5/12 h-[552px] rounded-[50px] bg-sampah-gorontalo bg-cover bg-center relative">
                    <div className="bg-[#3B3B0E] rounded-t-[20px] w-6/12 px-10 py-4 absolute -top-12 left-1/2 -translate-x-1/2">
                        <h1 className="font-poppins font-[500] text-24px text-center">Komposisi Polusi Plastik di Indonesia (2023)</h1>
                    </div>
                </div>
            </div>
          </div>
        </section>
        <section className="min-h-screen">

        </section>
      </>
    );
}