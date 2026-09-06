import { useState } from 'react'
import './App.css'
import Exercise1 from './components/Exercise1'

function App() {
  const [tab, setTab] = useState('e1')

  return (
    <>
    <div>
      <button className={`tab ${tab==='e1' ? 'active' : ''}`} onClick={() => setTab('e1')}>Ex 1</button>

      {tab==='e1' && <Exercise1/>}
    </div>
  </>
  )
}

export default App
