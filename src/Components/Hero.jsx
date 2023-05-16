const Hero = () => {
  return (
    <>
      <div className="mt-44 px-20 flex justify-between items-center">
        <div>
          <h1 className="font-bold text-5xl mb-2">TASK MASTER</h1>
          <p className="font-medium text-slate-700 text-2xl">
            Simplify Your Todo List
          </p>
          <button className="rounded-full bg-tm-fourth px-4 py-3 mt-4 text-white text-xl font-bold hover:bg-black">
            Get Started
          </button>
        </div>
        <img src="./src/assets/cuate.png" alt="Hero-Img" className="w-72"/>
      </div>
    </>
  );
};

export default Hero;
