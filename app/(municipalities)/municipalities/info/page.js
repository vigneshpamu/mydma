'use client'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import LeftSideSticky from '@/app/components/common/LeftSideSticky'
import RightSideSticky from '@/app/components/common/RightSideSticky'
import StickyNav from '@/app/components/common/StickyNav'
import Footer from '@/app/components/common/Footer'
import HeroSect from '@/app/components/pages/municipalities/info/HeroSect'
import InfoSect from '@/app/components/pages/municipalities/info/InfoSect'
const page = () => {
  const searchParams = useSearchParams()
  console.log(searchParams.get('name'))
  const [paramsData, setParamsData] = useState('')
  const [dataArr, setDataArr] = useState([])

  const mainData = [
    {
      slug: 'Hamriyah City Municipality',
      img: 'images/municipalities/main/im1.png',
      title: 'Hamriyah City Municipality',
      link: '/municipalities/info',
      logo: '/images/municipalities/logo/logo1.jpg',
      map: 'https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d230830.19206847862!2d55.505255!3d25.313551!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1706023040578!5m2!1sen!2sus',
      socials: [
        {
          name: 'Instagram',
          icon: '/images/home/elements/social_2/ins.png',
          link: 'https://www.instagram.com/hamriya_mun/',
        },
      ],
    },
    {
      slug: 'Mleiha City',
      img: 'images/municipalities/main/im2.png',
      title: 'Mleiha City Municipality',
      link: '/municipalities/info',
      logo: '/images/municipalities/logo/logo2.jpg',
      socials: [
        {
          name: 'Facebook',
          icon: '/images/home/elements/social_2/fb.png',
          link: 'https://www.facebook.com/maliha.municipality/',
        },
        {
          name: 'Instagram',
          icon: '/images/home/elements/social_2/ins.png',
          link: 'https://www.instagram.com/maliha_mu/',
        },
        {
          name: 'Twitter',
          icon: '/images/home/elements/social_2/tw.png',
          link: 'https://twitter.com/maliha_mun',
        },
      ],
    },
    {
      slug: 'Khorfakkan City',
      img: 'images/municipalities/main/im3.png',
      title: 'Khorfakkan City Municipality',
      link: '/municipalities/info',
      logo: '/images/municipalities/logo/logo3.jpg',
      socials: [
        {
          name: 'Facebook',
          icon: '/images/home/elements/social_2/fb.png',
          link: 'https://www.facebook.com/MunicipalityKHorfakkanSharjahUnitedArabEmiraths/',
        },
        {
          name: 'Instagram',
          icon: '/images/home/elements/social_2/ins.png',
          link: 'https://www.instagram.com/khormunicipality/',
        },
        {
          name: 'Twitter',
          icon: '/images/home/elements/social_2/tw.png',
          link: 'https://twitter.com/khormun',
        },
        {
          name: 'YouTube',
          icon: '/images/home/elements/social_2/yt.png',
          link: 'https://www.youtube.com/channel/UCfv6mzEEt4_-oJj1KG2mZag',
        },
      ],
      awards: [
        {
          img: '/images/municipalities/info/awards/khorfakkan/img1.png',
        },
        {
          img: '/images/municipalities/info/awards/khorfakkan/img2.png',
        },
        {
          img: '/images/municipalities/info/awards/khorfakkan/img3.png',
        },
        {
          img: '/images/municipalities/info/awards/khorfakkan/img1.png',
        },
      ],
    },
    {
      slug: 'Al-Bataeh City',
      img: 'images/municipalities/main/im4.png',
      title: ' Al-Bataeh City Municipality',
      link: '/municipalities/info',
      logo: '/images/municipalities/logo/logo4.jpg',
      socials: [
        {
          name: 'Facebook',
          icon: '/images/home/elements/social_2/fb.png',
          link: 'https://www.facebook.com/albataeh/',
        },
        {
          name: 'Instagram',
          icon: '/images/home/elements/social_2/ins.png',
          link: 'https://www.instagram.com/bataehmun/?hl=ar',
        },
        {
          name: 'Twitter',
          icon: '/images/home/elements/social_2/tw.png',
          link: 'https://twitter.com/bataehmun?lang=ar-x-fm',
        },
      ],
    },
    {
      slug: 'Al Madam City',
      img: 'images/municipalities/main/im5.png',
      title: 'Al Madam City Municipality',
      link: '/municipalities/info',
      logo: '/images/municipalities/logo/logo5.jpg',
      socials: [
        {
          name: 'Facebook',
          icon: '/images/home/elements/social_2/fb.png',
          link: 'https://www.facebook.com/almadam.municipality.9',
        },
      ],
    },
    {
      slug: 'Dibba Al Hisn City Municipality',
      img: 'images/municipalities/main/im6.png',
      title: 'Dibba Al Hisn City Municipality',
      link: '/municipalities/info',
      logo: '/images/municipalities/logo/logo6.jpg',
      socials: [
        {
          name: 'Facebook',
          icon: '/images/home/elements/social_2/fb.png',
          link: 'https://www.facebook.com/dibba.shj.mun?fref=ts',
        },
        {
          name: 'Instagram',
          icon: '/images/home/elements/social_2/ins.png',
          link: 'https://www.instagram.com/dibba_mun/',
        },
        {
          name: 'Twitter',
          icon: '/images/home/elements/social_2/tw.png',
          link: 'https://twitter.com/dibba_mun',
        },
        {
          name: 'YouTube',
          icon: '/images/home/elements/social_2/yt.png',
          link: 'https://www.youtube.com/channel/UC6ohrycKxgyJWQQxs0hEpYg',
        },
      ],
    },
    {
      slug: 'Al Dhaid City Municipality',
      img: 'images/municipalities/main/im7.png',
      title: 'Al Dhaid City Municipality',
      link: '/municipalities/info',
      logo: '/images/municipalities/logo/logo7.jpg',
      socials: [
        {
          name: 'Facebook',
          icon: '/images/home/elements/social_2/fb.png',
          link: 'https://www.facebook.com/dhdmun',
        },
        {
          name: 'Instagram',
          icon: '/images/home/elements/social_2/ins.png',
          link: 'https://www.instagram.com/dhdmun/',
        },
        {
          name: 'Twitter',
          icon: '/images/home/elements/social_2/tw.png',
          link: 'https://twitter.com/dhdmun',
        },
      ],
    },
    {
      slug: 'Kalba City Municipality',
      img: 'images/municipalities/main/im8.png',
      title: 'Kalba City Municipality',
      link: '/municipalities/info',
      logo: '/images/municipalities/logo/logo8.jpg',
      socials: [
        {
          name: 'Instagram',
          icon: '/images/home/elements/social_2/ins.png',
          link: 'https://www.instagram.com/kalbacouncil/?hl=ar',
        },
        {
          name: 'Twitter',
          icon: '/images/home/elements/social_2/tw.png',
          link: 'https://twitter.com/kalbacouncil?lang=ar',
        },
      ],
    },
  ]
  function getDataByTitle(array, paramsData) {
    return array.filter((item) => item.title === searchParams.get('name'))
  }
  useEffect(() => {
    if (searchParams.get('name')) {
      setParamsData(searchParams.get('name'))
      const result = getDataByTitle(mainData, paramsData)
      console.log(result)
      setDataArr(result)
    }
  }, [searchParams.get('name')])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1.25 } }}
      exit={{ opacity: 0, transition: { duration: 1.25 } }}
      className="relative max-w-8xl m-auto"
    >
      <LeftSideSticky />
      <RightSideSticky />
      <HeroSect paramsData={paramsData} />
      <StickyNav start={700} end={900} />
      <InfoSect dataArr={dataArr} paramsData={paramsData} />
      <div className="relative h-[400px] bg-customColor">
        <div className="flex flex-col gap-3 absolute py-12 left-1/2 transform -translate-x-1/2 w-[1347px] m-auto">
          <p className="text-3xl font-semibold text-white">
            Awards & Recognition
          </p>
          <div className="flex flex-row justify-between items-center">
            <p className="text-xl text-white">
              Khorfakkan municipality won some awards and reorganization in the
              past
            </p>
            <div className="flex flex-row gap-3">
              <button className="p-3 py-5 bg-white rounded-md">
                <img src="/images/home/elements/b-larrow.png" alt="" />
              </button>
              <button className="p-3 py-5 bg-white rounded-md">
                <img src="/images/home/elements/b-rarrow.png" alt="" />
              </button>
            </div>
          </div>
          <div className="w-[900px] mt-5">
            <Swiper
              modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
              slidesPerView={3}
              spaceBetween={10}
              pagination
              // navigation
              breakpoints={{}}
              className=""
            >
              {dataArr[0]?.awards.map((item, index) => (
                <SwiperSlide key={index} className="">
                  <img src={item.img} className=" object-cover" alt="hero" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </motion.div>
  )
}

export default page
