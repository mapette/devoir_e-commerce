import './display.css'

function BandeauHaut(props) {
  return (
    <div className="centrer bandeau">
      <header>
        <a href="" onClick={event => { props.setPage(0) }}>retour page d'accueil</a>
        <div>
          <div>
            compte : {props.userName}
          </div>
          <div>
            profil : {props.page}
          </div>
        </div>
      </header>
    </div >
  )
}

export default BandeauHaut;
