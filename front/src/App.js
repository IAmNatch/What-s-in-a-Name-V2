import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BigInput} from './components';
import {Sign, TrafficLight} from './svg';
import {nameCheck} from './lib';
import {youtubeHelper, facebookHelper, bandcampHelper, soundcloudHelper} from './lib/searchHelper';

class App extends Component {
    state = {
        currentText: '',
        bands: {
            youtube: 'unknown',
            bandcamp: 'unknown',
            facebook:  'unknown',
            soundcloud: 'unknown'
        },
        finalBand: undefined,
    };

    handleInputChange = (evt) => {
        this.setState({
            currentText: evt.target.value,
            errorMessage: '',
            bands: {
                youtube: 'unknown',
                bandcamp: 'unknown',
                facebook:  'unknown',
                soundcloud: 'unknown'
            }
        })
    }

    handleSubmit = async (evt) => {
        evt.preventDefault();
        let result = nameCheck(this.state.currentText);

        if (!result) {
            this.setState({
                errorMessage: "Make sure your submission has at least 5 letters!"
            })
        }
        else {
            this.setState({
                finalBand: result
            })
            this.handleResponse(await facebookHelper(result));
            this.handleResponse(await soundcloudHelper(result))
            this.handleResponse(await bandcampHelper(result))
            this.handleResponse(await youtubeHelper(result))
        }
    }

    handleEmptySubmit = (evt) => {
        evt.preventDefault();
        if (this.state.finalBand) {
            this.setState({
                finalBand: ''
            })
        }
        else {
            this.setState({
                errorMessage: 'Please supply a band name',
            });
        }
    }

    handleResponse = (responseObject) => {
        let bands = {...this.state.bands, ...responseObject}
        this.setState({
            bands: bands
        })
        console.log('response set!');
    }

  render() {
    const submitHandler = this.state.currentText ? this.handleSubmit : this.handleEmptySubmit;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">What's in a name?</h1>
        </header>
        <div className="App">
            <BigInput handleSubmit={submitHandler} handleInputChange={this.handleInputChange} currentText={this.state.currentText} errorMessage={this.state.errorMessage} placeHolder='Type Band Name Here' />
            <Sign className="sign" finalBand={this.state.finalBand}/>
            <TrafficLight className='light' bands={this.state.bands}/>
        </div>
    </div>
    );
  }
}

export default App;
