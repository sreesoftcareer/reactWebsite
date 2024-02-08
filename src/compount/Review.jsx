import React from "react";
import {Card , CardBody , CardText, CardTitle,CardFooter} from 'react-bootstrap';
import './Review.css';
import person1 from '../image/chefImg (1).jpg';
import person2 from '../image/chefImg (2).jpg';
import person3 from '../image/chefImg (1).jpg';
import person4 from '../image/chefImg (2).jpg';


export function Review(){
    return(
        <div className="review-page container">
        <h2 className=" text-center mb-5 text-uppercase fw-bold fs-1">Reviews</h2>
        <div className="row g-4">
        <div className="col-lg-6">
        <Card className="h-100 shadow">
        <CardBody>
        <div className="p-4">
        <CardText>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, dolorem. Sequi, deleniti. Consequuntur provident alias, error molestiae doloribus dolorem illo quis possimus quo inventore corrupti sequi necessitatibus quos ducimus deserunt.
        </CardText>
        </div>
        </CardBody>
        <CardFooter classNamed="d-flex align-items-center">
        <img src={person1} alt="" className="img-fluid rounded-circle mx-3 shadow" />
        <CardTitle className="text-success">John Mike</CardTitle>
        </CardFooter>
        </Card>
        </div>

        <div className="col-lg-6">
        <Card className="h-100 shadow">
        <CardBody>
        <div className="p-4">
        <CardText>
       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis odit accusantium fugit, praesentium quaerat reprehenderit impedit hic, ratione molestias repudiandae officia quisquam voluptates similique amet cupiditate sapiente ducimus vel sequi.
        </CardText>
        </div>
        </CardBody>
        <CardFooter classNamed="d-flex align-items-center">
        <img src={person2} alt="" className="img-fluid rounded-circle mx-3 shadow" />
        <CardTitle className="text-success"> Mike</CardTitle>
        </CardFooter>
        </Card>
        </div>

        <div className="col-lg-6">
        <Card className="h-100 shadow">
        <CardBody>
        <div className="p-4">
        <CardText>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, dolorem. Sequi, deleniti. Consequuntur provident alias, error molestiae doloribus dolorem illo quis possimus quo inventore corrupti sequi necessitatibus quos ducimus deserunt.
        </CardText>
        </div>
        </CardBody>
        <CardFooter classNamed="d-flex align-items-center">
        <img src={person3} alt="" className="img-fluid rounded-circle mx-3 shadow" />
        <CardTitle className="text-success">John Mike</CardTitle>
        </CardFooter>
        </Card>
        </div>

        <div className="col-lg-6">
        <Card className="h-100 shadow">
        <CardBody>
        <div className="p-4">
        <CardText>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, dolorem. Sequi, deleniti. Consequuntur provident alias, error molestiae doloribus dolorem illo quis possimus quo inventore corrupti sequi necessitatibus quos ducimus deserunt.
        </CardText>
        </div>
        </CardBody>
        <CardFooter classNamed="d-flex align-items-center">
        <img src={person4} alt="" className="img-fluid rounded-circle mx-3 shadow" />
        <CardTitle className="text-success">John Mike</CardTitle>
        </CardFooter>
        </Card>
        </div>
        </div>
        </div>
    )
}