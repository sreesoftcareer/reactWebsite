import React  from "react";
import { MenuBtn } from "./MenuBtn";
import './Home.css'
import { Link } from "react-router-dom";
import { ImageGallery } from "./ImageGallery";
import  AboutImg from "../image/Gallery (7).jpg"
import { ContactInfo } from "./ContactInfo";
import ContactImg from "../image/drink (1).jpg"


function Home(){
    return(
        <div className="home-page">
           <header className=" h-100 min-vh-100 d-flex align-items-center text-light shadow">
            <div className="container">
            <div className="row">
                <div className="col-sm-6"></div>
            <div className="col-sm-6 d-flex d-sm-bock flex-column align-items-center">
             <h2 className="mb-0 text-black fw-bold">Welcome To</h2>
<h1 className="mb-5 text-black fw-bold text-center text-sm-start">Nayanitha <br/> Restaurant</h1>
         <MenuBtn/>
            </div>
                </div>
            </div>
           </header>

           {/* About  */}
           <div className="container my-5">
            <div className="row">
            <div className="col-lg-6 d-flex justify-content-center d-none d-lg-flex">
                <img src={AboutImg} alt="about img/" className="img-fluid w-50" />
            </div>
            <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center">
                <h2 className="fs-1 mb-5 text-uppercase fw-bold">About Us</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic voluptatum expedita dolor natus illo vero dolorum vel iure eum aspernatur recusandae incidunt ipsum, magni velit beatae tenetur inventore. Deserunt, nesciunt!</p>
                <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis nihil modi ipsum deserunt harum distinctio iste qui cupiditate a iure dolore, consectetur cumque libero, suscipit fugiat, esse beatae. Vel, impedit.</p>
                <Link to="/about">
                    <button type='button' className="btn btn-outline-success btn-lg">More About Us</button>
                </Link>
            </div>
            </div>
           </div>

           {/* Menu list */}
           <div className="menu-section my-5 text-light shadow">
            <div className="container d-flex flex-column align-items-center">
                <h2 className="fs-1 my-5 text-uppercase fw-bold">Our Favorites</h2>
                <div className="row mb-5 w-100">
                <div className="col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0">
                <h3 className="fs-2 mb-5">Food</h3>
                <ul className="px-0">
                <li className="d-flex justify-content-between"><p className="fs-3 mx-2">English Breakfast</p><p className="fs-3 mx-2 text-success fw-nold">Rs:250</p></li>

                <li className="d-flex justify-content-between"><p className="fs-3 mx-2">Spicy Food</p><p className="fs-3 mx-2 text-success fw-nold">Rs:180</p></li>

                <li className="d-flex justify-content-between"><p className="fs-3 mx-2">Meals</p><p className="fs-3 mx-2 text-success fw-nold">Rs:300</p></li>
                </ul>
                </div>
                <div className="col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0">
                <h3 className="fs-2 mb-5">Drinks</h3>
                <ul className="px-0">
                <li className="d-flex justify-content-between"><p className="fs-3 mx-2">Coffee</p><p className="fs-3 mx-2 text-success fw-nold">Rs:50</p></li>

                <li className="d-flex justify-content-between"><p className="fs-3 mx-2">Ice Cream</p><p className="fs-3 mx-2 text-success fw-nold">Rs:80</p></li>

                <li className="d-flex justify-content-between"><p className="fs-3 mx-2">Juice</p><p className="fs-3 mx-2 text-success fw-nold">Rs:60</p></li>
                </ul>
                </div>
                </div>
               <MenuBtn/>
            </div>
           </div>
           <ImageGallery/>
{/* contactInfo */}
<div className="bg-dark text-light py-5 shadow">
    <div className="container">
        <div className="row">
            <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center mb-5 mb-lg-0">
                <ContactInfo/>
            </div>
            <div className="col-lg-6 d-flex justify-content-center">
                <img src={ContactImg} alt="" className="img-fluid w-50" />
            </div>
        </div>
    </div>
</div>
        </div>
    )
}

export default Home ;