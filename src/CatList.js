import React from 'react';

class CatList extends React.Component {
  Cats = () => {
    return this.props.catPics.map(cat => <img key={cat.id} src={cat.url} alt={cat.id} />)
  }

  render() {
    return (
      <div>
        {this.Cats()}
      </div>
    )
  }
}

export default CatList;