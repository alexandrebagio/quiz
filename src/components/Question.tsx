import QuestionModel from '@/model/QuestionModel'
import styles from '../styles/Question.module.css'
import Answer from './Answer'
import Statement from './Statement'
import Timer from './Timer'

const alternatives = [
    { value: 'A', color: '#F2C866' },
    { value: 'B', color: '#F266BA' },
    { value: 'C', color: '#85D4F2' },
    { value: 'D', color: '#BCE596' },
]

interface QuestionProps {
    value: QuestionModel
    answerTime?: number
    indexAnswer: (index: number) =>  void
    timeout: () => void
}

export default function Question(props: QuestionProps) {
    const question = props.value;

    function renderAnswers() {
        return question.answers.map((r, i) => {
            return (
                <Answer
                    key={`${question.id}-${i}`}
                    value={r}
                    index={i}
                    alternative={alternatives[i].value}
                    backgroudColor={alternatives[i].color}
                    indexAnswer={props.indexAnswer}
                />
            )
        })
    }

    return (
        <div className={styles.question}>
            <Statement text={question.text} />
            <Timer key={question.id}
                duration={props.answerTime ?? 10}
                timeout={props.timeout} />
            {renderAnswers()}
        </div>
    )
}