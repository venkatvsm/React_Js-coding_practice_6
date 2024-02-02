// Write your code here
import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    console.log(event.target.value)
    this.setState(() => ({searchInput: event.target.value}))
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const SearchResults = destinationsList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg_container">
        <h1 className="heading">Destination Search</h1>
        <div className="SearchContainer">
          <input
            type="Search"
            placeholder="Search"
            value={searchInput}
            className="searchEl"
            onChange={this.onChangeSearchInput}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="imageEl"
          />
        </div>

        <ul className="card_container">
          {SearchResults.map(eachItem => (
            <DestinationItem destinationsList={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default DestinationSearch
