import Header from './components/Header'
import Inicio from './components/Inicio'
import Skills from './components/Skills'
import Footer from './components/Footer'

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white selection:bg-indigo-500/30">
      <Header />
      
      <main className="grow">
        <Inicio />
        <Skills />
      </main>

      <Footer />
    </div>
  )
}

export default App