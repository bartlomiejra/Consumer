/* eslint react/prop-types: 0 */


import { getSuggestedQuery } from '@testing-library/dom';
import React, {useState} from 'react'
import SearchBar from "material-ui-search-bar";
import {StyledSearchBar} from '.././components/styles/ItemsGrid.styled'





const Search = ({getQuery}) => {
	const [text, setText] = useState('');
	const onChange = (q) =>{
		setText(q)
		getQuery(q)
	}
	return (

		// <div className="search">
			// <form>
			// 	<input type="text"
			// 	//  className='form-control' 
			// 	//  placeholder="Search characters"
			// 	// value={text}
			// 	onChange ={(e) => onChange(e.value)}
			// 	autoFocus 
			// 	/>
			// </form>
			
		// </div>

		<>
			
				<StyledSearchBar  className="search"
			 value={text}
			 onChange ={(newValue) => onChange(newValue)}

				/>

</>	
				)
}

export default Search;
