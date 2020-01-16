import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from 'pages/home'
import Head from 'components/head'
import Foot from 'components/foot'

import 'assets/css/index.less'

const PageRoute = () => (
  <Router>
    <Route path="/" component={Home}>
    </Route>
  </Router>
)

class App extends React.Component {
  render() {
    return (
      <div className="blog-body">
        <Router>
          <Head />
          <PageRoute />
          <Foot />
        </Router>
      </div>
    )
  }
}

export default App