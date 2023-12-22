const Banner = () => {
  return (
    <div className=" px-8 lg:h-[600px] max-w-[1200px] mx-auto  lg:flex items-center justify-between">
      <div className="text-center lg:text-left flex-1">
        <h1 className="text-4xl lg:text-5xl text-gray-800  font-bold leading-none">
          TASK <br /> MANAGEMENT
        </h1>
        <p className="text-xl lg:text-2xl mt-6 font-light">
          Effortless task mastery awaits! Elevate productivity with our
          intuitive platform. Seamlessly organize, collaborate, and conquer
          goals. Your journey to efficient task management starts here. Try now
          for streamlined success!
        </p>
        <p className="mt-8 md:mt-12">
          <button
            type="button"
            className="
            py-4 px-12
            
            bg-teal-500
            hover:bg-teal-600
            rounded
            text-white"
          >
            Let’s Explore
          </button>
        </p>
      </div>
      <div className="flex-1">
        <img className="" src="https://i.ibb.co/qrXNNQW/header-2x.png" alt="" />
      </div>
    </div>
  );
};

export default Banner;
