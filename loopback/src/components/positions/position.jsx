import React from 'react';
// import { Link } from 'react-router-dom';

class PositionIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	positions: ["Software Engineer", "UX Design", "Digital Marketing", "Product Manager", "Sales",
       "Business Development", "Frontend Web Developer",
        "FullStack Web Developer", "Backend Engineer"]
    };
    this.posList = this.posList.bind(this);
  }



  posList() {
    let res = this.state.positions.map((position, idx) => {
      return ( <li className="question-list">
        <div>
            {position}
         </div>
       </li>);
  });
  return res;
}




  render() {
      return (
        <div className="">
          <div className="">
            <div className="">
              {this.posList()}
            </div>
          </div>
        </div>



      );
  }



}
export default PositionIndex;
