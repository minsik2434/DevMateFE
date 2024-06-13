import xButton from "@/assets/xButton.png";
import React from "react";
function TagEdit({ onTags, tags }) {
  const removeLastTag = () => {
    const updatedTags = tags.slice(0, -1);
    onTags(updatedTags);
  };

  const removeTag = (index) => {
    const updatedTags = tags.filter((_, i) => i !== index);
    onTags(updatedTags);
  };

  const addTags = (e) => {
    if (tags.length >= 4) {
      e.preventDefault();
      return;
    }
    const inputValue = e.target.value;
    if (e.key === "Enter" && inputValue !== "" && !tags.includes(inputValue)) {
      e.target.value = "";
      onTags([...tags, inputValue]);
    }
  };

  const handleKeyDown = (e) => {
    const inputValue = e.target.value;
    if (e.key === "Backspace" && inputValue === "") {
      removeLastTag();
    }
  };
  return (
    <>
      <ul className="flex gap-[10px]">
        {tags.map((tag, index) => {
          return (
            <li key={index} className="text-nowrap">
              <div className="bg-gray_2 pl-[10px] pr-[5px] py-[3px] gap-[5px] flex rounded-[5px]">
                <span>{tag}</span>
                <button className="w-[14px]" onClick={() => removeTag(index)}>
                  <img src={xButton} className="w-full"></img>
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      <label className="sr-only" htmlFor="tag">
        tag
      </label>
      <input
        id="tag"
        onKeyUp={(e) => {
          {
            addTags(e);
          }
        }}
        onKeyDown={handleKeyDown}
        placeholder="태그를 입력하세요(최대 4개)"
        className="w-full focus:outline-none placeholder:text-[16px] text-[16px]"
      />
    </>
  );
}

export default TagEdit;
