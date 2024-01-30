/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useState } from 'react'
import HeroSect from '@/app/components/pages/about/HeroSect'
import MissionSect from '@/app/components/pages/about/MissionSect'
import { motion } from 'framer-motion'
import LeftSideSticky from '@/app/components/common/LeftSideSticky'
import StickyNav from '@/app/components/common/StickyNav'
import RightSideSticky from '@/app/components/common/RightSideSticky'
import ObjectiveSect from '@/app/components/pages/about/ObjectiveSect'
import ChairManMessageSect from '@/app/components/pages/about/ChairManMessageSect'
import OrganisationStructureSect from '@/app/components/pages/about/OrganisationStructureSect'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import GovtEntities from '@/app/components/common/GovtEntities'
import Footer from '@/app/components/common/Footer'
import NeedSect from '@/app/components/pages/about/NeedSect'
import Marquee from 'react-fast-marquee'
import AllCouncilMembers from '@/app/components/common/AllCouncilMembers'
const page = () => {
  const membersData = [
    {
      id: 1,
      name: 'His Excellency Abdullah Salem Ahmed Mohammed Bousmanouh',
      img: '/images/about/members/His Excellency Abdullah Salem Ahmed Mohammed Bousmanouh.jpg',
    },
    {
      id: 2,
      name: 'Her Excellency Aisha Saif Mohammed Al Khaja',
      img: '/images/about/members/Her Excellency Aisha Saif Mohammed Al Khaja.jpg',
    },
    {
      id: 3,
      name: 'His Excellency Butti Eid Butti Eid Al-Shuwaihi',
      img: '/images/about/members/His Excellency Butti Eid Butti Eid Al-Shuwaihi.jpg',
    },
    {
      id: 4,
      name: 'Her Excellency Aisha Ahmed Salem Al Mutawa',
      img: '/images/about/members/Her Excellency Aisha Ahmed Salem Al Mutawa.jpg',
    },

    //////

    {
      id: 5,
      name: 'His Excellency Dr. Ali Muhammad Abdulaziz bin Darwish Al Ali',
      img: '/images/about/members/His Excellency Dr. Ali Muhammad Abdulaziz bin Darwish Al Ali.jpg',
    },
    {
      id: 6,
      name: 'His Excellency Hamad Abdullah Abdul Rahman Al-Helou',
      img: '/images/about/members/His Excellency Hamad Abdullah Abdul Rahman Al-Helou.jpg',
    },
    {
      id: 7,
      name: 'His Excellency Issa Obaid Khalifa bin Ghanem Al-Humairi',
      img: '/images/about/members/His Excellency Issa Obaid Khalifa bin Ghanem Al-Humairi.jpg',
    },
    {
      id: 8,
      name: 'His Excellency Jihad Rashed Saif Juma Al Zaabi',
      img: '/images/about/members/His Excellency Jihad Rashed Saif Juma Al Zaabi.jpg',
    },

    //////

    {
      id: 9,
      name: 'His Excellency Khaled Abdul Latif Amin Mohammed Al-Nimr',
      img: '/images/about/members/His Excellency Khaled Abdul Latif Amin Mohammed Al-Nimr.jpg',
    },
    {
      id: 10,
      name: 'His Excellency Khalfan Mohammed Khalfan Al Ruwaimah Al Muhairi',
      img: '/images/about/members/His Excellency Khalfan Mohammed Khalfan Al Ruwaimah Al Muhairi.jpg',
    },
    {
      id: 11,
      name: 'His Excellency Khalid Rashid Khalifa Al Muhairi',
      img: '/images/about/members/His Excellency Khalid Rashid Khalifa Al Muhairi.jpg',
    },
    {
      id: 12,
      name: 'His Excellency Khamis Saif Rashid bin Suef Al Ali',
      img: '/images/about/members/His Excellency Khamis Saif Rashid bin Suef Al Ali.jpg',
    },

    //////
    // Not Done
    {
      id: 13,
      name: 'His Excellency Muhammad Humaid Nasser Salem Al Owais',
      img: '/images/about/members/His Excellency Muhammad Humaid Nasser Salem Al Owais.jpg',
    },
    {
      id: 14,
      name: 'His Excellency Nasser Hamdan Nasser Aboudi',
      img: '/images/about/members/His Excellency Nasser Hamdan Nasser Aboudi.jpg',
    },
    {
      id: 15,
      name: 'His Excellency Obaid Sultan Ali Al Nabooda Al Shamsi',
      img: '/images/about/members/His Excellency Obaid Sultan Ali Al Nabooda Al Shamsi.jpg',
    },
    {
      id: 16,
      name: 'His Excellency Rashid Khamis Hamad Rashid Al Suwaidi',
      img: '/images/about/members/His Excellency Rashid Khamis Hamad Rashid Al Suwaidi.jpg',
    },

    // Not Done
    {
      id: 17,
      name: 'His Excellency Saif Salem Saeed Salem Al Suwaidi',
      img: '/images/about/members/His Excellency Saif Salem Saeed Salem Al Suwaidi.jpg',
    },
    {
      id: 18,
      name: 'His Excellency Salem bin Ali Al Muhairi, Chairman of the Sharjah Municipal Council',
      img: '/images/about/members/His Excellency Salem bin Ali Al Muhairi, Chairman of the Sharjah Municipal Council.jpg',
    },
    {
      id: 19,
      name: 'His Excellency Salem Mohammed Salem Saeed Al Mazrouei',
      img: '/images/about/members/His Excellency Salem Mohammed Salem Saeed Al Mazrouei.jpg',
    },
    {
      id: 20,
      name: 'His Excellency Walid Rashid Khalifa Demas',
      img: '/images/about/members/His Excellency Walid Rashid Khalifa Demas.jpg',
    },
  ]
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1.25 } }}
      exit={{ opacity: 0, transition: { duration: 1.25 } }}
      className="relative max-w-8xl m-auto  border-2 overflow-hidden"
    >
      <LeftSideSticky />
      <RightSideSticky />
      <HeroSect />
      <MissionSect />
      <StickyNav start={700} end={900} />
      <ObjectiveSect />
      <ChairManMessageSect />
      <OrganisationStructureSect />
      <AllCouncilMembers />
      <NeedSect />
      <GovtEntities />
      <Footer />
    </motion.div>
  )
}

export default page
