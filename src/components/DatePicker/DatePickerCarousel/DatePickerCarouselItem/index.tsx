import React, {useRef} from "react";
import styles from './styles.module.css'

const DatePickerCarouselItem: React.FC<{isChecked?: boolean}> = (props) => {
    const btnRef = useRef<HTMLButtonElement>(null)
    return (
        <button ref={btnRef} className={`${styles.carouselItem} ${props.isChecked && styles.Item_active}`} onClick={() => {
            btnRef.current?.scrollIntoView()
        }} >
            <span className={styles.ItemDay}>сегодня</span>
            <span className={styles.ItemDate}>26</span>
        </button>
    )

}

export default DatePickerCarouselItem;
