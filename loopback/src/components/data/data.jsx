import React from 'react';
import {getTwitterInsights} from '../../util/util';

class AnalysisContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screenName: "",
      needs: [],
      personality: [],
      values: [],
      tones: [],
      submitting: false,
      error: '',
    };
    this.getTwitterData = this.getTwitterData.bind(this);
  }

  getTwitterData(screenName){
    if(this.state.screenName === ''){
      this.setState({ error: 'Please enter a Screen Name.'})
    } else {
      this.setState({submitting: true}, () => {
        fetch('http://localhost:3000/getInsights', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: {
            screenName,
          }
        })
        .then(response => response.json())
        .then( resJson => {
          console.log(resJson);
          this.setState({
            personality: resJson.personalityInsights.personality,
            needs: resJson.personalityInsights.needs,
            values: resJson.personalityInsights.values,
            tones: resJson.toneAnalysis.document_tone.tone_categories[2].tones,
            submitting: false,
          }, () => {
            console.log('state is now:');
            console.log(this.state);
          })
        });
      });
    }
  }
  update(property) {
    console.log(this.state.screenName);
    return event => this.setState({[property]: event.target.value, needs: [], personality:[], values: [], tones: []})
  }

  render() {
    const buttonText = this.state.submitting ? "Watson On it!" : "Submit Account";
    const errorText = this.state.error === '' ? null : <p style={{color: 'red'}}>{this.state.error}</p>;
      return (
        <div>
           <h1 className="new-comment">Enter A Twitter Account Screen Name:</h1>
           <label>
             <input
               className="comment-input"
               ref="body"
               placeholder="Account Name"
               onChange={this.update('screenName')}
               style={{fontSize: '24px'}}
               required/>
           </label>
           <br />
           <button className="btn" onClick={this.getTwitterData} disabled={this.state.submitting} style={{fontSize: '18px', marginTop: '10px'}}>{buttonText}</button>
           {errorText}
           <div>
             <h3>Personality:</h3>
             {this.state.personality.map(element => {
               return(<p>
                 {element.name}: {Math.round(100*element.percentile)}%
                </p>)
             })}
             <h3>Needs:</h3>
             {this.state.needs.map(element => {
               return(<p>
                 {element.name}: {Math.round(100*element.percentile)}%
                </p>)
             })}
             <h3>Values:</h3>
             {this.state.values.map(element => {
               return(<p>
                 {element.name}: {Math.round(100*element.percentile)}%
                </p>)
             })}
             <h3>Tones:</h3>
             {this.state.tones.map(element => {
               return(<p>
                 {element.tone_name}: {Math.round(100*element.score)}%
                </p>)
             })}
           </div>
        </div>
      );
  }



  }
  export default AnalysisContent;
