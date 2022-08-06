import {Component} from 'react'

import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'

import './index.css'

class AlertNotifications extends Component {
  render() {
    return (
      <div className="alert-notifications-container">
        <h1 className="heading-text">Alert Notifications</h1>
        <Notification>
          <div className="icon-text-combined-container">
            <AiFillCheckCircle className="success-icon" />
            <div className="heading-description-container">
              <h1 className="success-text">Success</h1>
              <p className="description-text">
                You can access all the files in the folder
              </p>
            </div>
          </div>
        </Notification>
        <Notification>
          <div className="icon-text-combined-container">
            <RiErrorWarningFill className="error-icon" />
            <div className="heading-description-container">
              <h1 className="error-text">Error</h1>
              <p className="description-text">
                Sorry, you are not authorized to have access to delete the file
              </p>
            </div>
          </div>
        </Notification>
        <Notification>
          <div className="icon-text-combined-container">
            <MdWarning className="warning-icon" />
            <div className="heading-description-container">
              <h1 className="warning-text">Warning</h1>
              <p className="description-text">
                Viewers of this file can see comments and suggestions
              </p>
            </div>
          </div>
        </Notification>
        <Notification>
          <div className="icon-text-combined-container">
            <MdInfo className="info-icon" />
            <div className="heading-description-container">
              <h1 className="info-text">Info</h1>
              <p className="description-text">
                Anyone on the internet can view these files
              </p>
            </div>
          </div>
        </Notification>
      </div>
    )
  }
}

export default AlertNotifications
