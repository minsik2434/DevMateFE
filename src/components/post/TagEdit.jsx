// import xButton from "@/assets/xButton.png";
// import React from "react";
// import { useRef } from "react";
// function TagEdit({ onTags, tags, style }) {
//   const tagRef = useRef();
//   const removeLastTag = () => {
//     const updatedTags = tags.slice(0, -1);
//     onTags(updatedTags);
//   };

//   const removeTag = (index) => {
//     const updatedTags = tags.filter((_, i) => i !== index);
//     onTags(updatedTags);
//   };

//   const addTags = (e) => {
//     e.preventDefault();
//     if (tags.length >= 4) {
//       e.preventDefault();
//       return;
//     }
//     const inputValue = e.target.value;
//     if (e.key === "Enter" && inputValue !== "" && !tags.includes(inputValue)) {
//       e.preventDefault();
//       e.target.value = "";
//       onTags([...tags, inputValue]);
//       console.log(tags);
//     }
//   };

//   const handleKeyDown = (e) => {
//     const inputValue = e.target.value;
//     if (e.key === "Backspace" && inputValue === "") {
//       removeLastTag();
//     }
//   };
//   return (
//     <div
//       className="w-full cursor-text"
//       onClick={() => {
//         tagRef.current.focus();
//       }}
//     >
//       <ul className={`flex flex-wrap gap-[10px] items-center ${style}`}>
//         {tags.map((tag, index) => {
//           return (
//             <li key={index} className="text-nowrap">
//               <div className="bg-gray_8 text-gray_0 pl-[10px] pr-[7px] py-[3px] mobile:text-[14px] gap-[5px] flex rounded-lg">
//                 <span>{tag}</span>
//                 <button
//                   className="w-[14px] mobile:w-[10px]"
//                   onClick={() => removeTag(index)}
//                   type="button"
//                 >
//                   <img src={xButton} className="w-full"></img>
//                 </button>
//               </div>
//             </li>
//           );
//         })}

//         <li>
//           <label className="sr-only" htmlFor="tag">
//             tag
//           </label>
//           <input
//             id="tag"
//             onKeyUp={(e) => {
//               {
//                 addTags(e);
//               }
//             }}
//             ref={tagRef}
//             onKeyDown={handleKeyDown}
//             placeholder="태그를 입력하세요(최대 4개)"
//             className="focus:outline-none placeholder:text-[16px] w-[180px] text-[16px]"
//           />
//         </li>
//       </ul>
//     </div>
//   );
// }

// export default TagEdit;

import xButton from "@/assets/xButton.png";
import React from "react";
import { useRef } from "react";

function TagEdit({ onTags, tags, style }) {
  const tagRef = useRef();

  const removeLastTag = () => {
    const updatedTags = tags.slice(0, -1);
    onTags(updatedTags);
  };

  const removeTag = (index) => {
    const updatedTags = tags.filter((_, i) => i !== index);
    onTags(updatedTags);
  };

  const addTags = (e) => {
    const inputValue = e.target.value;
    if (e.key === "Enter") {
      e.preventDefault();
      if (inputValue !== "" && !tags.includes(inputValue) && tags.length < 4) {
        e.target.value = "";
        onTags([...tags, inputValue]);
      }
    }
  };

  const handleKeyDown = (e) => {
    const inputValue = e.target.value;
    if (e.key === "Backspace" && inputValue === "") {
      removeLastTag();
    } else {
      addTags(e);
    }
  };

  return (
    <div
      className="w-full cursor-text"
      onClick={() => {
        tagRef.current.focus();
      }}
    >
      <ul className={`flex flex-wrap gap-[10px] items-center ${style}`}>
        {tags.map((tag, index) => (
          <li key={index} className="text-nowrap">
            <div className="bg-gray_8 text-gray_0 pl-[10px] pr-[7px] py-[3px] mobile:text-[14px] gap-[5px] flex items-center rounded-lg mobile:rounded-md">
              <span>{tag}</span>
              <button
                className="w-[14px] mobile:w-[10px]"
                onClick={() => removeTag(index)}
                type="button"
              >
                <img src={xButton} className="w-full" alt="Remove tag" />
              </button>
            </div>
          </li>
        ))}

        <li>
          <label className="sr-only" htmlFor="tag">
            tag
          </label>
          <input
            id="tag"
            onKeyDown={handleKeyDown}
            ref={tagRef}
            placeholder="태그를 입력하세요(최대 4개)"
            className="focus:outline-none placeholder:text-[16px] w-[180px] text-[16px]"
          />
        </li>
      </ul>
    </div>
  );
}

export default TagEdit;
