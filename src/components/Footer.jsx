import React from 'react'

function Footer() {
  return (
    <>
    <div id='fout'>
        <div id='footer'>
          <div className="footin4">
            <h5>GET IN TOUCH</h5>
            <p style={{textAlign:"justify"}}>
                <b>Address: </b><br />
                Peredrift, <br />65 West 54th Street, <br />New York, NY 10019
            </p>
            <p style={{textAlign:"justify"}}>
                <b>Support Phone: </b><br />
                2120115558
            </p>
            <p style={{textAlign:"justify"}}>
                <b>Email:info@voyagevista.com </b>
            </p>
          </div>
          <div className="footin4">
            <h5 id='infohead'>ABOUT US</h5>
            <ul id='list'>
              <li>How it Works</li>
              <li>Start Planning</li>
              <li>About Us</li>
              <li>Trip Inspiration</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="footin4">
            <h5 id='infohead'>FROM THE BLOG</h5>
            <ul id='list'>
              <li>Traveling Guides</li>
              <li>Planning Your Trip</li>
              <li>Product Guides</li>
              <li>Guest Posts</li>
              <li>Destinations</li>
              <li>Tours</li>
              <li>Webinars</li>

            </ul>
          </div>
          <div className="footin4"><h5>Contact Info</h5>
          <i class="fa-brands fa-whatsapp"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-facebook-f"></i>
          <i class="fa-regular fa-envelope"></i>
          <i class="fa-solid fa-location-dot"></i>
          <br />
          <br />
          
          </div>
        </div>
   </div>
    </>
  )
}

export default Footer