import React from 'react'

const Navbar = ({ filterItem, menuList }) => {
    return (
        <div style={{
            height: '15vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <nav>

                {
                    menuList.map((curElem) => {
                        return (
                            <button style={{
                                backgroundColor: 'white',
                                padding: '8px 15px'
                            }} onClick={() => filterItem(curElem)}>{curElem}</button>
                        );
                    })
                }

            </nav>
        </div>
    )
}

export default Navbar
