import './index.css'

const CountryVisited = props => {
  const {countryListItems, onClickButton} = props
  const {name, isVisited, id} = countryListItems

  const className = isVisited ? 'Visited' : 'Visit'

  const onClickVisitButton = () => {
    onClickButton(id)
  }

  return (
    <li className="list-item">
      <p className="country-name">{name}</p>
      {isVisited === true ? (
        <p className="visit-text">{className}</p>
      ) : (
        <button
          onClick={onClickVisitButton}
          className="visit-button"
          type="button"
        >
          {className}
        </button>
      )}
    </li>
  )
}

export default CountryVisited
