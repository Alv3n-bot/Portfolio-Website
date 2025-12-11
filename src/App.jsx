import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './Pages/LandingPage'
import TaskManager from './Pages/TaskManager'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <Routes>
        {/* Home route with your main landing page */}
        <Route path="/" element={
          <>
            <LandingPage />
            <Portfolio />
            <Footer />
          </>
        } />
        
        {/* Task Manager route */}
        <Route path="/task-manager" element={<TaskManager />} />
      </Routes>
    </Router>
  )
}

export default App