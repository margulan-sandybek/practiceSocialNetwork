import React from 'react'
import preloader from '../../../assets/images/preloader.svg'

let Preloader = (props) => {
    return (
        <div>
            <img
                src={preloader}
                style= {
                    { backgroundColor: 'white' }
                } />
        </div>
    )
}

export default Preloader