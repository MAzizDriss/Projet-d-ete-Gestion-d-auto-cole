import React from "react";
import { AiFillCloseCircle } from 'react-icons/ai';
import "./pop.scss";


const Modal = ({ show, close, name }) => {
    return (
      <div>
       {
       show ?
       
       <div
          className="modalContainer" 
        >
          <div className="modal" >
            <header className="modal_header">
              <h2 className="modal_header-title"> Supprimer un candidat </h2>
              <div className="close" >
              <AiFillCloseCircle alt="close" onClick={()=> close()}/>              
              </div>
            </header>
            <main className="modal_content">
            Êtes-vous sûr de vouloir supprimer {name} ?
            </main>
            <footer className="modal_footer">
              <button className="modal-close" onClick={()=> close()}>
                Non
              </button>
              <button className="submit">Oui</button>
            </footer>
          </div>
        </div>
        : null
       }
      </div>
    );
  };
  
  export default Modal;