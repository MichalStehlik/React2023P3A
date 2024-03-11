import './App.css'
import { Timer } from './components/Timer';
import { Settings } from './components/Settings';
import Layout from "./components/Layout"
import { useState } from 'react';

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

function App() {
  //const [settings, setIsSettings] = useState<boolean>(false);

  const [thresholdType, setThresholdType] = useState<'minutes' | 'percentage'>('minutes');
  const [thresholdValue, setThresholdValue] = useState<number>(5);
 
  const [testTime, setTestTime] = useState<number>(600);
  const [totalTime, setTotalTime] = useState<number>(testTime);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  function handleSetThresholdType(type: 'minutes' | 'percentage') {
    setThresholdType(type);
  }

  function handleSetThresholdValue(value: number) {
    setThresholdValue(value);
  }

  function handleIsRunning() {
    setIsRunning(x => !x);
  }

  function handleSetTestTime(time: number) {
    setTestTime(time);
  }
/*
  function handleSetIsSettings(){
    setIsSettings(x => !x);
  }
*/
  function handleSetTotalTime(time: number) {
    setTotalTime(time);
  }

  const router = createBrowserRouter(
    /*[
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/settings",
          element: <Settings thresholdValue={thresholdValue} 
            setTotalTime={handleSetTotalTime} 
            setThresholdType={handleSetThresholdType} 
            setThresholdValue={handleSetThresholdValue} 
            setTestTime={handleSetTestTime} 
            setIsRunning={handleIsRunning} 
            isRunning={isRunning} />,
        },
        {
          path: "/",
          element: <Timer ThresholdType={thresholdType} 
          ThresholdValue={thresholdValue}  
          totalTime={totalTime} 
          Name={"Vánoční webování"} 
          isRunning={isRunning} 
          testTime={testTime} 
          setTestTime={handleSetTestTime}/>
        }
      ]
    }   
  ]*/
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="settings" element={
        <Settings thresholdValue={thresholdValue} 
            setTotalTime={handleSetTotalTime} 
            setThresholdType={handleSetThresholdType} 
            setThresholdValue={handleSetThresholdValue} 
            setTestTime={handleSetTestTime} 
            setIsRunning={handleIsRunning} 
            isRunning={isRunning} />} />
      <Route index element={
        <Timer ThresholdType={thresholdType} 
          ThresholdValue={thresholdValue}  
          totalTime={totalTime} 
          Name={"Vánoční webování"} 
          isRunning={isRunning} 
          testTime={testTime} 
          setTestTime={handleSetTestTime}/>
      } />
    </Route>
  )
  );

   return (
      <RouterProvider router={router} />
    )
}

export default App