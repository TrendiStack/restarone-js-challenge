import { useState } from "react";
import Nav from "./components/nav/Nav";
import Feed from "./components/feed/Feed";
import Sidebar from "./components/sidebar/Sidebar";
import Details from "./components/details/Details";
import Help from "./components/help/Help";

function App() {
  const [userNum, setUserNum] = useState(null);

  return (
    <div className="App">
      <div className="flex">
        <Sidebar />
        <div className="w-full">
          <Nav />
          <Feed setUserNum={setUserNum} />
        </div>
        <Details userNum={userNum} />
      </div>
      <Help />
    </div>
  );
}

export default App;
