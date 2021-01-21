import React from "react";
import Wrapp from "./Wrapp";

const TamilSongs = (props) => {
  const dataState = props.location.state;
  console.log(dataState)
  return (
    <>
      <Wrapp data={dataState} />
    </>
  );
};

export default TamilSongs;
