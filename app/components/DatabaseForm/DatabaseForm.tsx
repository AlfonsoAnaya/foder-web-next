'use client'
import { useState } from 'react';
import RecipeCategories from '../../utils/RecipeCategories'
const { Cuisine, Difficulty, IngredientCategories , DishType, Units } = RecipeCategories;

function DatabaseForm() {

  const [formData, setFormData] = useState({
    id: 0,
    name: '',
    extraRecipeName: '',
    tagline: '',
    primaryIngredient: '',
    secondaryIngredient: '',
    portions: 0,
    difficulty: '',
    prepTime: 0,
    totalTime: 0,
    img: '',
    imgThumb: '',
    imgAlt: '',
    type: '',
    cuisine: [],
    method: [],
    tips: [],
    isVegan: false,
    hasVeganOption: false,
    isDairyFree: false,
    isVegetarian: false,
    isGlutenFree: false,
    hasGlutenFreeOption: false,
    isSpicy: false,
    isQuickAndEasy: false,
    isBudgetFriendly: false,
    isBatchCooking: false,
    isLowCarb: false,
    isHighProtein: false,
    isLowCalorie: false,
    isHeartHealthy: false,
    isMainDish: false,
    isDessert: false,
    isSideDish: false,
    isSpringDish: false,
    isSummerDish: false,
    isAutumnDish: false,
    isWinterDish: false,
    saves: 0,
  });

  const [ingredients, setIngredients] = useState([
    {
      ingredientNameSingular: '',
      ingredientNamePlural: '',
      ingredientQuantity: 0,
      ingredientUnit: '',
      ingredientCategory: '',
      ingredientClarification: '',
    },
  ]);

  const [extraIngredients, setExtraIngredients] = useState([
    {
      ingredientNameSingular: '',
      ingredientNamePlural: '',
      ingredientQuantity: 0,
      ingredientUnit: '',
      ingredientCategory: '',
      ingredientClarification: '',
    },
  ]);

  const addIngredient = () => {
    setIngredients((prevState) => [
      ...prevState,
      {
        ingredientNameSingular: '',
        ingredientNamePlural: '',
        ingredientQuantity: 0,
        ingredientUnit: '',
        ingredientCategory: '',
        ingredientClarification: '',
      }
    ])
  }

  const deleteIngredient = (index: number) => {
    let newState = [...ingredients];
    newState.splice(index, 1);
    setIngredients(newState);
  }

  const addExtraIngredient = () => {
    setExtraIngredients((prevState) => [
      ...prevState,
      {
        ingredientNameSingular: '',
        ingredientNamePlural: '',
        ingredientQuantity: 0,
        ingredientUnit: '',
        ingredientCategory: '',
        ingredientClarification: '',
      }
    ])
  }

  const deleteExtraIngredient = (index: number) => {
    let newState = [...ingredients];
    newState.splice(index, 1);
    setExtraIngredients(newState);
  }

  const handleIngredientsChange = (index: number) => (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setIngredients((prevData) => {
      return prevData.map((ingredient, i) => {
        // Update the specified object at the given index
        if (i === index) {
          return {
            ...ingredient,
            [name]: value,
          };
        }
        return ingredient;
      });
    });
  };

  const handleExtraIngredientsChange = (index: number) => (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setExtraIngredients((prevData) => {
      return prevData.map((ingredient, i) => {
        // Update the specified object at the given index
        if (i === index) {
          return {
            ...ingredient,
            [name]: value,
          };
        }
        return ingredient;
      });
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    // If the input type is radio, convert the value to a boolean
    const updatedValue = type === 'radio' ? value === 'true' : value as string | boolean;

    setFormData((prevData) => ({
      ...prevData,
      [name]: updatedValue,
    }));
  };

  const handleCuisineChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const array = [
      ...formData.cuisine,
      value
    ]
    // If the input type is radio, convert the value to a boolean

    setFormData((prevData) => ({
      ...prevData,
      [name]: array,
    }));
  };

  const handleArrayChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const array = value.split('\n');

    setFormData((prevData) => ({
      ...prevData,
      [name]: array,
    }));
  };

  const copyText = () => {
    const textContainer = document.getElementById("jsonText");
    if (textContainer) { // Check if textContainer is not null/undefined
      navigator.clipboard.writeText(textContainer.textContent || ''); // Use default empty string if textContent is undefined
    }
  }




  return (
    <div className="w-[90%] mx-auto flex gap-8 justify-center py-12 font-sans">
      <div className="flex flex-col justify-center items-center w-[55%]">
        <h2 className="text-[1.25em] self-start font-bold">Introduce la información de la receta</h2>
        <form
          className="w-[100%]"
        // onSubmit={handleSubmit}
        >

          {/* ID */}
          <div className="py-2 flex flex-row">
            <input type="number" name="id" required
              className="ml-2 p-[6px] pl-[12px] w-[70%] max-w-[500px] rounded-xl 
                  border-[1px] border-black focus:border-[#4385be] focus:outline-none focus:bg-gray-100"
              onChange={handleChange}
              placeholder='ID'
            />
          </div>

          {/* NAME */}
          <div className="py-2">
            <input type="text" name="name" required
              className="ml-2 p-[6px] pl-[12px] w-[70%] max-w-[500px] rounded-xl 
                  border-[1px] border-black focus:border-[#4385be] focus:outline-none focus:bg-gray-100"
              onChange={handleChange}
              placeholder='Name'
            />
          </div>

          {/* TAGLINE */}
          <div className="py-2">

            <input type="text-area" name="tagline" required
              className="ml-2 p-[6px] pl-[12px] w-[70%] max-w-[500px] rounded-xl 
                  border-[1px] border-black focus:border-[#4385be] focus:outline-none focus:bg-gray-100"
              onChange={handleChange}
              placeholder='Tagline - Short Description'
            />

          </div>


          {/* PRIMARY INGREDIENT */}
          <div className="py-2">

            <input type="text" name="primaryIngredient" required
              className="ml-2 p-[6px] pl-[12px] w-[70%] max-w-[500px] rounded-xl 
                  border-[1px] border-black focus:border-[#4385be] focus:outline-none focus:bg-gray-100"
              onChange={handleChange}
              placeholder='Primary Ingredient'
            />

          </div>


          {/* SECONDARY INGREDIENT */}
          <div className="py-2">

            <input type="text" name="secondaryIngredient"
              className="ml-2 p-[6px] pl-[12px] w-[70%] max-w-[500px] rounded-xl 
              border-[1px] border-black focus:border-[#4385be] focus:outline-none focus:bg-gray-100"
              onChange={handleChange}
              placeholder='Secondary Ingredient'
            />

          </div>

          {/* PORTIONS */}
          <div className="py-2">

            <input type="number" name="portions" required
              className="ml-2 p-[6px] pl-[12px] w-[70%] max-w-[500px] rounded-xl 
                  border-[1px] border-black focus:border-[#4385be] focus:outline-none focus:bg-gray-100"
              onChange={handleChange}
              placeholder='Portions'
            />

          </div>

          {/* DIFFICULTY */}
          <div className="py-2">
            <select name="difficulty" required
              defaultValue=''
              className="ml-2 p-[6px] pl-[12px] max-w-[500px] w-[70%] rounded-xl
                  border-[1px] border-black focus:border-[#4385be] focus:outline-none focus:bg-gray-100"
              onChange={handleChange}

            >
              <option value="" disabled >
                Difficulty
              </option>
              {Difficulty.map((element: string, index) => {
                return (
                  <option key={element + index} value={element}>
                    {element}
                  </option>
                )
              })}

            </select>
          </div>

          {/* PREP TIME */}
          <div className="py-2">
            <input type="number" name="prepTime" required
              className="ml-2 p-[6px] pl-[12px] w-[70%] max-w-[500px] rounded-xl 
                  border-[1px] border-black focus:border-[#4385be] focus:outline-none focus:bg-gray-100"
              onChange={handleChange}
              placeholder='Prep Time'
            />

          </div>

          {/* TOTAL TIME */}
          <div className="py-2">

            <input type="number" name="totalTime" required
              className="ml-2 p-[6px] pl-[12px] w-[70%] max-w-[500px] rounded-xl 
                  border-[1px] border-black focus:border-[#4385be] focus:outline-none focus:bg-gray-100"
              onChange={handleChange}
              placeholder='Total Time'
            />

          </div>

          {/* IMAGE */}
          <div className="py-2">

            <input type="text" name="img" disabled
              className="ml-2 p-[6px] pl-[12px] w-[70%] max-w-[500px] rounded-xl 
              border-[1px] border-gray-300 focus:border-[#4385be] focus:outline-none focus:bg-gray-100"
              onChange={handleChange}
              placeholder='Image URL (AUTOMATIC)'
            />

          </div>

          {/* IMAGE Thumb */}
          <div className="py-2">

            <input type="text" name="imgThumb" disabled
              className="ml-2 p-[6px] pl-[12px] w-[70%] max-w-[500px] rounded-xl 
              border-[1px] border-gray-300 focus:border-[#4385be] focus:outline-none focus:bg-gray-100"
              onChange={handleChange}
              placeholder='Image Thumb URL (AUTOMATIC)'
            />

          </div>

          {/* IMAGE ALT */}
          <div className="py-2">

            <input type="text" name="imgAlt"
              className="ml-2 p-[6px] pl-[12px] w-[70%] max-w-[500px] rounded-xl 
                  border-[1px] border-black focus:border-[#4385be] focus:outline-none focus:bg-gray-100"
              onChange={handleChange}
              placeholder='Image Description (OPTIONAL)'
            />

          </div>

          {/* TYPE */}
          <div className="py-2">
            <select name="type" required
              defaultValue=''
              className="ml-2 p-[6px] pl-[12px] max-w-[500px] w-[70%] rounded-xl 
                  border-[1px] border-black focus:border-[#4385be] focus:outline-none focus:bg-gray-100"
              onChange={handleChange}

            >
              <option value="" disabled>
                Dish type
              </option>
              {DishType.map((element: string, index) => {
                return (
                  <option key={element + index} value={element}>
                    {element}
                  </option>
                )
              })}
            </select>
          </div>

          {/* CUISINE */}

          <div className="py-2 my-4 flex flex-col border-b-[1px] border-b-gray-500 
          gap-2 justify-center border-t-[1px] border-t-gray-500">

            <span className="w-[30%] min-w-[155px] block">Cuisine:</span>
            <div className="flex flex-wrap">
              {Cuisine.map((element: string, index) => {
                return (
                  <div key={element + index} className="w-[33%] py-2">
                    <label>
                      <input
                        type="checkbox"
                        name="cuisine"
                        value={element}
                        onChange={handleCuisineChange}
                        className="mx-[6px] w-[15px] h-[15px]"
                      >
                      </input>
                      {element}
                    </label>
                  </div>
                )
              })}
            </div>




          </div>

          {/* A R R A Y S */}

          {/* METHOD */}
          <div className="py-2">
            <textarea
              className="px-[2px] py-[7px] pl-[12px] w-[90%] rounded-xl 
              border-[1px] border-black focus:border-[#4385be] focus:outline-none focus:bg-gray-100"
              value={formData.method.join('\n')}  // Join array of strings with newline characters
              required
              name="method"
              onChange={handleArrayChange}
              placeholder='Method - no double spaces between paragraphs!'
            />

          </div>


          {/* TIPS */}
          <div className="py-2">

            <textarea
              className="px-[2px] py-[7px] pl-[12px] w-[90%] rounded-xl 
            border-[1px] border-black focus:border-[#4385be] focus:outline-none focus:bg-gray-100"
              value={formData.tips.join('\n')}  // Join array of strings with newline characters
              name="tips"
              onChange={handleArrayChange}
              placeholder='Tips (Opcional) - no double spaces between paragraphs!'
            />

          </div>


          {/* BOOLEANS */}
          <div className="w-[70%]" >
            <div className="py-2 flex border-b-[1px] border-b-gray-500 gap-4 justify-center">

              <span className="w-[30%] min-w-[155px] block">Vegan 🥦:</span>
              <label className="true-label">

                <input
                  type="radio"
                  name="isVegan"
                  value="true"
                  checked={formData.isVegan}
                  onChange={handleChange}
                />
                True
              </label>

              <label>
                <input
                  type="radio"
                  name="isVegan"
                  value="false"
                  checked={!formData.isVegan}
                  onChange={handleChange}
                />
                False
              </label>
            </div>

            <div className="py-2 flex border-b-[1px] border-b-gray-500 gap-4 justify-center">
            <span className="w-[30%] min-w-[155px] block">Has Vegan Option 🥦:</span>
              <label className="true-label">

                <input
                  type="radio"
                  name="hasVeganOption"
                  value="true"
                  checked={formData.hasVeganOption}
                  onChange={handleChange}
                />
                True
              </label>

              <label>
                <input
                  type="radio"
                  name="hasVeganOption"
                  value="false"
                  checked={!formData.hasVeganOption}
                  onChange={handleChange}
                />
                False
              </label>
            </div>

            <div className="py-2 flex border-b-[1px] border-b-gray-500 gap-4 justify-center">
              <span className="w-[30%] min-w-[155px] block">Dairy Free 🥛⛔:</span>
              <label className="true-label">

                <input
                  type="radio"
                  name="isDairyFree"
                  value="true"
                  checked={formData.isDairyFree}
                  onChange={handleChange}
                />
                True
              </label>

              <label>
                <input
                  type="radio"
                  name="isDairyFree"
                  value="false"
                  checked={!formData.isDairyFree}
                  onChange={handleChange}
                />
                False
              </label>
            </div>

            <div className="py-2 flex border-b-[1px] border-b-gray-500 gap-4 justify-center">
              <span className="w-[30%] min-w-[155px] block">Vegetarian 🌿:</span>
              <label className="true-label">

                <input
                  type="radio"
                  name="isVegetarian"
                  value="true"
                  checked={formData.isVegetarian}
                  onChange={handleChange}
                />
                True
              </label>

              <label>
                <input
                  type="radio"
                  name="isVegetarian"
                  value="false"
                  checked={!formData.isVegetarian}
                  onChange={handleChange}
                />
                False
              </label>
            </div>

            <div className="py-2 flex border-b-[1px] border-b-gray-500 gap-4 justify-center">
              <span className="w-[30%] min-w-[155px] block">Gluten Free:</span>
              <label className="true-label">

                <input
                  type="radio"
                  name="isGlutenFree"
                  value="true"
                  checked={formData.isGlutenFree}
                  onChange={handleChange}
                />
                True
              </label>

              <label>
                <input
                  type="radio"
                  name="isGlutenFree"
                  value="false"
                  checked={!formData.isGlutenFree}
                  onChange={handleChange}
                />
                False
              </label>
            </div>

            <div className="py-2 flex border-b-[1px] border-b-gray-500 gap-4 justify-center">
              <span className="w-[30%] min-w-[155px] block">Has Gluten Free Option:</span>
              <label className="true-label">

                <input
                  type="radio"
                  name="hasGlutenFreeOption"
                  value="true"
                  checked={formData.hasGlutenFreeOption}
                  onChange={handleChange}
                />
                True
              </label>

              <label>
                <input
                  type="radio"
                  name="hasGlutenFreeOption"
                  value="false"
                  checked={!formData.hasGlutenFreeOption}
                  onChange={handleChange}
                />
                False
              </label>
            </div>

            <div className="py-2 flex border-b-[1px] border-b-gray-500 gap-4 justify-center">
              <span className="w-[30%] min-w-[155px] block">Spicy:</span>
              <label className="true-label">

                <input
                  type="radio"
                  name="isSpicy"
                  value="true"
                  checked={formData.isSpicy}
                  onChange={handleChange}
                />
                True
              </label>

              <label>
                <input
                  type="radio"
                  name="isSpicy"
                  value="false"
                  checked={!formData.isSpicy}
                  onChange={handleChange}
                />
                False
              </label>
            </div>

            <div className="py-2 flex border-b-[1px] border-b-gray-500 gap-4 justify-center">
              <span className="w-[30%] min-w-[155px] block">Quick and Easy:</span>
              <label className="true-label">

                <input
                  type="radio"
                  name="isQuickAndEasy"
                  value="true"
                  checked={formData.isQuickAndEasy}
                  onChange={handleChange}
                />
                True
              </label>

              <label>
                <input
                  type="radio"
                  name="isQuickAndEasy"
                  value="false"
                  checked={!formData.isQuickAndEasy}
                  onChange={handleChange}
                />
                False
              </label>
            </div>

            <div className="py-2 flex border-b-[1px] border-b-gray-500 gap-4 justify-center">
              <span className="w-[30%] min-w-[155px] block">Budget Friendly:</span>
              <label className="true-label">

                <input
                  type="radio"
                  name="isBudgetFriendly"
                  value="true"
                  checked={formData.isBudgetFriendly}
                  onChange={handleChange}
                />
                True
              </label>

              <label>
                <input
                  type="radio"
                  name="isBudgetFriendly"
                  value="false"
                  checked={!formData.isBudgetFriendly}
                  onChange={handleChange}
                />
                False
              </label>
            </div>

            <div className="py-2 flex border-b-[1px] border-b-gray-500 gap-4 justify-center">
              <span className="w-[30%] min-w-[155px] block">Batch Cooking:</span>
              <label className="true-label">

                <input
                  type="radio"
                  name="isBatchCooking"
                  value="true"
                  checked={formData.isBatchCooking}
                  onChange={handleChange}
                />
                True
              </label>

              <label>
                <input
                  type="radio"
                  name="isBatchCooking"
                  value="false"
                  checked={!formData.isBatchCooking}
                  onChange={handleChange}
                />
                False
              </label>
            </div>

            <div className="py-2 flex border-b-[1px] border-b-gray-500 gap-4 justify-center">
              <span className="w-[30%] min-w-[155px] block">Low Carb:</span>
              <label className="true-label">

                <input
                  type="radio"
                  name="isLowCarb"
                  value="true"
                  checked={formData.isLowCarb}
                  onChange={handleChange}
                />
                True
              </label>

              <label>
                <input
                  type="radio"
                  name="isLowCarb"
                  value="false"
                  checked={!formData.isLowCarb}
                  onChange={handleChange}
                />
                False
              </label>
            </div>

            <div className="py-2 flex border-b-[1px] border-b-gray-500 gap-4 justify-center">
              <span className="w-[30%] min-w-[155px] block">High Protein:</span>
              <label className="true-label">

                <input
                  type="radio"
                  name="isHighProtein"
                  value="true"
                  checked={formData.isHighProtein}
                  onChange={handleChange}
                />
                True
              </label>

              <label>
                <input
                  type="radio"
                  name="isHighProtein"
                  value="false"
                  checked={!formData.isHighProtein}
                  onChange={handleChange}
                />
                False
              </label>
            </div>

            <div className="py-2 flex border-b-[1px] border-b-gray-500 gap-4 justify-center">
              <span className="w-[30%] min-w-[155px] block">Low Calorie:</span>
              <label className="true-label">

                <input
                  type="radio"
                  name="isLowCalorie"
                  value="true"
                  checked={formData.isLowCalorie}
                  onChange={handleChange}
                />
                True
              </label>

              <label>
                <input
                  type="radio"
                  name="isLowCalorie"
                  value="false"
                  checked={!formData.isLowCalorie}
                  onChange={handleChange}
                />
                False
              </label>
            </div>

            <div className="py-2 flex border-b-[1px] border-b-gray-500 gap-4 justify-center">
              <span className="w-[30%] min-w-[155px] block">Heart Healthy:</span>
              <label className="true-label">

                <input
                  type="radio"
                  name="isHeartHealthy"
                  value="true"
                  checked={formData.isHeartHealthy}
                  onChange={handleChange}
                />
                True
              </label>

              <label>
                <input
                  type="radio"
                  name="isHeartHealthy"
                  value="false"
                  checked={!formData.isHeartHealthy}
                  onChange={handleChange}
                />
                False
              </label>
            </div>

            <div className="py-2 flex border-b-[1px] border-b-gray-500 gap-4 justify-center">
              <span className="w-[30%] min-w-[155px] block">Main Dish:</span>
              <label className="true-label">

                <input
                  type="radio"
                  name="isMainDish"
                  value="true"
                  checked={formData.isMainDish}
                  onChange={handleChange}
                />
                True
              </label>

              <label>
                <input
                  type="radio"
                  name="isMainDish"
                  value="false"
                  checked={!formData.isMainDish}
                  onChange={handleChange}
                />
                False
              </label>
            </div>

            <div className="py-2 flex border-b-[1px] border-b-gray-500 gap-4 justify-center">
              <span className="w-[30%] min-w-[155px] block">Dessert:</span>
              <label className="true-label">

                <input
                  type="radio"
                  name="isDessert"
                  value="true"
                  checked={formData.isDessert}
                  onChange={handleChange}
                />
                True
              </label>

              <label>
                <input
                  type="radio"
                  name="isDessert"
                  value="false"
                  checked={!formData.isDessert}
                  onChange={handleChange}
                />
                False
              </label>
            </div>

            <div className="py-2 flex border-b-[1px] border-b-gray-500 gap-4 justify-center">
              <span className="w-[30%] min-w-[155px] block">Side Dish:</span>
              <label className="true-label">

                <input
                  type="radio"
                  name="isSideDish"
                  value="true"
                  checked={formData.isSideDish}
                  onChange={handleChange}
                />
                True
              </label>

              <label>
                <input
                  type="radio"
                  name="isSideDish"
                  value="false"
                  checked={!formData.isSideDish}
                  onChange={handleChange}
                />
                False
              </label>
            </div>

            <div className="py-2 flex border-b-[1px] border-b-gray-500 gap-4 justify-center">
              <span className="w-[30%] min-w-[155px] block">Spring Dish:</span>
              <label className="true-label">

                <input
                  type="radio"
                  name="isSpringDish"
                  value="true"
                  checked={formData.isSpringDish}
                  onChange={handleChange}
                />
                True
              </label>

              <label>
                <input
                  type="radio"
                  name="isSpringDish"
                  value="false"
                  checked={!formData.isSpringDish}
                  onChange={handleChange}
                />
                False
              </label>
            </div>

            <div className="py-2 flex border-b-[1px] border-b-gray-500 gap-4 justify-center">
              <span className="w-[30%] min-w-[155px] block">Summer Dish:</span>
              <label className="true-label">

                <input
                  type="radio"
                  name="isSummerDish"
                  value="true"
                  checked={formData.isSummerDish}
                  onChange={handleChange}
                />
                True
              </label>

              <label>
                <input
                  type="radio"
                  name="isSummerDish"
                  value="false"
                  checked={!formData.isSummerDish}
                  onChange={handleChange}
                />
                False
              </label>
            </div>

            <div className="py-2 flex border-b-[1px] border-b-gray-500 gap-4 justify-center">
              <span className="w-[30%] min-w-[155px] block">Autumn Dish:</span>
              <label className="true-label">

                <input
                  type="radio"
                  name="isAutumnDish"
                  value="true"
                  checked={formData.isAutumnDish}
                  onChange={handleChange}
                />
                True
              </label>

              <label>
                <input
                  type="radio"
                  name="isAutumnDish"
                  value="false"
                  checked={!formData.isAutumnDish}
                  onChange={handleChange}
                />
                False
              </label>
            </div>

            <div className="py-2 flex border-b-[1px] border-b-gray-500 gap-4 justify-center">
              <span className="w-[30%] min-w-[155px] block">Winter Dish:</span>
              <label className="true-label">

                <input
                  type="radio"
                  name="isWinterDish"
                  value="true"
                  checked={formData.isWinterDish}
                  onChange={handleChange}
                />
                True
              </label>

              <label>
                <input
                  type="radio"
                  name="isWinterDish"
                  value="false"
                  checked={!formData.isWinterDish}
                  onChange={handleChange}
                />
                False
              </label>
            </div>

          </div>

          {/* Ingredients */}
          <div>

            {ingredients.map((element, index) => {
              return (
                <div
                  key={`ingredient ${index}`}
                  className={index % 2 === 0 ?
                    "flex flex-col ingredient-container p-6 w-[70%]" :
                    "flex flex-col ingredient-container p-6 w-[70%] bg-grayLight"
                  }>
                  {/* ==== INGREDIENT ==== */}

                  <div className="ingredient">

                    <h3>Ingredient {index + 1}:</h3>

                    {/* NAME */}
                    <div className="py-2">
                      <input
                        type="text" name="ingredientNameSingular" required
                        className="ml-2 p-[6px] pl-[12px] w-[100%] max-w-[500px] rounded-xl 
                  border-[1px] border-black focus:border-[#4385be] focus:outline-none focus:bg-gray-100"
                        //value={ingredient.name.singular}
                        onChange={handleIngredientsChange(index)}
                        placeholder="Name - singular"
                      />
                    </div>

                    <div className="py-2">
                      <input type="text" name="ingredientNamePlural" required
                        className="ml-2 p-[6px] pl-[12px] w-[100%] max-w-[500px] rounded-xl 
                  border-[1px] border-black focus:border-[#4385be] focus:outline-none focus:bg-gray-100"
                        onChange={handleIngredientsChange(index)}
                        placeholder='Name - plural'
                      />
                    </div>

                    {/* QUANTITY */}
                    <div className="py-2">
                      <input type="number" name="ingredientQuantity" required
                        className="ml-2 p-[6px] pl-[12px] w-[100%] max-w-[500px] rounded-xl 
                  border-[1px] border-black focus:border-[#4385be] focus:outline-none focus:bg-gray-100"
                        onChange={handleIngredientsChange(index)}
                        placeholder='Quantity'
                      />
                    </div>

                    {/* UNIT */}
                    <div className="py-2">
                      <select name="ingredientUnit" required
                        defaultValue=''
                        className="ml-2 p-[6px] pl-[12px] max-w-[500px] w-[100%] rounded-xl 
                  border-[1px] border-black focus:border-[#4385be] focus:outline-none focus:bg-gray-100"
                        onChange={handleIngredientsChange(index)}
                      >
                        <option value="" disabled>
                          Unit
                        </option>
                        {Units.map((element: string, index) => {
                          return (
                            <option key={element + index} value={element}>
                              {element}
                            </option>
                          )
                        })}
                      </select>
                    </div>

                    {/* CATEGORY */}
                    <div className="py-2">
                      <select name="ingredientCategory" required
                        defaultValue=''
                        className="ml-2 p-[6px] pl-[12px] max-w-[500px] w-[100%] rounded-xl 
                  border-[1px] border-black focus:border-[#4385be] focus:outline-none focus:bg-gray-100"
                        onChange={handleIngredientsChange(index)}
                      >
                        <option value="" disabled>
                          Ingredient Category
                        </option>
                        {IngredientCategories.map((element: string, index) => {
                          return (
                            <option key={element + index} value={element}>
                              {element}
                            </option>
                          )
                        })}
                      </select>
                    </div>

                    {/* CLARIFICATION */}
                    <div className="py-2">
                      <input type="text" name="ingredientClarification"
                        className="ml-2 p-[6px] pl-[12px] w-[100%] max-w-[500px] rounded-xl 
                  border-[1px] border-black focus:border-[#4385be] focus:outline-none focus:bg-gray-100"
                        onChange={handleIngredientsChange(index)}
                        placeholder='Clarification OPTIONAL'
                      />
                    </div>
                  </div>

                  <button
                    className="w-[200px] self-end text-white font-bold bg-red-400 py-[.6em] px-[1.75em] rounded-full my-4
                    hover:text-red-400 hover:bg-white border-[2px] border-red-400"
                    onClick={() => deleteIngredient(index)}>
                    Delete Ingredient
                  </button>
                </div>

              )
            })}
            <button
              className="text-white font-bold bg-primary py-[.6em] px-[1.75em] rounded-full mt-2 mb-6
              hover:text-primary hover:bg-white border-[2px] border-primary"
              onClick={addIngredient}>
              Add Ingredient
            </button>
          </div>

          {/* EXTRA RECIPE */}
          <details>
            <summary>Extra Recipe (OPTIONAL)</summary>

            {/* EXTRA RECIPE NAME*/}
            <div className="py-2">
              <input type="text" name="extraRecipeName" required
                className="ml-2 p-[6px] pl-[12px] w-[70%] max-w-[500px] rounded-xl 
                  border-[1px] border-black focus:border-[#4385be] focus:outline-none focus:bg-gray-100"
                onChange={handleChange}
                placeholder='Extra Recipe Name OPTIONAL'
              />
            </div>

            {/* EXTRA RECIPE INGREDIENTS*/}
            <div>

              {extraIngredients.map((element, index) => {
                return (
                  <div
                    key={`extraIngredient ${index}`}
                    className={index % 2 === 0 ?
                      "ingredient-container p-6 w-[70%]" :
                      "ingredient-container p-6 w-[70%] bg-grayLight"
                    }>
                    {/* ==== INGREDIENT ==== */}

                    <div className="ingredient">

                      <h3>Ingredient {index + 1}:</h3>

                      {/* NAME */}
                      <div className="py-2">
                        <input
                          type="text" name="ingredientNameSingular" required
                          className="ml-2 p-[6px] pl-[12px] w-[100%] max-w-[500px] rounded-xl 
                  border-[1px] border-black focus:border-[#4385be] focus:outline-none focus:bg-gray-100"
                          //value={ingredient.name.singular}
                          onChange={handleExtraIngredientsChange(index)}
                          placeholder="Name - singular"
                        />
                      </div>

                      <div className="py-2">
                        <input type="text" name="ingredientNamePlural" required
                          className="ml-2 p-[6px] pl-[12px] w-[100%] max-w-[500px] rounded-xl 
                  border-[1px] border-black focus:border-[#4385be] focus:outline-none focus:bg-gray-100"
                          onChange={handleExtraIngredientsChange(index)}
                          placeholder='Name - plural'
                        />
                      </div>

                      {/* QUANTITY */}
                      <div className="py-2 flex flex-row">
                        <input type="number" name="ingredientQuantity" required
                          className="ml-2 p-[6px] pl-[12px] w-[100%] max-w-[500px] rounded-xl 
                  border-[1px] border-black focus:border-[#4385be] focus:outline-none focus:bg-gray-100"
                          onChange={handleExtraIngredientsChange(index)}
                          placeholder='Quantity'
                        />
                      </div>

                      {/* UNIT */}
                      <div className="py-2">
                        <select name="ingredientUnit" required
                          defaultValue=''
                          className="ml-2 p-[6px] pl-[12px] max-w-[500px] w-[100%] rounded-xl 
                  border-[1px] border-black focus:border-[#4385be] focus:outline-none focus:bg-gray-100"
                          onChange={handleExtraIngredientsChange(index)}
                        >
                          <option value="" disabled>
                            Unit
                          </option>
                          {Units.map((element: string, index) => {
                            return (
                              <option key={element + index} value={element}>
                                {element}
                              </option>
                            )
                          })}
                        </select>
                      </div>

                      {/* CATEGORY */}
                      <div className="py-2">
                        <select name="ingredientCategory" required
                          defaultValue=''
                          className="ml-2 p-[6px] pl-[12px] max-w-[500px] w-[100%] rounded-xl 
                  border-[1px] border-black focus:border-[#4385be] focus:outline-none focus:bg-gray-100"
                          onChange={handleExtraIngredientsChange(index)}
                        >
                          <option value="" disabled>
                            Ingredient Category
                          </option>
                          {IngredientCategories.map((element: string, index) => {
                            return (
                              <option key={element + index} value={element}>
                                {element}
                              </option>
                            )
                          })}
                        </select>
                      </div>

                      {/* CLARIFICATION */}
                      <div className="py-2">
                        <input type="text" name="ingredientClarification"
                          className="ml-2 p-[6px] pl-[12px] w-[100%] max-w-[500px] rounded-xl 
                  border-[1px] border-black focus:border-[#4385be] focus:outline-none focus:bg-gray-100"
                          onChange={handleExtraIngredientsChange(index)}
                          placeholder='Clarification OPTIONAL'
                        />
                      </div>
                    </div>

                    <button
                      className="text-white font-bold bg-red-400 py-[.6em] px-[1.75em] rounded-full my-4
                    hover:text-red-400 hover:bg-white border-[2px] border-red-400"
                      onClick={() => deleteExtraIngredient(index)}>
                      Delete Ingredient
                    </button>
                  </div>

                )
              })}
              <button
                className="text-white font-bold bg-primary py-[.6em] px-[1.75em] rounded-full mt-2 mb-6
              hover:text-primary hover:bg-white border-[2px] border-primary"
                onClick={addExtraIngredient}>
                Add Ingredient
              </button>
            </div>
          </details>


          {/* <button type="submit">Submit</button> */}

        </form>


      </div>

      {/* JAVASCRIPT OUTPUT */}
      <div className="w-[40%] flex flex-col justify-start align-center">
        <button
          className="w-[200px] self-center text-white font-bold bg-secondary py-[.6em] px-[1.75em] rounded-full my-4
              hover:text-secondary hover:bg-white border-[2px] border-secondary"
          onClick={copyText}
        >
          Copy Text
        </button>
        <div id="jsonText">
          <p>
            {"{"}<br />
            id: {formData.id},<br />
            name: &apos;{formData.name}&apos;,<br />
            tagline: &apos;{formData.tagline}&apos;,<br />
            primaryIngredient: &apos;{formData.primaryIngredient}&apos;,<br />
            secondaryIngredient: &apos;{formData.secondaryIngredient}&apos;,<br />
            portions: {formData.portions},<br />
            difficulty: &apos;{formData.difficulty}&apos;,<br />
            prepTime: {formData.prepTime},<br />
            totalTime: {formData.totalTime},<br />
            img: &apos;{formData.img}{formData.id.toString().padStart(5, "0")}.jpg&apos;,<br />
            imgThumb: &apos;{formData.img}{formData.id.toString().padStart(5, "0")}thumb.jpg&apos;,<br />
            imgAlt: &apos;{formData.imgAlt}&apos;,<br />
            type: &apos;{formData.type}&apos;,<br />
            cuisine: {`['${formData.cuisine.join("','")}']`},<br />
            method: {`['${formData.method.join("','")}']`},<br />
            {formData.tips.length > 0 ?
              `tips: ['${formData.tips?.join("','")}'],` :
              ''}
            {formData.tips.length > 0 && <br />}
            isVegan: {formData.isVegan.toString()},<br />
            hasVeganOption: {formData.hasVeganOption.toString()},<br />
            isDairyFree: {formData.isDairyFree.toString()},<br />
            isVegetarian: {formData.isVegetarian.toString()},<br />
            isGlutenFree: {formData.isGlutenFree.toString()},<br />
            hasGlutenFreeOption: {formData.hasGlutenFreeOption.toString()},<br />
            isSpicy: {formData.isSpicy.toString()},<br />
            isQuickAndEasy: {formData.isQuickAndEasy.toString()},<br />
            isBudgetFriendly: {formData.isBudgetFriendly.toString()},<br />
            isBatchCooking: {formData.isBatchCooking.toString()},<br />
            isLowCarb: {formData.isLowCarb.toString()},<br />
            isHighProtein: {formData.isHighProtein.toString()},<br />
            isLowCalorie: {formData.isLowCalorie.toString()},<br />
            isHeartHealthy: {formData.isHeartHealthy.toString()},<br />
            isMainDish: {formData.isMainDish.toString()},<br />
            isDessert: {formData.isDessert.toString()},<br />
            isSideDish: {formData.isSideDish.toString()},<br />
            isSpringDish: {formData.isSpringDish.toString()},<br />
            isSummerDish: {formData.isSummerDish.toString()},<br />
            isAutumnDish: {formData.isAutumnDish.toString()},<br />
            isWinterDish: {formData.isWinterDish.toString()},<br />
            saves: {formData.saves},<br />
          </p>
          <p>
            ingredients:
            {"["}
            {ingredients.map((element, i) => {
              return (
                <span
                  key={`list-ingredient${i}`}
                >
                  {"{"}
                  name: {"{"}
                  singular: &apos;{ingredients[i].ingredientNameSingular}&apos;,
                  plural: &apos;{ingredients[i].ingredientNamePlural}&apos;
                  {"}"},
                  quantity: {ingredients[i].ingredientQuantity},
                  unit: &apos;{ingredients[i].ingredientUnit}&apos;,
                  category: &apos;{ingredients[i].ingredientCategory}&apos;,
                  {
                    element.ingredientClarification.length > 0 ?
                      `ingredientClarification: '${ingredients[i].ingredientClarification}',` :
                      ''
                  }
                  {"}"},
                </span>
              )
            })}
            {"],"}
          </p>
          {formData.extraRecipeName.length > 0 ?
            <p>extraRecipeName: &apos;{formData.extraRecipeName}&apos;,</p> :
            ''
          }
          {(extraIngredients[0].ingredientNameSingular.length > 0) ?
            (<p>
              extraIngredients:
              {"["}
              {extraIngredients.map((element, i) => {
                return (
                  <span
                    key={`list-ingredient${i}`}
                  >
                    {"{"}
                    name: {"{"}
                    singular: &apos;{extraIngredients[i].ingredientNameSingular}&apos;,
                    plural: &apos;{extraIngredients[i].ingredientNamePlural}&apos;
                    {"}"},
                    quantity: {extraIngredients[i].ingredientQuantity},
                    unit: &apos;{extraIngredients[i].ingredientUnit}&apos;,
                    category: &apos;{extraIngredients[i].ingredientCategory}&apos;,
                    {
                      element.ingredientClarification.length > 0 ?
                        `ingredientClarification: '${extraIngredients[i].ingredientClarification}',` :
                        ''
                    }
                    {"}"},
                  </span>
                )
              })}
              {"],"}
            </p>)
            :
            ''}


          {"},"}
        </div>

      </div>

    </div>
  )
}

export default DatabaseForm;