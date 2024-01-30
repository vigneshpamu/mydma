'use client'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

import LeftSideSticky from '@/app/components/common/LeftSideSticky'
import RightSideSticky from '@/app/components/common/RightSideSticky'
import StickyNav from '@/app/components/common/StickyNav'
import Footer from '@/app/components/common/Footer'
import HeroSect from '@/app/components/pages/municipalities/info/HeroSect'
import InfoSect from '@/app/components/pages/municipalities/info/InfoSect'
import AwardsSect from '@/app/components/pages/municipalities/info/AwardsSect'
import LandmarkSect from '@/app/components/pages/municipalities/info/LandmarkSect'
import GallerySect from '@/app/components/pages/municipalities/info/GallerySect'

const Page = () => {
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
      website: '',
      number: '+971-06-5137800',
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3601.8614666444178!2d55.52292610000001!3d25.476300900000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef5f8f0e9d3c2b3%3A0xe80385507fbbafed!2sAl%20Hamriya%20Municipality!5e0!3m2!1sen!2sin!4v1706622255760!5m2!1sen!2sin',
      landmarks: [],
      awards: [],
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
      website: 'https://mes.dma.shj.ae/municipal/5/1',
      number: '+971-06-8027222',
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.9758147888692!2d55.8836469!3d25.136508499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef5a24effe4da97%3A0xfe65c6dbc4919cc8!2sMaliha%20Municipality!5e0!3m2!1sen!2sin!4v1706623816979!5m2!1sen!2sin',
      img: 'images/municipalities/main/im2.png',
      title: 'Mleiha City Municipality',
      link: '/municipalities/info',
      logo: '/images/municipalities/logo/logo2.jpg',
      landmarks: [],
      awards: [],
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
      website: 'https://khormun.gov.ae/',
      number: '+971-09-2083540',
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.9528830404925!2d56.345302849999996!3d25.372895549999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef44f18900a46bf%3A0x800605c10bc916a1!2sKhorfakkan%20Municipality%20-%20Al%20Mudeife%205%20-%20Sharjah%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1706624017243!5m2!1sen!2sin',
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
      landmarks: [
        {
          img: '/images/municipalities/info/landmarks/khorfakkan/img1.png',
          title: 'Rabi Tower',
          desc: 'It is located on a high peak in one of the mountains of the city of Khor Fakkan, specifically located on the ring road leading to the port of Khor Fakkan.',
        },
        {
          img: '/images/municipalities/info/landmarks/khorfakkan/img2.png',
          title: 'Resistance monument',
          desc: 'It is located at the entrance to the city by Khor Fakkan University Road and government buildings, after Khor Fakkan Bridge.',
        },
        {
          img: '/images/municipalities/info/landmarks/khorfakkan/img3.png',
          title: 'Draw break',
          desc: 'It is located at the top of Mount Al-Hawami on the ring road towards Khor Fakkan Hospital to the city of Dibba Al-Hisn.',
        },
        {
          img: '/images/municipalities/info/landmarks/khorfakkan/img4.png',
          title: 'Resistance monument',
          desc: 'It is located at the entrance to the city by Khor Fakkan University Road and government buildings, after Khor Fakkan Bridge.',
        },
        {
          img: '/images/municipalities/info/landmarks/khorfakkan/img5.png',
          title: 'Khorfakkan smoker',
          desc: 'It is located at the entrance to the city of Khor Fakkan, half of the Lakes Roundabout overlooking the flagpole, the Resistance Monument, Khor Fakkan University, and government buildings.',
        },
        {
          img: '/images/municipalities/info/landmarks/khorfakkan/img6.png',
          title: 'Khor Fakkan Coliseum',
          desc: 'It is located on the Khor Fakkan Corniche on the way to the Khor Fakkan Hotel, specifically behind the Khor Fakkan Club, next to the Khor Fakkan Waterfall.',
        },
        {
          img: '/images/municipalities/info/landmarks/khorfakkan/img7.png',
          title: 'Khor Fakkan Waterfall',
          desc: 'It is located on the Khor Fakkan Corniche, next to the Khor Fakkan Amphitheater on Jebel Seida.',
        },
        {
          img: '/images/municipalities/info/landmarks/khorfakkan/img8.png',
          title: 'Lakes',
          desc: 'It is located at the entrance to Khor Fakkan, with Al Khor smokehouse in the middle.',
        },
        {
          img: '/images/municipalities/info/landmarks/khorfakkan/img9.png',
          title: 'Porcupine garden',
          desc: 'It is located in the Shis area, on the Khor Fakkan road, towards the Al-Rafisa Dam rest stop.',
        },
        {
          img: '/images/municipalities/info/landmarks/khorfakkan/img10.png',
          title: 'Khorfakkan Corniche',
          desc: 'It is located along the Gulf of Oman, extending from Khor Fakkan Port to Khor Fakkan Hotel.',
        },
      ],
    },
    {
      slug: 'Al-Bataeh City',
      website: 'https://www.bataehmun.ae/',
      number: '+971-06-531191',
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.824384995038!2d55.7392752!3d25.276492399999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef5939e445274b9%3A0xa9b7000baedc668e!2sBatayeh%20Municipality!5e0!3m2!1sen!2sin!4v1706623677057!5m2!1sen!2sin',
      img: 'images/municipalities/main/im4.png',
      title: ' Al-Bataeh City Municipality',
      link: '/municipalities/info',
      logo: '/images/municipalities/logo/logo4.jpg',
      landmarks: [],
      awards: [],
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
      website: 'https://www.madammun.shj.ae/?lang=AR',
      number: '+971-06-8012222',
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.8409865419976!2d55.77780109999999!3d24.9715242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef575c0d32bda6b%3A0x91e3aa5f93ef114!2sAl%20Madam%20Municipality!5e0!3m2!1sen!2sin!4v1706623902216!5m2!1sen!2sin',
      img: 'images/municipalities/main/im5.png',
      title: 'Al Madam City Municipality',
      link: '/municipalities/info',
      logo: '/images/municipalities/logo/logo5.jpg',
      landmarks: [],
      awards: [],
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
      website: 'https://www.dhmun.shj.ae/',
      number: '+971-09-2444204',
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.2742887087734!2d56.271752799999994!3d25.5958003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef432386a112e67%3A0x965af62e6a8f794b!2sDibba%20Municipality!5e0!3m2!1sen!2sin!4v1706624077494!5m2!1sen!2sin',
      img: 'images/municipalities/main/im6.png',
      title: 'Dibba Al Hisn City Municipality',
      link: '/municipalities/info',
      logo: '/images/municipalities/logo/logo6.jpg',
      landmarks: [],
      awards: [],
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
      website: 'http://dhm.gov.ae/',
      number: '+971-06-8020888',
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.4454072941885!2d55.89751199999999!3d25.255598000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef5bc498e34b59b%3A0x72075476e7a75e50!2sAl%20Dhaid%20Municipality!5e0!3m2!1sen!2sin!4v1706623791892!5m2!1sen!2sin',
      img: 'images/municipalities/main/im7.png',
      title: 'Al Dhaid City Municipality',
      link: '/municipalities/info',
      logo: '/images/municipalities/logo/logo7.jpg',
      landmarks: [],
      awards: [],
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
      website: 'https://kalbacmc.ae/ar/municipal-council/',
      number: '+971-09-2032222',
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.525201357073!2d56.3482036!3d25.0162446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef4faf9daa2f0e7%3A0xea44f35d68005c98!2sKalba%20City%20Municipality!5e0!3m2!1sen!2sin!4v1706623957546!5m2!1sen!2sin',
      img: 'images/municipalities/main/im8.png',
      title: 'Kalba City Municipality',
      link: '/municipalities/info',
      logo: '/images/municipalities/logo/logo8.jpg',
      landmarks: [],
      awards: [],
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
      setDataArr(result)
    }
  }, [searchParams.get('name')])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1.25 } }}
      exit={{ opacity: 0, transition: { duration: 1.25 } }}
      className="relative max-w-8xl m-auto overflow-hidden"
    >
      <LeftSideSticky />
      <RightSideSticky />
      <HeroSect paramsData={paramsData} />
      <StickyNav start={700} end={1000} />
      <InfoSect dataArr={dataArr} paramsData={paramsData} />
      <AwardsSect data={dataArr[0]} />
      <LandmarkSect data={dataArr[0]} />
      <GallerySect data={dataArr[0]} />
      <Footer />
    </motion.div>
  )
}

export default Page
