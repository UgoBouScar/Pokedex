function Button(props) {
  return (
    <div>
      <button onClick={props.handleMinusClick}>Précèdent</button>
      <button onClick={props.handlePlusClick}>Suivant</button>
    </div>
  );
}

export default Button;
