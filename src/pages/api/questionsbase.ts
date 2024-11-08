import AnswersModel from "@/model/AnswersModel";
import QuestionModel from "@/model/QuestionModel";

const questions: QuestionModel[] = [
    new QuestionModel(306, 'Qual bicho transmite a Doença de Chagas?', [
        AnswersModel.incorrect('Abelha'),
        AnswersModel.incorrect('Barata'),
        AnswersModel.incorrect('Pulga'),
        AnswersModel.correct('Barbeiro'),
    ]),
    new QuestionModel(202, 'Qual fruto é conhecido no Norte e Nordeste como "jerimum"?', [
        AnswersModel.incorrect('Caju'),
        AnswersModel.incorrect('Côco'),
        AnswersModel.incorrect('Chuchu'),
        AnswersModel.correct('Abóbora'),
    ]),
    new QuestionModel(203, 'Qual é o coletivo de cães?', [
        AnswersModel.incorrect('Manada'),
        AnswersModel.incorrect('Alcateia'),
        AnswersModel.incorrect('Rebanho'),
        AnswersModel.correct('Matilha'),
    ]),
    new QuestionModel(204, 'Qual é o triângulo que tem todos os lados diferentes?', [
        AnswersModel.incorrect('Equilátero'),
        AnswersModel.incorrect('Isóceles'),
        AnswersModel.incorrect('Trapézio'),
        AnswersModel.correct('Escaleno'),
    ]),
    new QuestionModel(205, 'Quem compôs o Hino da Independência?', [
        AnswersModel.incorrect('Castro Alves'),
        AnswersModel.incorrect('Manuel Bandeira'),
        AnswersModel.incorrect('Carlos Gomes'),
        AnswersModel.correct('Dom Pedro I'),
    ]),
    new QuestionModel(206, 'Qual é o antônimo de "malograr"?', [
        AnswersModel.incorrect('Perder'),
        AnswersModel.incorrect('Fracassar'),
        AnswersModel.incorrect('Desprezar'),
        AnswersModel.correct('Conseguir'),
    ]),
    new QuestionModel(207, 'Em que país nasceu Carmen Miranda?', [
        AnswersModel.incorrect('Argentina'),
        AnswersModel.incorrect('Espanha'),
        AnswersModel.incorrect('Brasil'),
        AnswersModel.correct('Portugal'),
    ]),
    new QuestionModel(208, 'Qual foi o último Presidente do período da ditadura militar no Brasil?', [
        AnswersModel.incorrect('Costa e Silva'),
        AnswersModel.incorrect('Emílio Médici'),
        AnswersModel.incorrect('Ernesto Geisel'),
        AnswersModel.correct('João Figueiredo'),
    ]),
    new QuestionModel(209, 'Seguindo a sequência do baralho, qual carta vem depois do dez?', [
        AnswersModel.incorrect('Ás'),
        AnswersModel.incorrect('Nove'),
        AnswersModel.incorrect('Rei'),
        AnswersModel.correct('Valete'),
    ]),
    new QuestionModel(210, 'O adjetivo "venoso" está relacionado a:', [
        AnswersModel.incorrect('Vela'),
        AnswersModel.incorrect('Vento'),
        AnswersModel.incorrect('Vênia'),
        AnswersModel.correct('Veia'),
    ]),
    new QuestionModel(211, 'Que nome se dá à purificação por meio da água?', [
        AnswersModel.incorrect('Abrupção'),
        AnswersModel.incorrect('Abolição'),
        AnswersModel.incorrect('Abnegação'),
        AnswersModel.correct('Ablução'),
    ]),
    new QuestionModel(212, 'Qual montanha se localiza entre a fronteira do Tibet com o Nepal?', [
        AnswersModel.incorrect('Monte Branco'),
        AnswersModel.incorrect('Monte Fuji'),
        AnswersModel.incorrect('Monte Carlo'),
        AnswersModel.correct('Monte Everest'),
    ]),
    new QuestionModel(213, 'Em que parte do corpo se encontra a epiglote?', [
        AnswersModel.incorrect('Estômago'),
        AnswersModel.incorrect('Pâncreas'),
        AnswersModel.incorrect('Rim'),
        AnswersModel.correct('Pescoço'),
    ]),
    new QuestionModel(214, 'A compensação por perda é chamada de...', [
        AnswersModel.incorrect('Déficit'),
        AnswersModel.incorrect('Indexação'),
        AnswersModel.incorrect('Indébito'),
        AnswersModel.correct('Indenização'),
    ]),
    new QuestionModel(215, 'Que personagem do folclore brasileiro tem uma perna só?', [
        AnswersModel.incorrect('Cuca'),
        AnswersModel.incorrect('Curupira'),
        AnswersModel.incorrect('Boitatá'),
        AnswersModel.correct('Saci-pererê'),
    ]),
    new QuestionModel(216, 'Quem é o "patrono" do Exército Brasileiro?', [
        AnswersModel.incorrect('Marechal Deodoro'),
        AnswersModel.incorrect('Barão de Mauá'),
        AnswersModel.incorrect('Marquês de Pombal'),
        AnswersModel.correct('Duque de Caxias'),
    ]),
]

export default questions;