import React from 'react'

function BoardDetail() {
  return (
    <div>
        <header>
        </header>
        <section>
            {/* 게시판 */}
            <div> 
                <h1 className='font-bold text-black text-[20px]'>큰일이 났습니다 도와주세요</h1>
                <div className='flex gap-[30px] text-[14px] mt-[18px]'>
                    <span className='font-bold text-[#9B9B9B]'>2024.05.01 작성</span>
                    <div>
                        <span>조회수 :</span><span>10</span>
                    </div>
                    <div>
                        <span>추천수 :</span><span>10</span>
                    </div>
                </div>
                
            </div>
        </section>
        <footer>
        </footer>
    </div>

  )
}

export default BoardDetail