import { IStackSlots, Stack } from '@fluentui/react';
import { NavigationBar } from './Navigation/NavigationBar';
import { Navigate, Route, Routes } from 'react-router-dom';
import React from 'react';
import { HaushaltRechner } from './pages/HaushaltRechner/HaushaltRechner';
import { Home } from './pages/Home/Home';

const AppStackStyles: IStackSlots = {
  root: {
    style: {
      width: '100%',
      height: '100%'
    }
  }
}

const App: React.FC = () => { 
  return <Stack {...AppStackStyles}>
      <NavigationBar />
      <Routes>
          <Route path='/' element={<Navigate to="/Home" />} />
          <Route path='/Home' Component={Home}/>
          <Route path='/HaushaltRechner' Component={HaushaltRechner}/>
          <Route path='/Login' />
          <Route path='/MovieApp' />
          <Route path='/TicTacToe' />
          <Route path='/Twitter' />
          <Route path='/VokabelTrainer' />
      </Routes>
  </Stack>
}

export default App
