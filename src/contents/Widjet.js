import './Winjet.css'
import React from 'react'


export const Widjet = ({type, setHandlePopup}) => {

    const show = () => {
        setHandlePopup(true)
    }

    let data;

    switch (type) {
        case "1":
            data = {
                text: "Выдача сертификата о вакцинации против COVID-19",
            };
            break;
        case "2":
            data = {
                text: "Информация о сертификате вакцинации против COVID-19",
            };
            break;

        case "3":
            data = {
                text: "Справка о результатах иммуноферментного анализа тестов IgM и IgG",
            };
            break;

        case "4":
            data = {
                text: "Справка о результатах лабораторного теста на коронавирусную инфекцию SARS-Cov-2",
            }
            break;

        case "5":
            data = {
                text: "Справка о состоянии/не состоянии на наркологическом учете (тестовый режим)",
            }
            break;
        case "6":
            data = {
                text: "Справка о состоянии/не состоянии на психоатрическом диспансерном учете (тестовый режим)",
            }
            break;

        case "7":
            data = {
                text: "Электронная запись на прием к врачу",
            }
            break;

        case "8":
            data = {
                text: "Справка о результатах лабораторного теста на коронавирусную инфекцию SARS-Cov-2",
            }
            break;

        case "9":
            data = {
                text: "Выдача дубликатов утерянных ведомственных наград МОН КР физическим лицам",
            }
            break;

        case "10":
            data = {
                text: "Выдача справки о подлинности документа о среднем и/или высшем профессиональном образовании...",
            }
            break;

        case "11":
            data = {
                text: "Выдача справок о подтверждении обучения граждан КР",
            }
            break;

        case "12":
            data = {
                text: "Выдача справок о подтверждении подлинности документов об основном и средном ...",
            }
            break;

        case "13":
            data = {
                text: "Выдача справок о подтверждении уровня и содержания образования лиц, обучавшихся в зарубежных заведениях",
            }
            break;

        case "14":
            data = {
                text: "Информация о дипломе, выданном высшим учебным заведением",
            }
            break;

        case "15":
            data = {
                text: "Обучение, подготовка, переподготовка, повышение квалификации специалистов водолазному делу...",
            }
            break;

        case "16":
            data = {
                text: "Предоставление информации по авторефератам диссертаций и диссертациям",
            }
            break;

        case "17":
            data = {
                text: "Подготовка и переподготовка специалистов, обучение рабочих, служащих, студентов, учащихся...",
            }
            break;

        case "18":
            data = {
                text: "Предоставление статистических, информационных и иных данных о системе образования и науки...",
            }
            break;

        case "19":
            data = {
                text: "Публикация научных статей в Интернет-журнале Высшей аттестационной комиссии при...",
            }
            break;

        case "20":
            data = {
                text: "Выдача дубликатов лицензий и сертификатов на право осуществления образовательной деятельности",
            }
            break;

        case "21":
            data = {
                text: "Справка о результатах лабораторного теста на коронавирусную инфекцию SARS-Cov-2",
            }
            break;

        case "22":
            data = {
                text: "Справка о результатах лабораторного теста на коронавирусную инфекцию SARS-Cov-2",
            }
            break;

        case "23":
            data = {
                text: "Справка о результатах лабораторного теста на коронавирусную инфекцию SARS-Cov-2",
            }
            break;

        case "24":
            data = {
                text: "Справка о результатах лабораторного теста на коронавирусную инфекцию SARS-Cov-2",
            }
            break;

        case "25":
            data = {
                text: "Справка о результатах лабораторного теста на коронавирусную инфекцию SARS-Cov-2",
            }
            break;

        case "26":
            data = {
                text: "Справка о результатах лабораторного теста на коронавирусную инфекцию SARS-Cov-2",
            }
            break;

        case "27":
            data = {
                text: "Справка о результатах лабораторного теста на коронавирусную инфекцию SARS-Cov-2",
            }
            break;

        case "28":
            data = {
                text: "Справка о результатах лабораторного теста на коронавирусную инфекцию SARS-Cov-2",
            }
            break;

        case "29":
            data = {
                text: "Справка о результатах лабораторного теста на коронавирусную инфекцию SARS-Cov-2",
            }
            break;

        case "30":
            data = {
                text: "Справка о результатах лабораторного теста на коронавирусную инфекцию SARS-Cov-2",
            }
            break;

        case "31":
            data = {
                text: "",
            }
            break;

        case "32":
            data = {
                text: "",
            }
            break;
        case "33":
            data = {
                text: "",
            }
            break;

        case "34":
            data = {
                text: "",
            }
            break;

        case "35": 
            data = {
                text: "",
            }
            break;
        


        default:
            break;
    }

    return (
        <div id='id' className='flex flex-col justify-between self-center p-4 shadow-lg cursor-pointer hover:shadow-gray-400 transition-all max-w-[250px] w-[250px] max-h-[190px] h-[190px] shadow-gray-300 rounded-md select-none'>
            <div id='text' className='self-center'>
                {data.text}
            </div>
            <div onClick={show} className='flex justify-end'><span  className='text-md hover:underline transition-all text-orange-600 text-[15px]'>Воспользоваться</span></div>
        </div>
    )
}
