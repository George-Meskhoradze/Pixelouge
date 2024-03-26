import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram, FaLinkedin } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";


export default function Footer() {
  return (
    <>
    <footer className='footer'>
        <h1>
            საჭიროების შემთხვევაში დაგვიკავშირდით
        </h1>
        <div className="container">
            <div><FaFacebookSquare size='2rem' color='white' /></div>
            <div><FaSquareInstagram size='2rem' color='white' /></div>
            <div><FaLinkedin size='2rem' color='white' /></div>
            <div><IoIosMail size='2rem' color='white' /></div>
        </div>
    </footer>
    </>
  )
}
