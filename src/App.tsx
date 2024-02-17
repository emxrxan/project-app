import React, { useEffect, useState } from 'react';
import { Route, Routes, Navigate, NavLink, useLocation } from 'react-router-dom';
import { NavigationBar } from './NavigatinoBar';
import { HaushaltRechner } from './pages/HaushaltRechner/HaushaltRechner';
import { Login } from './pages/Login/Login';
import { MovieApp } from './pages/MovieApp/MovieApp';
import { TicTacToe } from './pages/Tic-Tac-Toe/TicTacToe';
import { Twitter } from './pages/Twitter/Twitter';
import { VokabelTrainer } from './pages/VokabelTrainer/VokabelTrainer';
import { Stack, StackItem } from '@fluentui/react';
import { Home } from './pages/Home/Home';
import { StackItemContentStyle, StackStyle, linkStyle, stacklinkStyle } from './AppStyle';
import { NotFound } from './pages/NotFound/NotFound';
import { pagesList } from './NavigationBarPages';

function App() {
  const [pageFound, setPageFound] = useState<boolean>(true)
  const location = useLocation()
  const currentPath = location.pathname

  useEffect(() => {
    const found = pagesList.find((page) => page === currentPath.replace("/",""))
    if(!found){
      setPageFound(false)
    } else {
      setPageFound(true)
    }
  }, [currentPath])
  return (
    <Stack {...StackStyle} >
      <StackItem>
        {pageFound && <Home />}
      </StackItem>
      <StackItem>
        <NavigationBar />
      </StackItem>
      <StackItem {...StackItemContentStyle}>
        <Routes>
          <Route path='/' element={<Navigate to="/HaushaltRechner" />} />
          <Route path='/HaushaltRechner' Component={HaushaltRechner} />
          <Route path='/Login' Component={Login} />
          <Route path='/MovieApp' Component={MovieApp} />
          <Route path='/TicTacToe' Component={TicTacToe} />
          <Route path='/Twitter' Component={Twitter} />
          <Route path='/VokabelTrainer' Component={VokabelTrainer} />
          <Route path='*' Component={NotFound} />
        </Routes>
      </StackItem>
      <StackItem {...stacklinkStyle}>
        <strong>Link: </strong>
        <NavLink className={linkStyle} to="https://google.de" target='_blank'>https://google.de</NavLink>
      </StackItem>
    </Stack>
  );
}

export default App;
