import React from "react";
import { ThemeColor } from "../ThemeColor";

const StarStyles: React.FC = () => {
    return <style>
        {`
            @keyframes animateStars {
                0% {
                    transform: translateX(100px);
                }
                20% {
                    transform: translateX(1200px);
                }
                25% {
                    transform: translate(1200px, 100px);
                }
                45% {
                    transform: translate(1200px, 550px);
                }
                50% {
                    transform: translate(1200px, 550px);
                }
                70% {
                    transform: translate(100px, 550px);
                }
                75% {
                    transform: translate(100px, 550px);
                }
                95% {
                    transform: translate(100px);
                }
                100% {
                    transform: translate(100px);
                }
            }

            .star {
                display: block;
                width: 10px;
                height: 10px;
                position: absolute;
                top: 100px;
                left: 100px;
                background: ${ThemeColor.BLACK_2D};
                box-shadow: 0 0 0.5rem ${ThemeColor.BLACK_0000008C};
            }

            .star1 {
                animation: animateStars 10s infinite linear 1.8s;
            }

            .star2 {
                animation: animateStars 10s infinite linear 1.6s;
            }

            .star3 {
                animation: animateStars 10s infinite linear 1.4s;
            }

            .star4 {
                animation: animateStars 10s infinite linear 1.2s;
            }

            .star5 {
                animation: animateStars 10s infinite linear 1s;
            }

            .star6 {
                animation: animateStars 10s infinite linear 0.8s;
            }

            .star7 {
                animation: animateStars 10s infinite linear 0.6s;
            }

            .star8 {
                animation: animateStars 10s infinite linear 0.4s;
            }

            .star9 {
                animation: animateStars 10s infinite linear 0.2s;
            }

            .star10 {
                animation: animateStars 10s infinite linear 0s;
            }
        `}
    </style>;
}

export const StarAnimation: React.FC = () => {
    return <>
        <StarStyles />
        <div className="star star1"></div>  
        <div className="star star2"></div>  
        <div className="star star3"></div>  
        <div className="star star4"></div>  
        <div className="star star5"></div>  
        <div className="star star6"></div>  
        <div className="star star7"></div>  
        <div className="star star8"></div>
        <div className="star star9"></div>  
        <div className="star star10"></div> 
    </>;
}