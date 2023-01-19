import React from 'react';
import lawyer from "../assets/lawyer.webp"

const Bennar = () => {
    return (
		<div style={{background:`url(${lawyer})`,backgroundPosition:'center',backgroundAttachment:'fixed',backgroundSize:'cover'}} class="relative h-screen">
		<div class="absolute bg-gray-900 bg-opacity-70 w-full px-8 flex flex-col justify-center h-screen items-center space-y-6">
			<h1 class="text-white text-3xl md:text-5xl text-center font-bold">SOLVE YOUR URGENT LEGAL ISSUES</h1>
			<h5 class="text-white text-center text-lg px-10 md:px-44 font-medium">We always try to find out what is the desired outcome of the clients from the services we are rendering to them by best lawyers in Bangladesh and we plan our course of action to meet the desired goal of the client.</h5>
			
		</div>
	</div>
    );
};

export default Bennar;