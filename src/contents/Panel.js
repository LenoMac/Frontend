import React, { useState } from 'react'
import CountUp from 'react-countup'
import './Panel.css'
import { DashboardWidjet } from './DashboardWidjet'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
export const Panel = () => {


    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
        },
    };

    const labels = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'];

    const data = {
        labels,
        datasets: [
            {
                label: '2021-2022',
                data: [122, 300, 248, 309, 227, 450, 265, 355, 488, 400, 500, 450],
                borderColor: '#9151f8',
                backgroundColor: '#b68cfa',
            },
            {
                label: '2022-2023',
                data: [240, 502, 438, 610, 527, 806, 665, 862, 813, 927, 890, 1000],
                borderColor: 'orange',
                backgroundColor: 'rgb(255, 196, 86)',
            },
        ],
    };

    // let circular_progress = document.getElementById('circular_progress')
    // // circular_progress.style.background = 'conic-gradient(#9151f8 78deg, #ededed 0deg)'

    // let progress = setInterval(() => {
    //     // circular_progress.style.background = 'background: conic-gradient(#9151f8 280deg, #ededed 0deg)';
    // }, 100)


    // const data = {
    //     labels: ['Декабрь', 'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь'],
    //     datasets: [
    //         {
    //             label: 'Услуг',
    //             data: [12000, 12400, 11300, 8090, 18780, 15056, 16809],
    //             borderColor: 'rbg(75, 192, 192)',
    //             // tension: 0.1,
    //         },
    //     ],
    // }

    // const options = {
    //     scales: {
    //         y: {
    //             beginAtZero: true,
    //         }
    //     }
    // }
    const [handleItem, setHandleItem] = useState('economy')

    const [openedPopup, setOpenedPopup] = useState(false)

    const handleTogglePage = (org) => {
        setHandleItem(org)
    }




    const Economy = () => {
        return (
            <div className=''>
                <div className='flex'>
                    <p><CountUp start={0} end={234863}/></p>
                    
                </div>
            </div>
        )
    }

    const Visitors = () => {
        return (
            <div>Visitors</div>
        )
    }

    const Uslugi = () => {
        return (
            <div>Uslugi</div>
        )
    }

    const Users = () => {
        return (
            <div>Users</div>
        )
    }


    const Data = ({ handleItem }) => {
        if (handleItem === 'economy') return <Economy />
        else if (handleItem === 'visitors') return <Visitors />
        else if (handleItem === 'uslugi') return <Uslugi />
        else if (handleItem === 'users') return <Users />
    }



    return (
        <div id='info' className='flex-grow overflow-hidden  relative'>
            <div className='p-[15px] flex justify-between'>
                <div className='' onClick={() => handleTogglePage('users')}>
                    <DashboardWidjet setOpenedPopup={setOpenedPopup} tip='4' />
                </div>
                <div onClick={() => handleTogglePage('economy')}>
                    <DashboardWidjet setOpenedPopup={setOpenedPopup} tip='1' />
                </div>
                <div onClick={() => handleTogglePage('visitors')}>
                    <DashboardWidjet setOpenedPopup={setOpenedPopup} tip='2' />
                </div>
                <div onClick={() => handleTogglePage('uslugi')}>
                    <DashboardWidjet setOpenedPopup={setOpenedPopup} tip='3' />
                </div>
            </div>

            <div className='p-[15px] flex justify-between gap-2'>

                <div className='w-[400px] h-[430px] rounded-md bg-transparent shadow-lg shadow-gray p-4 flex flex-col gap-6'>
                    <div className='flex justify-between'>
                        <p className='text-[#888] self-center'>Активность</p>
                        <span><i className='fa-solid fa-ellipsis self-center text-[#888]'></i></span>
                    </div>
                    <div className='self-center'>
                        <div className='flex flex-col gap-2'>
                            <div id='circular_progress'>
                                <span id='' className='relative text-[30px] font-bold text-[#9151f8] z-10'>
                                    <CountUp start={0} end={78} duration={2} delay={0} />%
                                </span>
                            </div>
                            {/* <p className='text-[#5a5a5a]'>Сегоднящняя активность</p> */}
                            <p className='self-center text-[28px] text-orange-600 font-semibold'><CountUp start={0} end={4237} duration={2} delay={0} /></p>
                            <small className='text-gray-600 self-center text-[18px] mt-[-10px]'>посетители сегодня</small>
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <p>impust</p>
                        <small>lorem</small>
                    </div>
                </div>

                {/* CHART */}
                <div className='flex flex-col w-[650px] max-w-[650px] p-3 h-[425px] rounded-md bg-white shadow-lg shadow-gray gap-2'>
                    <p className='text-gray-500'>Наши показатели в диаграммах</p>
                    <Line
                        options={options}
                        data={data}
                    />
                </div>
            </div>
            <div id='infoPopup' className={`${openedPopup ? 'opacity-1 z-10 translate-y-0' : 'opacity-0 -z-10 translate-y-[100%]'} h-full w-full bg-white transition-all absolute top-0 left-0 px-3 py-2`}>
                <div className='flex flex-col w-full justify-end'>
                    <span onClick={() => setOpenedPopup(false)} className='cursor-pointer self-end text-[20px]'><i className='fa-solid fa-xmark'></i></span>
                    <Data handleItem={handleItem} />
                </div>
            </div>
        </div>
    )
}
