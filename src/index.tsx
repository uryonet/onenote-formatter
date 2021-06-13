import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { MsalProvider } from '@azure/msal-react'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { msalInstance } from './lib/azureConfig'

ReactDOM.render(
  <React.StrictMode>
    <MsalProvider instance={msalInstance}>
      <App />
    </MsalProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
