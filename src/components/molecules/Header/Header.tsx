import React, { FC, useContext } from 'react';
import './Header.css';
import Button from '../../atoms/Button/Button';
import Icon from '../../atoms/Icon/Icon';
import { IoMoon, IoSunny } from 'react-icons/io5';
import { ThemeContext } from '../../../App';

const Header: FC = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="header">
      <h1>devfinder</h1>
      <Button onClick={setTheme} variant="text" className="theme-button">
        {theme === 'dark' ? 'LIGHT' : 'DARK'}
        <Icon size={1} className="theme-icon">
          {theme === 'dark' ? <IoSunny /> : <IoMoon />}
        </Icon>
      </Button>
    </div>
  );
};

export default Header;
