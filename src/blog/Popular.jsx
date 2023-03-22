import React from 'react'

export const Popular = ({items}) => {
    return (
        <>

            <div className="pop-box">
                <div className="im-area">
                    <img src={items} alt="" />    
                </div>          
                <div className="content p-1" >
                    <h4>This is random title, This is random title</h4>   
                    <p className="p">Febraury 9 items</p> 
                </div>      
            </div>
        </>
    )
}
