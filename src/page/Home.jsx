function Home() {
  return (
    <div className="relative">
      <img
        className="w-full brightness-50"
        src="https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Background"
      />
      <div className="absolute inset-0 flex items-center justify-center text-white">
        <div className="text-center">
          <p className="text-[1.5vw]">WELCOME TO</p>
          <h1 className="text-[5vw] font-light">Expense Voyage</h1>
          <p className="text-[1.5vw] font-thin">Trip Planner</p>
          <button className="mt-4 px-7 py-1 bg-white text-[#623E2A] text-[1.5vw] rounded">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
