import React from 'react';

const Link = ({clickCallback, href, children}) =>{
    return (
        <a 
            onClick={(e) => {
                e.preventDefault()
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
                clickCallback()
            }} 
            href={href}
        >
            {children}
        </a>
    )
}

export default Link