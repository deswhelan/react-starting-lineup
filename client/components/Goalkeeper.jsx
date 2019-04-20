import React from 'react'
// import { Link } from 'react-router-dom'

class Goalkeeper extends React.Component { 

  constructor(props) {
    super(props);
  }

 
  render() {
    //get the rank name from the match object, which was passed as an argument by the route
    // let rankName = this.props.match.params.rank
    // let rank = this.props.ranks[rankName]

    return (
      <div>
          <p>I'm the goalkeeper!</p>
        {/* <p>welcome to the jungle!</p>
        <ul>
          {rank.map((item, i) => <li key={i}><Link to={`/rank/${rankName}/${item.name}`}>{item.name}</Link></li>)}
        </ul> */}
      </div>


    )
  }
}

export default Goalkeeper