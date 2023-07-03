import './index.css'

const Country = props => {
  const {countryDetails, onClickChangeIsVisited} = props
  const {id, name, isVisited} = countryDetails

  const onClickVisitButton = () => {
    onClickChangeIsVisited(id)
  }

  return (
    <li className="list-item">
      <p className="country-name">{name}</p>
      {isVisited ? (
        <p className="visited">Visited</p>
      ) : (
        <button
          type="button"
          className="visit-button"
          onClick={onClickVisitButton}
        >
          Visit
        </button>
      )}
    </li>
  )
}

export default Country
