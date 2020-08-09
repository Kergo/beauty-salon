import React from 'react'
import styles from './info-paragraph.module.css'

const InfoParagraph = ({paragraph}) => {
    return (
        <div>
            <p className={styles['paragraph']}>{paragraph}</p>
        </div>
    )
}

export default InfoParagraph
