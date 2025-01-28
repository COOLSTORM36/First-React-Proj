// import { StrictMode } from 'react'
// import { createElement } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import MyTitle from './MyTitle'
import App from './App.jsx'

const root = createRoot(document.getElementById('root'))

function MyList() {
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  )
}

root.render(
  <main>
    <MyTitle />
    <MyList />
  </main>
)