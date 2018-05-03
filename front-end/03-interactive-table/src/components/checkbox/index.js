import React, { Component } from 'react';
import './style.sass'

class Checkboxes extends Component {

  constructor(props) {
    super(props);
  } 

  render() {
    const { data } = this.props;
    const animalType = data.reduce((acc, current) => {
      if (acc.indexOf(current.animal) === -1) {
        acc.push(current.animal);
      }
      return acc;
    }, []);

    return (
      <div>
        <h3>Animals</h3>
          {animalType.length > 0 &&
            animalType.map((item, index) => (
              <div key={index}>
                <label>
                  <input
                    type="checkbox"
                    onChange={() => this.props.setFilter("animal", item)}
                    value={item}
                    /> {item} 
                </label>
                <br />
              </div>
            ))
          }
      </div>
    );
  }
};

export default Checkboxes;
