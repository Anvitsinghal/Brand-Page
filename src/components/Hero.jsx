import React from 'react'

function Hero() {
  return (
    <div>
      <div className="main">
        <div className="first">
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam aperiam aut ea eum quam obcaecati autem suscipit ex sint at sunt, repudiandae, impedit explicabo dolore nihil id natus sit excepturi?</p>
            <div className="butons">
                <button>shop now</button>
                <button className='category'>category</button>
            </div>
            <div className="first hi">
                Available on: Flipkart Amazon
            </div>
        </div>
        <div className="second">
        <img src="./shoes.png" alt="Shoes" />
        </div>
      </div>
    </div>
  )
}

export default Hero
