import React, { Component } from 'react';
import { petService } from '../../service';
import './style.sass';

class InteractiveTable extends Component {

  constructor(props){
    super(props);
    this.state = {
      order: true
    };
  }
  
  showEmpty() {
    return(
      <table className="ui-table">
        <thead>
          <tr>
            <th>Nothing to show</th>
          </tr>
        </thead>
      </table>
    )
  };

  showTable(data) {
    const columns = Object.keys(data[0]);
    const content = data;
    return (
      <table className="ui-table">
        {this.tableHead(columns, content)}
        {this.tableBody(columns, content)}
      </table>
    )
  };
  
  columnSort(column) {
    const { data } = this.props;
    const { order } = this.state;
    data.sort((a, b) => {
      return order
        ? a[column] - b[column]
        : b[column] - a[column]
    });
    this.setState({
      data,
      order: !order,
    });
  }

  tableHead(columns) {
    return (
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index} onClick={() => this.columnSort(column)}>
              {column}
            </th>
          ))}
        </tr>
      </thead>
    );
  };

  tableBody(columns, content) {
    return (
      <tbody>
        {content.map((row, index) => (
          <tr key={index}>
            {columns.map((column, index) => (
                <td key={index}>{row[column]}</td>
              ))}
          </tr>
        ))}
      </tbody>
    );
  };

  render() {
    const { data } = this.props;
    return data.length > 0
      ? this.showTable(data)
      : this.showEmpty();
  }
}

export default InteractiveTable;