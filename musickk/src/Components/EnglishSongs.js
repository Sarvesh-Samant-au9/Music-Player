
import React from "react";
import Wrapp from "./Wrapp";

const EnglishSongs = (props) => {
  // console.log(props);
  return <Wrapp data={props.location.state} />;
};

export default EnglishSongs;
