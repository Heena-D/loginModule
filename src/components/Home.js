import React from "react";

function Home(props) {
  return (
    <div>
      <p>
        Hi {props.location ? props.location.name : "user"} !. You have
        successfully logged in.
      </p>
    </div>
  );
}

export default Home;
