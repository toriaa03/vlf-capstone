// import React, { Component } from 'react'

// export default class Dropdown extends Component {
//   constructor(props) {
//       super(props)

//       this.state = {
//           more: [
//             {
//                 id: 0,
//                 title: 'Sign in',
//                 selected: false,
//                 key: 'more'
//             },
//             {
//                 id: 1,
//                 title: 'Messaging',
//                 selected: false,
//                 key: 'more'
//             },
//             {
//                 id: 2,
//                 title: 'Contact',
//                 key: 'more'
//             },
//             {
//                 id: 3,
//                 title: 'Profile',
//                 key: 'more'
//             },
//             {
//                 id: 4,
//                 title: 'Settings',
//                 key: 'more'
//             }
//           ],
//           listOpen: false,
//           headerTitle: this.props.title
//       }
//     }

// handleClickOutside() {
//     this.setState({
//         listOpen: false
//     })
// }

// toggleList() {
//     this.setState(prevState => ({
//         listOpen: !prevState.listOpen
//     }))
// }

//   render() {
//       const{list} = this.props
//       const{listOpen, headerTitle} = this.state
//       return (
//         <div className="dd-wrapper">
//         <div className="dd-header" onClick={() => this.toggleList()}>
//                 <div className="dd-header-title">{headerTitle}</div>
//                 {listOpen
//                   ? <FontAwesome name="angle-up" size="2x"/>
//                   : <FontAwesome name="angle-down" size="2x"/>
//                 }
//             </div>
//         {listOpen && <ul className="dd-list">
//                {list.map((item) => (
//                  <li className="dd-list-item" key={item.id} >{item.title}</li>
//                 ))}
//               </ul>}
//             </div>
//       )
//   }
// }
