import { useEffect, useState } from 'react';
import { letters } from './helpers/letters';
import './App.css';
import { HangImage } from './components/HangImage';

function App() {

  const [ word ] = useState('COMPUTADORA');
  const [ hiddenWord, setHiddenWord ] = useState('_ '.repeat( word.length ));
  const [ attempts, setAttempts ] = useState(0);
  const [ lose, setLose ] = useState( false );
  const [ won, setWon ] = useState( false );


  // determinar si el jugador perdio
  useEffect( () => {
    if( attempts >= 9 ) {
      setLose( true );
    }
  }, [ attempts ]);

  // Determinar si la persona gano
  useEffect(() =>{
    //console.log(hiddenWord)
    const currentHiddenWord = hiddenWord.split(' ').join('');
    if( currentHiddenWord === word ){
      setWon( true );
    }
  }, [ hiddenWord ])

  const checkLetter = (letter: string) => {

    if( lose ) return;
    
    if( !word.includes(letter) ) {
      setAttempts( Math.min( attempts + 1, 9 ) );    
      return;
    }

    const hiddenWordArray = hiddenWord.split(' ');

    for(let i = 0; i<word.length; i++) {
      if( word[i] === letter ) {
        hiddenWordArray[i] = letter;
      }
    }

    setHiddenWord(hiddenWordArray.join(' '));
  }
  
  return(
    <div className="App">
      
      {/* Imagenes */}
      <HangImage imageNumber={ attempts }/>

      {/* Palabra oculta */}
      <h3>{ hiddenWord }</h3>

      {/* Contador intentos */}
      <h3>Intentos: { attempts }</h3>

      {/* Mensaje si perdio */}
      {
        ( lose ) 
          ? <h2>Perdiste! { word }</h2>
          : ''
      }

      {/* Mensaje si gano */}
      {
        ( won ) 
          ? <h2>Ganaste! { word }</h2>
          : ''
      }


      {/* Botones letra */}
      {
        letters.map( (letter) =>(
          <button 
            onClick={ () => checkLetter (letter)}
            key={ letter }>
            { letter }
          </button>
        ))
      }
    </div>
  )
};

export default App;
