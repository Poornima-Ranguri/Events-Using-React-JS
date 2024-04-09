import {Component} from 'react'
import EventItem from '../EventItem'
import './index.css'

const eventsList = [
  {
    id: 'f9bb2373-b80e-46b8-8219-f07217b9f3ce',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/event-canada-dance-festival-img.png',
    name: 'Canada Dance Festival',
    location: 'Canada, America',
    registrationStatus: 'YET_TO_REGISTER',
  },
  {
    id: 'c0040497-e9cb-4873-baa9-ef5b994abfff',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/events-kathakali-img.png',
    name: 'Puthanalkkal Kalavela',
    location: 'Karnataka, India',
    registrationStatus: 'REGISTERED',
  },
  {
    id: '0037d5e4-4005-4030-987b-ce41b691b92a',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/events-kuchipudi-img.png',
    name: 'Nithyopahara',
    location: 'Kerala, India',
    registrationStatus: 'REGISTRATIONS_CLOSED',
  },
  {
    id: 'c9ff08cb-610c-4382-9939-78e5e50a72b2',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/events-bharatanatyam-img.png',
    name: 'Shivam',
    location: 'Andhra Pradesh, India',
    registrationStatus: 'YET_TO_REGISTER',
  },
  {
    id: 'd1153723-5b6e-4628-9a1a-ccd8f84f1273',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/events-kolatam-img.png',
    name: 'Janapada Kolatam',
    location: 'Tamil Nadu, India',
    registrationStatus: 'REGISTERED',
  },
  {
    id: '7d6ec013-d0ae-4d84-b776-14b733a9174f',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/event-colonial-fest-img.png',
    name: 'Colonial Fest',
    location: 'Washington, America',
    registrationStatus: 'REGISTRATIONS_CLOSED',
  },
]

const apiStatusConstants = {
  initial: 'INITIAL',
  yetToRegister: 'YET_TO_REGISTER',

  registerd: 'REGISTERED',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}

class Events extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
  }

  onClickEvent = id => {
    const clickedEvent = eventsList.filter(eachEvent => eachEvent.id === id)
    this.setState({apiStatus: clickedEvent[0].registrationStatus})
    console.log(clickedEvent[0].registrationStatus)
  }

  renderNoContent = () => (
    <div className="no-content-container">
      <h1 className="no-text">
        Click on an event, to view its registration details
      </h1>
    </div>
  )

  renderYetToRegister = () => (
    <div className="register-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="image-register"
      />
      <p className="text-register">
        A live performance brings so much to your relationship with dance.Seeing
        dance live can often make you fall totally in love with this beautiful
        art form.
      </p>
      <button className="btn-register" type="button">
        Register Here
      </button>
    </div>
  )

  renderRegistered = () => (
    <div className="registered-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        className="correct-image"
        alt="registered"
      />
      <p className="text-register">You have already registered for the event</p>
    </div>
  )

  renderRegistrationClosed = () => (
    <div className="registered-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="correct-image"
      />
      <h1 className="text-closed">Registrations Are Closed Now!</h1>
      <p className="text-register">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )

  render() {
    const {apiStatus} = this.state
    let renderValue = ''
    switch (apiStatus) {
      case apiStatusConstants.registrationsClosed:
        renderValue = this.renderRegistrationClosed()
        break

      case apiStatusConstants.registerd:
        renderValue = this.renderRegistered()
        break
      case apiStatusConstants.yetToRegister:
        renderValue = this.renderYetToRegister()
        break

      default:
        renderValue = this.renderNoContent()
    }

    return (
      <div className="app-container">
        <h1>Events</h1>
        <ul className="event-list">
          {eventsList.map(eachItem => (
            <EventItem
              key={eachItem.id}
              eachEvent={eachItem}
              clickEvent={this.onClickEvent}
            />
          ))}
        </ul>
        {renderValue}
      </div>
    )
  }
}

export default Events
