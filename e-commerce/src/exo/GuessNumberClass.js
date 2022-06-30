import React from 'react';

class GuessNumberClass extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      nbOK: this.getRandomInt(10),
      msg: 'rien',
    }
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  calcul(event) {
    //  event.preventDefault()    inutile ici
    let nb = Number(event.target.value)
    if (nb === this.state.nbOK) {
      this.setState({ msg: 'trouvé' })
    }
    else if (nb < this.state.nbOK) {
      this.setState({ msg: 'trop petit' })
    }
    else {
      this.setState({ msg: 'trop grand' })
    }
  }

  render() {
    console.log(this.state.nbOK)
    return (
      <div>
        <form>
          <label htmlFor='nb'>nb : </label>
          <input onChange={this.calcul.bind(this)} type="number" id="nb" name="nb"></input>
        </form>

        {this.state.msg !== 'rien' &&
          <div>{this.state.msg}</div>
        }
        <p>super quizz</p>
      </div>)
  }
}
export default GuessNumberClass;


/*
<form onSubmit={this.calcul.bind(this)}>
<div>
          <button type='submit' >Essaie encore une fois</button>
        </div>*/
