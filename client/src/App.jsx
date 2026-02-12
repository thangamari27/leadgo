import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LeadFormPage from './pages/LeadFormPage';
import LeadTablePage from './pages/LeadTablePage';
import NotFoundPage from './pages/NotFoundPage';
import { LeadProvider } from './context/LeadContext';
import Header from './components/ui/Header';
import Footer from './components/ui/Footer';

function App() {
  return (
    <BrowserRouter>
      <LeadProvider>
        <Header />
        <Routes>
          <Route path='/' element={<LeadFormPage />} />
          <Route path='/leads' element={<LeadTablePage />} />

          {/* 404 page */}
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </LeadProvider>
    </BrowserRouter>
  )
}

export default App