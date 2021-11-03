import { getSuggestedQuery } from '@testing-library/dom';
import React, {useState} from 'react'
import SearchBar from "material-ui-search-bar";
import IconButton from '@mui/material/IconButton';
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";

const Search = ({getQuery}) => {
	const [text, setText] = useState('');
	const onChange = (q) =>{
		setText(q)
		getQuery(q)
	}
	return (
		<div className="search">
			{/* <form>
				<input type="text"
				 className='form-control' 
				 placeholder="Search characters"
			onChange ={(e) => onChange(e.target.value)}
			value={text}
			autoFocus 
				 />
			</form> */}

			 <SearchBar
				onChange ={(e) => onChange(e.target.value)}
				value={text}
				autoFocus 
				
				/>
				</div>
	)
}

export default Search;
