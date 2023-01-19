import './App.css';
import { StyleButton, StyledButtonWithHover, StyledH1WithHover } from './Components/Styled/Button';
import { StyleDiv } from './Components/Styled/StyledDiv';
import { H1 } from './Components/Styled/H1';

function App() {
  return (
    <div className="App">
      <div className='button_box'>
        <StyleButton>Live</StyleButton>
        <StyleButton variant='primary'>Github</StyleButton>
      </div>
      <StyledButtonWithHover>Hover me</StyledButtonWithHover>
      <H1 color='red'>styled component</H1>
      <StyledH1WithHover color='green'>styled h1 with hover</StyledH1WithHover>
      <StyleDiv>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, nisi?
          <a href="#">link inside p</a>
        </p>
        <a href="#">Link</a>
      </StyleDiv>
    </div>
  );
}

export default App;
