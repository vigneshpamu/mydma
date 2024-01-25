'use client'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import LeftSideSticky from '@/app/components/common/LeftSideSticky'
import RightSideSticky from '@/app/components/common/RightSideSticky'
import StickyNav from '@/app/components/common/StickyNav'
import Footer from '@/app/components/common/Footer'
import SideMenu from '@/app/components/common/SideMenu'
import CommonNav from '@/app/components/common/CommonNav'
import HeroSect from '@/app/components/pages/councils/info/HeroSect'
import { useSearchParams } from 'next/navigation'
import MembersSect from '@/app/components/pages/councils/info/MembersSect'

const page = () => {
  const [visible, setVisible] = useState(false)
  const mainData = [
    {
      img: 'images/municipalities/main/im1.png',
      title: 'Hamriyah City Municipality',
      link: '/councils/info',
      logo: '/images/municipalities/logo/logo1.jpg',
    },
    {
      slug: 'Mleiha City',
      img: 'images/municipalities/main/im2.png',
      title: 'Mleiha City Municipality',
      link: '/councils/info',
      logo: '/images/municipalities/logo/logo2.jpg',
    },
    {
      slug: 'Khorfakkan City',
      img: 'images/municipalities/main/im3.png',
      title: 'Khorfakkan City Municipality',
      link: '/councils/info',
      logo: '/images/municipalities/logo/logo3.jpg',
      councilMembers: {
        chairman: {
          name: 'Dr. Khamis Al-Naqbi',
          role: 'Chairman of the Rashid Municipal Council of Khor Fakkan',
          img: '/images/councils/info/members/khorfakkan/img4.jpg',
        },
        vicePresident: {
          name: 'Dr. Suhail Al Naqbi,',
          role: 'Vice President of the Council',
          img: '/images/councils/info/members/khorfakkan/img5.jpg',
        },
        otherMembers: [
          {
            name: 'Rashid Khamis',
            role: 'Position of this person With more details if any',
            img: '/images/councils/info/members/khorfakkan/img1.png',
          },
          {
            name: 'Saeed Abdullah',
            role: 'Position of this person With more details if any',
            img: '/images/councils/info/members/khorfakkan/img2.png',
          },
          {
            name: 'Muhammad Al-Gohary',
            role: 'Position of this person With more details if any',
            img: '/images/councils/info/members/khorfakkan/img3.png',
          },
          {
            name: 'Muhammad Khalfan',
            role: 'Position of this person With more details if any',
            img: '/images/councils/info/members/khorfakkan/img6.png',
          },
          {
            name: 'Muhammad Zaid',
            role: 'Position of this person With more details if any',
            img: '/images/councils/info/members/khorfakkan/img7.jpg',
          },
          {
            name: 'Youssef Shaheen',
            role: 'Position of this person With more details if any',
            img: '/images/councils/info/members/khorfakkan/img8.jpg',
          },
        ],
      },
    },
    {
      slug: 'Al-Bataeh City',
      img: 'images/municipalities/main/im4.png',
      title: ' Al-Bataeh City Municipality',
      link: '/councils/info',
      logo: '/images/municipalities/logo/logo4.jpg',
    },
    {
      slug: 'Al Madam City',
      img: 'images/municipalities/main/im5.png',
      title: 'Al Madam City Municipality',
      link: '/councils/info',
      logo: '/images/municipalities/logo/logo5.jpg',
    },
    {
      slug: 'Dibba Al Hisn City Municipality',
      img: 'images/municipalities/main/im6.png',
      title: 'Dibba Al Hisn City Municipality',
      link: '/councils/info',
      logo: '/images/municipalities/logo/logo6.jpg',
    },
    {
      slug: 'Al Dhaid City Municipality',
      img: 'images/municipalities/main/im7.png',
      title: 'Al Dhaid City Municipality',
      link: '/councils/info',
      logo: '/images/municipalities/logo/logo7.jpg',
    },
    {
      slug: 'Kalba City Municipality',
      img: 'images/municipalities/main/im8.png',
      title: 'Kalba City Municipality',
      link: '/councils/info',
      logo: '/images/municipalities/logo/logo8.jpg',
    },
  ]
  const searchParams = useSearchParams()
  const [paramsData, setParamsData] = useState('')
  const [dataArr, setDataArr] = useState({})
  function getDataByTitle(array, paramsData) {
    return array.filter((item) => item.title === searchParams.get('name'))
  }
  useEffect(() => {
    if (searchParams.get('name')) {
      setParamsData(searchParams.get('name'))
      const result = getDataByTitle(mainData, paramsData)
      console.log(result)
      setDataArr(result[0])
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
      <StickyNav start={700} end={1000} />
      <HeroSect />
      <MembersSect dataArr={dataArr} />
      <Footer />
    </motion.div>
  )
}

export default page
