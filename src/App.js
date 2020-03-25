import React, { Component } from 'react';
import Table from './Table';

class App extends Component {
  render() {

    const characters = [
      {
        name: 'Charlie',
        job: 'Best Bud',
      },
      {
        name: 'Mac',
        job: 'Mascot'
      }
    ]

    return (
      <div className='container'>
        <Table characterData={characters} />
      </div>
    )
  }
}

export default App;