import { StrictMode } from 'react'
import { createElement } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const root = createRoot(document.getElementById('root'))

function MyAwesomeNavbar() {
  return (
    // <nav className='navbar navbar-expand-sm navbar-dark bg-dark' aria-label='Main navigation'>
    //   <div className='container-fluid'>
    <div>
          <h1>Home</h1>
          <h2>About</h2>
          <h2>Contact</h2>
    </div>
    // </nav>
  )
}

function MainComponent() {
  return <h1>My Awesome App</h1>
}

root.render(
  <div>
    <MyAwesomeNavbar />
    <MainComponent />
    <h1>Hello World</h1>
  </div>
)

// .render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )