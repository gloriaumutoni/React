function App() {
  return (
    <div className="">
      <div className="w-[37%] m-auto mt-28">
        <div className=" bg-[#21222A] ">
          <img src="/assets/header.png" alt="" />
        </div>
        <div className="bg-[#282D35] flex py-10">
        <div className="">
          <div className="ml-16 text-white flex-1">
            <h2 className=" text-4xl font-bold">Fun facts about React</h2>
            <ul className="list-disc list-inside marker:text-blue-300 marker:text-2xl">
              <li>Was first released in 2013</li>
              <li>Was originally created by Jordan Walke</li>
              <li>Has well over 100K stars on GitHub</li>
              <li>Is maintained by Meta</li>
              <li>
                Powers thousands of enterprise apps, including mobile apps
              </li>
            </ul>
          </div>
         
        </div>
        <img src="assets/reactjs-icon2.png" alt="" />
        </div>
       
      </div>
    </div>
  );
}

export default App;
