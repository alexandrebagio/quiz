import type { NextApiRequest, NextApiResponse } from "next";
import questions from "../questionsbase";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
    const id = +(req.query.id ?? 0);
    const findQustion = questions.filter(question => question.id === id);

    if (findQustion.length === 1) {
        const selectedQuestion = findQustion[0].shuffleAnswers();
        res.status(200).json(selectedQuestion.forObject());
    } else {
        res.status(204).send({});
    }
}
