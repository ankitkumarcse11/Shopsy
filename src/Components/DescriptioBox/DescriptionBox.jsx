import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>

      </div>
      <div className="descriptionbox-description">
        <p>An e-commerce website is an online platform where businesses showcase and sell their products or services, allowing users to browse, select, and make secure electronic transactions, providing a convenient and efficient shopping experience 
        from the comfort of their devices.</p>
        <p>An e-commerce website serves as a virtual marketplace, enabling businesses to showcase and sell products or services online. Users can explore a wide range of offerings, make purchases, and experience the convenience of doorstep delivery, enhancing the traditional shopping process through 
         digital accessibility.</p>
      </div>
    </div>
  )
}

export default DescriptionBox
