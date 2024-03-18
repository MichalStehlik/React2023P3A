import './App.css'
import DelayDisplay from './components/DelayDisplay'
//import IPFetcher from './components/IPFetcher'
import React, { Suspense } from 'react'
const IPFetcher = React.lazy(() => import('./components/IPFetcher'))

const App = () => {
  return (
    <>
    <Suspense fallback={<p>Loading ...</p>}>
      <IPFetcher ip="185.59.210.82" />
    </Suspense>
    <Suspense fallback={<p>Loading ...</p>}>
      <DelayDisplay />
    </Suspense>
    </>
  )
}

export default App
