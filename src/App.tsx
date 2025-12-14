import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            React + Vite SPA
          </h1>
          <p className="text-xl text-gray-400 mb-2">
            Running on Cloudflare Pages via cf-deploy
          </p>
          <p className="text-sm text-gray-500">
            Domain: <span className="text-cyan-400">react-vite-spa.orbty.app</span>
          </p>
        </header>

        <nav className="flex justify-center gap-4 mb-16">
          <Link to="/" className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 rounded-lg font-medium transition">
            Home
          </Link>
          <Link to="/about" className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg font-medium transition">
            About
          </Link>
          <Link to="/features" className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg font-medium transition">
            Features
          </Link>
        </nav>

        <section className="bg-gray-800/50 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">🛠️ Stack</h2>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div>
              <h3 className="font-semibold text-cyan-400 mb-2">Framework</h3>
              <ul className="space-y-1 text-gray-400">
                <li>• React 19</li>
                <li>• TypeScript</li>
                <li>• Vite</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-green-400 mb-2">Styling</h3>
              <ul className="space-y-1 text-gray-400">
                <li>• TailwindCSS 4</li>
                <li>• CSS Modules</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-purple-400 mb-2">Routing</h3>
              <ul className="space-y-1 text-gray-400">
                <li>• React Router 7</li>
                <li>• Client-side routing</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-gray-800/50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">✨ SPA Features</h2>
          <ul className="grid md:grid-cols-2 gap-2 text-gray-400">
            <li>✅ Client-side routing</li>
            <li>✅ Static assets on Cloudflare CDN</li>
            <li>✅ Fast global delivery</li>
            <li>✅ Zero cold starts</li>
          </ul>
        </section>

        <footer className="text-center mt-16 text-gray-500 text-sm">
          <p>Deployed with cf-deploy • Powered by Cloudflare Pages</p>
        </footer>
      </div>
    </div>
  )
}

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <Link to="/" className="text-cyan-400 hover:underline mb-8 block">← Back to Home</Link>
        <h1 className="text-4xl font-bold mb-4">About</h1>
        <p className="text-gray-400">
          This is a React + Vite SPA deployed to Cloudflare Pages using cf-deploy.
          It demonstrates client-side routing with React Router.
        </p>
      </div>
    </div>
  )
}

function Features() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <Link to="/" className="text-cyan-400 hover:underline mb-8 block">← Back to Home</Link>
        <h1 className="text-4xl font-bold mb-4">Features</h1>
        <ul className="space-y-2 text-gray-400">
          <li>⚡ Lightning fast builds with Vite</li>
          <li>🎨 Modern styling with TailwindCSS</li>
          <li>🔀 Client-side routing with React Router</li>
          <li>☁️ Global CDN delivery via Cloudflare</li>
        </ul>
      </div>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
