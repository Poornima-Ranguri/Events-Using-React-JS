import './index.css'

const EventItem = props => {
  const {eachEvent, clickEvent} = props
  const {id, imageUrl, name, location} = eachEvent

  const eventClicks = () => {
    clickEvent(id)
  }

  return (
    <li className="event-item-container" key={id}>
      <button type="button" className="btn-image" onClick={eventClicks}>
        <img src={imageUrl} alt={name} className="image-event" />
      </button>

      <h1 className="heading">{name}</h1>
      <p className="paragraph">{location}</p>
    </li>
  )
}

export default EventItem
