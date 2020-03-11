// write your CatList component here
import React from 'react'

class CatList extends React.Component {

    returnCats = () => {
        return this.props.catPics.map((cat, idx) => <img src={cat.url} key={idx} alt="a cat"/>)
    }
    render() {
        return <div>{this.returnCats()}</div>
    }
}

export default CatList