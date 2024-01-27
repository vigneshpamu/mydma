import React from 'react'

const OrganisationStructureSect = () => {
  return (
    <>
      <div className="relative h-[1756px] m-auto">
        <img
          src="/images\about\org-str\background.png"
          className="w-full h-full object-cover"
          alt=""
        />
        <div className="flex flex-col gap-10 pt-4 w-[1347px] top-0 absolute left-1/2 transform -translate-x-1/2 m-auto bg-transparent">
          <div className="py-20 flex items-center justify-center">
            <p className="text-6xl font-bold">Organizational Structure.</p>
          </div>
          <img src="/images\about\org-str\structure.png" alt="" />
        </div>
      </div>
    </>
  )
}

export default OrganisationStructureSect
