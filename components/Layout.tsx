import React from 'react'
import { colors } from '../styles'

export default ({ children }) => {
    return <div style={{ width: '100%', maxWidth: 600, margin: 'auto' }}>
        <h2 style={{ textAlign: 'center' }}>CoronaWatch</h2>
        {children}
        <style jsx global>
            {`
            body{
                background-color:${colors.page};
                color:white;
                
            }
            #element { margin:0; padding:0; font-size:100%; line-height:1; }


            `}
        </style>
    </div>
}