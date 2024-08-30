# 🛠️ API para integrar automação de abertura de tarefas 
> integration-api-for-task-automation

Esta API foi desenvolvida para automatizar o processo de abertura de tarefas operacionais a partir de respostas submetidas via Microsoft Forms.
Utilizando `Node.js` e `Express`, a API processa as respostas recebidas do Microsoft Forms, interage com as APIs do ClickUp para criar tasks com base nas respostas do formulário e devolve algumas informações ao Power Automate para ele continuar o fluxo de automação.

## ⚙️ Funcionalidades

- 📥 Recebe solicitações HTTP POST do Power Automate com as respostas submetidas via Microsoft Forms.
- 🔍 Processa e valida os dados recebidos.
- 📝 Interage com as APIs do ClickUp para criar as tasks.
- 📤 Devolve informações processadas para o Power Automate.
- 🚀 Facilita a automação de tarefas a partir de formulários.

## 📋 Requisitos

- 🟢 Node.js
- 🟢 Express
- 🟢 Power Automate
- 🟢 Microsoft Forms
- 🟢 ClickUp

## 🚀 Instalação

1. Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/integration-api-for-task-automation.git
    ```

2. Navegue até o diretório do projeto:
    ```bash
    cd integration-api-for-task-automation
    ```

3. Instale as dependências do projeto:
    ```bash
    npm install
    ```

4. Inicie a aplicação:
    ```bash
    npm start
    ```

## 🔗 Links úteis

- [ClickUp API](https://clickup.com/api/)
- [Microsoft Power Automate](https://learn.microsoft.com/pt-br/power-automate/getting-started)
