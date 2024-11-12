import Button from '@/components/Button'
import Statistic from '@/components/Statistic'
import { useRouter } from 'next/router'
import styles from '../styles/Result.module.css'

export default function Result() {
    const router = useRouter()

    const total = +(router.query.total ?? 0)
    const corrects = +(router.query.corrects ?? 0)
    const percent = Math.round((corrects / total) * 100)

    return (
        <div className={styles.result}>
            <h1>Resultado Final</h1>
            <div style={{ display: "flex", flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
                <Statistic text="Perguntas" value={total} />
                <Statistic text="Certas" value={corrects} backColor="#9CD2A4"/>
                <Statistic text="Percentual" value={`${percent}%`} backColor="#DE6A33" />
            </div>
            <Button href="/" text="Tentar Novamente" />
        </div>
    )
}