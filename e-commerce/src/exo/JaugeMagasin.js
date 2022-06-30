import React from 'react';

class JaugeMagasin extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      nbClick: 0,
      nom: "moi",
      nomCollegue: "momo"
    }
  }

  jauge(sens) {
    if (this.state.nbClick === 10 & sens === 'inc') {
      alert("la salle est pleine")
    } else if (this.state.nbClick === 0 & sens === 'dec') {
      alert("la salle est vide")
    }
  }

  changeCollegue() {
    if (this.state.nomCollegue === "momo") {
      this.setState({
        nomCollegue: "marc"
      })
    } else {
      this.setState({
        nomCollegue: "momo"
      })
    }
  }

  incremente(eventData) {
    this.changeCollegue()
    if (this.state.nbClick < 10) {
      this.setState({
        nbClick: this.state.nbClick + 1,
      })
    }
    this.jauge('inc')
  }
  decremente(eventData) {
    this.changeCollegue()
    if (this.state.nbClick > 0) {
      this.setState({
        nbClick: this.state.nbClick - 1,
      })
    }
    this.jauge('dec')
  }

  componentDidUpdate() {
    console.log("coucou")
  }

  initSalle() {
    console.log('yes')
    this.setState({
      nbClick: 0,
    })
  }

  render() {
    return (<div>
      <h1>
        nom collègue : {this.state.nomCollegue}
      </h1>
      <h1>
        nom : {this.state.nom}
      </h1>
      <p>
        <button id='bt1'>{this.state.nbClick}</button>
      </p>
      <p>
        <button id='incremente' onClick={this.incremente.bind(this)}>incrémente</button>
        <button id='decremente' onClick={this.decremente.bind(this)}>décrémente</button>
      </p>

      <p>  
        <button id='dehors' onClick={this.initSalle.bind(this)}>tout le monde dehors</button>
      </p>
    </div >)
  }
}

export default JaugeMagasin;

/*
 //   <p>   // façon de se passer du bind
  //      <button id='dehors' onClick={() => this.setState({ nbClick: 0, })}>
   //       tout le monde dehors</button>
     // </p>
*/
/* <h1>
        msg : {this.props.msg}
      </h1>*/

        /////// fonction anomyne
        // <button id='bt2' onClick={() =>
        //   this.setState({
        //     nbClick: this.state.nbClick + 1,
        //     nomCollegue: "marc"
        //   })
        // }

        ////// avec ...this.state avant, sert à rien mais bon...
        // this.setState({ ...this.state,
        //       nbClick: this.state.nbClick + 1,
        //       nomCollègue : "marc"})

        ////// si on veut afficher : sinon l'affichage se fait AVANT la maj (histoire d'asynchrone)
        // this.setState(() => {
        //   let x = {
        //     nbClick: this.state.nbClick + 1,
        //     nomCollègue: this.state.nomCollègue + "marc"
        //   }
        //   console.log(x)
        //   return x
        // })
        //}
