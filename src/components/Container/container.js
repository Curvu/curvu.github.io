import './container.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal'
import React, { useState, Button } from 'react'

import shiftAward from '../../assets/ceritificates/shiftappens_rookie_award_certificate.png'

const Container = (props) => {
  const calculateMyAge = () => {
    const myBirthday = new Date('2003-11-20')
    const today = new Date()
    const age = today.getFullYear() - myBirthday.getFullYear()
    const m = today.getMonth() - myBirthday.getMonth()
    return (m < 0 || (m === 0 && today.getDate() < myBirthday.getDate())) ? age - 1 : age
  }

  const [shift, setShift] = useState(false)
  const handleShift = () => {
    setShift(!shift)
    document.onkeydown = (e) => !(e.ctrlKey && e.key === 'p' && !shift) // Toggle print (ctrl + p)
  }

  return (
    <>
      {shift ? (
        <Modal show={handleShift} onHide={handleShift} size='lg' centered className='model'>
        <Modal.Header closeButton>
          <Modal.Title>Certificate</Modal.Title>
        </Modal.Header>
        <Modal.Body className='model-img'/>
      </Modal>
      ) : null}
      <div className='Container'>
        <div className='container-item'>
          <h2><i className='bi bi-person-circle' />About</h2>
          <p>
            I'm a {calculateMyAge()} year old student from Portugal, currently studying Computer Engineering at the University of Coimbra.
            Although I'm still in the early ages of my career, I've already completed some small projects that i really liked to do on my own that
            you can find pinned in my GitHub. As a student, I am always eager to learn and take on new challenges,
            and excited to apply my skills and knowledge to real world projects.
          </p>
        </div>
        <div className='container-item'>
          <h2><i className='bi bi-mortarboard-fill' />Education</h2>
          <div className='education-item'>
            <h3 className='bachelor'>Bachelor of Computer Science</h3>
            <div className='education-local-time'>
              <h3><i className='bi bi-geo-fill' />UC - DEI, Coimbra</h3>
              <h3><i className='bi bi-calendar3' />2021 - 2024</h3>
            </div>
            <p>
              <i className='bi bi-check2' /> Above average grades, and every class done until now.
              <br />
              <i className='bi bi-check2' /> Currently in the 2nd year of the course.
              <br />
            </p>
          </div>
        </div>
        <div className='container-item'>
          <h2><i className='bi bi-award' />achievements</h2>
          <ul className='achievements'>
            <li onClick={handleShift}><i className='bi bi-arrow-right-short point' />ShiftAppens 2022 - Rookie Award <i className='bi bi-box-arrow-up-right link' /></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Container;