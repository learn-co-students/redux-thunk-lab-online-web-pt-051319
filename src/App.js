import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchCats } from './actions/catActions'
import CatList from './CatList'

class App extends Component {
  
  state = {
    cats: []
  }
  
  componentDidMount() {
    console.log(this.props)
    this.props.fetchCats()
  }

  handleLoading = () => {
    if(this.props.loading) {
      return <div>Loading...</div>
    } else {
      return <CatList catPics={this.props.catPics} />
    }
  }

  render() {
    console.log(this.props.catPics)
    return (
      <div>
        <h1>CatBook</h1>
        {/* add CatList component here */}
        {this.handleLoading()}
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     catPics: state.cats,
//     loading: state.loading
//   }
// }

const mapDispatchToProps = state => {
  return {
    catPics: state.cats,
    loading: state.loading
  }
}

export default connect(mapDispatchToProps, { fetchCats })(App)

