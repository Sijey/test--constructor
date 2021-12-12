'use strict';
document.body.firstChild.remove();

const App  = () => {
  const [liked, setLiked] = React.useState(false)


  if (liked) {
    return <p className='text-field'>Будущий конструктор</p>
  }

  return (
      <button className='main-button' onClick={() => setLiked(true) }>
        Like
      </button>
  );
}

let domContainer = document.querySelector('#constructor');
ReactDOM.render(<App />, domContainer);