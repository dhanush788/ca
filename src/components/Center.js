import React from 'react'


export default function Center({children}){
    return (
        <div className="flex w-full h-full items-center justify-center">
            {children}
        </div>
    )
}