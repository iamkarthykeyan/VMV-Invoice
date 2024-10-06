import React, { useEffect } from 'react';
import gsap from 'gsap';
import './PreLoader.css';

const PreLoader = ({ onFinish }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            gsap.to(".pre-loader-left", { x: '-100%', duration: 1, ease: 'power4.inOut' });
            gsap.to(".pre-loader-right", { x: '100%', duration: 1, ease: 'power4.inOut', onComplete: onFinish });
        }, 4000);

        return () => clearTimeout(timer);
    }, [onFinish]);

    return (
        <div className="pre-loader h-screen flex">
            {/* Left Side */}
            <div className="pre-loader-left w-1/2">
                {/* Row 1: Black background, white text */}
                <div className="row-1 bg-black text-white h-1/3 flex items-center overflow-hidden">
                    <div className="marquee-left flex">
                        <span className="text-9xl mx-8">VMV</span>
                        <span className="text-9xl mx-8">VMV</span>
                        <span className="text-9xl mx-8">VMV</span>
                        <span className="text-9xl mx-8">VMV</span>
                    </div>
                </div>

                {/* Row 2: White background, black text */}
                <div className="row-2 bg-white text-black h-1/3 flex items-center overflow-hidden">
                    <div className="marquee-center-left flex">
                        <span className="text-9xl mx-8">VMV</span>
                        <span className="text-9xl mx-8">VMV</span>
                        <span className="text-9xl mx-8">VMV</span>
                        <span className="text-9xl mx-8">VMV</span>
                    </div>
                </div>

                {/* Row 3: Black background, white text */}
                <div className="row-3 bg-black text-white h-1/3 flex items-center overflow-hidden">
                    <div className="marquee-right flex">
                        <span className="text-9xl mx-8">VMV</span>
                        <span className="text-9xl mx-8">VMV</span>
                        <span className="text-9xl mx-8">VMV</span>
                        <span className="text-9xl mx-8">VMV</span>
                    </div>
                </div>
            </div>

            {/* Right Side */}
            <div className="pre-loader-right w-1/2">
                {/* Row 1: Mirrored content */}
                <div className="row-1 bg-black text-white h-1/3 flex items-center overflow-hidden">
                    <div className="marquee-left flex">
                        <span className="text-9xl mx-8">VMV</span>
                        <span className="text-9xl mx-8">VMV</span>
                        <span className="text-9xl mx-8">VMV</span>
                        <span className="text-9xl mx-8">VMV</span>
                    </div>
                </div>

                {/* Row 2: Mirrored content */}
                <div className="row-2 bg-white text-black h-1/3 flex items-center overflow-hidden">
                    <div className="marquee-center-right flex">
                        <span className="text-9xl mx-8">VMV</span>
                        <span className="text-9xl mx-8">VMV</span>
                        <span className="text-9xl mx-8">VMV</span>
                        <span className="text-9xl mx-8">VMV</span>
                    </div>
                </div>

                {/* Row 3: Mirrored content */}
                <div className="row-3 bg-black text-white h-1/3 flex items-center overflow-hidden">
                    <div className="marquee-right flex">
                        <span className="text-9xl mx-8">VMV</span>
                        <span className="text-9xl mx-8">VMV</span>
                        <span className="text-9xl mx-8">VMV</span>
                        <span className="text-9xl mx-8">VMV</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PreLoader;
