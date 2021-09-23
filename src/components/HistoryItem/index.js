import './index.css'

const HistoryItem = props => {
  const {historyItem, deleteHistoryItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyItem

  const onClickdelete = () => {
    deleteHistoryItem(id)
  }

  return (
    <li className="item-container">
      <p className="access-time">{timeAccessed}</p>
      <div className="domain-item-container">
        <div className="domain-logo-title-container">
          <img src={logoUrl} alt="domain logo" className="domain-logo" />
          <div className="title-domain-url">
            <p className="title">{title}</p>
            <p className="domain-url">{domainUrl}</p>
          </div>
        </div>
        <button
          testid="delete"
          className="delete-button"
          type="button"
          onClick={onClickdelete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default HistoryItem
