import React, { useState } from 'react';
import '../Header.css';
import Blend1 from '../assets/Blend1.png';
import Blend2 from '../assets/Blend2.png';
import Blend3 from '../assets/Blend3.png';
import Blend4 from '../assets/Blend4.png';
import Blend5 from '../assets/Blend5.png';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0); // Tracking current active tab
  const [transitioning, setTransitioning] = useState(false); // Tracking if a tab transition is happening. Works well when opacity transitions!
  // Table of contents array 
  const tabContent = [
    { id: 0, title: "HOUSE", subHeader: "DOUBLE-ORIGIN : MEXICO & BRAZIL", header: "HOUSE BLEND", info: 'Our House Blend is a perfect symphony of flavors, crafted from a carefully curated selection of premium beans from Mexico and Brazil. This medium roast boasts a rich, full-bodied taste with notes of caramel, chocolate, and a hint of citrus, making it the perfect all-day coffee. Ideal for both espresso and drip brewing methods, our House Blend is designed to delight your senses and provide a comforting, satisfying cup with every sip.', intensity: '5/10', notes:'Caramel, chocolate and citrus undertones.', image: Blend1 },
    { id: 1, title: "LIGHT", subHeader: "ROBUSTA : WEST AFRICA", header: " LIGHT BLEND", info: "Our Light Blend hails from the rich, fertile soils of West America. This unique blend combines the best of robusta beans to create a delightful and invigorating cup. Perfectly roasted to highlight its natural flavors, this blend features a light body and a complex profile with deep, rich dark chocolate notes that will captivate your senses. Ideal for those who appreciate a nuanced and aromatic coffee experience, our Light Blend is crafted to provide a refreshing and satisfying drink with every sip.", intensity: "6/10", notes: "Dark chocolate notes.", image: Blend2 },
    { id: 2, title: "DARK", subHeader: "ARABICA : COLUMBIA", header: "DARK BLEND", info: "Experience the depth and complexity of our Colombian Dark Roast, sourced from the pristine highlands of Colombia. This exquisite blend is meticulously roasted to perfection, unveiling a rich tapestry of flavors. Each sip reveals the smooth, sweet notes of caramel intertwined with the subtle, woody undertones of cedar, creating a harmonious balance that is both bold and refined. Perfect for those who crave a robust coffee with a touch of elegance, our Colombian Dark Roast promises a memorable and indulgent experience, cup after cup.", intensity: "9/10", notes: "Caramel, cedar and dark chocolate.", image: Blend3 },
    { id: 3, title: "DECAF", subHeader: "GOLD : CHILLE", header: "DECAF BLEND", info: "Indulge in the smooth, calming embrace of our Chilean Decaf Delight. Sourced from the fertile valleys of Chile, this exquisite blend offers all the rich, full-bodied flavor of traditional coffee without the caffeine. Each sip reveals a delicate symphony of almond and honey, creating a warm and inviting taste that soothes the senses. Perfect for those moments when you crave the comfort of coffee without the buzz, our Chilean Decaf Delight provides a gentle, aromatic experience that's both indulgent and refreshing.", intensity: "4/10", notes: "Honey & almond.", image: Blend4 },
    { id: 4, title: "SEASONAL", subHeader: "AMBER RUSH : LATIN AMERICA", header: "SEASONAL BLEND", info: "Embrace the flavors of the season with our Latin American Seasonal Blend, a celebration of the region's finest coffee heritage. Sourced from select farms across Latin America, this special blend brings a burst of warmth and richness to every cup. The harmonious fusion of caramel and rich dark chocolate notes creates an indulgent experience that’s perfect for cozying up during cooler months.", intensity: " 8/10", notes: "Rich dark chocolate and caramel notes.", image: Blend5 },
  ];

  const handleTabClick = (index) => {
    if (index !== activeTab) { // If clicked tab is NOT the current active tab, it sets the Transitioning state to 'true' and causes transition
      setTransitioning(true);
      setTimeout(() => { // Else after 300ms, it updates the activeTab state to the clicked tab's index and sets Transitioning to 'false'
        setActiveTab(index);
        setTransitioning(false);
      }, 300); // Transition duration in ms
    }
  };

  return (
    <div className="w-full mt-28">
        <div className="flex justify-center mb-6">
            <span className="left-nav-link text-3xl font-bold">LUNA BLENDS</span>
        </div>
        <div className="flex justify-center mb-4">
            {tabContent.map((tab, index) => (
            <button
                key={tab.id}
                className={`px-4 py-2 mx-1 font-bold text-xl mr-4 px-3 py-1 transition-colors duration-300 ${
                activeTab === index ? 'bg-[#1b2422] text-[#c1dbce]' : 'text-[#1b2422]'
            }`}
            onClick={() => handleTabClick(index)}
            >
                {tab.title}
            </button>
        ))}
        </div>
        <div className = "p-8 bg-[#1b2422] text-[#c1dbce]">
            <div className={`flex flex-row transition-opacity duration-300 ${transitioning ? 'opacity-0' : 'opacity-100'}`}>
                <div className="w-2/3 pr-4">
                    <h3 className="letter-spacing pb-1 font-thin tracking-wide text-2xl mb-4">{tabContent[activeTab].subHeader}</h3>
                    <h1 className="font-bold text-4xl mb-8">{tabContent[activeTab].header}</h1>
                    <p className="pb-6 text-xl">{tabContent[activeTab].info}</p>
                    <p className="font-bold mb-8 text-2xl">INTENSITY: {tabContent[activeTab].intensity}</p>
                    <p className="font-semibold text-2xl">TASTING NOTES: {tabContent[activeTab].notes}</p>
                </div>
                <div className="w-1/3 h-full flex justify-center flex-end">
                    <img src={tabContent[activeTab].image} width={400} className="" />
                </div>
            </div>
        </div>
    </div>
  );
};

export default Tabs;
