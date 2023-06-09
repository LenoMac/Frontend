import React from 'react'
import { Health } from './contents/Health'
import { Education } from './contents/Education'
import { Vote } from './contents/Vote'
import { Discuss } from './contents/Discuss'
import { useNavigate } from 'react-router-dom'
import logo from './logo.png'
import { useState, useEffect, useRef } from 'react'

const Menu = ({ activeMenuItem, handleMenuItemCLick }) => {
  const [menuWidth, setMenuWidth] = useState(80);
  const [isContentVisible, setContentVisible] = useState(false);
  const [isLogoSize, setLogoSize] = useState(40);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const popupRef = useRef(null)
  const navigate = useNavigate();

  const firstClick = () => {
    setMenuWidth(menuWidth - 170);
    setContentVisible(false)
    setLogoSize(isLogoSize - 20)
    document.querySelectorAll('li').forEach((li) => {
      li.style.width = 'max-content'
    })
  }
  const secondClick = () => {
    setMenuWidth(250);
    setContentVisible(true);
    setLogoSize(60);
    document.querySelectorAll('li').forEach((li) => {
      li.style.width = ''
    })
  }

  const openProfilePopup = () => {
    setPopupOpen(!isPopupOpen);
  }

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setPopupOpen(false)
      }
    }
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [])

  const logout = () => {

    setTimeout(() => {
      navigate('/')
    }, 1000)
  }

  return (
    <div style={{ width: menuWidth }} className='relative bg-[#EFEFEF] w-[250px] h-[100vh]  transition-all ease-in-out'>
      <div className='p-5 flex flex-col justify-between h-full overflow-hidden'>
        <div id='logo' className='flex justify-between'>
          <div style={{ width: isLogoSize }} className='self-center cursor-pointer'>
            <img src={logo} alt='' className='w-full self-center cursor-pointer' />
          </div>
          {isContentVisible ?
            (<span onClick={firstClick} className='cursor-pointer absolute shadow-lg shadow-gray-300 left-[95%] bg-[#24a472] text-white px-[9px] rounded-full self-center'><i class="fa-solid fa-chevron-left text-[10px] self-center"></i></span>)
            : (<span onClick={secondClick} className='cursor-pointer absolute shadow-lg shadow-gray-300 left-[83%] bg-[#24a472] text-white px-[9px] rounded-full self-center'><i class="fa-solid fa-chevron-right text-[10px] self-center"></i></span>)
          }
        </div>

        <div className='flex flex-col'>
          <div className='flex flex-col gap-4'>
            {isContentVisible && <small className='text-gray-500 text-[14px] font-medium'>Услуги</small>}
            <ul className='flex flex-col gap-4 select-none'>
              <li onClick={() => handleMenuItemCLick('health')} className={`${activeMenuItem === 'health' ? 'bg-[#D4E2DF]' : 'bg-transparent'}  flex gap-2 px-3 py-2 h-max rounded-md cursor-pointer hover:bg-[#D4E2DF] hover:text-[#24a472]`}>
                <span><i className={`fa-solid fa-kit-medical ${activeMenuItem === 'health' ? 'text-[#24a472]' : 'text-gray-400'}`}></i></span>{isContentVisible && <p className={`text-[#24a472] font-medium ${activeMenuItem === 'health' ? 'text-[#24a472]' : 'text-gray-400'}`}>Здоровье</p>}
              </li>
              <li onClick={() => handleMenuItemCLick('education')} className={`flex gap-2 px-3 py-2 h-max rounded-md cursor-pointer hover:bg-[#D4E2DF] ${activeMenuItem === 'education' ? 'bg-[#D4E2DF]' : 'bg-transparent'}`}>
                <span><i className={`fa-solid fa-graduation-cap ${activeMenuItem === 'education' ? 'text-[#24a472]' : 'text-gray-400'}`}></i></span>{isContentVisible && <p className={`font-medium ${activeMenuItem === 'education' ? 'text-[#24a472]' : 'text-gray-400'}`}>Образование</p>}
              </li>
              <li onClick={() => handleMenuItemCLick('vote')} className={`flex gap-2 px-3 py-2 h-max rounded-md cursor-pointer hover:bg-[#D4E2DF] hover:text-[#24a472] ${activeMenuItem === 'vote' ? 'bg-[#D4E2DF]' : 'bg-transparent'}`}>
                <span><i className={`fa-solid fa-check-to-slot ${activeMenuItem === 'vote' ? 'text-[#24a472]' : 'text-gray-400'}`}></i></span> {isContentVisible && <p className={` font-medium ${activeMenuItem === 'vote' ? 'text-[#24a472]' : 'text-gray-400'}`}>Голосование</p>}
              </li>
              <li onClick={() => handleMenuItemCLick('discuss')} className={`flex gap-2 px-3 py-2 h-max rounded-md cursor-pointer hover:bg-[#D4E2DF] hover:text-[#24a472] ${activeMenuItem === 'discuss' ? 'bg-[#D4E2DF]' : 'bg-transparent'}`}>
                <span><i className={`fa-solid fa-comment ${activeMenuItem === 'discuss' ? 'text-[#24a472]' : 'text-gray-400'}`}></i></span> {isContentVisible && <p className={`font-medium ${activeMenuItem === 'discuss' ? 'text-[#24a472]' : 'text-gray-400'}`}>Обсуждение</p>}
              </li>
            </ul>
          </div>
        </div>

        {!isContentVisible && <span className='absolute top-[55%] w-[40px] m-auto h-[2px] bg-gray-300'></span>}
        <div className='flex flex-col gap-4'>
          {isContentVisible && <small className='text-gray-500 text-[14px] font-medium '>Настройки</small>}
          <ul className='flex flex-col gap-4'>
            <li className='flex gap-2 px-3 py-2 bg-transparent h-max rounded-md cursor-pointer hover:bg-[#D4E2DF] hover:text-[#24a472]'>
              <span><i class="fa-solid fa-check-to-slot text-gray-400"></i></span> {isContentVisible && <p className='text-gray-400 font-medium'>Голосование</p>}
            </li>
            <li className='flex gap-2 px-3 py-2 bg-transparent h-max rounded-md cursor-pointer hover:bg-[#D4E2DF] hover:text-[#24a472]'>
              <span><i class="fa-solid fa-comment text-gray-400"></i></span> {isContentVisible && <p className='text-gray-400 font-medium'>Обсуждение</p>}
            </li>
          </ul>
        </div>

        <div id='profile' className='flex flex-col gap-4 cursor-pointer'>
          <div onClick={openProfilePopup} className='flex gap-2'>
            <div className='w-[35px] self-center'>
              <img src='https://cdn-icons-png.flaticon.com/512/5968/5968743.png' alt='' className='w-full select-none' />
            </div>
            {isContentVisible &&
              <div className='flex flex-col self-center'>
                <h3 className='text-black font-medium select-none'>Абдулхафиз Ж.</h3>
                <small className='text-gray-400 text-[12px] select-none'>Веб-разработчик</small>
              </div>
            }
          </div>

          {isPopupOpen ? (<div ref={popupRef} className='overflow-hidden flex flex-col gap-[4px] bg-white shadow-lg shadow-gray-500/20 p-2 w-[200px] rounded-md absolute bottom-16 cursor-pointer justify-between'>
            <span onClick={logout} className='w-full flex gap-2 rounded-[4px] p-1'><i class="fa-solid fa-right-from-bracket text-[#24a472] self-center"></i><small className='text-[#24a472] self-center text-[15px] font-medium'>Выйти</small></span>
            <p className='hover:text-[#24a472] text-gray-500 text-[15px] w-full p-1 rounded-[4px] font-medium'>Профиль</p>
          </div>) : ('')}
        </div>
      </div>
    </div>
  )
}

const Content = ({ activeMenuItem }) => {
  if (activeMenuItem === 'health') return <Health />
  else if (activeMenuItem === 'education') return <Education />
  else if (activeMenuItem === 'discuss') return <Discuss />
  else if (activeMenuItem === 'vote') return <Vote />
  else return null
}





export const Home = () => {

  const [activeMenuItem, setActiveMenuItem] = useState('health')

  const handleMenuItemCLick = (menItem) => {
    setActiveMenuItem(menItem)
  }

  return (
    <div className='w-full h-[100vh] flex'>
      <Menu handleMenuItemCLick={handleMenuItemCLick} activeMenuItem={activeMenuItem} />
      <Content activeMenuItem={activeMenuItem} className={`w-full p-2 bg-red-600`} />
    </div>
  )
}
