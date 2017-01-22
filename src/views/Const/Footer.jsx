import React from 'react'
import { Link } from 'react-router'

//When Adding Logic Use A Class
// export default class Footer extends React.Component{
//   render() {
//     return(
//       <div>
//         <footer>
//           <ul>
//             <li><Link to='https://github.com/joshcode16' target="_blank">Joshua</Link></li>
//             <li><Link to='https://github.com/cdheffner' target="_blank">Daniel</Link></li>
//             <li><Link to='https://github.com/colshacol' target="_blank">Colton</Link></li>
//             <li><Link to='https://github.com/denzuko' target="_blank">Spencer</Link></li>
//           </ul>
//         </footer>
//       </div>
//     )
//   }
// }

//Functional Way Adding Logic Is Optional
// export default function Footer() {
//   return (
//     <div>
//       <footer>
//         <ul>
//           <li><Link to='https://github.com/joshcode16' target="_blank">Joshua</Link></li>
//           <li><Link to='https://github.com/cdheffner' target="_blank">Daniel</Link></li>
//           <li><Link to='https://github.com/colshacol' target="_blank">Colton</Link></li>
//           <li><Link to='https://github.com/denzuko' target="_blank">Spencer</Link></li>
//         </ul>
//       </footer>
//     </div>
//   )
// }

const Footer = () =>{
   return (
    <div>
      <footer>
      <span className="ftitle">LOA</span>
        <ul>
          <li><Link to='https://github.com/joshcode16' target="_blank">Joshua</Link></li>
          <li><Link to='https://github.com/cdheffner' target="_blank">Daniel</Link></li>
          <li><Link to='https://github.com/colshacol' target="_blank">Colton</Link></li>
          <li><Link to='https://github.com/denzuko' target="_blank">Spencer</Link></li>
        </ul>
      </footer>
    </div>
  )
}
export default Footer