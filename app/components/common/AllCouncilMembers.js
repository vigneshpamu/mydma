import Image from 'next/image'
import React from 'react'
import Marquee from 'react-fast-marquee'

const AllCouncilMembers = () => {
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
    <>
      <div className="relative h-[556px] m-auto">
        <div className="absolute py-12 w-[1347px] 1xl:w-[90%] left-1/2 transform -translate-x-1/2 m-auto ">
          <p className="text-5xl font-semibold sm:text-3xl xsm:text-2xl">
            Members of Council
          </p>
          <Marquee className="mt-10">
            {membersData.map((item) => {
              return (
                <div className="relative max-w-[250px] ml-2 mr-2" key={item.id}>
                  <div className="min-h-[300px]">
                    {/* <img
                      src={item.img}
                      alt=""
                      className="w-[250px] h-[300px] object-cover"
                    /> */}
                    <Image
                      src={item.img}
                      alt="council-members"
                      width={250}
                      height={300}
                      className="pointer-events-none"
                    />
                  </div>
                  <div className="">
                    <p className="px-2 text-center text-sm mt-2 font-semibold">
                      {item.name}
                    </p>
                  </div>
                </div>
              )
            })}
          </Marquee>
        </div>
      </div>
    </>
  )
}

export default AllCouncilMembers
