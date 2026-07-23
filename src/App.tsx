import { Header } from './components/Header'
import About from './sections/about'
import TimeLine from './sections/timeline'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Certifications from './sections/Certifications'
import Contacts from './sections/contacts'
import TimelineDetail from './sections/timeline/components/TimelineDetail'
import ProjectDetail from './sections/Projects/components/ProjectDetail'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'

const App = () => {
  return (
    <div className="page-bg">
      <BrowserRouter>
        <ScrollToTop />

        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <About />
                <TimeLine />
                <Skills />
                <Projects />
                <Certifications />
                <Contacts />
              </>
            }
          />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/timeline/:id" element={<TimelineDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
