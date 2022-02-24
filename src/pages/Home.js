import React from "react";
// import Card from '../components/Card'
import Navbar from "../components/Navbar";
// import Searchbar from '../components/Searchbar'
// import Slider from '../components/Slider'
import CustomCarousel from "../components/CustomCarousel";

import MessagesList from "../components/chatbox/MessageList";
import AddMessage from "../components/AddMessage";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div style={{ width: "70%", margin: "100px auto" }}>
        <MessagesList />

        <CustomCarousel />
        <div style={{ margin: "50px auto" }}>
          <AddMessage />
        </div>
      </div>
    </div>
  );
};

export default Home;
