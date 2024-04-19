import { Stack } from '@fluentui/react';
import { NavigationBar } from './Navigation/NavigationBar';
import { Navigate, Route, Routes } from 'react-router-dom';
import React from 'react';

const App: React.FC = () => { 
  return <Stack>
      <NavigationBar />
    <Stack.Item>
      <Routes>
          <Route path='/' element={<Navigate to="/Home" />} />
          <Route path='/HaushaltRechner' />
          <Route path='/Login' />
          <Route path='/MovieApp' />
          <Route path='/TicTacToe' />
          <Route path='/Twitter' />
          <Route path='/VokabelTrainer' />
      </Routes>
    </Stack.Item>
  </Stack>
}

export default App
