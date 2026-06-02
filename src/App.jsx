import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import LandingPage from './pages/LandingPage'
import { useTheme } from './hooks/useTheme'

export default function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <MainLayout theme={theme} toggleTheme={toggleTheme}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </MainLayout>
  )
}
