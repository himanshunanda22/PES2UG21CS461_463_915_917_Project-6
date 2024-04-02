"use client";
import {Button} from "@/components/ui/button";
import { useState } from "react";
const categories = [
    "SoCs",
    "Processors",
    "Sensors",
    "Displays",
    "Memory",
    "Connectivity",
    "Other"
    ]
const Prices = [
    "Under Rs.500",
    "Rs.500 - Rs.1000",
    "Rs.1000 - Rs.5000",
]
export default function Sidebar(
    { onCategorySelect,onPriceSelect }:any

){
    const [selectedCategory, setSelectedCategory] = useState(0);
  const [selectedPrice, setSelectedPrice] = useState(0);
    const resetStates = () => {
        handlePriceSelect(0);
        handleCategorySelect(0);

      }
      const resetPrice = () => {
        handlePriceSelect(0);

      }
    const handlePriceSelect = (price:any) => {
            setSelectedPrice(price);
            onPriceSelect(price);
            // console.log("selectedPrice",selectedPrice)
            // console.log("prince",price)
        }
    const handleCategorySelect = (category:any) => {
        resetPrice()
        setSelectedCategory(category);
        onCategorySelect(category);
        // console.log(category)
      }

    return(
        <aside className="fixed top-18 flex flex-col p-6 border-r w-64">
            <div className="flex mb-4 justify-between items-center">
            <h2 className="font-semibold text-xl ">Filters</h2>

                
            </div>

    <div className=" flex flex-col space-y-3">
        <h3 className="font-semibold">Categories</h3>
        {
            categories.map((category, index) => 
            ( 
               <div key={index+1} onClick={() => handleCategorySelect(index+1)}  className={`p-2 rounded-lg hover:bg-slate-200 ${
                selectedCategory == index+1 ? 'bg-slate-200' : ''
              }`}>{category}</div>
            )
       ) }
     <h3 className="font-semibold">Prices</h3>
        {
                Prices.map((category, index) => 
                ( 
                <div key={index+1} onClick={() => handlePriceSelect(index+1)}  className={`p-2 rounded-lg hover:bg-slate-200 ${
                    selectedPrice == index +1? 'bg-slate-200 ' : ''
                  }`}>{category}</div>
                )
        ) }
    </div>
    <Button 
          className="mt-4" onClick={resetStates} variant="destructive">Clear</Button>
  </aside>
    )

    
}