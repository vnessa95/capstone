import React, {Component} from 'react';
import './Home.css'


class Home extends Component {
  render(){
    return(
      <div class="Home">

      <header>
      <nav id="navbar">
          <div class="container">
              <h1 class="logo">HotelVRB</h1>
              <ul>
                  <li><a class="current" href="Home.js">Home</a></li>
                  <li><a href="About.js">About</a></li>
                  <li><a href="Contact.js">Contact</a></li>
              </ul>
          </div>
      </nav>
      <div id="showcase">
          <div class="container">
              <div class="showcase-content">
                  <h1><span class="text-primary">Enjoy</span> Your Stay!</h1>
                  <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, architecto.</p>
                  <a class="btn" href="about.html">About our Hotel</a>
              </div>
          </div>
      </div>
  </header>

  
  <section id="home-info" class="bg-dark">
  <div class="info-img"></div>
  <div class="info-content">
      <h2> <span class="text-primary">The history</span> of our hotel</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt id hic veritatis neque quae voluptatibus culpa. Nostrum, quas cum error assumenda culpa ipsum accusamus dolore, ea voluptate labore nihil veritatis consequuntur sed obcaecati! Eligendi ratione neque ullam dolores beatae voluptatum consequatur error pariatur, perspiciatis inventore perferendis labore consectetur ad, voluptates itaque a? Nam, tenetur similique.</p>
      <a class="btn btn-light" href="about.html">Read More</a>
  </div>
</section>

<section id="features">
  <div class="box bg-light">
      <h3>Great Location</h3>
      <i class="fas fa-hotel fa-5x"></i>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur, voluptates!</p>
  </div>
  <div class="box bg-primary">
      <h3>Spa</h3>
      <i class="fas fa-bath fa-5x"></i>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, eos!</p>
  </div>
  <div class="box bg-light">
      <h3>Fitness Center</h3>
      <i class="fas fa-dumbbell fa-5x"></i>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, quasi.</p>
  </div>
</section>


<div class="clr"></div>
<div id="main-footer">

  <div class="right-col">
      <h1><span>Our</span> Newsletter</h1>
      <div class="border"></div>
      <p>Enter your email to stay updated</p>
      <div action="" class="news-form">
          <input type="text" class="txtb" placeholder="Enter Your Email"/>
          <input type="submit" id="btn" value="submit"/>
          </div>

  </div>

  
  <p>VRB &copy; 2020 All rights reserved</p>
</div>
</div>
    );
  }
}

export default Home

