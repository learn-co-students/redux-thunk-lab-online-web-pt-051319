import React from 'react';

const CatList = (props) => {
	const renderCats = props.catPics.map((cat, i) => <img src={cat.url} key={i} />)
	return (
		<React.Fragment>
			{ renderCats }
		</React.Fragment>
	)
}

export default CatList
