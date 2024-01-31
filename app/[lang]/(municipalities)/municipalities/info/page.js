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
import AllDataComponents from '@/app/components/pages/municipalities/info/AllDataComponents'

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
      information: {
        vision:
          'Build a beautiful, conservative city that reflects a natural environment.',
        desc: 'Build a beautiful, conservative city that reflects a natural environment.',
      },
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
      information: {
        municipalityData:
          'Al Hamriyah Municipality, established in accordance with the Emiri Decree of His Highness Sheikh Dr. Sultan bin Muhammad Al Qasimi, Member of the Supreme Council and Ruler of the Emirate of Sharjah, by Law No. (2) of 2004 regarding municipalities in the Emirate of Sharjah, defines its jurisdiction based on geographical and administrative boundaries. Al Hamriyah Municipality aligns with the vision of His Highness, aiming to enhance the aesthetic appearance of the Al Hamriyah area and serve its community. Strategic plans and effective programs are implemented, focusing on specific development projects that address environmental, social, sports, and quality of life aspects.\n\nThe Municipality of Al Hamriya has devised a comprehensive strategic plan encompassing development initiatives and community services tailored to the Al Hamriya area and its local community. This plan includes qualitative services for managing parks, public facilities, beaches, and enhancing cosmetic and agricultural spaces in the region. The municipality is dedicated to providing engineering and environmental services, municipal control and inspection, monitoring markets and facilities, and sustaining inspection efforts in public health areas. Additionally, development services and projects are launched to position the region as a tourist destination and elevate its aesthetic standards.',
        globalPracticesArray: [
          'The Municipality of Al Hamriyah has sought to attract and appoint national human cadres who will contribute to the implementation of its development plans, in implementation of the wise directives of His Highness the Ruler of Sharjah - may God protect him, to work on developing the region and providing it with cultural projects and providing all municipal services to the local community, and in pursuit of achieving the desired goals in cooperation with Institutions, bodies and government departments in the Emirate of Sharjah.',
          'Al Hamriyah Municipality has been committed to supporting the efforts of comprehensive sustainability projects by obtaining many international standards and meeting international requirements in the areas of regulatory and environmental management, thus reflecting the efforts made in managing facilities, establishments, public parks and beaches in accordance with high-quality international standards in the areas of sustainable environmental management, compliance and governance. Increasing the efficiency of the services provided and achieving the highest safety rates.',
          'General and high-quality services, in an effort to provide a sustainable environment for the community.',
        ],
      },
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
      information: {
        vision:
          'A sustainable municipality that achieves quality of life for the community',
        municipalityData:
          'Al Rafi’ah Municipality was established pursuant to Emiri Decree No. (10) of 2004 dated 10/13/2004 issued by His Highness Sheikh Dr. Sultan bin Muhammad Al Qasimi, Member of the Supreme Council of the Federation and Ruler of the Emirate of Sharjah (may God protect him). On 04/02/2005, the Emiri Decree was issued. No. (10) of 2005 amending the name of the municipality of Al-Rafiah to the municipality of Al-Bataeh area to include (Batha Al-Rafiah, Batha Al-Murrah, Batha Al-Manthar)',
        message:
          'Providing distinguished and smart municipal services in the Al-Bataeh area through optimal exploitation of available resources, building effective partnerships, and adopting best practices to ensure business continuity.',
        importantWorks: [
          'Al-Bataeh Municipality provides all municipal and public services to residents of the region within its geographical and administrative borders. It also undertakes the management and development of public facilities of a local nature that fall within its jurisdiction in accordance with the provisions of the law and its executive regulations, and its clients consist of citizens, residents, companies, government agencies, and suppliers.',
          'Interior house cleaning and waste removal service.',
          'Cleaning service for neighborhoods, residential areas, streets, and government buildings in the region',
          'Receiving sewage cleaning requests in residential neighborhoods and government departments',
          'Receiving reclamation requests for residential and industrial areas, farms, and roadbus requests',
          'Receiving requests for seedlings and transplantation',
          'The service of receiving agricultural requests for cutting lawns in homes and government departments',
          'Service for receiving insect and pest control requests',
          'Service for monitoring shops and reporting complaints from the public',
          'Building permits, inspection, and research into building-related complaints and building violations services',
          'Plan approval service',
          'Receiving requests and complaints and following them up with all departments',
          'Certification service for residential and commercial investment and lease contracts, issuing a clearance certificate',
          'The service of receiving payment fees for services provided by the municipality',
          'Providing a suitable place for garden visitors and holding workshops and events.',
        ],
        projectsArray: [
          'Infrastructure projects',
          'Development and service projects',
          'Renewing the contract with Bee’ah Company',
          'Environmental initiatives and improving the quality of life',
          'Community initiatives',
          'Humanitarian and charitable initiatives',
        ],
        achievements: [
          'Development and service projects',
          'Livestock, birds and camels market',
          'Friday market',
          'Vegetable and fruit market',
          'University bus station',
          'Municipal slaughterhouse',
          'Sharjah Cooperative Society (branch)',
          'Shopping mall',
          'Wedding Hall',
          'Mobile food carts project',
          'Administrative Development',
        ],
        values: [
          'Commitment and belonging.',
          'Integrity and transparency.',
          'One team spirit.',
          'Happiness and positivity.',
          'Initiative and innovation.',
        ],
        goals: [
          'Sustainable planning and infrastructure development.',
          'Ensuring that environmental, health, public safety, and food safety requirements are met.',
          'Effective communication with the community and building sustainable partnerships.',
          'Ensuring the quality of services provided to satisfy those concerned.',
          'Establishing a culture of innovation and risk to sustain efficient operations and institutional performance.',
        ],
      },
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
      information: {
        vision:
          'The nation expects a lot from us, the people look forward to our work, and we are all partners in responsibility. Sheikh Zayed bin Sultan - may God have mercy on him',
        mission:
          'Achieving the goal of the Government of the Emirate of Sharjah in providing diverse and distinguished services to citizens and residents, improving and developing the standard of living through coordination, supervision and control, and working to build an advanced structure through qualified cadres and advanced systems.',
        municipalityData:
          'The Municipality of Al Madam District is one of the government institutions affiliated with the Emirate of Sharjah. The municipality serves the people of Al Madam District, its residents, and its neighboring areas. The Municipality of Al Madam District was established by Emiri Decree No. (9) in 2004, and since then it has begun its work as a government department providing comprehensive services to the region.',
        importantWorks: [
          'Al Madam Municipality seeks to achieve the goal of the Government of the Emirate of Sharjah.',
          'Providing diverse and distinguished services to citizens and residents.',
          'Improving and developing the standard of living through coordination, supervision, and monitoring.',
          'Working to build an advanced structure through qualified cadres and advanced systems.',
        ],
        achievements: [
          'External departments building',
          'The main building',
          'Arboretum building',
          'Al Mayassa Building',
          'Al Shahla Building',
          'Sanitation building',
          'Heritage Village',
          'Stores',
          'Employee sports club',
        ],
      },
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
      information: {
        vision: 'Innovative municipal works for a virtuous city',
        message:
          'Optimal planning to develop municipal services for a sustainable city attractive to living and investment by providing innovative services and developing an integrated infrastructure environment that enhances the quality of life',
        municipalityData:
          'The municipality’s business was affiliated with the Sharjah Municipality, which was managed by the Khor Fakkan Municipality at the end of the sixties of the last century and consisted of the Cleaning Department (solid waste) and the Agriculture Department. Based on Law No. (2) of 2004 regarding municipalities in the Emirate of Sharjah, it was Establishment of the Dibba Al-Hisn Municipality.',
        importantWorks: [
          'Carrying out agricultural work in the city and public parks',
          'Carrying out agricultural work inside homes, government departments, and schools',
          'Controlling agricultural pests on farms and the city of Dibba Al-Hisn in general',
          'Cleaning private farms in the city to combat pests and rodents',
          'Managing cemeteries, cleaning them of agricultural waste, and taking care of them',
          'Drainage of sewage for homes, shops, schools, and government agencies in the city',
          'Issuing all types of building permits',
          'Demolishing old buildings and disposing of construction waste',
          'Settlement and paving of sandy lands',
          'Supervision of commercial licenses of all types',
          'Managing the fish, meat, vegetables, fruits, and birds market',
          'Maintaining the cleanliness of the city',
          'Implementing all types of awareness-raising at the city level in accordance with municipal work',
          'Continuous and continuous inspection of all areas in the city to document observations in coordination with government agencies',
          'Interlock maintenance in some city homes',
        ],
        achievements: [
          'External departments building',
          'The main building',
          'Arboretum building',
          'Al Mayassa Building',
          'Al Shahla Building',
          'Sanitation building',
          'Heritage Village',
          'Stores',
          'Employee sports club',
        ],
        InternalAchievements: [
          'The municipality has an organizational structure and job descriptions for all job titles',
          'The existence of a municipal strategy for the years 2023-2025',
          'Obtaining the ISO 9001:2008 quality management system certificate, and updating it to the new version ISO 9001:2015.',
          'Obtaining the ISO 14001 environmental system certificate',
          'Obtaining the ISO 45001 occupational health and safety system certificate',
          'Obtaining the ISO 56002 Innovation Management System certificate',
          'Applying for the ISO 22301 Business Continuity System Certificate',
          'Preparing a comprehensive guide to municipal services',
          'Apply for the Blue Flag Program Certificate for Dibba City Beaches',
        ],
        ExternalAchievements: [
          'Managing the Maleh and Fishing Festival for 10 years',
          'Intelligent inspection system',
          'Managing National Day events in the city',
          'Participation in the 11 Suburbs Festival in Sharjah',
          'Participation in Sharjah Heritage Days',
          'Electric vehicle for agriculture',
          'Mobile workshop',
          'Effectiveness of the future engineer',
          'Afforestation week',
          'Bird watering initiative',
        ],
        values: [
          'Justice and integrity',
          'Cooperation and participation',
          'Cooperation and participation',
          'Responsibility',
          'Positivity',
          'Proactivity and innovation',
        ],
      },
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
      information: {
        vision:
          'Build a beautiful, conservative city that reflects a natural environment.',
        municipalityData:
          'It is a government service department that provides services to citizens free of charge. Al Dhaid Municipality, located in the Al Dhaid region on Wishah Road, is considered one of the most important and best institutions in the city. Established in 1976 AD with approximately 28 employees working in two initial departments, the lands unit, and the cleaning unit, it began under the management of Mr. Muhammad Abdullah Sarhan, followed by Mr. Abdullah Abdul Wahab. In 2004 AD, a new building was established, and Mr. Ali Ahmed Saif Al-Tunaiji became the director. Later, Mr. Ali Musabah Al-Tunaiji took charge, contributing to the growth and prosperity of the municipality. With numerous young employees and women, the municipality now comprises various departments, divisions, and units. In 2023 AD, Resolution No. (15) appointed His Excellency Hamad Rashid Mohammed bin Masoud Al Tunaiji as the Director of the Municipality of the City of Al Dhaid, with the rank of director according to the special jobs system in the Sharjah Government.',
        message: [
          'Complete loyalty to the wise leadership, and complete belonging to the homeland.',
          'Contributing to consolidating the foundations of the federal process.',
          'Focusing on the authenticity and ancient heritage of the distinguished city.',
          'Preserving the distinct character of the region or emirate.',
          'Maintaining family ties and ancient customs.',
          'Reflects an attractive natural environment.',
          'Enjoy a wonderful healthy environment.',
          'Its foundation is cooperation and integration with all honesty and sincerity.',
        ],
        objectives: [
          'Showing the aesthetic values ​​of the city of Dhaid and highlighting the city’s heritage dimension.',
          'Improving the environmental situation and providing protection for environmental elements.',
          'Improving and developing the city’s health status.',
          'Controlling and directing construction in the city.',
          'Connecting the city to a safe and comfortable road network.',
          'Supporting all types of development elements in the local community.',
          'Optimal investment of local resources.',
          'Contributing to encouraging investment in the city.',
          'Combating desertification and increasing green areas.',
          'Partnership and communication with community institutions and the private sector.',
        ],
        departments: [
          'Engineering Management',
          'Public Health Department',
          'Operations Management',
          'Finance Department',
          'Rental Regulation Department',
          'Legal Affairs Department',
          'General Services Department',
          'Municipal Safety and Inspection Department',
          'Department of Agriculture and Water',
          'Environmental Services Department',
          'Wastewater Treatment Department',
          'Transportation Department',
          'Human Resources Department',
          'Training and Development Department',
          'Information Technology Department',
          'Public Relations Department',
          'Government Communications Department',
          'Health Control Department',
          'Administrative Audit Department',
          'Food Control Department',
          'Warehouses Department',
          'Regulatory Documents Section',
        ],
      },
    },
    {
      slug: 'Kalba City Municipality',
      website: 'https://kalbacmc.ae/ar/municipal-council/',
      number: '+971-09-2032222',
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.525201357073!2d56.3482036!3d25.0162446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef4faf9daa2f0e7%3A0xea44f35d68005c98!2sKalba%20City%20Municipality!5e0!3m2!1sen!2sin!4v1706623957546!5m2!1sen!2sin',
      img: 'images/municipalities/main/new/im8.jpg',
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
      <HeroSect dataArr={dataArr} />
      <StickyNav start={700} end={1000} />
      <InfoSect dataArr={dataArr} paramsData={paramsData} />
      <AllDataComponents dataArr={dataArr[0]} />
      {dataArr[0]?.awards.length > 0 && <AwardsSect data={dataArr[0]} />}
      {dataArr[0]?.landmarks.length > 0 && <LandmarkSect data={dataArr[0]} />}
      {dataArr[0]?.landmarks.length > 0 && <GallerySect data={dataArr[0]} />}
      <Footer />
    </motion.div>
  )
}

export default Page
