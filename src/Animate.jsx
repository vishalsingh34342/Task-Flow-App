import React from 'react'

const Animate = () => {
  return (
    <div className='absolute inset-0 overflow-hidden pointer-events-none'>

      <div className='absolute -top-40 -right-40 w-80 h-80 bg-blue-900 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-pulse'></div>

      {/* Bottom Left Blob */}
      <div
        className='absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-800 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-pulse'
        style={{ animationDelay: "2s" }}
      ></div>

      {/* Center Blob */}
      <div
        className='absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-800 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-pulse'
        style={{ animationDelay: "4s" }}
      ></div>


      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        {Array.from({ length: 50 }).map((_, i) => (

          <div key={i} className='absolute w-1 h-1 bg-white rounded-full opacity-20' style={{
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 2 + 1}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            boxShadow: "0 0 6px white",
            animation: `float ${3 + Math.random() * 5}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`
          }}>


          </div>

        ))}
      </div>
    </div>
  )
}

export default Animate