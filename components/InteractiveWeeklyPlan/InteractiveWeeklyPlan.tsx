'use client'
import { useState } from "react";
import CardSelected from "./CardSelected";
import './InteractiveWeeklyPlan.css'
import Recipe from "@/types/recipe.d";
import InteractivePlan from "@/app/utils/InteractivePlan";
import ModalInteractivePlan from "./ModalInteractivePlan";
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const InteractiveWeeklyPlan = () => {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [recipeOptions, setRecipeOptions] = useState<Recipe[]>([]);
    const [modalDay, setModalDay] = useState("");
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

    
    return (
        <div className="w-[100%] flex flex-col items-center ">
            <div className="flex justify-center items-center align-center p-8">
                <h2 className="text-primary text-[2rem] font-[600]">Arma tu propio plan</h2>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center md:items-start min-h-[60vh] max-w-[1400px] w-[95%]">
                {/* ===== SELECT RECIPE COMPONENT ====== */}
                <CarouselProvider
                    className="w-[100%] flex flex-col items-center relative"
                    naturalSlideWidth={100}
                    naturalSlideHeight={225}
                    totalSlides={7}
                    visibleSlides={7}
                >
                    <Slider className="h-[550px] md:h-[330px] w-[100%]">
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