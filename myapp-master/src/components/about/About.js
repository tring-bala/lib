import React from 'react'
import Navigation from '../navigation/nav'
import './about.css'
import user1 from '../images/user1.png'


class About extends React.Component {
  render() {
    let userdetail = localStorage.getItem('email')
    userdetail = JSON.parse(userdetail)
    return (
      <div className='wrapper'>
        <Navigation />
        <div className='container_about'>
          <div className='profile-head'>
            <img src={user1} alt='lamp' className='profile-img' />
          </div>

          <div className='user-detail'>
            <p>
              <label className='userlabel'>User Id: </label>
              <span className='userinfo'>{userdetail.logdata.userId}</span>
            </p>
            <p>
              <label className='userlabel'>User Name: </label>
              <span className='userinfo'>{userdetail.logdata.username}</span>
            </p>
            <p>
              <label className='userlabel'>Email: </label>
              <span className='userinfo'>{userdetail.logdata.email}</span>
            </p>
            <p>
              <label className='userlabel'>Phone Number: </label>
              <span className='userinfo'>{userdetail.logdata.phoneNumber}</span>
            </p>
            <p>
              <label className='userlabel'>Fine:</label>
              <span className='userinfo'>{userdetail.logdata.fine}</span>
            </p>
          </div>
        </div>
      </div>
    )
  }
}
export default About
