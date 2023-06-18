import React from 'react'

export const MenuItems = (props) => {
    return (
        <>
            <li onClick={() => props.handleMenuItemCLick('vote')} className={`${props.activeMenuItem === 'vote' ? 'bg-[#f7f7f7]' : 'bg-transparent'} relative flex gap-2 px-3 py-2 h-max rounded-md cursor-pointer`}>
                <span><i className='text-[#959595] fa-solid fa-check-to-slot'></i></span><p className='font-medium text-[#737373]'>Голосование</p>{!props.isVote ? (<span onClick={props.showVote} className='translate-x-[24px] self-center text-[#959595] text-[14px] cursor-pointer'><i className='fa-solid fa-chevron-down'></i></span>) : (<span onClick={() => props.setVote(false)} className='translate-x-[24px] self-center text-[#959595] text-[14px] cursor-pointer'><i className='fa-solid fa-chevron-up'></i></span>)}
            </li>
            <div id='spisok' className={`${props.isVote ? 'h-[100px]' : 'h-0'} w-full overflow-x-auto transition-all`}>
                <ul className='flex flex-col self-center gap-1 text-[14px] pl-[3px]'>
                    <li className='text-[#959595] transition-all rounded-md p-2 cursor-pointer hover:bg-[#f7f7f7]'>Президенты</li>
                    <li className='text-[#959595] transition-all rounded-md p-2 cursor-pointer hover:bg-[#f7f7f7]'>Депутаты</li>
                </ul>
            </div>
        </>
    )
}
