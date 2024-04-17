import Recipe from "@/types/recipe.d";
import Image from "next/image";
import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import '../../styles/carousel.css';

function WeeklyPlanCard(
  { recipeArray, handleNavClick, Weekdays }: { recipeArray: Recipe[], handleNavClick: any, Weekdays: string[] }
) {

  return (
    <div className="w-[100%] h-[auto] flex flex-col gap-0 md:gap-6 bg-gray-200 hover:shadow-lg rounded-[5px] md:rounded-none">
      <div className="w-[100%]">
        <CarouselProvider
          className="flex flex-col w-[100%] max-[350px]:max-h-[300px] max-h-[350px] items-center relative"
          naturalSlideWidth={100}
          naturalSlideHeight={125}
          totalSlides={recipeArray.length}
          visibleSlides={1}
          infinite={true}
          isPlaying={true}
          interval={3000}
        >
          <Slider className="w-[100%]">
            {recipeArray.map((recipe, i) => {
              return (
                <Slide index={i} key={recipe.name + i}>
                  <Image
                    className="block object-cover object-center w-[100%] max-[350px]:max-h-[300px] max-h-[350px] rounded-t-[5px] md:rounded-t-[0px]"
                    src={`/images/recipes/${recipe.img}`}
                    // alt={recipe.imgAlt} 
                    alt="un plato de comida"
                    width={666}
                    height={848}
                  />
                </Slide>
              )
            })}
          </Slider>
          <DotGroup 
            className="absolute bottom-[5px] w-[auto] flex justify-center items-center gap-2 px-[8px] py-[4px] rounded-full bg-tertiary [&>*]:w-[6px] [&>*]:h-[6px] [&>*]:bg-dark [&>*]:rounded-full"
          />
        </CarouselProvider>
      </div>

      {/* Recipe List */}
      <div className="flex flex-col md:gap-2 h-[40%] min-h-[250px] md:h-[100%] justify-between md:justify-center p-3 md:px-0 text-[.95rem] md:text-[1.25rem] items-start text-primary font-[500] md:font-[600]">
        {recipeArray.map((recipe, i: number) => {
          return (
            <h3
              className="underline underline-offset-2 decoration-[2px]"
              key={"recipeName" + i}
              onClick={() => handleNavClick(recipe, Weekdays[i])}
            >
              {recipe.name}
            </h3>
          )
        })}
      </div>

    </div>
  );
}

export default WeeklyPlanCard;