import React from 'react';
import ReactDOM from 'react-dom';
import "normalize.css";
import './index.css';
import Cardapio from './pages/Cardápio';

ReactDOM.render(
  <React.StrictMode>
    <Cardapio />
  </React.StrictMode>,
  document.getElementById("root")
)


// const root = ReactDOM.createRoot(      //está diferente da página do curso
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <Cardapio />
//   </React.StrictMode>
// );