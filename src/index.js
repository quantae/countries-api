import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from './context/themecontext';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import CountryDetailPage from './pages/country-detail/CountryDetailPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: 'countries/:countryName',
    element: <CountryDetailPage/>
  }

])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
      
    </ThemeProvider>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
