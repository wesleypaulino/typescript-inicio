import { NegociacaoController } from "./controllers/negoicacao-controller.js";
import { Negociacao } from "./models/negociacao.js";

const negociacao = new Negociacao( new Date(), 10, 100)
const controller = new NegociacaoController();
