function App() {
  return (
    <div className="bg-red">
      <div className="w-[40%] m-auto">
        <div className=" bg-[#21222A] ">
          <img src="/assets/header.png" alt="" />
        </div>
        <div className="bg-[#282D35] py-10 bg-[url('assets/reactjs-icon2.png')]">
          <div className="w-[90%] mx-auto  text-white">
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
      </div>
    </div>
  );
}

export default App;
