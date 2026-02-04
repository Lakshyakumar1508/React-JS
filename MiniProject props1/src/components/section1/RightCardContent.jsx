const RightCardContent = ({tag, index}) => {
    return (
        <div className="absolute inset-0 p-7  flex   flex-col justify-between bg-black/30">

            <h2 className="bg-white text-2xl font-bold rounded-full h-10 w-10 flex items-center justify-center">
                        {index}

            </h2>

            <p className="text-lg leading-normal text-white">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Placeat ex animi laboriosam earum maiores natus.
            </p>

            <div className="flex justify-between">
                <button className="bg-blue-500 px-5 py-2 font-semibold text-white rounded-full">
                    {tag}
                </button>
                <button className="bg-blue-500 px-5 py-2 font-semibold text-white rounded-full">
                    ---
                </button>
            </div>

        </div>
    )
}

export default RightCardContent