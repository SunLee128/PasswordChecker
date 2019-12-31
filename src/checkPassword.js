export default function checkPassword(props) {
  var results = {
    score: 0, 
    hasLowerCase: false, 
    hasUpperCase: false,
    hasNumber: false,
    hasNonAlphaNumeric: false,
    isOver8Char: false,
    isOver12Char: false
  }
  if (props.search(/[a-z]/) !== -1){
    results.hasLowerCase = true
  }
  if (props.search(/[A-Z]/) !== -1){
    results.hasUpperCase = true
  }
  if (props.search(/[0-9]/) !== -1){
    results.hasNumber = true
  }
  if (props.search(/[^a-zA-Z0-9]/g) !== -1){
    results.hasNonAlphaNumeric = true
  }
  if (props.length > 8){
    results.isOver8Char = true
  }
  if (props.length > 12){
    results.isOver12Char = true
  }

  results.score = Object.values(results).filter(value => value===true).length

  return results
}
