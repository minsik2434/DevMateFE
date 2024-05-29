import React from "react";

function PageButton() {
  return (
    <div className="mobile:hidden tablet:block">
      <ol className="flex justify-center gap-5 text-sm mt-24 mb-64">
        <li className="flex justify-center items-center border px-2 py-0.5">
          <button>이전페이지</button>
        </li>
        <li className="flex justify-center items-center border w-8 h-8  px-2 py-0.5">
          <button>&lt;</button>
        </li>
        <li className="flex justify-center items-center border w-8 h-8 px-2 py-0.5">
          <button>1</button>
        </li>
        <li className="flex justify-center items-center border w-8 h-8 px-2 py-0.5">
          <button>2</button>
        </li>
        <li className="flex justify-center items-center border w-8 h-8 px-2 py-0.5">
          <button>3</button>
        </li>
        <li className="flex justify-center items-center border w-8 h-8 px-2 py-0.5">
          <button>4</button>
        </li>
        <li className="flex justify-center items-center border w-8 h-8 px-2 py-0.5">
          <button>5</button>
        </li>
        <li className="flex justify-center items-center border w-8 h-8 px-2 py-0.5">
          <button>6</button>
        </li>
        <li className="flex justify-center items-center border w-8 h-8 px-2 py-0.5">
          <button>7</button>
        </li>
        <li className="flex justify-center items-center border w-8 h-8 px-2 py-0.5">
          <button>8</button>
        </li>
        <li className="flex justify-center items-center border w-8 h-8 px-2 py-0.5">
          <button>9</button>
        </li>
        <li className="flex justify-center items-center border w-8 h-8 px-2 py-0.5">
          <button>10</button>
        </li>
        <li className="flex justify-center items-center border w-8 h-8 px-2 py-0.5">
          <button>&gt;</button>
        </li>
        <li className="flex justify-center items-center border px-2 py-0.5">
          <button>다음페이지</button>
        </li>
      </ol>
    </div>
  );
}

export default PageButton;
