import React from 'react'
import styles from './plastic-for-change-paragraph.module.css'

const PlasticForChangeParagraph = ({paragraph}) => {
    return (
        <div>
            <p className={styles['paragraph']}>{paragraph}</p>
        </div>
    )
}

export default PlasticForChangeParagraph
