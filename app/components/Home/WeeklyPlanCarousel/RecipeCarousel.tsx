'use client'

import { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { updateDay } from "@/lib/features/selectedDay";
import { updateIsSidenavOpen } from "@/lib/features/isSidenavOpen";
import RecipeCard from "../../Shared/RecipeCard";
import Recipe from "@/app/types/recipe.d";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';
import Link from "next/link";
import Weekdays from "@/app/utils/Weekdays";
import '../../../styles/carousel.css';

interface CarouselProps {
  recipes: Recipe[];
}

function RecipeCarousel({ recipes }: CarouselProps) {

  const [visibleSlides, setVisibleSlides] = useState(4); // Default to 3 visible slides
  const dispatch = useDispatch();
  console.log(`dispatch is: ${dispatch}`);
  console.log(`updateDay action is: ${updateDay}`)

  useEffect(() => {
    const handleResize = () => {
      // Update the number of visible slides based on the screen width
      if (window.innerWidth <= 768) { // Adjust the breakpoint as needed
        setVisibleSlides(1); // Set to 1 slide for mobile
      } else {
        setVisibleSlides(4); // Set to 3 slides for desktop
      }
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Call handleResize once initially to set the correct number of visible slides
    handleResize();

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (

    <div className="carousel-container relative bg-white md:bg-gray-100">
      <Link href={`/plan-semanal`}>
        <h3 className="flex justify-center text-[2rem]  text-dark hover:text-secondary font-[600] pt-4 pb-8 md:py-8 bg-dark-10 underline decoration-secondary">
          El plan de esta semana
        </h3>
      </Link>

      <CarouselProvider
        className="flex flex-col items-center"
        naturalSlideWidth={200}
        naturalSlideHeight={300}
        totalSlides={recipes.length}
        visibleSlides={visibleSlides}
        infinite={true}>
        <Slider className="h-[550px] md:h-[430px] w-[100%] md:w-[95%] max-w-[1300px]">
          {recipes.map((recipe, i) => {
            return (
              <Slide index={i} key={recipe.name + i}
                onClick={() => {
                  dispatch(updateDay(i));
                  dispatch(updateIsSidenavOpen(true));
                }}>
                <Link
                  href={`/plan-semanal`}

                // state={{ day: i, openSidenav: true }}
                >
                  <RecipeCard
                    recipe={recipe}
                    extraInfo={Weekdays[i]}
                  />
                </Link>
              </Slide>
            )
          })}
        </Slider>

        <ButtonBack className="hidden md:flex hidden-content absolute justify-center items-center left-[10px] top-[50%] w-[50px] h-[50px] rounded-full bg-dark">
          <svg width="26" height="26" viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="fill-white" d="M15.4894 2.56853L13.2179 0.29703L0.51288 13.002L13.2179 25.707L15.4894 23.4355L5.05588 13.002L15.4894 2.56853H15.4894Z" />
          </svg>
        </ButtonBack>
        <ButtonNext className="hidden md:flex hidden-content absolute justify-center items-center top-[50%] right-[10px] w-[50px] h-[50px] rounded-full bg-dark">
          <svg width="26" height="26" viewBox="0 0 11 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="fill-white" d="M0.510651 23.4315L2.78215 25.703L15.4872 12.998L2.78215 0.292969L0.510651 2.56447L10.9442 12.998L0.510651 23.4315H0.510651Z" fill="black" />
          </svg>
        </ButtonNext>
        <DotGroup
          className="flex justify-center gap-[2px] pb-10 [&>*]:w-[45px] [&>*]:h-[19px] [&>*]:border-y-[8px] [&>*]:border-y-white md:[&>*]:border-y-grayLight [&>*]:bg-dark [&>*]:rounded-sm"
        />
      </CarouselProvider>

    </div>
  );
}

export default RecipeCarousel;