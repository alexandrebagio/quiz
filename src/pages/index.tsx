import Questionnaire from '@/components/Questionnaire'
import QuestionModel from '@/model/QuestionModel'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function Home() {
    const router = useRouter()

    const [idsQuestions, setIdsQuestions] = useState<number[]>([])
    const [question, setQuestion] = useState<QuestionModel>()
    const [AnswersCorrects, setAnswersCorrects] = useState<number>(0)

    async function loadQuestionsIds() {
        const resp = await fetch('/api/questionnaire');
        const idsQuestions = await resp.json();
        setIdsQuestions(idsQuestions);
    }

    async function loadQuestion(id: number) {
        const resp = await fetch(`/api/question/${id}`);
        const json = await resp.json();
        const questionLoaded = QuestionModel.createObject(json);
        setQuestion(questionLoaded);
    }

    useEffect(() => {
        loadQuestionsIds();
    }, [])

    useEffect(() => {
        if (idsQuestions.length > 0) {
            loadQuestion(idsQuestions[0]);
        }
    }, [idsQuestions])

    function questionAnswered(questionAnswered: QuestionModel) {
        setQuestion(questionAnswered);
        const hit = questionAnswered.hit;
        setAnswersCorrects(AnswersCorrects + (hit ? 1 : 0));
    }

    function nextIdQuestion() {
        const nextIndex = idsQuestions.indexOf((question?.id ?? -1)) + 1;
        return idsQuestions[nextIndex];
    }

    function goToNext() {
        const nextId = nextIdQuestion();

        if (nextId) {
            goToNextQuestion(nextId)
        } else {
            finish();
        }
    }

    function goToNextQuestion(nextId: number) {
        loadQuestion(nextId);
    }

    function finish() {
        router.push({
            pathname: "/result",
            query: {
                total: idsQuestions.length,
                corrects: AnswersCorrects,
            }
        })
    }

    return question ? (
        <Questionnaire
            question={question}
            last={nextIdQuestion() === undefined}
            questionAnswered={questionAnswered}
            goToNext={goToNext} />
    ) : false
}
