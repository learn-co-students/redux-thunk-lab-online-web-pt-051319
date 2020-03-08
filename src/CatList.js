import React from 'react'

const CatList = (props) => {
    const renderCats = props.catPics.map(cat => <img src={cat.url} />)
    return (
        <div>
            {renderCats}
        </div>
    )

}

export default CatList