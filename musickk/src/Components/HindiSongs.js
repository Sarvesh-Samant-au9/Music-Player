import React from "react";
import Wrapp from "./Wrapp";

const HindiSongs = (props) => {
  console.log(props);
  const dataState = props.location.state;
  return (
    <>
      <Wrapp data={dataState} />
    </>
  );
};

export default HindiSongs;
