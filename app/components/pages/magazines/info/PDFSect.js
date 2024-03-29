import React from 'react'

const PDFSect = () => {
  return (
    <>
      <div className="relative h-[452px]  w-[100%] m-auto bg-gray-300">
        <div className="flex flex-col gap-3 items-center justify-center  m-auto">
          <iframe
            allowFullScreen
            scrolling="no"
            className="fp-iframe"
            src="https://heyzine.com/flip-book/243326aeee.html#page/2"
            style={{
              border: '1px solid lightgray',
              width: '100%',
              height: '452px',
            }}
          />
        </div>
      </div>
    </>
  )
}

export default PDFSect
