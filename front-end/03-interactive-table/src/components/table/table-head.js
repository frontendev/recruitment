import React from 'react';

const TableHead = (props) => {
    return (
        <thead>
            <tr>
                {(props.columns).map((column, index) => (
                    <td key={index}>
                      {column}
                    </td>
                )
                )}
            </tr>
        </thead>
    );
  };

export default TableHead;
