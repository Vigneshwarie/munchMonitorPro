import GreetingContainer from "../components/GreetingContainer"
import PetNameContainer from "../components/PetNameContainer"
import React from "react";

const styles = {
    container: {
      background: "#E7D045",
      color: "black",
      border: "#E7D045",
      margin: "20px",
      padding:"20px"
    
    }
  };

export default function Feeder() {
    return (
        <>
            <br />
            <GreetingContainer style={ styles.container} className="container" />
            <br />
            <PetNameContainer style={ styles.container} className="container" />
        </>
    )
}