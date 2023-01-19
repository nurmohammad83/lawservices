import lawyerchoose from "../assets/lawyerchoose.webp"
import { FaCheckCircle } from "react-icons/fa";
const Choose = () => {
    return (
        <section
        style={{
          background: `url(${lawyerchoose})`,
          backgroundSize: "cover",
          backgroundRepeat: "repeat-y",
        }}
        className="min-h-screen relative mt-8 z-10 py-24 px-8"
      >
        <div className="absolute top-0 left-0 h-full w-full bg-black/70"></div>
        <div className="relative z-30">
        <h2 className="text-5xl font-semibold  text-center text-white mb-8">
          Why Choose Our Services?
        </h2>
        <p className='text-center text-base text-white mb-3'>Buying a used car can be stressful. We’ve got your back. We’ll give you peace of mind and keep you on the road.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 justify-items-center gap-y-8">
          <div className="card max-w-sm text-white hover:bg-gray-500 duration-300 shadow-xl">
            <div className="card-body">
              <h2 className="card-title    font-bold text-2xl">
                <FaCheckCircle />
               
100% Satisfaction
              </h2>
              <p>
              Not satisfied with your purchase? We’ll exchange it for another vehicle of equal or lesser value.
              </p>
            </div>
          </div>
          <div className="card max-w-sm text-white hover:bg-gray-500 duration-300 shadow-xl">
            <div className="card-body">
              <h2 className="card-title font-bold text-2xl">
              <FaCheckCircle/>
                Service Contract Plus
              </h2>
              <p>
              Get added protection for your purchase with three tiers of service including oil changes and roadside assistance.
              </p>
            </div>
          </div>
          <div className="card max-w-sm text-white hover:bg-gray-500 duration-300 shadow-xl">
            <div className="card-body">
              <h2 className="card-title font-bold text-2xl">
              <FaCheckCircle/>
                Accident Protection Plan
              </h2>
              <p>
              Have your remaining debt cancelled in the event your vehicle is stolen or considered a total loss.
              </p>
            </div>
          </div>
          <div className="card max-w-sm text-white hover:bg-gray-500 duration-300 shadow-xl">
            <div className="card-body">
              <h2 className="card-title font-bold text-2xl">
              <FaCheckCircle/>
                Pay Your Way
              </h2>
              <p>
              Choose from several convenient ways to make your payments – so you have control
              </p>
            </div>
          </div>
          <div className="card max-w-sm text-white hover:bg-gray-500 duration-300 shadow-xl">
            <div className="card-body">
              <h2 className="card-title font-bold text-2xl">
              <FaCheckCircle/>
                Reliability
              </h2>
              <p>Reliable, Effective &Technically Advanced Products!</p>
            </div>
          </div>
          <div className="card max-w-sm text-white hover:bg-gray-500 duration-300 shadow-xl">
            <div className="card-body">
              <h2 className="card-title font-bold text-2xl">
              <FaCheckCircle/>
                Excellent Craftsmanship
              </h2>
              <p>
                Industic Engineering has been built on engineering excellence
                crafted through unstinted dedication to quality, innovation and a
                constant objective to serve the global market & decade young
                industry expertise.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Choose;