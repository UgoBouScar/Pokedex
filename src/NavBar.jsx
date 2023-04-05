import React from "react";


function NavBar(props) {
  const handlePlusClick = () => {
    props.handlePlusClick();
    alert(props.shout);
  };

  const handleMinusClick = () => {
    props.handleMinusClick();
    alert(props.shout);
  };
  return (
    <div style={{ 
      position: "fixed", 
      top: "0", 
      width: "100%", 
      backgroundColor: props.color 
    }}>
      
    
      {props.index > 0 ? (
        <button onClick={handleMinusClick}>Précèdent</button>
      ) : null}
      {props.index < 4 ? (
        <button onClick={handlePlusClick}>Suivant</button>
      ) : null}
   
   </div>
  );
}

export default NavBar;    
