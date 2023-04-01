import React from "react";

function NavBar(props) {
    return (
      <div style={{ 
        position: "fixed", 
        top: "0", 
        width: "100%", 
        backgroundColor: props.color 
      }}>
      
    
      {props.index > 0 ? (
        <button onClick={props.handleMinusClick}>Précèdent</button>
      ) : null}
      {props.index < 4 ? (
        <button onClick={props.handlePlusClick}>Suivant</button>
      ) : null}
   
   </div>
  );
}

export default NavBar;    
