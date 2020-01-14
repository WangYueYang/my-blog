import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      react: 'React'
    }
  }

  componentDidMount() {
    console.log('did mount')
  }

  render() {
    const { props, state } = this
    return (
      <div>
        Hello {state.react} {props.webpack}
      </div>
    )
  }
}

export default App