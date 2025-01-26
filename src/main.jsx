import { StrictMode } from 'react'
import { createElement } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const root = createRoot(document.getElementById('root'))

function MyAwesomeNavbar() {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

root.render(
  <div>
    <MyAwesomeNavbar />
  </div>
)

// .render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )