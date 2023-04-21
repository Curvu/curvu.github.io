import Button from '../Button/button';
import './header.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useState } from 'react';

const Header = (props) => {
  const [darkMode, setDarkMode] = useState(false);

  const addDarkMode = () => {
    const body = document.querySelector('body');
    body.classList.toggle('dark');
    setDarkMode(!darkMode);
  }

  return (
    <>
      <div className='Header'>
        <a className='source-tag' href='https://github.com/Curvu/curvu.github.io'><i className='bi bi-github'/> Source</a>
        <Button onClick={() => window.print()} label='Print' icon='bi bi-printer'/>
        <div className='gap' />
        <Button onClick={addDarkMode} label='Theme' icon={darkMode ? 'bi bi-brightness-high-fill point' : 'bi bi-moon-stars-fill point'}/>
      </div>
    </>
  )
}

export default Header;