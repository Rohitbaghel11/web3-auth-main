import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import { IoMdSearch } from "react-icons/io";

const SearchBar = ({ onSearch }:any) => {
	const [searchTerm, setSearchTerm] = useState("");

	const handleSearch = (event: { preventDefault: () => void; }) => {
		event.preventDefault();
		onSearch(searchTerm);
	};

	const handleChange = (event: { target: { value: React.SetStateAction<string>; } }) => {
		setSearchTerm(event.target.value);
	};

    return (
		<div className='w-[564.96px] border border-red-600 h-[48px] rounded-xl flex justify-center ml-2.5 items-center'>
			<div className=' w-full m-[5px] flex gap-2 items-center'>
				<IoMdSearch className='text-black' />
				<TextField
					value={searchTerm}
					onChange={handleChange}
                    className="border-none w-full outline-none rounde-[12px]"
				/>
			</div>
		</div>
	);
};

export default SearchBar;
