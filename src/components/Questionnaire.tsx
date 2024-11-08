import QuestionModel from '@/model/QuestionModel'
import styles from '../styles/Questionnaire.module.css'
import Button from './Button'
import Question from './Question'

interface QuestionnaireProps {
    question: QuestionModel
    last: boolean
    questionAnswered: (question: QuestionModel) => void
    goToNext: () => void
}

export default function Questionnaire(props: QuestionnaireProps) {

    function answerProvided(index: number) {
        console.log('aqui');
        if (props.question.unanswered) {
            props.questionAnswered(props.question.respondWith(index));
        }
    }

    return (
        <div className={styles.questionnaire}>
            {props.question ?
                <Question
                    value={props.question}
                    answerTime={20}
                    indexAnswer={answerProvided}
                    timeout={props.goToNext} />
                : false
            }

            <Button onClick={props.goToNext}
                text={props.last ? 'Finalizar' : 'Próxima'} />
        </div>
    )
}