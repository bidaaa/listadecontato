import PromptSync from "prompt-sync";
export const prompt = PromptSync({ sigint: true });

import { adicionarContato } from "./adicionar.js";
import { listarContatos } from "./listar.js";
import { atualizarContato } from "./atualizar.js";
import { deletarContato } from "./deletar.js";

export let contatos = []

export function exibirMenu(){
    console.log("MENU DE CONTATOS\n1-Adicionar Contato\n2-Listar Contatos\n3-Atualizar Contato\n4-Deletar Contato\n0-Sair do programa");
    let opcao = prompt("Digite a opção desejada: ");
    opcao = parseInt(opcao);
    switch(opcao) {
        case 1:
            adicionarContato();
            break;
        case 2:
            listarContatos();
            break;
        case 3:
            atualizarContato();
            break;
        case 4:
            deletarContato();
            break;
        case 0:
            console.log("Saindo do programa");
            process.exit();
        default:
            console.log("Opção inválida. Tente novamente.");
            exibirMenu();
    }
}

exibirMenu()