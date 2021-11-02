import "./Projects.scss"
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.scss"; 
import "slick-carousel/slick/slick-theme.scss";

export default function Projects() {

    
        const settings = {
          arrows: true,
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1,

          responsive: [
            {
              breakpoint: 1024,
              settings: {
                arrows: true,
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 800,
              settings: {
                arrows: true,
                dots: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: true,
                dots:true,
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        };
    

    return (
        <div>
            <div className="projects" id="projects">
                <h1 className="heading h-project">My Projects</h1>

                <div className="container">
                    <div className="video-project">
                    <div>
                        <h2> Video Projects </h2>
                            <Slider className="slider" {...settings}>
                                <div><item><iframe height="180" src="https://www.youtube.com/embed/b_dKBkZDvoA"></iframe></item></div>
                                <div><item><iframe height="180" src="https://www.youtube.com/embed/RLbmPL-5P3E"></iframe></item></div>                      
                                <div><item><iframe height="180" src="https://www.youtube.com/embed/IefvyAh6ZMg"></iframe></item></div>
                                <div><item><iframe height="180" src="https://www.youtube.com/embed/1rTEBpz5Rj0"></iframe></item></div>
                                <div><item><iframe height="180" src="https://www.youtube.com/embed/q-6hPJ59nYM"></iframe></item></div>
                                <div><item><iframe height="180" src="https://www.youtube.com/embed/244uS3eJB3o"></iframe></item></div>
                                <div><item><iframe height="180" src="https://www.youtube.com/embed/TScBAXPQDlo"></iframe></item></div>
                                <div><item><iframe height="180" src="https://www.youtube.com/embed/zWoL-1HwJlw"></iframe></item></div>
                            </Slider>
                            </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

