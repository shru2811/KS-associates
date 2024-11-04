import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ReviewCard = ({ author, timeAgo, content }) => (
  <div className="bg-white rounded-lg p-6 shadow-md h-full">
    <h3 className="text-lg font-semibold text-[#1a0dab]">{author}</h3>
    <p className="text-gray-500 text-sm mb-2">{timeAgo}</p>
    <div className="flex mb-3">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className="w-5 h-5 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
    <p className="text-gray-600">{content}</p>
  </div>
);

const GoogleReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const reviews = [
    {
      author: "G. Bhuvnesh",
      timeAgo: "7 months ago",
      content: "Despite covid pandemic, KS associates completed the job within time period. They are thorough professionals, and always transparent about the development in work. They have a system of giving monthly status report. Amazed to see their working style. Thorough professional company."
    },
    {
      author: "Madhusudan Joshi",
      timeAgo: "a year ago",
      content: "KS associates is a fantastic organization. They helped me dematerialize my physical shares held jointly with great ease. Excellent customer support from beginning to end. Their responses were prompt and professional. I strongly recommend them unreservedly. Thanks again team KS associates!"
    },
    {
      author: "Vaibhav Swamy",
      timeAgo: "4 months ago",
      content: "Transmission of shares is a marathon project that needs expertise and a diligent working team. I have got Entitlement Letters for 7 out of the 10 companies that I had approached KS associates for in a very short time. Apart from that they helped me claim MFs, Bonds and Savings Balances which were really old! SS is doing a lovely service to help us ease our stress and recover our funds. Thank you guys!! All the best!"
    },
    {
      author: "Prateek V",
      timeAgo: "4 months ago",
      content: "KS associates did a fantastic job of recovering my mothers shares that were stuck in IEPF. They gave regular timely updates. They navigated the bureaucratic maze of documentation. Save yourself the hassle of doing share recovery of old shares by yourself.. Just go with KS associates!"
    },
    {
      author: "Parameshwar S",
      timeAgo: "5 months ago",
      content: "My father bought a very good amount of SBI shares in 1999. I came across those shares after he passed away. I reached out to KS associates, in about 6 months shares got successfully transferred to my demat account. Thank you KS associates for getting it done. If anyone would like to opt their services, you can go for it. Highly recommended."
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  useEffect(() => {
    let intervalId;
    if (!isHovered) {
      intervalId = setInterval(() => {
        nextSlide();
      }, 5000); // Change slide every 5 seconds
    }
    return () => clearInterval(intervalId);
  }, [isHovered]);

  const getVisibleReviews = () => {
    const visibleCount = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
    const reviewsArray = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % reviews.length;
      reviewsArray.push(reviews[index]);
    }
    return reviewsArray;
  };

  return (
    <div id="google-reviews" className="bg-[#f7fbff]">
      <div className="mx-auto px-12 py-12">
        <div className="flex justify-start items-center gap-2 mb-6">
          <div className="flex flex-col">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 272 92" className="w-24 h-8">
              <path d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="#eddd47"/>
              <path d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="#EA4335"/>
              <path d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z" fill="#4285F4"/>
              <path d="M225 3v65h-9.5V3h9.5z" fill="#34A853"/>
              <path d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z" fill="#EA4335"/>
              <path d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35 0 53.89 0 34.91 0 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z" fill="#4285F4"/>
            </svg>
            <div className="flex ml-1">
              <h2 className="text-xl text-[#1a0dab] font-bold">Reviews</h2>
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-400 mx-1 my-1.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
        </div>

        <div 
          className="relative" 
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            exit={{ x: 1000 }}
            transition={{ type: 'spring', stiffness: 70, damping: 15 }}
            key={currentIndex}
          >
            {getVisibleReviews().map((review, index) => (
              <ReviewCard key={index} {...review} />
            ))}
          </motion.div>

          <button
            className={`hover:scale-115 absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={prevSlide}
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            className={`hover:scale-115 absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={nextSlide}
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GoogleReviews;
