import AnswersModel from '@/model/AnswersModel';
import styles from '../styles/Answer.module.css';

interface AnswerProps {
    value: AnswersModel
    index: number
    alternative: string
    backgroudColor: string
    indexAnswer: (index: number) => void
}

export default function Answer(props: AnswerProps) {
    const answer = props.value;
    const showed = answer.showed ? styles.showed : '';

    return (
        <div className={styles.answer}
            onClick={() => props.indexAnswer(props.index)}>
            <div className={`${showed} ${styles.contentAnswer}`}>
                <div className={styles.front}>
                    <div className={styles.alternative}
                        style={{ backgroundColor: props.backgroudColor }}>
                        {props.alternative}
                    </div>
                    <div className={styles.value}>
                        {answer.value}
                    </div>
                </div>
                <div className={styles.back}>
                    {answer.correct ? (
                        <div className={styles.correct}>
                            <div>A resposta certa é...</div>
                            <div className={styles.value}>{answer.value}</div>
                        </div>
                    ) : (
                        <div className={styles.incorrect}>
                            <div>A resposta informada está errada...</div>
                            <div className={styles.value}>{answer.value}</div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}