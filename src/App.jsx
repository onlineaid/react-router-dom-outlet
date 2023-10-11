import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom'
import ReactPdf from './components/ReactPdf'
import { PDFDownloadLink } from '@react-pdf/renderer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      Main app
      <Link to="/userDashboard"> User </Link>
      {/* <ReactPdf /> */}

      <PDFDownloadLink document={<ReactPdf />} fileName='invoice'>
        {({ loading }) => (loading ? <button>loading ...</button> : <button>Download</button>)}
      </PDFDownloadLink>
      <div>React pdf</div>
    </>
  )
}

export default App
