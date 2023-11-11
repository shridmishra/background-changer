import { useState } from 'react'


function App() {
  const [bg,setbg] = useState('aqua')

  return (
   <div className="h-screen w-full duration-200" style={{background :bg}}>

    <div className='fixed flex flex-wrap justify-center gap-3 bottom-12 inset-x-0 px-2'>
    <div className='flex flex-wrap justify-center gap-3 bottom-12 inset-x-0 px-2 rounded-3xl py-2' style={{background:"white"}}>
      <button onClick={() => setbg("red")} className='px-3 py-2 rounded-3xl shadow-lg text-white' style={{background:"red"}}>Red</button>
      <button onClick={() => setbg("green")}className='px-3 py-2 rounded-3xl shadow-lg text-white' style={{background:"Green"}}>Green</button>
      <button onClick={() => setbg("blue")}className='px-3 py-2 rounded-3xl shadow-lg text-white' style={{background:"blue"}}>Blue</button>
      <button onClick={() => setbg("aqua")}className='px-3 py-2 rounded-3xl shadow-lg' style={{background:"aqua"}}>Aqua</button>
      <button onClick={() => setbg("yellow")} className='px-3 py-2 rounded-3xl shadow-lg ' style={{background:"yellow"}}>Yellow</button>
      <button onClick={() => setbg("pink")} className='px-3 py-2 rounded-3xl shadow-lg' style={{background:"Pink"}}>Pink</button>
      <button onClick={() => setbg("orange")} className='px-3 py-2 rounded-3xl shadow-lg text-white' style={{background:"orange"}}>Orange</button>
      <button onClick={() => setbg("black")} className='px-3 py-2 rounded-3xl shadow-lg text-white' style={{background:"black"}}>Black</button>
    </div>
    </div>
   </div>
  )
}

export default App
