import React, { useState } from 'react';
import '../Header.css';
import Sandwich from '../assets/Sandwich.jpeg';
import Pastry from '../assets/Pastry.jpeg';
import Coffee from '../assets/Coffee.jpeg';

const Menu = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const tabContent = [
    { 
        id: 0,
        title: "SAVOURY",
        subHeader: "Savor The Flavour",
        image: Sandwich,
        items: [
            { name: "BBQ Pulled Pork Toastie", calorie: "598kcal", price: "£6.99" },
            { name: "Fetta Pepper Toastie", calorie: "563kcal", price: "£6.99" },
            { name: "Chicken Pesto Toastie", calorie: "499kcal", price: "£6.99" },
            { name: "Avocado Toast with Poached Eggs", calorie: "345kcal", price: "£8.99" },
            { name: "Spinach and Feta Stuffed Croissants", calorie: "344kcal", price: "£9.99" },
            { name: "Tomato Basil Soup", calorie: "384kcal", price: "£6.99" },
            { name: "Greek Salad with Olives and Feta", calorie: "298kcal", price: "£7.99" },
            { name: "Caesar Salad with Grilled Chicken", calorie: "319kcal", price: "£7.99" },
        ]
    },
    { 
        id: 1,
        title: "SWEET",
        subHeader: "Indulge in Every Bite",
        image: Pastry,
        items: [
            { name: "Croissants (Plain, Chocolate, Almond)", calorie: "230kcal", price: "£3.99" },
            { name: "Danishes (Apple, Cherry, Cream Cheese)", calorie: "289kcal", price: "£3.99" },
            { name: "Cinnamon Rolls with Icing", calorie: "420kcal", price: "£3.99" },
            { name: "Chocolate Fudge Cake", calorie: "459kcal", price: "£4.99" },
            { name: "Lemon Drizzle Cake", calorie: "368kcal", price: "£4.99" },
            { name: "Blueberry Muffins", calorie: "380kcal", price: "£3.69" },
            { name: "Pecan Pie", calorie: "469kcal", price: "£4.99" },
            { name: "Classic Fudge Brownies", calorie: "280kcal", price: "£3.69" },
        ]
    },
    { 
        id: 2,
        title: "DRINKS",
        subHeader: "Enjoy Each Sip",
        image: Coffee,
        items: [
            { name: "Espresso", price: "£2.49" },
            { name: "Americano", price: "£3.69" },
            { name: "Latte", price: "£3.80" },
            { name: "Cappuccino", price: "£3.80" },
            { name: "Flat White", price: "£3.19" },
            { name: "Macchiato", price: "£2.99" },
            { name: "Mocha", price: "£3.99" },
            { name: "Iced Coffee", price: "£3.89" },
            { name: "Coke", price: "£1.89" },
            { name: "Pepsi", price: "£1.99" },
            { name: "Sprite", price: "£1.89" },
            { name: "Fanta", price: "£1.89" },
        ]
    },
  ];

  const handleTabClick = (index) => {
    if (index !== activeTab) {
      setTransitioning(true);
      setTimeout(() => {
        setActiveTab(index);
        setTransitioning(false);
      }, 300); // Transition duration in ms
    }
  };

  return (
    <div className="w-full h-1/2 mt-12">
        <div className="flex justify-center mb-4"> 
            {tabContent.map((tab, index) => ( 
                <button 
                    key={tab.id} 
                    className={`letter-spacing px-4 py-2 mx-1 font-bold text-l mr-4 px-3 py-1 transition-colors duration-300 ${ activeTab === index ? 'bg-[#c1dbce] text-[#1b2422]' : 'text-[#c1dbce]'
                    }`} 
                    onClick={() => handleTabClick(index)} 
                > 
                    {tab.title} 
                </button> ))}
        </div>


        <div className = "p-20 bg-[#c1dbce] text-[#1b2422] flex flex-col justify-evenly"> 
            <h1 className="pb-3 text-4xl letter-spacing">{tabContent[activeTab].subHeader}</h1>
            <p className="pb-6">Ethically sourced from sustainable farms around the world.</p>
            <div className="flex flex-row">
                <div className={`flex transition-opacity duration-300 ${transitioning ? 'opacity-0' : 'opacity-100'}`}>
                    <div className="grid grid-cols-2 gap-6">
                    {tabContent[activeTab].items.map((item, index) => ( 
                        <div key={index} className="flex flex-col mb-4"> 
                            <div className="mr-4"> 
                                <h2 className="font-bold text-xl m-0"> {item.name} </h2> 
                                <p className="text-sm">{item.calorie}</p> 
                                <p className="text-l letter-spacing">{item.price}</p> 
                            </div> 
                        </div> 
                    ))}                
                    </div> 
                </div> 
                <div className="w-2/5 h-full flex justify-end">
                        <img src={tabContent[activeTab].image} width={400} className="" />
                </div>   
            </div>          
        </div>
    </div>
  );
};

export default Menu;
