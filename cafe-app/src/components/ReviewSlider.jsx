import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'


const reviews = [
    {id: 1, name: 'Ted', rating: 5, text: 'Absolutely loved my visit to this café! The coffee was delightful—perfectly brewed and full of rich flavors. The ambiance is just fantastic, creating such a warm and inviting vibe. Its the ideal spot to relax, catch up with friends, or even get some work done. Highly recommend.'},
    {id: 2, name: 'Bucky', rating: 4, text: 'I was particularly impressed by the variety of vegan food options available. Its so refreshing to find a place that caters to everyones dietary preferences without compromising on taste.'},
    {id: 3, name: 'Eddie', rating: 5, text: 'My experience at this café was nothing short of exceptional! The coffee and food were fantastic, but what truly stood out was the stellar customer service. The staff were incredibly attentive, friendly, and made me feel right at home from the moment I walked in.'},
];

const ReviewSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const renderStars = (rating) => {
        return '★'.repeat(rating) + '☆'.repeat(5 - rating);
    };

    return (
        <div className="flex justify-center w-full h-96 mt-16 mb-16 text-[#1b2422]">
            <div className="w-3/5 m-auto mt-6">
                <div className="flex justify-center mt-6 mb-16">
                    <span className="text-3xl font-bold">DISCOVER WHAT OUR CUSTOMERS LOVE ABOUT US.</span>
                </div>                 
                <Slider className="mb-6" {...settings}>
                    {reviews.map((review) => (
                        <div key={review.id} className="p-1 text-left">                         
                            <h3 className="pb-1 font-semibold text-3xl">{review.name}</h3>
                            <p className="pb-4 text-xl ">{renderStars(review.rating)}</p>
                            <p>{review.text}</p>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default ReviewSlider;