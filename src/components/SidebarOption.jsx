import React from 'react';
import "./SidebarOption.css"

const SidebarOption = ({Icon,title, number,selected}) => {
    return (
        <div className={`sidebarOption ${selected && `sidebarOption--active`}`}>
            <Icon className="sidebarOption__icon"/>
            <h3 className='sidebarOption__title'>{title}</h3>
            <p className="sidebarOption__number">{number}</p>
        </div>
    );
}

export default SidebarOption;
