import './index.css'

const VisitedCountry = props => {
  const {countryDetails, onRemoveVisitedCountry} = props
  const {id, name, imageUrl} = countryDetails

  const onClickRemove = () => {
    onRemoveVisitedCountry(id)
  }

  return (
    <li className="visited-country-item">
      <img src={imageUrl} alt="thumbnail" className="thumbnail" />
      <div className="name-remove-container">
        <p className="country-name">{name}</p>
        <button type="button" className="remove-button" onClick={onClickRemove}>
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedCountry
