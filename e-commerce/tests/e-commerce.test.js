import {determineClass} from "../src/Simplebutton"

let sum = require("../src/sum");
//import sum from '../src/sum'
describe(' jklsjkfq', () => {
  it('adds 2 + 2 to equal 4', () => {
    expect(sum(2, 2)).toBe(4);
  })
})


//   import './display.css'

// function SimpleButton(props) {

//   function determineClass(style) {
//     if (style == 'rouge') {
//       return 'btn btn-danger margin-10 '
//     }
//     else if (style == 'bleu') {
//       return 'btn btn-info margin-10 '
//     }
//   }


//   return (
//     <div className='centrer'>
//       <button
//         className={determineClass(props.style)}
//         onClick={props.action}>{props.txt}</button>
//     </div>
//   )
// }

// export default SimpleButton;