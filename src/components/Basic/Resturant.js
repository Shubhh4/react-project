import React,{useState} from 'react'
import "./Style.css"
import Menu from "./menuAPI"
import MenuCard from './menuCard'
import Navbar from './Navbar'

const uniqueList = [...new Set (Menu.map((curElem)=>{
  return curElem.category;
})
),
"All"
];
console.log(uniqueList);


const Resturant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);
  const filterItem = (category) => {

    if(category==="All"){
      setMenuData(Menu);
      return;
    }

    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;

    });
    setMenuData(updatedList);

  }
 
  return (
    <div>
     <Navbar filterItem={filterItem} menuList={menuList}/>
     <MenuCard menuData={menuData}/>
    </div>
  )
}

export default Resturant
