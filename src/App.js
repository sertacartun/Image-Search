import './App.css';
import React from 'react';
import SearchInput from './components/searchInput';
import axios from 'axios';
import ImageList from './components/imageList';
class App extends React.Component {

  constructor() {
    super()
      this.state = {
        images: [],
        page: 1,
        searchText:""
      }
  }
  
   onSearchSubmit = async (searchText)=> {
     this.setState({ searchText: searchText })
     const response = await axios.get(`https://pixabay.com/api?key=22420517-d359df8b5d01a09c536e9dab9&q=${searchText}&page=${this.state.page}`)
     this.setState({images:response.data.hits})
  }

   paginationNext= () => {
    this.setState({
      page:this.state.page+1
    })
     this.onSearchSubmit(this.state.searchText)
  }

   paginationPrevious= () => {
    if (this.state.page!==1){
        this.setState({
          page: this.state.page - 1
        })
    }
     this.onSearchSubmit(this.state.searchText)
  }
  render(){
  return (
    <div className="container">
      <h1>Image Search App</h1>
      <SearchInput onSearchSubmit={this.onSearchSubmit}></SearchInput>
      <div className="mt-2">
        <p>We found {this.state.images.length} Photos On Our Database.</p>
          <nav aria-label="...">
  <ul className="pagination">
    <li className="page-item">
      <a className="page-link"  href="#" onClick={this.paginationPrevious}>Previous</a>
    </li>
    <li className="page-item">
      <a className="page-link" href="#" onClick={this.paginationNext}>Next</a>
    </li>
  </ul>
</nav>
        </div>
      <ImageList images={this.state.images}></ImageList>
    </div>
  );
}
}

export default App;
