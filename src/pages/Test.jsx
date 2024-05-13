import React from "react";
import Login from "./Login";
import { useState, useRef } from "react";
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
        </div>
      )}
    </>
  );
}

export default Test;
