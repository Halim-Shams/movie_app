import React from 'react';

function Movie() {
	return (
		<div className='movie transition duration-300 hover:shadow-lg hover:shadow-gray-800 hover:scale-105 w-48 h-[20rem] overflow-hidden bg-gray-600 rounded-xl relative'>
			<img
				className='block transition duration-300 w-full h-full object-cover object-center'
				src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRHXV5at6mvLIF852fvIA5jeUi6bVYs8swuCPUCRWdRxWp0sr5Q'
				alt='thor and love'
			/>
			<div className='transition duration-400 opacity-0 flex flex-col justify-between inset-0 absolute bg-gray-900/60 py-2 px-2'>
				<p className='year text-sm text-yellow-400 pt-1 font-medium'>2022</p>
				<div className='foot transition duration-300 flex flex-col gap-1.5 translate-y-11'>
					<p className='text-sm font-normal text-yellow-500'>Movie</p>
					<p className='text-sm text-white font-bold pb-1'>
						Thor Love and Thunder
					</p>
				</div>
			</div>
		</div>
	);
}

export default Movie;
