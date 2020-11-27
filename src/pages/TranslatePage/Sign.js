const isValidChar = ch => ch.match(RegExp(/[a-z]/i))
const isWhiteSpace = ch => ch.match(RegExp(/\s/))

const Sign = (props) => {
  if (isValidChar(props.char)) {
    return <img className="sign" src={`/sprites/hand-signs/${props.char}.png`} alt={props.char} /> // valid hand sign (a-z)

  } else if (isWhiteSpace(props.char)) {
    return <span className="spacer"></span> // space
  }

  if (props.checked) {
    return null
  }
  
  return <span>{props.char}</span> // other char

}
export default Sign
