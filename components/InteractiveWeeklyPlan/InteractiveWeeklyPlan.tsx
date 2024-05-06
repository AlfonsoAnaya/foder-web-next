'use client'
import { useState, useEffect } from "react";
import CardSelected from "./CardSelected";
import './InteractiveWeeklyPlan.css'
import Recipe from "@/types/recipe.d";
import InteractivePlan from "@/app/utils/InteractivePlan";
import ModalInteractivePlan from "./ModalInteractivePlan";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import '../../styles/carousel.css'

const InteractiveWeeklyPlan = () => {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [recipeOptions, setRecipeOptions] = useState<Recipe[]>([]);
    const [modalDay, setModalDay] = useState("");
    const [visibleSlides, setVisibleSlides] = useState(7)
    const [selectedOptions, setSelectedOptions] = useState(() => {
        const storedSelection = localStorage.getItem("interactivePlanSelection");
        return storedSelection ? JSON.parse(storedSelection) : {
            Lunes: 0,
            Martes: 0,
            Miércoles: 0,
            Jueves: 0,
            Viernes: 0,
            Sábado: 0,
            Domingo: 0,
        };
    });

    function handleClickOutside(e: any) {
        if (e.target === e.currentTarget) {
            setIsModalVisible(false);
        }
    }

    function toggleModal() {
        setIsModalVisible((prevState) => !prevState);
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 1350) setVisibleSlides(6);
            if (window.innerWidth <= 1100) setVisibleSlides(5);
            if (window.innerWidth <= 900) setVisibleSlides(4);
            if (window.innerWidth <= 700) setVisibleSlides(3);
            if (window.innerWidth <= 500) setVisibleSlides(2);
            if (window.innerWidth <= 400) setVisibleSlides(1);
            if (window.innerWidth >= 1350) setVisibleSlides(7);
        };

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);


        handleResize();

        // Cleanup event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    return (
        <div className="w-[100%] flex flex-col items-center overflow-hidden">
            <div className="flex justify-center items-center align-center p-8">
                <h2 className="text-primary text-[2rem] font-[600]">Arma tu propio plan</h2>
            </div>


            <div className="carousel-container flex flex-colr md:flex-row justify-center items-center md:items-start min-h-[60vh] max-w-[1400px] w-[90%]">
                {/* ===== SELECT RECIPE COMPONENT ====== */}
                <CarouselProvider
                    className="w-[100%] flex flex-col items-center relative"
                    naturalSlideWidth={100}
                    naturalSlideHeight={115}
                    totalSlides={7}
                    visibleSlides={visibleSlides}
                    infinite={true}
                >
                    <Slider className="h-[65vh] md:h-[330px] w-[100%]">
                        {InteractivePlan.map((day, i) => {
                            return (
                                <Slide index={i} key={`${day}${i}`}>
                                    <CardSelected
                                        toggleModal={toggleModal}
                                        day={InteractivePlan[i]}
                                        setRecipeOptions={setRecipeOptions}
                                        setModalDay={setModalDay}
                                        selectedOptions={selectedOptions}
                                    />
                                </Slide>
                            )
                        })}
                    </Slider>

                    {visibleSlides < 7 ?
                        <>
                            <ButtonBack className="hidden md:flex hidden-content absolute justify-center items-center left-[10px] top-[175px] --translate-y-[-50%] w-[50px] h-[50px] rounded-full bg-dark">
                                <svg width="26" height="26" viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className="fill-white" d="M15.4894 2.56853L13.2179 0.29703L0.51288 13.002L13.2179 25.707L15.4894 23.4355L5.05588 13.002L15.4894 2.56853H15.4894Z" />
                                </svg>
                            </ButtonBack>
                            <ButtonNext className="hidden md:flex hidden-content absolute justify-center items-center top-[175px] --translate-y-[-50%] right-[10px] w-[50px] h-[50px] rounded-full bg-dark">
                                <svg width="26" height="26" viewBox="0 0 11 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className="fill-white" d="M0.510651 23.4315L2.78215 25.703L15.4872 12.998L2.78215 0.292969L0.510651 2.56447L10.9442 12.998L0.510651 23.4315H0.510651Z" fill="black" />
                                </svg>
                            </ButtonNext>
                            <DotGroup
                                className="flex justify-center gap-[2px] h-[45px] items-center max-w-[95%] [&>*]:w-[45px] [&>*]:h-[6px] md:[&>*]:border-y-grayLight [&>*]:bg-dark [&>*]:rounded-sm"
                            />
                        </>
                        : ''}

                </CarouselProvider>
            </div>
            {isModalVisible ?
                <ModalInteractivePlan
                    key={`modal`}
                    toggleModal={toggleModal}
                    handleClickOutside={handleClickOutside}
                    recipeOptions={recipeOptions}
                    day={modalDay}
                    selectedOptions={selectedOptions}
                    setSelectedOptions={setSelectedOptions}
                />
                : ''
            }
        </div>

    )
}

export default InteractiveWeeklyPlan