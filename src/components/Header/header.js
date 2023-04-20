import Button from '../Button/button';
import './header.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Header = (props) => {
  return (
    <>
      <div className='Header'>
        <a className='source-tag' href='hello'><i className="bi bi-github"/> Source</a>
        <Button onClick={() => window.print()} label='Print' icon='bi bi-printer'/>
        <div className='gap' />
        <Button onClick={() => console.log('hello, world')} label='Theme' />
      </div>
    </>
  )
}

export default Header;