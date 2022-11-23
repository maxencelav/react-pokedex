import React from 'react'
import ErrorBoundary from './error-boundary'
import './App.css'
const PokemonDetail = React.lazy(() => import('./pokemon-detail'))


function App() {
  return (
    <div className="App">
      <h1>Pokémon Search</h1>

    <ErrorBoundary>
      <React.Suspense fallback="Loading Pokémon...">
        <PokemonDetail />
      </React.Suspense>
    </ErrorBoundary>
    </div>
  )
}

export default App
