import React from 'react'
import { Health } from './contents/Health'
import { Education } from './contents/Education'
import { Vote } from './contents/Vote'
import { Discuss } from './contents/Discuss'
import { Navigate, useNavigate } from 'react-router-dom'
import logo from './logo.png'
import { useState, useEffect, useRef } from 'react'
import './menu.css'
import { Family } from './contents/Family'
import { CheckDoc } from './contents/CheckDoc'
import { Panel } from './contents/Panel'
import Guest from './guest.png'

const Menu = ({ dark, setDark, activeMenuItem, handleMenuItemCLick, setUser, user, data, setData }) => {

  const [isPopupOpen, setPopupOpen] = useState(false);
  const [profilePopup, setProfilePopup] = useState(false)
  const popupRef = useRef(null)
  const navigate = useNavigate();

  

  const openProfilePopup = () => {
    setPopupOpen(!isPopupOpen);
  }

  const openProfile = () => {
    setProfilePopup(true)
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
      setUser(null)
      setData({})
    }, 1000)
  }
  const [isHealth, setHealth] = useState(false)
  const [isEdu, setEdu] = useState(false)
  const [isVote, setVote] = useState(false)
  const [isDiscuss, setDiscuss] = useState(false)

  const showHelth = () => { setHealth(true) }
  const showEducation = () => { setEdu(true) }
  const showVote = () => { setVote(true) }
  const showDiscuss = () => { setDiscuss(true) }

  const handleToggleTheme = () => {
    alert()
  }

  return (
    <div className='relative bg-[#fff] min-w-[230px] w-[230px] h-[100vh] border-r-[0.5px] flex flex-col justify-between'>

      {/* SIDE  BAR */}
      <div className='flex flex-col gap-2 max-h-[80vh] h-full'>
        {/* LOGO */}
        <div id='logo' className='flex w-full self-center py-3 border-b-[0.5px]'>
          <div className='w-full flex justify-center cursor-pointer'>
            <img src={logo} alt='' className='w-[50px] self-center cursor-pointer' />
            {/* <h2 className='text-[#a057f3] font-bold text-[20px]'>eCommunity</h2> */}
          </div>
        </div>
        <div className='flex flex-col gap-5 pl-3 '>
          <div className='flex flex-col'>
            <small className='text-gray-500 text-[13px] select-none font-medium'>ГЛАВНАЯ</small>
            <ul className='select-none'>
              <li onClick={() => handleMenuItemCLick('panel')} className={`${activeMenuItem === 'panel' ? 'bg-[#ece8ff]' : 'bg-transparent'} flex gap-[10px]  hover:bg-[#ece8ff] transition-all p-2 h-max cursor-pointer`}>
                <span className='self-center ml-[5px]'><i className="fa-solid fa-layer-group text-[18px] text-[#9151f8]"></i></span><p className='text-[#888]'>Панель</p>
              </li>
            </ul>
          </div>
          <div className='flex flex-col gap-1'>
            <small className='text-gray-500 text-[13px] font-medium'>ГОСУСЛУГИ</small>
            <ul className='flex flex-col gap-1 select-none'>

              <li onClick={() => handleMenuItemCLick('health')} className={`${activeMenuItem === 'health' ? 'bg-[#ece8ff]' : 'bg-transparent'} flex gap-[10px]  hover:bg-[#ece8ff] transition-all p-2 h-max cursor-pointer`}>
                <span className='self-center ml-[5px]'><i className='fa-solid fa-kit-medical text-[18px] text-[#9151f8]'></i></span><p className='text-[#888]  text-[15px] font-medium'>Здоровье</p>
              </li>
              <li onClick={() => handleMenuItemCLick('education')} className={`${activeMenuItem === 'education' ? 'bg-[#ece8ff]' : 'bg-transparent'} flex gap-[7px] hover:bg-[#ece8ff] transition-all  p-2 h-max cursor-pointer`}>
                <span className='self-center ml-[5px]'><i className='fa-solid fa-graduation-cap text-[18px] text-[#9151f8]'></i></span><p className='text-[#888]  text-[15px] font-medium'>Образование</p>
              </li>
              <li onClick={() => handleMenuItemCLick('family')} className={`${activeMenuItem === 'family' ? 'bg-[#ece8ff]' : 'bg-transparent'} flex gap-[10px] hover:bg-[#ece8ff] transition-all  p-2 h-max cursor-pointer`}>
                <span className='self-center ml-[5px]'><i class="fa-solid fa-house text-[18px] text-[#9151f8]"></i></span><p className='text-[#888]  text-[15px] font-medium'>Семья</p>
              </li>
              <li onClick={() => handleMenuItemCLick('discuss')} className={`${activeMenuItem === 'discuss' ? 'bg-[#ece8ff]' : 'bg-transparent'} flex gap-[12px] hover:bg-[#ece8ff] transition-all  px-2 py-2 h-max cursor-pointer`}>
                <span className='self-center ml-[5px]'><i className='fa-solid fa-comment text-[18px] text-[#9151f8]'></i></span><p className='text-[#888]  text-[15px] font-medium'>Обсуждение</p>
              </li>
              <li onClick={() => handleMenuItemCLick('checkDoc')} className={`${activeMenuItem === 'checkDoc' ? 'bg-[#ece8ff]' : 'bg-transparent'} flex gap-[14px] hover:bg-[#ece8ff] transition-all  px-2 py-2 h-max cursor-pointer`}>
                <span className='self-center ml-[8px]'><i className='fa-solid fa-file text-[18px] text-[#9151f8]'></i></span><p className='text-[#888]  text-[15px] font-medium'>Проверка документа</p>
              </li>
              <li onClick={() => handleMenuItemCLick('all')} className={`${activeMenuItem === 'all' ? 'bg-[#ece8ff]' : 'bg-transparent'} flex gap-3 hover:bg-[#ece8ff] transition-all  px-2 py-2 h-max cursor-pointer`}>
                <span className='self-center ml-[8px]'><i className="fa-solid fa-border-all text-[18px] text-[#9151f8]"></i></span><p className='text-[#888]  text-[15px] font-medium'>Все</p>
              </li>
            </ul>
          </div>
        </div>
        <div className='flex flex-col gap-1 pl-3'>
          <small className='text-gray-500 text-[14px] font-medium'>ГОСОРГАНЫ</small>
          <ul>
            <li onClick={() => handleMenuItemCLick('all-organs')} className={`${activeMenuItem === 'all-organs' ? 'bg-[#ece8ff]' : 'bg-transparent'} flex gap-[12px] hover:bg-[#ece8ff] transition-all  px-2 py-2 h-max cursor-pointer`}>
              <span className='self-center ml-[8px]'><i className="fa-solid fa-border-all text-[18px] text-[#9151f8]"></i></span><p className='text-[#888]  text-[15px] font-medium'>Все</p>
            </li>
          </ul>
        </div>
        <div className='flex flex-col gap-1 pl-3'>
          <small className='text-gray-500 text-[14px] font-medium'>ТЕМЫ</small>
          <ul className='flex gap-2'>
            <li onClick={() => setDark(false)} className='w-[22px] h-[22px] ml-[6px] rounded-[5px] cursor-pointer border-[0.5px] border-[#9151f8] bg-white'></li>
            <li onClick={() => setDark(true)} className='w-[22px] h-[22px] rounded-[5px] cursor-pointer bg-[#333]'></li>
          </ul>
        </div>
      </div>

      {user && data ? (
        <div id='profile' className='flex flex-col gap-4 p-4 cursor-pointer border-t-[0.5px]'>
          <div onClick={openProfilePopup} className='flex justify-between'>
            <div className='flex gap-2'>
              <div className='w-[35px] self-center rounded-full overflow-hidden'>
                <img src={user === null ? Guest : user.picture} alt='' className='w-full select-none' />
              </div>
              <div className='flex flex-col self-center'>
                <h3 className='text-black font-medium select-none'>{user === null ? data.firstName : user.given_name}</h3>
                <small className='text-gray-400 text-[12px] select-none'>{user === null ? data.lastName : user.family_name}</small>
              </div>
            </div>
            <span className='self-center text-[#959595]'><i className="fa-solid fa-ellipsis"></i></span>
          </div>
          <div ref={popupRef} className={`${!isPopupOpen ? 'opacity-0 z-[-1]' : 'opacity-1 z-10'} w-[200px] bg-white overflow-hidden flex flex-col gap-[4px] shadow-lg shadow-gray-500/20  rounded-md absolute bottom-16 cursor-pointer justify-between transition-all `}>
            <span onClick={logout} className='w-full flex gap-2 rounded-[4px] px-3 pt-3'><i class="fa-solid fa-right-from-bracket text-[#9151f8] self-center"></i><small className='text-[#9151f8] self-center text-[15px] font-medium'>Выйти</small></span>
            <p onClick={openProfile} className='hover:text-[#9151f8] text-gray-500 text-[15px] w-full px-3 pb-3 rounded-[4px] font-medium'>Профиль</p>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}





const Content = ({ activeMenuItem, user }) => {


  

  if (activeMenuItem === 'health') return <Health user={user}/>
  else if (activeMenuItem === 'panel') return <Panel />
  else if (activeMenuItem === 'education') return <Education />
  else if (activeMenuItem === 'discuss') return <Discuss />
  else if (activeMenuItem === 'vote') return <Vote />
  else if (activeMenuItem === 'family') return <Family />
  else if (activeMenuItem === 'checkDoc') return <CheckDoc />
  else return null
}


const Navbar = ({ user }) => {

  const navigate = useNavigate()
  const goToLogin = () => {
    setTimeout(() => {
      navigate('Login')
    }, 1000)
  }
  return (
    <div className='border-b-[0.5px] flex justify-between p-[13px]'>
      <div className='bg-transparent self-center flex gap-1 border-[0.5px] px-[6px]'>
        <input placeholder='Поиск' className='self-center outline-none border-none' />
        <i className="fa-solid fa-magnifying-glass text-[16px] text-gray-400 self-center"></i>
      </div>
      <div className='self-center flex gap-5'>
        {/* <div className='absolute width-[100px] h-[50px] bg-red-600'></div> */}
        {user === null ? (
          <div onClick={goToLogin} className='flex self-center gap-1 cursor-pointer rounded-md p-[2px] text-orange-600'><span><i class="fa-solid fa-right-to-bracket"></i></span><p className='font-semibold self-center'>Войти</p></div>
        ) : (<></>)}
        <span className='self-center text-[#9151f8] text-[18px]'><i class="fa-solid fa-moon"></i></span>
        <div className='flex gap-1 cursor-pointer bg-[#9151f8] pl-[5px] rounded-[3px]'>
          <i className="fa-solid fa-globe self-center bg-[#9151f8] text-white"></i>
          <select className='focus:outline-none' id="lang">
            <option className='' value="rus">Русский</option>
            <option className='' value="eng">English</option>
            <option className='' value="kg">Кыргызча</option>
          </select>
        </div>
        <span className='flex cursor-pointer self-center'><i className="fa-solid fa-gear self-center text-[#9151f8]"></i></span>
      </div>
    </div>
  )
}


export const Home = ({ dark, setDark, setUser, user, data, setData }) => {

  const [activeMenuItem, setActiveMenuItem] = useState('panel')

  const handleMenuItemCLick = (menItem) => {
    setActiveMenuItem(menItem)
  }

  return (
    <div className='w-full h-[100vh] flex'>
      <Menu dark={dark} setDark={setDark} data={data} setData={setData} setUser={setUser} user={user} handleMenuItemCLick={handleMenuItemCLick} activeMenuItem={activeMenuItem} />
      <div className='flex flex-col w-full'>
        <Navbar user={user} />
        <Content user={user} activeMenuItem={activeMenuItem} className={`w-full p-2 bg-red-600`} />
      </div>
    </div>
  )
}
