import React from 'react';

const Header = ({ text, age }) => {
  return (
    <div>
      <p>{text}</p>
      <p>{age}</p>
    </div>
  );
};

export default Header;

// import React, { Component } from 'react'

// export default class Header extends Component {
//   render() {
//     return (
//       <div>
//         <header>
//             {this.props.text}
//         </header>
//       </div>
//     )
//   }
// }
