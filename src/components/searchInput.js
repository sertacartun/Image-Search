import React from 'react'

class SearchInput extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            searchText:""
        }
    }
    onInputChange = (event) => {
        this.setState({
            searchText: event.target.value
        })
        
    }

    onFormSubmit = (e) => {
        e.preventDefault()
        this.props.onSearchSubmit(this.state.searchText)
    }
    render() {
        return (
            <form onSubmit={this.onFormSubmit}> 
                <div className="form-group d-flex">
                    <input className="form-control" placeholder="Search a gif" type="text" onChange={this.onInputChange} value={this.state.searchText}></input>
                    <button className="btn btn-success m-2">Search</button>
                </div>
</form>
        )
    }
}

export default SearchInput;