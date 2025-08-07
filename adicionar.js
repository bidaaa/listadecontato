import PromptSync from "prompt-sync"
import { contatos } from "./Contatos.js";
import { exibirMenu } from "./Contatos.js";
export const prompt = PromptSync({ sigint: true });

export function adicionarContato() {
    console.log("Digite o nome do contato: ")
    let nome = prompt("> ");
    console.log("Digite o telefone do contato: ")
    let telefone = prompt("> ");
    if (isNaN(telefone) || telefone.length != 11) {
        console.log("Telefone inválido. Deve conter apenas números.");
        adicionarContato()
    }
    console.log("Digite o email do contato: ")
    let email = prompt("> ");
    const id = Date.now();

    let contato = {
        id: id,
        nome: nome,
        telefone: telefone,
        email: email
}
    
    contatos.push(contato);

console.clear();
console.log("Contato adicionado com sucesso!");
exibirMenu();
}