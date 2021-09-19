import React from 'react'

export const Footer = React.memo(() => {
    //console.log('Footer me renderizo')
    return (
        <footer >
            <p>
                Made by &nbsp;
                 <a href="https://github.com/giancode1" target="_blank" rel="noopener noreferrer">giancode1</a>
                 &nbsp;
                | &nbsp;<a href="https://twitter.com/GiancCool" target="_blank" rel="noopener noreferrer">twitter</a> 
            </p>
        </footer>
    )
})
