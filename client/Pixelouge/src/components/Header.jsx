import { useState } from 'react'
import '../css/index.css'

export default function Header() {

  return ( 
    <>
    <header className='header'>
        <img src="/img/logo.webp" alt="Logo" />
        <nav>
            <ul>
                <li><a href=""></a>მთავარი</li>
                <li><a href=""></a>მეორე</li>
                <li><a href=""></a>მესამე</li>
                <li><a href=""></a>მეოთხე</li>
            </ul>
        </nav>
    </header>
    </>
  )
}

