import MenuOption from "./MenuOption";
import {useState} from "react";
import Menus from '../data/menus.json'

// const menus = [
//     {
//         'id': 1,
//         'menu_title': 'Menu #1',
//         'details': 'This is details #1',
//         'options': [
//             {
//                 'id': 2,
//                 'text': 'Option #2'
//             },
//             {
//                 'id': 3,
//                 'text': 'Option #3'
//             },
//             {
//                 'id': 4,
//                 'text': 'Option #4'
//             }
//         ]
//     },
//     {
//         'id': 2,
//         'menu_title': 'Menu #2',
//         'details': 'This is details #2',
//         'options': [
//             {
//                 'id': 1,
//                 'text': 'Option #1'
//             },
//             {
//                 'id': 3,
//                 'text': 'Option #3'
//             },
//             {
//                 'id': 4,
//                 'text': 'Option #4'
//             }
//         ]
//     },
//     {
//         'id': 3,
//         'menu_title': 'Menu #3',
//         'details': 'This is details #3',
//         'options': [
//             {
//                 'id': 1,
//                 'text': 'Option #1'
//             },
//             {
//                 'id': 2,
//                 'text': 'Option #2'
//             },
//             {
//                 'id': 4,
//                 'text': 'Option #4'
//             }
//         ]
//     },
//     {
//         'id': 4,
//         'menu_title': 'Menu #4',
//         'details': 'This is details #4',
//         'options': [
//             {
//                 'id': 1,
//                 'text': 'Option #1'
//             },
//             {
//                 'id': 2,
//                 'text': 'Option #2'
//             },
//             {
//                 'id': 3,
//                 'text': 'Option #3'
//             }
//         ]
//     }
// ]



function Menu() {
    const [menuData, setMenuData] = useState(Menus[0])

    function updateMenu(clickedOptionId) {
        for (let i = 0; i < Menus.length; i++) {
            if (Menus[i]['id'] === clickedOptionId) {
                setMenuData(Menus[i])
                break
            }
        }
    }

    function createMenuOptions(allOptions) {
        let htmlContent = []
        for (let i = 0; i < allOptions.length; i++) {
            htmlContent.push(<MenuOption key={i} option={allOptions[i]} clickFunction={updateMenu}/>)
        }
        return htmlContent
    }


    return (
        <div>
            <div>
                <h1>
                    {menuData.menu_title}
                </h1>
                <p>
                    {menuData.details}
                </p>
            </div>
            <div className='row'>
                {createMenuOptions(menuData.options)}
            </div>
        </div>
    )
}

export default Menu