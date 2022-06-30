import './display.css'

function SimpleButton(props) {

  function determineClass(style) {
    if (style == 'rouge') {
      return 'btn btn-danger margin-10 '
    }
    else if (style == 'bleu') {
      return 'btn btn-info margin-10 '
    }
  }


  return (
    <div className='centrer'>
      <button
        className={determineClass(props.style)}
        onClick={props.action}>{props.txt}</button>
    </div>
  )
}

export default SimpleButton;
