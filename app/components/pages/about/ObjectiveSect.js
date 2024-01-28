import React from 'react'

const ObjectiveSect = () => {
  const evaluationData = [
    {
      id: 1,
      title: 'Transparency',
    },
    {
      id: 2,
      title: 'Responsibility',
    },
    {
      id: 3,
      title: 'Innovation',
    },
    {
      id: 4,
      title: 'Participation',
    },
    {
      id: 5,
      title: 'Customer satisfaction',
    },
    {
      id: 6,
      title: 'Sustainability',
    },
  ]
  const objectiveData = [
    {
      id: 1,
      desc: 'Achieving harmonization and coordination between the municipal councils and the emirate’s municipalities through unifying, developing, and harmonizing procedures and programs.',
    },
    {
      id: 2,
      desc: 'Automating all services and procedures provided by municipal councils and municipalities in the emirate to ensure easy access to them.',
    },
    {
      id: 3,
      desc: 'Spreading the culture of innovation in municipal councils and municipalities.',
    },
    {
      id: 4,
      desc: 'Work to develop the organizational structures in municipal councils and municipalities in the emirate.',
    },
    {
      id: 5,
      desc: 'Implementing periodic surveys of municipal services and procedures and customers to confront societal changes and developments in coordination with municipal councils and municipalities.',
    },
    {
      id: 6,
      desc: 'Monitor and evaluate municipalities’ achievements to ensure their suitability and effectiveness to achieve customer happiness.',
    },
  ]

  return (
    <>
      <div className="relative h-[700px] 1xl:h-[750px] xl:h-[1200px] 2md:h-[1300px] md:h-[1100px] sm:h-[1200px] 4xsm:h-[1270px] m-auto">
        <div className="grid grid-cols-2 xl:grid-cols-1 justify-between xl:gap-10 w-[1347px] 1xl:w-[95%] absolute left-1/2 transform -translate-x-1/2 m-auto bg-transparent">
          <div className="w-full h-full flex flex-col items-center justify-center gap-7 py-14 xl:py-14 bg-[#036C73]">
            <div className="flex flex-row items-center gap-7">
              <p className="text-white text-3xl xsm:text-2xl">Evaluation</p>
              <div className="w-[120px] h-[5px] rounded-lg bg-white"></div>
            </div>
            <div className="flex flex-col gap-5">
              {evaluationData.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="flex flex-row items-center gap-6"
                  >
                    <p className="text-white opacity-60 text-5xl md:text-4xl xsm:text-2xl font-bold">
                      0{item.id}
                    </p>
                    <p className="text-white text-3xl  md:text-2xl xsm:text-lg font-semibold">
                      {item.title}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="flex flex-col gap-5 py-2 px-7 h-full">
            <div>
              <p className="text-3xl font-bold xsm:text-2xl">
                Strategic Objectives
              </p>
            </div>
            <div className="flex flex-col justify-between gap-5">
              {objectiveData.map((item) => {
                return (
                  <div key={item.id} className="flex flex-row gap-5">
                    <p className="text-[#E5D5C7] text-6xl md:text-4xl xsm:text-2xl  font-bold">
                      0{item.id}
                    </p>
                    <p className="text-lg md:text-sm">{item.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ObjectiveSect
