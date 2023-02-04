
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.scss';
import { createText, findFirstSymbols, findFirstUniqSymbol, deleteData } from './store/appSlice';

function App() {

  const dispatch = useDispatch();
  let [text, setText] = useState('');
  const firstSymbols = useSelector(state => state.appSlice.firstSymbols);
  const firstUniqSymbol = useSelector(state => state.appSlice.firstUniqSymbol);
  
  function inputValue (e) {
    text = e.target.value;
    setText(text);
    dispatch(createText(text));
  }

  function startFindSymbols () {
    dispatch(findFirstSymbols());
  }

  function showFirstUniqSymbol () {
    dispatch(findFirstUniqSymbol());
  }

  function clearApp () {
    setText('');
    dispatch(deleteData());
  }

  return (
    <div className="App">
      <div className='app__wrapper'>
        <div className='app__inner'>
          <textarea className='app__inputField' value={text} onChange={inputValue} />
          <div>
            <p className='app_text'>first symbols:</p> 
            <p className='app_text'>{firstSymbols}</p>
          </div>
            <div>
            <p className='app_text'>first symbol:</p>
            <p className='app_text'>{firstUniqSymbol}</p>
          </div>
          <div className='app__buttons'>
            <button className='app__btn app__findBtn' onClick={startFindSymbols} >find first symbols</button>
            <button className='app__btn app__findBtn' onClick={showFirstUniqSymbol} >find first symbol</button>
            <button className='app__btn app__resetBtn' onClick={clearApp} >reset</button>
        </div>
        </div> 
      </div>
    </div>
  );
}

export default App;
