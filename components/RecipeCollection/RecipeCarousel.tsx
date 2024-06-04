import { useState, useEffect } from "react";
import './RecipeCarousel.css'
import Recipe from "@/types/recipe.d";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';
import { formatStringToUrl } from "@/app/utils/helpers/formatter";
import RecipeCardCollection from "../Shared/RecipeCardForCollection";
import 'pure-react-carousel/dist/react-carousel.es.css';
import '../../styles/carousel.css'
import '../../styles/buttons.css'
import Link from "next/link";

interface RecipeCarouslProps {
    visibleSlides: number
    recipes: Recipe[]
}

function RecipeCarousel(
    { visibleSlides, recipes }: RecipeCarouslProps
) {
    return (
        <div className="carousel-container flex flex-colr md:flex-row justify-center items-center md:items-start h-[450px] w-[80%]">
            {/* ===== SELECT RECIPE COMPONENT ====== */}
            <CarouselProvider
                className="w-[100%] flex flex-col items-center relative"
                naturalSlideWidth={100}
                naturalSlideHeight={115}
                totalSlides={recipes.length}
                visibleSlides={visibleSlides}
                infinite={true}
            >
                <Slider className="h-[400px] w-[100%]">
                    {recipes.map((recipe, i) => {
                        const formattedName = formatStringToUrl(recipe.name)
                        return (
                            <Slide index={i} key={`${recipe}${recipe.id}`}>
                                <Link key={recipe.name + i} href={`/recetas/${formattedName}?recipeId=${recipe.id}`}>
                                    <RecipeCardCollection
                                        recipe={recipe}
                                    />
                                </Link>

                            </Slide>
                        )
                    })}
                </Slider>
                <DotGroup
                    className="flex justify-center h-[45px] items-center max-w-[110%] [&>*]:w-[45px] [&>*]:h-[6px] [&>*]:bg-gray-300 rounded-full"
                />
            </CarouselProvider>
        </div>
    )
}

export default RecipeCarousel