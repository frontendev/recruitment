import React, { Component } from 'react';
import { petService } from '../../service';
import Table from '../../components/table';
import Search from '../../components/search';
import Checkbox from '../../components/checkbox';
import Slider from '../../components/range-slider';
import './style.sass';

class InteractiveTable extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
      filter: {

      },
    };
    this.setFilter = this.setFilter.bind(this);
  }
  componentDidMount() {
    this.fetchData();
  }
  
  fetchData = async () => {
    try {
      const data = await petService.fetch();
      this.setState({ data });
    } catch (error) {
      console.log('ERROR: ', error);
    }
  }

  setFilter(key, value, type = "acc") {
    console.log(key, value);
    const { filter } = this.state;
    if (type === "acc") {
      if (!(key in filter)) filter[key] = [];
      if (filter[key].indexOf(value) === -1) filter[key].push(value);
      else filter[key] = filter[key].filter(f => f !== value);
    } else {
      filter[key] = value;
    }
    this.setState({
      filter
    });
  }

  render() {
    const showData = this.state.data.filter((item) => {
      const filters = Object.keys(this.state.filter);
      if (filters.length === 0) return true;
      return filters.filter(element => {
        if (Object.prototype.toString.call(this.state.filter[element]) === "[object Array]") {
          if (this.state.filter[element].length === 0) return true;
          return this.state.filter[element].indexOf(item[element]) > -1;
        }
        else if (typeof this.state.filter[element] === "number") {
          return item[element] < this.state.filter[element];
        } else {
          return item[element].indexOf(this.state.filter[element]) > -1;
        }
      }).length > 0;
    });
    console.log("show data", showData, this.state.filter);

    return (
      <div className="container">
        <h1>Interactive table</h1>
        <section className="interactive-table">
            <aside>
              <h2>Filters</h2>
              <section>
                <Search
                  data={this.state.data}
                  filter={this.state.filter}
                  setFilter={this.setFilter}
                />  
                <Checkbox
                  data={this.state.data}
                  filter={this.state.filter}
                  setFilter={this.setFilter}
                />
                <Slider 
                  filter={this.state.filter}
                  setFilter={this.setFilter}
                />
              </section>
            </aside>
            <Table data={showData} />
        </section>
      </div>
    )
  }
}

export default InteractiveTable;
