import React from 'react' ;
import Gallery1 from '../image/Gallery (1).jpg'
import Gallery2 from '../image/Gallery (2).jpg'
import Gallery3 from '../image/Gallery (3).jpg'
import Gallery4 from '../image/Gallery (4).jpg'
import Gallery5 from '../image/Gallery (5).jpg'
import Gallery6 from '../image/Gallery (6).jpg'



export function ImageGallery(){
    return(
        <div className="container py-5">
        <h2 className="text-center fs-1 mb-5 text-uppercase fw-bold">Image Gallery</h2>
         <div className="row">
            <div className="col-md-4 px-2">
                <div className="my-3">
                 <img src={Gallery1} alt="" className="img-fliid w-100" />
                </div>
                 <div className="my-3">
                 <img src={Gallery3} alt="" className="img-fliid w-100" />
                </div>
                </div>

                 <div className="col-md-4 px-2">
                <div className="my-3">
                 <img src={Gallery5} alt="" className="img-fliid w-100" />
                </div>
                 <div className="my-3">
                 <img src={Gallery4} alt="" className="img-fliid w-100" />
                </div>
                </div>

                 <div className="col-md-4 px-2">
                <div className="my-3">
                 <img src={Gallery2} alt="" className="img-fliid w-100" />
                </div>
                 <div className="my-3">
                 <img src={Gallery6} alt="" className="img-fliid w-100" />
                </div>
                </div>
           
                </div>   
         </div>
    )
}