import React from 'react';
import axios from 'axios'

import './MainApp.css'

class MainApp extends React.Component {
    state = {quote: ''};

    /* Life Cycle Method that is instantaneous with render */
    componentDidMount() {
        this.getAdvice()
    }
  
    getAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
        .then((response) => {

            const {advice} = response.data.slip
            
            this.setState({advice})
        })
        .catch((error) => {
            console.log(error)
        });
    }


    render() {
        const {advice}= this.state
        return (
            <div className="mainapp">
            <div class="card">
            <h2 class="card__title">{advice}</h2>
            <p class="card__apply">
              <button className="button" onClick={this.getAdvice}>New Quote!</button>
            </p>
            </div>
      </div>

        );
    }
}

export default MainApp;

