import getStringedDate from "@/util/get_stringed_date";
import React from "react";
function StudyPostExp({
  postValues,
  setRecruitCount,
  setProceed,
  setDeadLine,
}) {
  const deadLine = getStringedDate(new Date(postValues.deadLine));

  return (
    <div className="w-full mt-[62px] mobile:mt-[42px]">
      <ul className="flex flex-col gap-[32px] mobile:gap-[12px]">
        <li>
          <div className="flex gap-[42px] items-center">
            <span className="text-[20px] mobile:text-[15px] font-bold">
              모집 인원
            </span>
            <select
              onChange={setRecruitCount}
              value={postValues.recruitCount}
              className="border border-gray_5 rounded-[5px] px-[4px] py-1 mobile:px-[2px] mobile:py-[3px] mobile:text-[12px]"
            >
              {Array.from({ length: 5 }, (_, index) => (
                <option key={index} value={index + 1}>
                  {index + 1}명
                </option>
              ))}
            </select>
          </div>
        </li>
        <li>
          <div className="flex gap-[42px] items-center">
            <span className="text-[20px] mobile:text-[15px] font-bold">
              모집 기간
            </span>
            <input
              type="date"
              value={deadLine}
              onChange={setDeadLine}
              className="border border-gray_5 px-[4px] py-1 rounded-[5px] mobile:py-[2px] mobile:text-[12px]"
            />
          </div>
        </li>
        <li>
          <div className="flex gap-[42px] items-center">
            <span className="text-[20px] mobile:text-[15px] font-bold">
              진행 방식
            </span>
            <select
              className="border border-gray_5 px-[4px] py-1 mobile:text-[12px] mobile:py-[3px] rounded-[5px]"
              onChange={setProceed}
              value={postValues.proceed}
            >
              <option value="오프라인">오프라인</option>
              <option value="온라인">온라인</option>
              <option value="온/오프라인">온/오프라인</option>
            </select>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default StudyPostExp;
