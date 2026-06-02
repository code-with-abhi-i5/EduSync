import Navbar from '../sections/Navbar'
import Footer from '../sections/Footer'

export default function MainLayout({ children, theme, toggleTheme }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}
