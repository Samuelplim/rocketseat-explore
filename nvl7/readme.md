Comandos importantes do git

Configuração Inicial para ultilizar o git
git config --global user.name "nome_github"
git config --global user.email "email"

Comando para ver as configurações do git na maquina
git config --list

Primeiro commit
git init
git add .
git commit -m "menssage"

Log dos commit
git -log
git -log --oneline
git -log -n 3

Status
git status

Diferença entre os commit
git diff

Desfazer modificações em caso de working Diretory
git restore .

Desfazer modificações em caso de stage Area
git restore --stage .

Alterar mensagem do ultimo commit
git commit --amend -m "menssage"

Desfazer o último commit
git reset --soft HEAD~1

Iniciando uma conexão a um repositorio git versão (2.39)
Após os comandos

git init
git add .

A brabch padrão é
git branch -M main

via SSH
git remote add origin SSH_URL
git push -u origin main

Nota que é possivel criar varias branch para poder trabalhar com versões de projeto diferentes!

Crie um arquivo chamado .gitignore para que os arquivos no projeto não seja enviado para github
geralmente nos projetos com react você despensa a pasta node_module

Para enviar pastas fazias crie dentro da pasta o arquivo .gitkeep

Clonar repositorios
git clone SSH_URL

Para baixar uma atualização de um projeto ultilize
git pull
