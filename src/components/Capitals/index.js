import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {activeId: countryAndCapitalsList[0].id}

  displayCountry = () => {
    const {activeId} = this.state
    const activeCountry = countryAndCapitalsList.find(
      eachList => eachList.id === activeId,
    )
    return activeCountry.country
  }

  onChangeOption = event => {
    this.setState({activeId: event.target.value})
  }

  render() {
    // eslint-disable-next-line no-unused-vars
    const {activeId} = this.state
    const country = this.displayCountry()
    return (
      <div className="bg-container">
        <div className="content-bg">
          <h1>Countries And Capitals</h1>
          <div className="select-row">
            <select onChange={this.onChangeOption}>
              {countryAndCapitalsList.map(eachCapital => (
                <option
                  key={eachCapital.id}
                  value={eachCapital.id}
                  className="option"
                >
                  {eachCapital.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="question">is capital of which country?</p>
          </div>
          <h1 className="country">{country}</h1>
        </div>
      </div>
    )
  }
}

export default Capitals
