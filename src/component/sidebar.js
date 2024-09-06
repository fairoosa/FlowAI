// import React, { Component } from 'react';


// class Sidebar extends Component {
//     render() {
//         // Dummy user data
//         const users = [
//             { id: 1, name: 'Alice Johnson', email: 'alice.johnson@example.com', img: 'https://via.placeholder.com/50' },
//             { id: 2, name: 'Bob Smith', email: 'bob.smith@example.com', img: 'https://via.placeholder.com/50' },
//             { id: 3, name: 'Charlie Brown', email: 'charlie.brown@example.com', img: 'https://via.placeholder.com/50' },
//             { id: 4, name: 'Diana Prince', email: 'diana.prince@example.com', img: 'https://via.placeholder.com/50' },
//             { id: 5, name: 'Ethan Hunt', email: 'ethan.hunt@example.com', img: 'https://via.placeholder.com/50' },
//             { id: 6, name: 'Fiona Glenanne', email: 'fiona.glenanne@example.com', img: 'https://via.placeholder.com/50' },
//             { id: 7, name: 'George Stark', email: 'george.stark@example.com', img: 'https://via.placeholder.com/50' },
//             { id: 8, name: 'Hannah Montana', email: 'hannah.montana@example.com', img: 'https://via.placeholder.com/50' },
//             { id: 9, name: 'Isaac Newton', email: 'isaac.newton@example.com', img: 'https://via.placeholder.com/50' },
//             { id: 10, name: 'Jessica Jones', email: 'jessica.jones@example.com', img: 'https://via.placeholder.com/50' }
//         ];

//         return (
//             <div className='sidebar-container'>
//                 <button className="toggle-button" onClick={this.props.toggleSidebar}>
//                     {this.props.showSidebar ? 'Close Sidebar' : 'Open Sidebar'}
//                 </button>
//                 <div className={`sidebar ${this.props.showSidebar ? 'sidebar-visible' : ''}`}>
//                     <div className="user-list">
//                         {users.map(user => (
//                             <div key={user.id} className="user-item">
//                                 <img src={user.img} alt={user.name} className="user-img" />
//                                 <div className="user-info">
//                                     <h3 className="user-name">{user.name}</h3>
//                                     <p className="user-email">{user.email}</p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

// export default Sidebar;






// import './App.css';
// import React,{Component} from 'react';
// import Sidebar from './component/sidebar';
// import Comingsoon from './component/comingsoon';




// class App extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//         showSidebar : false
//     };
//   }
  
//   toggleSidebar = () => {
//     this.setState((prevState) => ({
//         showSidebar : !prevState.showSidebar
//     }));
//   };

//   render() {
//     return (
//       <div className="App">
//         <Sidebar 
//           showSidebar={this.state.showSidebar}
//           toggleSidebar={this.toggleSidebar} />
//           {/* <Comingsoon /> */}
//           </div>
//     );
//   }
// }

// export default App;

