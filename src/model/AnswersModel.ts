export default class AnswersModel {
    #value: string;
    #correct: boolean;
    #showed: boolean;

    constructor(value: string, correct: boolean, showed = false) {
        this.#value = value;
        this.#correct = correct;
        this.#showed = showed;
    }

    get value() {
        return this.#value;
    }

    get correct() {
        return this.#correct;
    }
    
    get showed() {
        return this.#showed;
    }

    showing() {
        return new AnswersModel(this.#value, this.#correct, true);
    }

    forObject() {
        return {
            value: this.#value,
            correct: this.#correct,
            showed: this.#showed
        };
    }

    static correct(value: string) {
        return new AnswersModel(value, true);
    }
    
    static incorrect(value: string) {
        return new AnswersModel(value, false);
    }

    static createObject(obj: AnswersModel): AnswersModel {
        return new AnswersModel(obj.value, obj.correct, obj.showed);
    }
}