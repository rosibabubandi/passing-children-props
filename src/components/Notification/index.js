import {GrFormClose} from 'react-icons/gr'

import './index.css'

const Notification = props => {
  const {children} = props
  console.log(props)

  return (
    <div className="notification-card">
      {children}
      <GrFormClose className="cancel-icon-size" />
    </div>
  )
}

export default Notification
