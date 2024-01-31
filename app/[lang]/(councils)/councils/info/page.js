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

const Page = () => {
  const [visible, setVisible] = useState(false)
  const mainData = [
    {
      slug: 'Hamriyah City',
      img: '/images/municipalities/main/im1.png',
      title: 'Hamriyah City Municipality',
      link: '/councils/info',
      logo: '/images/municipalities/logo/logo1.jpg',
      councilMembers: {
        chairman: {
          name: 'His Excellency Humaid Saif bin Samha Al Shamsi',
          role: 'Chairman of the Rashid Municipal Council of Khor Fakkan',
          img: '/images/councils/info/members/hamriya/6.png',
        },
        vicePresident: {
          name: 'His Excellency Humaid Fayez Abdul Rahman Al Shamsi',
          role: 'Vice President of the Council',
          img: '/images/councils/info/members/hamriya/3.png',
        },
        otherMembers: [
          {
            name: 'His Excellency Hassan Salem bin Harb Al Shamsi',
            role: 'Position of this person With more details if any',
            img: '/images/councils/info/members/hamriya/1.png',
          },
          {
            name: 'His Excellency Ahmed Saeed Al Muhairi',
            role: 'Position of this person With more details if any',
            img: '/images/councils/info/members/hamriya/2.png',
          },
          {
            name: 'His Excellency Talib Rashid Al-Musaferi',
            role: 'Position of this person With more details if any',
            img: '/images/councils/info/members/hamriya/4.png',
          },
          {
            name: 'His Excellency Majid Ali Bouvier Al Shamsi',
            role: 'Position of this person With more details if any',
            img: '/images/councils/info/members/hamriya/5.png',
          },
        ],
      },
    },
    {
      slug: 'Mleiha City',
      img: '/images/municipalities/main/im2.png',
      title: 'Mleiha City Municipality',
      link: '/councils/info',
      logo: '/images/municipalities/logo/logo2.jpg',
    },
    {
      slug: 'Khorfakkan City',
      img: '/images/municipalities/main/im3.png',
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
      img: '/images/municipalities/main/im4.png',
      title: ' Al-Bataeh City Municipality',
      link: '/councils/info',
      logo: '/images/municipalities/logo/logo4.jpg',
    },
    {
      slug: 'Al Madam City',
      img: '/images/municipalities/main/im5.png',
      title: 'Al Madam City Municipality',
      link: '/councils/info',
      logo: '/images/municipalities/logo/logo5.jpg',
      councilMembers: {
        chairman: {
          name: 'Sultan Muhammad Maadhad bin Huwaydin',
          role: 'Chairman of the Rashid Municipal Council of Khor Fakkan',
          img: '/images/councils/info/members/al-madam/3.png',
        },
        vicePresident: {
          name: 'Saeed Mohammed Saeed Al Rashidi',
          role: 'Vice President of the Council',
          img: '/images/councils/info/members/al-madam/5.png',
        },
        otherMembers: [
          {
            name: 'Ali Awad Ali Omair Al Ketbi',
            role: 'Position of this person With more details if any',
            img: '/images/councils/info/members/al-madam/1.png',
          },
          {
            name: 'Abdullah Saber Saeed Saber Al Ketbi',
            role: 'Position of this person With more details if any',
            img: '/images/councils/info/members/al-madam/2.png',
          },
          {
            name: 'Sheriji Muhammad Muhammad Eid Al-Kutbi',
            role: 'Position of this person With more details if any',
            img: '/images/councils/info/members/al-madam/4.png',
          },
          {
            name: 'Salem Matar Hamad Saud Al Ketbi',
            role: 'Position of this person With more details if any',
            img: '/images/councils/info/members/al-madam/6.png',
          },
          {
            name: 'Juma Muhammad Ali Sharara',
            role: 'Position of this person With more details if any',
            img: '/images/councils/info/members/al-madam/7.png',
          },
        ],
      },
    },
    {
      slug: 'Dibba Al Hisn City Municipality',
      img: '/images/municipalities/main/im6.png',
      title: 'Dibba Al Hisn City Municipality',
      link: '/councils/info',
      logo: '/images/municipalities/logo/logo6.jpg',
    },
    {
      slug: 'Al Dhaid City Municipality',
      img: '/images/municipalities/main/im7.png',
      title: 'Al Dhaid City Municipality',
      link: '/councils/info',
      logo: '/images/municipalities/logo/logo7.jpg',
    },
    {
      slug: 'Kalba City Municipality',
      img: '/images/municipalities/main/im8.png',
      title: 'Kalba City Municipality',
      link: '/councils/info',
      logo: '/images/municipalities/logo/logo8.jpg',
      councilMembers: {
        chairman: {
          name: 'His Excellency Dr. Obaid Saif Hamad Al Zaabi',
          role: 'His Excellency the Chairman of the Council',
          img: '/images/councils/info/members/kalba/5.png',
        },
        vicePresident: {
          name: 'His Excellency Salem Abdullah Al Kindi',
          role: 'Vice President of the Council',
          img: '/images/councils/info/members/kalba/2.png',
        },
        otherMembers: [
          {
            name: 'His Excellency Hussein Mohammed bin Issa',
            role: 'Position of this person With more details if any',
            img: '/images/councils/info/members/kalba/1.png',
          },
          {
            name: 'His Excellency Dr. Obaid Saqr Al-Marashda',
            role: 'Position of this person With more details if any',
            img: '/images/councils/info/members/kalba/3.png',
          },
          {
            name: 'His Excellency Hamad Salem Al Zaabi',
            role: 'Position of this person With more details if any',
            img: '/images/councils/info/members/kalba/4.png',
          },
          {
            name: 'His Excellency Zayed Al Kalbani',
            role: 'Position of this person With more details if any',
            img: '/images/councils/info/members/kalba/6.png',
          },
          {
            name: 'His Excellency Saif Khamis Al Mazrouei',
            role: 'Position of this person With more details if any',
            img: '/images/councils/info/members/kalba/7.png',
          },
          {
            name: 'His Excellency Saleh Al-Ghamri',
            role: 'Position of this person With more details if any',
            img: '/images/councils/info/members/kalba/8.png',
          },
          {
            name: 'His Excellency Hashem Al-Bairaq',
            role: 'Position of this person With more details if any',
            img: '/images/councils/info/members/kalba/9.png',
          },
        ],
      },
    },
  ]
  const searchParams = useSearchParams()
  const [paramsData, setParamsData] = useState('')
  const [dataArr, setDataArr] = useState([])
  function getDataByTitle(array, paramsData) {
    return array.filter((item) => item.title === searchParams.get('name'))
  }
  useEffect(() => {
    if (searchParams.get('name')) {
      setParamsData(searchParams.get('name'))
      const result = getDataByTitle(mainData, paramsData)
      console.log(result, 'Resut')
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
      <StickyNav start={700} end={1000} />
      <HeroSect dataArr={dataArr[0]} />
      <MembersSect dataArr={dataArr[0]} />
      <Footer />
    </motion.div>
  )
}

export default Page
