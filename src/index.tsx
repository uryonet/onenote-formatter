import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { MsalProvider } from '@azure/msal-react'
import reportWebVitals from './reportWebVitals'
import { msalInstance } from './lib/azureConfig'
import store from './app/store'
import App from './App'
import './style/index.scss'

ReactDOM.render(
  <React.StrictMode>
    <MsalProvider instance={msalInstance}>
      <Provider store={store}>
        <App />
      </Provider>
    </MsalProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
