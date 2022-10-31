import React from 'react';
import { FaSearch } from "react-icons/fa";


function Search() {
	return (
		<div className='flex items-center justify-center w-full'>
			<div className='bg-white flex items-center justify-end shadow-md px-1.5 w-8/12 h-11 rounded-md'>
			<div>	
			<FaSearch / >
			</div>
				<input
					className='w-11/12 text-lg font-medium text-gray-900 outline-none placeholder:font-thin'
					type='search'
					placeholder='Search movie'
				/>
			</div>
		</div>
	);
}

export default Search;
