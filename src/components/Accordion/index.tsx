import React from 'react'
import './estilo.css'

export  const Accordion = () => {
const [active, setActive] = React.useState(false);

    return (
        <>
            <div 
                className={active ? 'accordion active' : 'accordion'} 
                onClick={() => setActive(!active)}>
                <h3>titulo da sanfona</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, nemo alias. Dolor, non consequuntur necessitatibus commodi quisquam consequatur eveniet ab! Nisi velit provident facere delectus consequuntur nulla architecto, magni quae.</p>
            </div>
        </>
    )
}