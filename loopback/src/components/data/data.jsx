import React from 'react';
import {getTwitterInsights} from '../../util/util';

class AnalysisContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	screenName: ""
    };
    this.getTwitterData = this.getTwitterData.bind(this);
    this.onGetTwitterDataResponse = this.onGetTwitterDataResponse.bind(this)
    this.onGetTwitterDataJson = this.onGetTwitterDataJson.bind(this)
  }

  getTwitterData(screenName){
      console.log(this.state.screenName);
    getTwitterInsights(this.state.screenName)
    .then(this.onGetTwitterDataResponse)
  }
  onGetTwitterDataResponse(res){
    console.log(res);
    res.json().then(this.onGetTwitterDataJson)
  }
  onGetTwitterDataJson(j){
    console.log("GOT JSON FROM RES")
    console.log(j)
  }

  update(property) {
    return event => this.setState({[property]: event.target.value})
  }




  render() {
      return (
        <form className="form-comment">
           <h1 className="new-comment">Enter A Twitter Account</h1>
           <label>
             <input
               className="comment-input"
               ref="body"
               placeholder="Account Name"
               onChange={this.update('screenName')}
               required/>
           </label>
           <button className="new-button" onClick={this.getTwitterData} >Submit Account</button>
         </form>

      );
  }



  }
  export default AnalysisContent;
