import React from 'react'
import qrcard from './images/image-qr-code.png'
const App = () => {
  return (
    <div className='text-3xl text-center bg-white  rounded-2xl md:max-w-sm h-11/12 my-5 mx-5 md:mx-auto px-5 py-5'>
        <div className=' rounded-2xl  md:h-1/5 bg-transparent object-fill'>
        <img className='rounded-2xl ' src={qrcard} alt="qr-card-img"/>
        </div>
        <h2 className='bg-transparent px-4 md:text-2xl text-xl text-slate-900/75 font-bold mt-5'>Improve your front-end skills by building projects</h2>
        <p className='bg-transparent px-4 text-slate-400/75 md:text-lg text-base my-3'>Scan the qr code to visit frontend mentor and take your coding skills to the next level.</p>
    </div>
  )
}

export default App