import React from "react";
import Review from "./Review";

function App() {
  return (
    <main className=" ">
      <div className="flex items-center justify-center mt-20 flex-col gap-5 ">
      <h1 className="text-4xl font-bold  border-b-4 border-indigo-500 ">Our reviews</h1>
      <Review/>
      </div>
      
    </main>
    
  );
}

export default App;
