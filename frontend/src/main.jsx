import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter, 
  createRoutesFromElements,
  Route,
  RouteProvider,
} from 'react-router-dom'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element = {App />}>

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
    <RouteProvider router = { router } />
  </React.StrictMode>,
)
