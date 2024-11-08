import { shuffle } from "@/functions/array";
import AnswersModel from "./AnswersModel"

export default class QuestionModel {
    #id: number;
    #text: string;
    #answers: AnswersModel[];
    #hit: boolean;

    constructor(id: number, text: string, answers: AnswersModel[], hit = false) {
        this.#id = id;
        this.#text = text;
        this.#answers = answers;
        this.#hit = hit;
    }

    get id() {
        return this.#id;
    }

    get text() {
        return this.#text;
    }

    get answers() {
        return this.#answers;
    }

    get hit() {
        return this.#hit;
    }

    get answered() {
        for (const r of this.#answers) {
            if (r.showed) return true;
        }

        return false;
    }

    get unanswered() {
        return !this.answered;
    }

    respondWith(index: number): QuestionModel {
        const hit = this.#answers[index]?.correct;
        const answers = this.#answers.map((r, i) => {
            const selectedAnswer = index === i;

            return selectedAnswer || r.correct ? r.showing() : r;
        });

        return new QuestionModel(this.id, this.text, answers, hit);
    }

    shuffleAnswers(): QuestionModel {
        const shuffleAnswers = shuffle(this.#answers);

        return new QuestionModel(this.#id, this.#text, shuffleAnswers, this.#hit);
    }

    forObject() {
        return {
            id: this.#id,
            text: this.#text,
            answered: this.answered,
            hit: this.#hit,
            answers: this.#answers.map(r => r.forObject()),
        }
    }

    static createObject(obj: QuestionModel): QuestionModel {
        const answers = obj.answers.map(r => AnswersModel.createObject(r));

        return new QuestionModel(obj.id, obj.text, answers, obj.hit);
    }
}