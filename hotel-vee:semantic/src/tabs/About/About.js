import React, {Component} from 'react';
import './About.css'


class About extends Component {
  render(){
    return(
      <div class="About">
 <header>
        <nav id="navbar">
            <div class="container">
                <h1 class="logo">HotelVRB</h1>
                <ul>
                    <li><a href="Home.js">Home</a></li>
                    <li><a class="current" href="About.js">About</a></li>
                    <li><a href="Contact.js">Contact</a></li>
                </ul>
            </div>
        </nav>
    </header>
   
    <section id="about">
        <div id="abt-img"></div>
        <div id="abt-content">
            <h1>Did you know?</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laborum perspiciatis facilis reiciendis aliquam consequatur est atque iusto ipsum minima ratione, nostrum itaque omnis. Delectus fugit veritatis mollitia commodi eligendi esse in at ab quos.</p>
        </div>
        <div class="bodiv">
        <div class="boxes fun">
            <h3>Live Music</h3>
            <i class="fas fa-music fa-5x"></i>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, magnam!</p>
        </div>
        <div class="boxes attractions">
            <h3>Spa</h3>
            <i class="fas fa-bath fa-5x"></i>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, iste?
            </p>
            </div>
            <div class="boxes attractions">
                <h3>Happy Hour</h3>
                <i class="fas fa-cocktail fa-5x"></i>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, ipsam!
                </p>
                </div>
            </div>
    </section>
   

    <section id="tribute" class="bg">
        <div id="tribcontainer">
        <div class="img1"></div>
            <p>"...Lorem ipsum dolor sit, amet consectetur adipisicing elit. At officia vel nesciunt et possimus ut."
                <br/>
                <br/>
                <span class="name">~K.Clarkson</span></p>
        </div>
    </section>
    <section id="tribute2" class="bg">
        <div id="trib2container">
        <div class="img2"></div>
            <p>
                "...Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, eos possimus. Id sed incidunt cum!"
                <br/>
                <br/>
                <span class="name">~O. Winfrey</span></p>
        </div>
       
    </section>
    <section id="tribute3" class="bg">
        <div id="trib3container">
        <div class="img3"></div>
            <p>
                "...Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non dolor alias amet eaque quae harum."
                <br/>
                <br/>
                <span class="name">~B. Pitt</span></p>
        </div>
    </section>

    <div class="clr"></div>
    <footer id="main-footer">
        
        <div class="right-col">
            <h1><span>Our</span> Newsletter</h1>
            <div class="border"></div>
            <p>Enter your email to stay updated</p>
            <form action="" class="news-form">
                <input type="text" class="txtb" placeholder="Enter Your Email"/>
                <input type="submit" id="btn" value="submit"/>
            </form>

        </div>


        <p>VRB &copy; 2020, All Rights Reserved</p>
    </footer>
    </div>
    );
  }
}



export default About