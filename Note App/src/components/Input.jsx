import React, { useState } from 'react'
import { X } from 'lucide-react'

const Input = () => {

    const [title, setTitle] = useState('');
    const [detail, setDetail] = useState('');
    const [tasks, setTasks] = useState([]);

    const submitHandler = (e) => {
        e.preventDefault();

        const CopyTasks=[...tasks]
        CopyTasks.push({title,detail}) 
        setTasks(CopyTasks)

        setTasks([...tasks, { title, detail }]);
        setTitle('');
        setDetail('');
    };

    const deleteHandler = (idx) => {
        const copyTasks=[...tasks]
        copyTasks.splice(idx,1)
        setTasks(copyTasks)
    };

    return (
        <div className='min-h-screen bg-neutral-900 text-white p-10'>

            <div className='flex flex-col lg:flex-row gap-16'>

                {/* LEFT SIDE - FORM */}
                <form
                    onSubmit={submitHandler}
                    className='w-full lg:w-1/2 flex flex-col gap-6'
                >
                    <h1 className='text-4xl font-bold mb-6'>
                        Add Notes
                    </h1>

                    <input
                        className='px-4 py-3 w-full border border-gray-600 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-white'
                        type='text'
                        placeholder='Enter the task Heading'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <textarea
                        className='px-4 py-3 w-full h-40 border border-gray-600 rounded-lg bg-transparent resize-none focus:outline-none focus:ring-2 focus:ring-white'
                        placeholder='Enter Detail'
                        value={detail}
                        onChange={(e) => setDetail(e.target.value)}
                    />

                    <button
                        type="submit"
                        className='bg-white text-black font-semibold py-3 rounded-full hover:bg-gray-200 transition duration-300'
                    >
                        Add Note
                    </button>
                </form>


                {/* RIGHT SIDE - NOTES */}
                <div className='w-full lg:w-1/2'>
                    <h2 className='text-3xl font-bold mb-8'>
                        Your Notes
                    </h2>

                    {tasks.length === 0 && (
                        <p className='text-gray-400'>
                            No notes added yet.
                        </p>
                    )}

                    <div className='flex flex-wrap gap-8'>
                        {tasks.map((elem, idx) => (
                            <div
                                key={idx}
                                className="relative w-56 min-h-60 rounded-2xl py-13 px-4 mt-2
                                 bg-[url('https://png.pngtree.com/thumb_back/fh260/background/20210430/pngtree-yellow-vintage-note-paper-background-with-stripes-image_697102.jpg')]"
                            >

                                {/* Delete Button */}
                                <button
                                    onClick={() => deleteHandler(idx)}
                                    className="absolute top-3 right-3 text-gray-700 hover:text-red-600 transition"
                                >
                                    <X size={18} />
                                </button>

                                <h3 className="font-bold text-lg text-gray-900 break-words">
                                    {elem.title}
                                </h3>

                                <p className="mt-3 text-sm text-gray-800 break-words leading-relaxed">
                                    {elem.detail}
                                </p>

                            </div>
                        ))}

                    </div>


                </div>
            </div>

        </div>
       
    )
}

export default Input
