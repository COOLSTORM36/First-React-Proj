// import { StrictMode } from 'react'
// import { createElement } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const root = createRoot(document.getElementById('root'))

function Header() {
  return (
    <header className='header'>
      <img src="src/assets/react.svg" width={40} />
      <nav>
        <ul className="nav-list">
          <li className='nav-list-item'>Pricing</li>
          <li className='nav-list-item'>About</li>
          <li className='nav-list-item'>Contact</li>
        </ul>
      </nav>
    </header>
  )
}

function MyTitle() {
  return (
    <div>
      <Header />
      <h1>Fun fact about react</h1>
    </div>
  )
}

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