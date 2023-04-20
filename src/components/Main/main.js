import Container from '../Container/container';
import Sidebar from '../Sidebar/sidebar';
import './main.css';

const Main = (props) => {
  return (
    <div className='Main'>
      <header className='me'>
        <h1>Filipe Alexandre Rodrigues</h1>
        <p>Software developer and current student pursuing a degree in computer engineering.</p>
      </header>
      <div className='content'>
        <Sidebar />
        <Container />
      </div>
    </div>
  )
}

export default Main;