import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/home'
import Head from 'components/head'
const PageRoute = () => (
  <Router>
    <Route path="/" component={Home}>
    </Route>
  </Router>
)

class App extends React.Component {
  render() {
    return (
      <div className="home">
        <Head />
        <PageRoute />
      </div>
    )
  }
}

export default App