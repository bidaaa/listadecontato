import { contatos } from "./Contatos.js";  
import { exibirMenu } from "./Contatos.js";
import PromptSync from "prompt-sync";
export const prompt = PromptSync({ sigint: true });

export function deletarContato() {
    const id = prompt("Digite o ID do contato que deseja deletar: ");
    const contatoIndex = contatos.findIndex((contato) => contato.id == id);
    if (contatoIndex === -1) {
        console.log("Contato não encontrado.");
        exibirMenu();
        deletarContato();
    }
    const contato = contatos[contatoIndex];
    console.log(`Deletando contato: ID: ${contato.id} || Nome: ${contato.nome} || Telefone: ${contato.telefone} ||Email: ${contato.email}`);
    const confirmacao = prompt("Tem certeza que deseja deletar este contato? (s/n): ");
    if (confirmacao.toLowerCase() === 's') {
        contatos.splice(contatoIndex, 1);
        console.clear();
        console.log("Contato deletado com sucesso!");
    } else {
        console.log("Operação cancelada.");
    }
    exibirMenu();
}