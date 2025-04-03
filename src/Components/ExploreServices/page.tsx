import React from "react";

const ExploreServices = () => {

    return (
        <>
            <div className="py-4 text-center">
                <div className="mt-8 mb-12 px-4">
                    <h4 className="md:text-42 text-2xl text-black font-BonaNovaRegular">Explore Services</h4>
                    <p className="text-subhead text-15 font-Montserratmedium md:py-4 py-2">Lorem ipsum dolor sit lorem ipsum dolore lorem</p>
                </div>
                <div className="md:flex block md:w-10/12 w-11/12 mx-auto">
                    <div className="md:w-2/6 w-full md:mt-16 mt-4 px-2">
                        <img src="/images/venues.png" alt="" className="mx-auto w-full" />
                        <div className="py-2 px-4">
                            <p className="text-3xl font-BonaNovaRegular py-1">Venues</p>
                            <p className="text-15 text-exploresub font-Montserratregular">Resorts, Farm houses, Banquet halls, Kalyana Madaps, Open Lawns, Temples</p>
                        </div>
                    </div>
                    <div className="md:w-2/6 w-full px-2">
                        <img src="/images/design-decor.png" alt="" className="mx-auto w-full" />
                        <div className="py-2 px-4">
                            <p className="text-3xl font-BonaNovaRegular py-1">Design & Decor</p>
                            <p className="text-15 text-exploresub font-Montserratregular">Venue Decor, Home Decor, Car decor, Themes, Lighting</p>
                        </div>
                    </div>
                    <div className="md:w-2/6 w-full md:mt-16 mt-4 px-2">
                        <img src="/images/venues.png" alt="" className="mx-auto w-full" />
                        <div className="py-2 px-4">
                            <p className="text-3xl font-BonaNovaRegular py-1">Entertainment</p>
                            <p className="text-15 text-exploresub font-Montserratregular">Music, Dance, Interactive activities, visual & multimedia, Displays, Fireworks</p>
                        </div>
                    </div>
                </div>

                <div className="md:flex block md:w-10/12 w-11/12 mx-auto mt-8">
                    <div className="md:w-2/6 w-full px-2">
                        <img src="/images/venues.png" alt="" className="mx-auto w-full" />
                        <div className="py-2 px-4">
                            <p className="text-3xl font-BonaNovaRegular py-1">Videography</p>
                            <p className="text-15 text-exploresub font-Montserratregular">photography, videography, social media, live streaming, Albums</p>
                        </div>
                    </div>
                    <div className="md:w-2/6 w-full  px-2">
                        <img src="/images/catering.png" alt="" className="md:mt-12 mt-0 mx-auto w-full" />
                        <div className="py-2 px-4">
                            <p className="text-3xl font-BonaNovaRegular py-1">Catering</p>
                            <p className="text-15 text-exploresub font-Montserratregular">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy</p>
                        </div>
                    </div>
                    <div className="md:w-2/6 w-full px-2">
                        <img src="/images/venues.png" alt="" className="mx-auto w-full" />
                        <div className="py-2 px-4">
                            <p className="text-3xl font-BonaNovaRegular py-1">Grooming</p>
                            <p className="text-15 text-exploresub font-Montserratregular">Makeup Artists, Mehandi Artists, Nail Saloon, Assistant</p>
                        </div>

                        <div className="flex justify-end md:mr-4 mr-0 md:mt-12 mt-0">
                            <img src="/images/arrow-next.svg" alt="Next Arrow" className="md:w-16 w-8 md:h-16 h-8 cursor-pointer" />
                        </div>

                    </div>
                </div>
            </div>

        </>
    );


};

export default ExploreServices;