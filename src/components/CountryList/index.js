import './index.css'

const CountryList = props => {
  const {countryData, onClickDeleteButton} = props
  const {imageUrl, name, id} = countryData

  const onClickRemoveButton = () => {
    onClickDeleteButton(id)
  }

  return (
    <li className="country-list-item">
      <img className="country-image" src={imageUrl} alt="thumbnail" />
      <div className="country-name-container">
        <p className="name-of-country">{name}</p>
        <button
          type="button"
          className="remove-button"
          onClick={onClickRemoveButton}
          data-testid="delete"
        >
          Remove
        </button>
      </div>
    </li>
  )
}

export default CountryList
