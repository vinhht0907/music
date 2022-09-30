import React from 'react';



export default function DetailSong(){
    return(
        <div className='col-span-1 p-3'>
            <h1 className='text-cyan-500 text-left font-bold ml-5'>Now Playing</h1>
            <h2 className='text-neutral-300 text-2xl text-left ml-5'>Sing me to sleep</h2>
            <div className='w-[240px] m-auto'>
                <img className='w-full' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6zqR3rfqfyhk-N8OGBqFjmHVi5qhYZFWkap8yPlNmdQsnGNTkcF2YneTEGI3__eIxuhs&usqp=CAU' alt='avatar'/>
            </div>
            <div className='flex justify-evenly items-center mt-10'>
                <img className='w-[70px] rounded-full' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6zqR3rfqfyhk-N8OGBqFjmHVi5qhYZFWkap8yPlNmdQsnGNTkcF2YneTEGI3__eIxuhs&usqp=CAU' alt='avatar'/>
                <span className='text-xl text-white'>Alan Walker</span>
            </div>
            
        </div>
    )
}