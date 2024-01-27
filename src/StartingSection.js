import React from 'react'

export default function StartingSection() {
  return (
    <>
        {/* <video autoplay muted loop id="myVideo">
        <source src="rain.mp4" type="video/mp4"/>
      </video> */}
      <video loop muted autoPlay id="myVideo" className='img1'>
        <source src="./background.mp4" type="video/mp4" /></video>
      <div id="home" 
        className='font'>valorant
      </div>
      <div id="home1" 
        className='font'>Top Youtubers
      </div>
    </>
  )
}
