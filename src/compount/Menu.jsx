import React  from "react";
import './Menu.css' ;
import {Card, CardBody, CardText, CardTitle} from 'react-bootstrap' ;
import BreakFastImg from '../image/Gallery (5).jpg';
import LunchImg from '../image/Gallery (1).jpg';
import DinnerImg from '../image/Gallery (8).jpg';
import DessertImg from '../image/Gallery (6).jpg'

// breakfast
const breakfast = [
    {
        id:1,
        name:'English Breakfast',
        description:'tomato,mushrooms,baked beans,eggs',
        price:'Rs:80'
    },
    {
        id:2,
        name:'English Breakfast',
        description:'tomato,mushrooms,baked beans,eggs',
        price:'Rs:80'
    },
    {
        id:3,
        name:'English Breakfast',
        description:'tomato,mushrooms,baked beans,eggs',
        price:'Rs:80'
    }
]
// lunch
const lunch = [
    {
        id:1,
        name:'English Lunch',
        description:'tomato,mushrooms,baked beans,eggs',
        price:'Rs:80'
    },
    {
        id:2,
        name:'English Lunch',
        description:'tomato,mushrooms,baked beans,eggs',
        price:'Rs:80'
    },
    {
        id:3,
        name:'English Lunch',
        description:'tomato,mushrooms,baked beans,eggs',
        price:'Rs:80'
    }
]
// Dinner
const dinner = [
    {
        id:1,
        name:'English Dinner',
        description:'tomato,mushrooms,baked beans,eggs',
        price:'Rs:80'
    },
    {
        id:2,
        name:'English Dinner',
        description:'tomato,mushrooms,baked beans,eggs',
        price:'Rs:80'
    },
    {
        id:3,
        name:'English Dinner',
        description:'tomato,mushrooms,baked beans,eggs',
        price:'Rs:80'
    }
]
// Dessert
const dessert = [
    {
        id:1,
        name:'English Dessert',
        description:'tomato,mushrooms,baked beans,eggs',
        price:'Rs:80'
    },
    {
        id:2,
        name:'English Dessert',
        description:'tomato,mushrooms,baked beans,eggs',
        price:'Rs:80'
    },
    {
        id:3,
        name:'English Dessert',
        description:'tomato,mushrooms,baked beans,eggs',
        price:'Rs:80'
    }
]

function Menu(){
    return(
        <div>
           <div className="menu-page">
            <header className="mt-5">
             <div className="container h-100 d-flex align-items-center justify-content-center">
             <h1 className="text-light">Menu</h1>
                </div>
            </header>
{/* Breakfast */}
            <div className="breakfast my-5">
            <div className="container">
            <h2 className="text-center fs-1 mb-4 mb-lg-5 text-uppercase fs-blod text-success">Breakfast</h2>
            <div className="row flex-column-reverse flex-lg-row">
            <div className="col-lg-6 d-flex justify-content-center">
            <img src={BreakFastImg} alt="" className="img-fluid w-75 mt-4 mt-lg-0" />
            </div>
            <div className="col-lg-6 d-flex flex-column justify-content-around">
            {breakfast.map((breakfast) => (
                <div key={breakfast.id}>
                <Card className="border-0">
                 <CardBody>
                    <CardTitle className="text-center fs-3">{breakfast.name}   
                        </CardTitle>
                    <CardText className="text-center fs-5">{breakfast.description}</CardText>
                    <CardText className="text-center fs-3 fw-bold text-success">{breakfast.price}</CardText>
                        </CardBody>  
                    </Card>
                 </div>   
            ))}
            </div>
            </div>
            </div>
            </div>
            {/* Lunch */}
            <div className="lunch my-5">
            <div className="container">
            <h2 className="text-center fs-1 mb-4 mb-lg-5 text-uppercase fs-blod text-success">Lunch</h2>
            <div className="row flex-column-reverse flex-lg-row">
            <div className="col-lg-6 d-flex justify-content-center">
            <img src={LunchImg} alt="" className="img-fluid w-75 mt-4 mt-lg-0" />
            </div>
            <div className="col-lg-6 d-flex flex-column justify-content-around bg-dark">
            {lunch.map((lunch) => (
                <div key={lunch.id}>
                <Card className="border-0 bg-dark text-light">
                 <CardBody>
                    <CardTitle className="text-center fs-3">{lunch.name}   
                        </CardTitle>
                    <CardText className="text-center fs-5">{lunch.description}</CardText>
                    <CardText className="text-center fs-3 fw-bold text-success">{lunch.price}</CardText>
                        </CardBody>  
                    </Card>
                 </div>   
            ))}
            </div>
            </div>
            </div>
            </div>
            {/* Dinner */}
            <div className="dinner my-5">
            <div className="container">
            <h2 className="text-center fs-1 mb-4 mb-lg-5 text-uppercase fs-blod text-success">Dinner</h2>
            <div className="row flex-column-reverse flex-lg-row">
            <div className="col-lg-6 d-flex justify-content-center">
            <img src={DinnerImg} alt="" className="img-fluid w-75 mt-4 mt-lg-0" />
            </div>
            <div className="col-lg-6 d-flex flex-column justify-content-around">
            {dinner.map((dinner) => (
                <div key={dinner.id}>
                <Card className="border-0">
                 <CardBody>
                    <CardTitle className="text-center fs-3">{dinner.name}   
                        </CardTitle>
                    <CardText className="text-center fs-5">{dinner.description}</CardText>
                    <CardText className="text-center fs-3 fw-bold text-success">{dinner.price}</CardText>
                        </CardBody>  
                    </Card>
                 </div>   
            ))}
            </div>
            </div>
            </div>
            </div>
{/* Dessert */}
<div className="dessert my-5">
            <div className="container">
            <h2 className="text-center fs-1 mb-4 mb-lg-5 text-uppercase fs-blod text-success">Dessert</h2>
            <div className="row flex-column-reverse flex-lg-row">
            <div className="col-lg-6 d-flex justify-content-center">
            <img src={DessertImg} alt="" className="img-fluid w-75 mt-4 mt-lg-0" />
            </div>
            <div className="col-lg-6 d-flex flex-column justify-content-around bg-dark">
            {dessert.map((dessert) => (
                <div key={dessert.id}>
                <Card className="border-0 bg-dark text-light">
                 <CardBody>
                    <CardTitle className="text-center fs-3">{dessert.name}   
                        </CardTitle>
                    <CardText className="text-center fs-5">{dessert.description}</CardText>
                    <CardText className="text-center fs-3 fw-bold text-success">{dessert.price}</CardText>
                        </CardBody>  
                    </Card>
                 </div>   
            ))}
            </div>
            </div>
            </div>
            </div>

           </div>
           
        </div>
    )
}

export default Menu ;