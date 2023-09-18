import React from "react";
import RecipeCard from "./components/RecipeCard";

function Recipe() {

    const recipeData = [
        {
            name: "Goatherd's Pie",
            ingredients: ["3lbs Ground Beef", "6 Potatoes", "2 Onions", "2 Carrots", "1 Leek", "1 Egg", "5 Cloves of Garlic", "Beef Stock", "Heavy Cream", "Tomato Paste", "Irish Cheddar", "Salt", "Pepper", "Flour", "Celery Seed", "Dill", "Parsley Flakes"],
            link: "https://www.youtube.com/watch?v=witZWALQFWQ"
        },
        {
            name: "Sweetrolls",
            ingredients: ["2 Cups All-Purpose Flour", "1 Cup Warm Whole Milk", "1 Egg", "2tbsp Honey", "3tbsp Unsalted Butter", "2tbsp Active Dry Yeast", "Pinch of Salt", "2tbsp Cream Cheese, Softened", "1tbsp Unsalted Butter, Softened", "1/2cup Powdered Sugar", "2tbsp Heavy Cream"],
            link: "https://www.youtube.com/watch?v=LFBgg4Ln1EU"
        },
    ]

    return(<>
        <div className="page">
            {recipeData.map(data=><RecipeCard key={data.id} name={data.name} ingredients={data.ingredients} link={data.link}/>)}
        </div>
    </>)
}

export default Recipe;