import React from 'react'
import '../css/index.css'
import {useTypewriter, Cursor} from "react-simple-typewriter"

export default function Section() {
  const [text] = useTypewriter({
    words: [' მე ვარ გიორგი, Full-Stack დეველოპერი', ' მიხარია რომ გვეწვიეთ!'],
    loop: {},
    typeSpeed: 100,
    delaySpeed: 100,
    deleteSpeed: 30,
  })

  return (
    <>
    <section className='section'>
      <div className="bannerSection">
        <div className='bannercontone'>
          <h1>
            გამარჯობა, 
            <span className='autotext'>
              {text}
            </span>
            <span className='cursor'>
              <Cursor/>
            </span>
          </h1>

          <p className='paragraph'>
          მოგესალმებით, ჩვენ ვართ კომპანია ფიქსელლაუჯი სადაც შეძლებთ დაამზადოთ თქვენი სურვილისამებრ ვებ-საიტები რომელებიც მორგებული იქნება თქვნს მიზნებზე და სურვილებზე,
          ჩვენთვის პრიორიტეტულია ჩვენი მომხმარებლის სურვილები და ვცდილობთ მაქსიმალურად მალე მოხერხდეს პროდუქტის დამზადება და მიწოდება.
          </p>
        </div>

        <div className='bannerconttwo'>
          <img src="/img/web.webp" alt="WebPages" />
        </div>

      </div>
    </section>
    </>
  )
}

