import './display.css'

function MapContacts(props) {
  //<div className=  console.log(props.name)
  return (
    <div className='en-ligne'>
      {props.contacts.map(elem =>
        <div className='contact' key={elem.name}>
          <div>
            {elem.name}
          </div>
          <div>
            {elem.tel}
          </div>
          <div>
            {elem.mail}
          </div>
          <p></p>
        </div>
      )}
    </div>
  )
}

function FicheContacts(props) {
  return (
    <div>
      <p></p>
      {MapContacts(props)}
      <p></p>
    </div>
    
  );
}

export default FicheContacts;

