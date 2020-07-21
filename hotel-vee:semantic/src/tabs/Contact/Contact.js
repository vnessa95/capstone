import React, { Component } from 'react';
import './Contact.css'


class Contact extends Component {
  render() {
    return (
      <div class="Contact">

        <header>
          <nav id="navbar">
            <div class="container">
              <h1 class="logo"><span class="text-secondary"></span>HotelVRB</h1>
              <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a class="current" href="contact.html">Contact</a></li>
              </ul>
            </div>
          </nav>
        </header>

        <div id="hero-imgc">
          <section id="contact-form" class="py-3">
            <div class="container">
              <h1 class="l-heading"><span class="text-primary">Contact</span> Us</h1>
              <p>Please fill out the form below to contact us</p>
              <form action="destination.php">
                <div class="form-group">
                  <label for="name">Name</label>
                  <input type="text" name="name" id="name"/>
                    </div>
                  <div class="form-group">
                    <label for="name">Email</label>
                    <input type="text" name="Email" id="Email"/>
                    </div>
                    <div class="form-group">
                      <label for="message">Message</label>
                      <textarea name="message" id="message">   </textarea>
                    </div>
                    <button type="submit">Submit</button>
            </form>
</div>
    
    </section>
</div>

              <section class="features">
                <div class="box bg-contact">
                  <i class="fas fa-hotel fa-3x"></i>
                  <h3>Location</h3>
                  <p>123 Main Street Charlotte, NC</p>
                </div>
                <div class="box bg-contact">
                  <i class="fas fa-phone fa-3x"></i>
                  <h3>Phone Number</h3>
                  <p>(704) 123-4567</p>
                </div>
                <div class="box bg-contact">
                  <i class="fas fa-envelope fa-3x"></i>
                  <h3>Email Address</h3>
                  <p>frontdesk@hotelmcs.com</p>
                </div>
              </section>
              <div class="clr"></div>
              <footer id="main-footer">

                <div class="right-col">
                  <h1><span>Our</span> Newsletter</h1>
                  <div class="border"></div>
                  <p>Enter your email to stay updated</p>
                  <form action="" class="news-form">
                    <input type="text" class="txtb" placeholder="Enter Your Email" />
                    <input type="submit" id="btn" value="submit" />
                  </form>

                </div>

                <p>VRB &copy; 2020, All Rights Reserved</p>
              </footer>
              </div>
    );
  }
}

export default Contact