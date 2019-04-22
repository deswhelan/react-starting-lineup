import React from 'react'

import Player from './Player'

class Midfielders extends React.Component { 

  constructor(props) {
    super(props)
  }


    render() {
        if(this.props.midfielders){
            return (
                <div className="pitch-area" id="midfielders">
                    {this.props.midfielders.map((midfielder, i) => <Player player={midfielder}  key={i}/>)}
                </div>
        )} else {
            return <div></div>
        }
    }
}

export default Midfielders