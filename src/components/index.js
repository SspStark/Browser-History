import './index.css'

const HistoryList = props => {
  const {eachList, deleteHistory} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = eachList
  const deleteList = () => {
    deleteHistory(id)
  }
  return (
    <li className="history-container">
      <div className="history-details">
        <p className="time">{timeAccessed}</p>
        <div className="domain-logo-container">
          <img src={logoUrl} alt="domain logo" className="logo" />
          <div className="domain-container">
            <p className="title">{title}</p>
            <p className="domain">{domainUrl}</p>
          </div>
        </div>
      </div>
      <button
        type="button"
        className="button"
        data-testid="delete"
        onClick={deleteList}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-logo"
        />
      </button>
    </li>
  )
}

export default HistoryList
