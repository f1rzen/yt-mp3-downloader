import { Theme, ThemePanel } from '@radix-ui/themes'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import '@radix-ui/themes/styles.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Theme appearance="light" accentColor="plum" grayColor="sand" panelBackground="solid" radius="large" scaling="95%">
      <App />
      <ThemePanel />
    </Theme>
  </React.StrictMode>,
)
