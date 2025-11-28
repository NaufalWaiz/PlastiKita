'use client'

import { useState } from 'react'

interface PollutionType {
  id: number
  title: string
  description: string
  icon: string
  buttonText: string
}

const pollutionData: PollutionType[] = [
  {
    id: 1,
    title: 'Microplastics',
    description: 'Microplastic adalah partikel plastik berukuran sangat kecil (kurang dari 5 mm) yang berasal dari pecahan plastik yang lebih besar atau produk yang sengaja dibuat kecil. Ini dapat ditemukan di air, tanah, udara, hingga rantai makanan manusia, sehingga berpotensi membahayakan kesehatan dan ekosistem.',
    icon: 'icon-microplastic',
    buttonText: 'Jelajahi'
  },
  {
    id: 2,
    title: 'Macroplastics',
    description: 'Macroplastic adalah plastik berukuran besar (lebih dari 5 mm), seperti botol, kantong plastik, dan kemasan makanan. Limbah ini mudah terlihat dan sering mencemari laut maupun daratan. Jika dibiarkan, macroplastic dapat terurai menjadi microplastic yang lebih berbahaya bagi lingkungan.',
    icon: 'icon-macroplastic',
    buttonText: 'Jelajahi'
  },
  {
    id: 3,
    title: 'Jaring Laut',
    description: 'Limbah jaring laut adalah jaring penangkapan ikan yang hilang atau dibuang di laut dan tetap menjebak hewan laut secara tidak sengaja. Limbah ini dapat menyebabkan kematian penyu, ikan, dan mamalia laut, serta merusak terumbu karang karena terus melayang dan menjerat biota laut selama bertahun-tahun.',
    icon: 'icon-net',
    buttonText: 'Jelajahi'
  },
  {
    id: 4,
    title: 'Bungkus Snack',
    description: 'Seringkali orang-orang membuang bungkus snack yang terkesan remeh ini sembarangan. Padahal jika dikumpulkan secara terus-menerus sampah ini menjadi salah satu polusi plastik yang cukup mengkhawatirkan.',
    icon: 'icon-bungkus-snack',
    buttonText: 'Jelajahi'
  },
]

export default function PolusiPlastikCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? pollutionData.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === pollutionData.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="min-h-screen bg-none flex items-center justify-center p-8">
      <div className="max-w-4xl w-full">
        {/* Title */}
        <h1 className="text-white text-4xl font-bold text-center mb-12">
          Jenis Polusi Plastik
        </h1>

        {/* Progress Dots */}
        <div className="flex justify-center items-center mb-16">
          <div className="flex items-center gap-8">
            {pollutionData.map((_, index) => (
              <div key={index} className="flex items-center">
                <button
                  onClick={() => goToSlide(index)}
                  className={`w-4 h-4 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-white scale-125'
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
                {index < pollutionData.length - 1 && (
                  <div className="w-16 h-0.5 bg-white/50" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Content */}
        <div className="relative flex items-center justify-center">
          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors z-10"
            aria-label="Previous slide"
          >
            <span className="text-2xl text-gray-600">‹</span>
          </button>

          {/* Center Icon */}
          <div className="w-32 h-32 bg-white rounded-full shadow-2xl flex items-center justify-center mb-8">
            <div className={`${pollutionData[currentIndex].icon} h-[60px] w-[60px] bg-cover bg-center`}></div>
          </div>

          {/* Next Button */}
          <button
            onClick={goToNext}
            className="absolute right-0 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors z-10"
            aria-label="Next slide"
          >
            <span className="text-2xl text-gray-600">›</span>
          </button>
        </div>

        {/* Explore Button */}
        <div className="flex justify-center mt-8 mb-12">
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full font-medium transition-colors">
            {pollutionData[currentIndex].buttonText}
          </button>
        </div>

        {/* Content Card */}
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 shadow-xl">
          <div className="flex items-start gap-6">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {pollutionData[currentIndex].title}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                {pollutionData[currentIndex].description}
              </p>
            </div>
            <div className="w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center flex-shrink-0">
              <div className={`${pollutionData[currentIndex].icon} h-[48px] w-[48px] bg-cover bg-center`}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}