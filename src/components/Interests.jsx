import React from 'react'
import { useState, useEffect } from 'react';
import useInterestStore from '@/stores/InterestInfo';

function Interests({onSelected, selected, type}) {
    const [selectedIds, setSelectedIds] = useState(selected);
    const {interestsInfo} = useInterestStore();
    const [interests, setInterests] = useState([]);

    useEffect(()=>{
        const getInterests = () =>{
            setInterests(interestsInfo);
        };  
        getInterests();
    },[interestsInfo]);

    useEffect(() =>{
        const initselectedIds = () =>{
            setSelectedIds(selected);
        }
        initselectedIds();
    },[selected])

    const onClick = (id) =>{
        setSelectedIds(()=>{
            if(selectedIds.includes(id)){
                return selectedIds.filter(selectedId => selectedId !== id);
            }
            else{
                return [...selectedIds, id];
            }
        })
        onSelected(id);
    }
    const cssConfig = {
        signUp : "flex gap-[12px] mobile:gap-[7px] w-full justify-center flex-wrap mt-3 text-white text-[14px] mobile:text-[10px]",
        profile : "flex gap-[20px] mobile:gap-[4px] mobile:text-[10px] flex-wrap"
    }
    const css = cssConfig[type];
  return (
    <>
        <ul className={css}>
            {interests.map((item)=>{
                const itemClass = selectedIds.includes(item.id)
                ? 'font-bold bg-[#495057] rounded-full px-[12px] py-[4px] mobile:px-[16px] mobile:py-[6px] text-white'
                : 'font-bold bg-[#ADB5BD] rounded-full px-[12px] py-[4px] mobile:px-[16px] mobile:py-[6px]';
                return(
                    <li key={item.id}>
                        <button onClick={()=>onClick(item.id)} 
                        type='button' 
                        className={itemClass}>{item.name}</button>
                    </li>
                )
            })}
        </ul>
    </>
  )
}

export default Interests