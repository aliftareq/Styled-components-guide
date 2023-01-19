import './App.css';
import { StyleButton } from './Components/Styled/Button';
// import { H1 } from './Components/Styled/H1';

function App() {
  return (
    <div className="App">
      <div className='button_box'>
        <StyleButton>Live</StyleButton>
        <StyleButton variant='primary'>Github</StyleButton>
        {/* <H1 color='red'>styled component</H1>
        <H1 color='green'>styled component</H1> */}
      </div>
    </div>
  );
}

export default App;
