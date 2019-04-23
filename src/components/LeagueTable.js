import React from 'react'

class LeagueTable extends React.Component {
  constructor(props) {
    super(props)

    this.state ={
      code: props.location.state.code
    }

  }

  // componentDidMount() {
  //   fetch('http://api.football-data.org/v2/competitions/', {
  //     method: 'GET', //get request
  //     headers: {
  //       'X-Auth-Token': '4c4008915f684e03bb77b3e11617f599'
  //     }
  //   })
  //     .then(res => res.json())
  //     .then(data => this.setState({ footballData: data.competitions }))
  //     .then(() => this.setState({ classLoaded: true }))
  // }

  render() {
    console.log(this.state.code)
    
    return (
      <div className="content">League Table</div>
    )
  }

}

export default LeagueTable
