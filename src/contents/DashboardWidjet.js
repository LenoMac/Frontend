import React from 'react'
import CountUp from 'react-countup';
export const DashboardWidjet = ({ tip, setOpenedPopup }) => {
    let db;

    switch (tip) {
        case '1':
            db = {
                title: 'СЭКОНОМЛЕНО',
                count: 98360000,
                message: 'сомов',
                metka: 'Подробнее',
                persent: 5,
                id: 'economy',
            };
            break;

        case '2':
            db = {
                title: 'ПОСЕТИТЕЛИ',
                count: 60805,
                message: 'за июнь',
                metka: 'Подробнее',
                persent: 12,
                id: 'visitors',
            };
            break;

        case '3':
            db = {
                title: 'УСЛУГИ',
                count: 1876298,
                message: 'получено',
                metka: 'Подробнее',
                persent: 18,
                id: 'uslugi',
            };
            break;
        case '4':
            db = {
                title: 'ПОЛЬЗОВАТЕЛИ',
                count: 234863,
                message: 'в 2023 году',
                metka: 'Подробнее',
                persent: 25,
                id: 'users',
            };
            break;
        default:
            break;
    }

    const showPopup = () => {
        setOpenedPopup(true)
    }

    return (
        <div className='flex flex-col cursor-pointer hover:shadow-gray-300 transition-all p-3 justify-between bg-transparent shadow-lg shadow-gray max-w-[250px] w-[250px] max-h-[120px]  rounded-md'>
            <div className='flex justify-between'>
                <p className='text-[#888]'>{db.title}</p>
                <small className='text-green-500'>^+<CountUp start={0} end={db.persent}/>%</small>
            </div>
            <div className='flex justify-start text-[30px]'>
                <CountUp start={0} end={db.count} duration={2} delay={0}/>
            </div>
            <div className='flex justify-between'>
                <div className='text-gray-400 self-center text-[14px]'>{db.message}</div>
                <div id={db.id} className='self-center text-orange-600 text-[13px] hover:underline' onClick={showPopup}>{db.metka}</div>
            </div>
        </div>
    )
}
