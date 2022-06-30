import SimpleButton from './SimpleButton'

function Welcome(props) {
  return (
    <div>
      <h1 className='welcome centrer'>
        Welcome
      </h1 >
      <div>
        <SimpleButton
          action={() => { props.setPage('admin') }}
          txt={'Interface Admin'}
          style={'rouge'}
        />
      </div>
      <div>
        <SimpleButton
          action={() => { props.setPage('clt') }}
          txt={'Interface Client'}
          style={'bleu'}
        />
      </div >
    </div >
  )
}

export default Welcome;

/*

  */