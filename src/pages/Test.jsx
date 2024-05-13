<<<<<<< HEAD
import React from "react";
import Login from "./Login";
import { useState, useRef } from "react";
=======
import React from 'react'
import Signin from './Signin';
import { useState, useRef } from 'react';
>>>>>>> 5428fa00303f9df19086d6ce39114da81324fc61
function Test() {
  const [showModal, setShowModal] = useState(false);
  const modalBackground = useRef();

  return (
    <>
      <div>
        <button onClick={() => setShowModal(true)} className="bg-slate-300">
          모달 테스트
        </button>
      </div>
<<<<<<< HEAD
      {showModal && (
        <div
          className="w-full h-full fixed top-0 left-0 flex justify-center items-center bg-blend-darken bg-black bg-opacity-50"
          ref={modalBackground}
          onClick={(e) => {
            if (e.target === modalBackground.current) {
              setShowModal(false);
            }
          }}
        >
          <Login />
=======
      {
        showModal &&
        <div className='w-full h-full fixed top-0 left-0 flex justify-center items-center bg-blend-darken bg-black bg-opacity-50' ref={modalBackground} onClick={e => {
          if(e.target === modalBackground.current){
            setShowModal(false);
          }
        }}>
          <Signin />
>>>>>>> 5428fa00303f9df19086d6ce39114da81324fc61
        </div>
      )}
    </>
  );
}

export default Test;
