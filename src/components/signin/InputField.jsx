import React from 'react'
function InputField({id, placeholder, name, type, onChange}) {

  const cssConfig = {
    signIn : "placeholder-[#807f82] text-[14px] mobile:text-[10px] w-full border-[#d1d1d1] border px-[20px] py-[19px] mobile:px-[10px] mobile:py-[8px] rounded-md",
    signUp : "placeholder-[#807f82] w-full border-[#d1d1d1] border px-[30px] py-[14px] mobile:px-[10px] mobile:py-[8px] rounded-md"
  }
  const typeConfig = {
    text: "text",
    pw : "password"
  }

  const [cssGroup, inputTypeKey] = type.split('_');
  const inputType = typeConfig[inputTypeKey];
  const css = cssConfig[cssGroup];

  return (
    <li>
        <label className='sr-only' htmlFor={id}>{placeholder}</label>  
        <input id={id} name={name} placeholder={placeholder} type={inputType}
                        className={css} onChange={onChange}/>
    </li>
  )
}

export default InputField;