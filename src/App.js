
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.scss';
import { createText, findFirstSymbols, findFirstUniqSymbol } from './store/appSlice';

function App() {

  const dispatch = useDispatch();
  let [text, setText] = useState('');
  const firstSymbols = useSelector(state => state.appSlice.firstSymbols);
  const firstUniqSymbol = useSelector(state => state.appSlice.firstUniqSymbol)
  

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

  return (
    <div className="App">
      <div className='app__wrapper'>
        <div className='app__inner'>
          <textarea className='app__inputField' value={text} onChange={inputValue} />
          <div>first symbols: {firstSymbols}</div>
          <div>first symbol: {firstUniqSymbol}</div>
          <div className='app__buttons'>
            <button className='app__btn app__findBtn' onClick={startFindSymbols} >find first symbols</button>
            <button className='app__btn app__findBtn' onClick={showFirstUniqSymbol} >find first symbol</button>
            <button className='app__btn app__resetBtn'>reset</button>
        </div>
        </div>
        
      </div>
    </div>
  );
}

export default App;
