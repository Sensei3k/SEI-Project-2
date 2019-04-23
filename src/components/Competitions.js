import React from 'react'
//import CompetitionCard from './CompetitionCard'
import 'bulma'

class Competitions extends React.Component {
  constructor() {
    super()

    this.state = {
      footballData: [],
      classLoaded: false,
      sevenComps: [2001, 2021, 2002, 2019, 2014, 2017, 2003]
    }

    //this.filterData = this.filterData.bind(this)
  }

  componentDidMount() {
    fetch('http://api.football-data.org/v2/competitions/', {
      method: 'GET', //get request
      headers: {
        'X-Auth-Token': '4c4008915f684e03bb77b3e11617f599'
      }
    })
      .then(res => res.json())
      .then(data => this.setState({ footballData: data.competitions }))
      .then(() => this.setState({ classLoaded: true }))

    //if (this.classLoaded) this.filterData()

  }



  // filterData() {
  //   // array of this.state.footballData.id
  //   //const sevenComps = ['2001', '2021', '2002', '2019', '2014', '2017', '2003']
  //
  //   this.state.footballData.filter( (element) => {
  //     if (this.state.sevenComps.contains(element.id)) return element
  //   })
  //
  //   console.log('Hello World')
  //
  //   //this.setState({ classLoaded: true })
  // }

  render() {
    {this.state.classLoaded && console.log(this.state.footballData[20].id)}
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            {this.state.classLoaded && this.state.footballData.map(competition => {
              if (this.state.sevenComps.includes(competition.id)) {
                return (
                  <div key={competition.id} className="column is-multiline is-one-quarter-desktop is-one-third-tablet">
                    <div><h3>{competition.name}</h3></div>
                  </div>
                )
              }
            }
            )}

          </div>

        </div>
      </section>




    )

  }

}

export default Competitions
