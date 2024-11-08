import { shuffle } from "@/functions/array";
import type { NextApiRequest, NextApiResponse } from "next";
import questions from "../questionsbase";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    const ids = questions.map(q => q.id);
    res.status(200).json(shuffle(ids));
}
