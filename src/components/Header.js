import React from "react";
import "./../img/booch.jpeg";

function Header() {
  return (
    <React.Fragment>
      <div>
        <container>
          <h1>🌇 Welcome to Booch City! 🌇</h1>
          <h3>Handcrafted kombucha from our heart and soul to yours 💜</h3>

          <img src={require("./../img/booch.jpeg")} />
        </container>
      </div>
    </React.Fragment>
  );
}

export default Header;
