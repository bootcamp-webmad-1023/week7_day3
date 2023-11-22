import './App.css'
import HomePage from './HomePage/HomePage'
import ProjectsPage from './ProjectsPage/ProjectsPage'
import AboutPage from './AboutPage/AboutPage'
import Navbar from './Navbar/Navbar'
import NotFoundPage from './NotFoundPage/NotFoundPage'
import ProjectDetailsPage from './ProjectDetailsPage/ProjectDetailsPage.jsx'

import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div className="App">

      <Navbar />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/sobre-mi' element={<AboutPage />} />
        <Route path='/proyectos' element={<ProjectsPage />} />
        <Route path='/proyectos/:project_id' element={<ProjectDetailsPage />} />

        <Route path='*' element={<NotFoundPage />} />
      </Routes>

    </div>
  )
}

export default App
