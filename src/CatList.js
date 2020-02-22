// write your CatList component here
import React from 'react'

export default class CatList extends React.Component {

  render() {
    const cats = this.props.catPics.map(cat => <img src={cat.url} alt="cat" />)
    return (
      <div>
        {cats}
      </div>
    )
  }
}