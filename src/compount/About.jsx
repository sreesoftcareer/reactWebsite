import React  from "react";
import  './About.css';
import AboutChef1 from '../image/chefImg (1).jpg';
import AboutChef2 from '../image/chefImg (2).jpg';
import { ImageGallery } from "./ImageGallery";
import { Review } from "./Review";



function About(){
    return(
        <div>
            <div className="about-page">
                <header className="mt-5">
                <div className="container h-100 d-flex align-items-center justify-content-center">
                <h1 className="text-light">About</h1>
                </div>
                </header>
                {/*  */}
                <div className="container my-5">
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos autem, magni doloremque excepturi itaque natus dolorum, officiis doloribus, earum nesciunt quidem tempore impedit ea quibusdam! Officia dolores laboriosam consequatur ullam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus quis autem vel nulla fuga, commodi veniam praesentium deserunt modi iusto voluptate non ut voluptatum molestiae eos nostrum minus, vero officiis.</p>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos autem, magni doloremque excepturi itaque natus dolorum, officiis doloribus, earum nesciunt quidem tempore impedit ea quibusdam! Officia dolores laboriosam consequatur ullam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus quis autem vel nulla fuga, commodi veniam praesentium deserunt modi iusto voluptate non ut voluptatum molestiae eos nostrum minus, vero officiis.</p>
             {/* img */}
             <div className="row">
            <div className="col-lg-6">
            <img src= {AboutChef1} alt="" className="img-fluid my-4 h-100 " />
            </div>
            <div className="col-lg-6">
            <img src={AboutChef2}  alt="" className="img-fluid my-4 h-100" />
            </div>
             </div>
             {/*  */}
             <p className="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ipsa molestiae ea architecto fuga laboriosam corrupti et quaerat autem voluptatibus non ducimus dicta dignissimos, modi dolorem molestias doloremque rerum. Saepe.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero similique iste quaerat quod tempore deleniti atque, animi unde porro adipisci quos soluta, officia perspiciatis odio totam autem consectetur esse! Sit.</p>
                </div>
            </div>
            {/*  */}
            <div className="text-light bg-dark">
                <ImageGallery/>
            </div>
            {/*  */}
            <div className="my-5">
            <Review/>
            </div>
        </div>
    )
}

export default About ;