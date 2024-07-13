import React from 'react'

const ConvertTo = () => {
  return (
    <main className='h-[100dvh] w-full flex items-center  justify-center'>
        <section className='w-[60%] flex flex-col  items-center gap-8 h-[50%]'>
            <article className='flex flex-col items-center gap-2'>
            <h2 className='text-4xl font-medium'>Welcome to <span className='font-bold'>TrabaCoder</span></h2>
            <p className='text-neutral-500 text-sm'>Select the option you want to convert to</p>
            </article>

            <article>
                <ul className='flex items-center gap-2 justify-between text-sm font-semibold border-b-[1.5px] border-neutral-200  p-2'>
                    <li className='w-[100px]  flex justify-center'>FrameWorks</li>
                    <li className='w-[80px]  flex justify-center'>Queries</li>
                    <li className='w-[70px]  flex justify-center'>Styles</li>
                    <li className='w-[60px]  flex justify-center'>Data</li>
                    <li className='w-[100px]  flex justify-center'>Automatizate</li>
                </ul>
            </article>
        </section>
    </main>
  )
}

export default ConvertTo

// bg-[#161F30]