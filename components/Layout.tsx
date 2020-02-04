import React from 'react'
import { colors } from '../styles'

export default ({ children }) => {
    return <div style={{ width: '100%', maxWidth: 800, margin: 'auto' }}>
        <h1 style={{ textAlign: 'center' }}>CoronaWatch:  2019-nCoV </h1>
<<<<<<< HEAD
        <h4 style={{ textAlign: 'center', opacity: 0.5 }}>Last updated: February 4, 2020, 22:45 GMT</h4>
=======
        <h4 style={{ textAlign: 'center', opacity: 0.5 }}>Last updated: February 4, 2020, 22:17 GMT</h4>
>>>>>>> 7fff1a1b3b05974fd9744962910156c241b7863c
        {children}
        <style jsx global>
            {`
            body{
                background-color:${colors.page};
                color:white;
                font-family: 'Roboto', sans-serif;
                
            }
            p {
                margin-block-start:0;
                margin-block-end:0;
                
            }
            #element { margin:0; padding:0; font-size:100%; line-height:1; }
.apexcharts-menu.apexcharts-menu-open{
    color:black;
}

            `}
        </style>
    </div>
}