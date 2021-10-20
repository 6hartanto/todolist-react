import React from 'react';

function List(props) {
  return (
    <ul>
      { props.lists.map((list, index) => <li key={index}>{list}</li>) }
    </ul>
  )
}

export default List;