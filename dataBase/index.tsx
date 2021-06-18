import React, {useEffect, useState} from 'react';
// import axios from 'axios';
// import base_url from '../dataBase/index';

// export default function Home() {
//   const [data, setData] = useState([]);


//   useEffect(() => {
//     fetchAPIStrapi();
//   }, [])

//   function fetchAPIStrapi(){
//     axios.get('base_url/mczinkbackoffice')
//     .then(response => {
//       setData(response.data)
//       console.log(response.data)
//     })
//     .catch(err => console.log(err))
//   }


//   // return (
//   //   <div>
//   //     {data.map((d) => (
//   //       <img src={${base_url}${d.imagem.url}} alt="test" />
//   //     ))}
//   //   </div>
//   // )
// }