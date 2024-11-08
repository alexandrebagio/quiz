import styles from '../styles/Statistic.module.css'

interface StatisticProps {
    value: any
    text: string
    backColor?: string
    fontColor?: string
}

export default function Statistic(props: StatisticProps) {
    return (
        <div className={styles.statistic}>
            <div className={styles.value} style={{
                backgroundColor: props.backColor ?? '#FDD60F',
                color: props.fontColor ?? '#333'
            }}>
                {props.value}
            </div>
            <div className={styles.texto}>
                {props.text}
            </div>
        </div>
    )
}