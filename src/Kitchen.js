import React from "react";
import KitchenCard from "./components/KitchenCard";

function Kitchen() {

    const kitchenData = [
        {
            name: "The Elder Scrolls: The Official Cookbook",
            description:"Feast on all of the delicious dishes found in Skyrim, Morrowind, and all of Tamriel in this beautifully crafted cookbook based on the award-winning Elder Scrolls game series.",
            link:"https://www.amazon.com/Elder-Scrolls-Official-Cookbook/dp/1683833988"
        }
    ]

    return(<>
        <div className="page">
            {kitchenData.map(data=><KitchenCard key={data.id} name={data.name} description={data.description} link={data.link}/>)}
        </div>
    </>)
}

export default Kitchen;