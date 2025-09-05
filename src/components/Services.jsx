import React, { use, useEffect } from 'react'

const Services = () => {
    useEffect( ()=> {
        console.log('Services Component Mounted! ^^');

        return () => {
            console.log('Services Component Unmounted! ^^');
        }
    })
  return (
    <div>
      Services
    </div>
  )
}

export default Services
