import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.scss'
import StartPage from './pages/StartPage'
import Cart from './pages/Cart'
import CandyInfo from './pages/CandyInfo'
import Header from './Components/Header'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { fillStock } from './actions/candyActions'

function App() {
  const dispatch = useDispatch();
  const [candies, setCandies] = useState([]);

  useEffect(() => {
    fetch('./public/data.json')
      .then(response => response.json())
      .then(data => setCandies(data))
  }, []);

  useEffect(() => {
    if (candies.length > 0) {
      dispatch(fillStock(candies));
    }
  }, [candies])

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<StartPage />} />
          <Route path='/candyinfo/:id/:name' element={<CandyInfo />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App