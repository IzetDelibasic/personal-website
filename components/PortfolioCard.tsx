'use client'

import Lottie from 'lottie-react';
import personAnimation from '@/animations/person.json';

export const PortfolioCard = () => {

    return (
        <div className='w-fit mx-auto py-4 lg:py-6 block lg:flex gap-0 z-50 relative bg-gray-700 border-gray-200 border-4'>
            <Lottie
                loop={true}
                animationData={personAnimation}
                className='w-44 mx-auto xl:w-56 2xl:w-64'
            />
        </div>
    );
};
