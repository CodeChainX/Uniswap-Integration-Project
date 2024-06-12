import React from 'react'

//INTERNAL IMPORT
import Tick from '../SVG/Tick'

const Modal = () => {
  const setActiveState = () => {
    const changeState = false
    const store = JSON.stringify(changeState)
    const data = localStorage.setItem('active', store)
    console.log(data)
    window.location.reload()
  }
  return (
    <div>
      <div className='modal'>
        <div className='form'>
          <div className='banner'></div>
          <label className='title'>Uniswap Crypti Swap</label>
          <p className='description'>
            Welcome to Uniswap Crypti Swap a decentralized exchange, provide
            buying, selling, liqudity and earning reward.
          </p>

          <div className='benefits'>
            <span>What we offer</span>
            <ul>
              <li>
                <Tick />
                <span>Grow your project with biggest user base</span>
              </li>
              <li>
                <Tick />
                <span>
                  Provide liquidity to your project to sell in any exchange
                </span>
              </li>
            </ul>
          </div>

          <div className='modal--footer'>
            <label className='price'>
              <img className='uniswap-logo' src='uniswap.png' alt='' />
            </label>
            <button onClick={() => setActiveState()} className='upgrade-btn'>
              Start Crypti Swap
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
