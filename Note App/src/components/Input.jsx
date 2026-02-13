import React from 'react'
import Card from './Card';

const submitHandler= (e) =>{
    e.preventDefault();

}

const Input = () => {
    return (
        <div className='h-screen bg-neutral-800'>
            <form className='flex items-start p-10 justify-between  ' onSubmit={submitHandler}>
                <div className=' flex items-start flex-col gap-4 w-1/2 '>
                    <input className='px-3.5 w-full font-medium border-2 text-white'
                        type='text'
                        placeholder='Enter the task Heading' />

                    <textarea className='p-3.5 w-full font-medium border-2 text-white'
                        placeholder='Enter Detail'
                        name=''
                        id='' />

                    <button className='bg-white  w-full  text-black px-5 py-3 rounded-3xl'>
                        Add Note
                    </button>
                </div>    
            </form>
            <div className=''>
                <Card/>
            </div>
        </div>
    )
}

export default Input
