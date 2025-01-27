import { StrictMode } from 'react'
import { createElement } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const root = createRoot(document.getElementById('root'))

function Header() {
  return (
    <header>
      <h1>My React App</h1>
    </header>
  )
}

function Mytitle() {
  return (
    <div>
      <Header />
      <img src="src\assets\react.svg" width={40} />
      <h1>Fun fact about react</h1>
      <nav>
        <ul className="nav-list">
          <li>React is a library</li>
          <li>React is declarative</li>
          <li>React is component-based</li>
        </ul>
      </nav>
    </div>
  )
}

function Mylist() {
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
    <Mytitle />
    <Mylist />
  </main>
)