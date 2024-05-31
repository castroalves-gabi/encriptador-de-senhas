# Gerenciador de Senhas

Este é um simples gerenciador de senhas desenvolvido em HTML, CSS e JavaScript. Ele permite armazenar dados criptografados, os quais só podem ser visualizados com senha.

## Funcionalidades

- **Armazenamento de Dados**: Permite salvar o nome do serviço, email (opcional) e senha de forma criptografada.
- **Visualização de Dados**: Após definir uma senha mestra, é possível visualizar os dados salvos, descriptografando-os usando a senha mestra.
- **Criptografia**: Utiliza a biblioteca CryptoJS para criptografar os dados sensíveis, como senhas e emails.

## Como Usar

1. **Definir Senha Mestra**: Antes de salvar ou visualizar os dados, é necessário definir uma senha mestra para criptografar e descriptografar os dados.
2. **Salvar Dados**: Insira o nome do serviço, email (opcional) e senha, então clique em "Salvar Dados" para criptografar e armazenar as informações.
3. **Visualizar Dados**: Após definir a senha mestra, clique em "Ver Dados", insira a senha mestra quando solicitado e os dados serão exibidos descriptografados.

## Observações

- É importante lembrar a senha mestra definida, pois ela será necessária para visualizar os dados salvos.
- Os emails podem ser criptografados opcionalmente, marcando a opção "Criptografar Email".
- Este é um projeto simples e pode ser expandido com mais funcionalidades e melhorias de segurança.

Para rodar este projeto localmente, basta clonar este repositório e abrir o arquivo `index.html` em seu navegador.
