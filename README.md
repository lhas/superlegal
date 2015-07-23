# Super legal - powered by @lhas e @BBlender

<img src="https://github.com/lhas/superlegal/blob/master/src/assets/img/superlegal_logo.svg" />

Este é um pacote de início para começarmos nossos projetos.

Resolvi desenvolvê-lo open-source para poder utilizar nos meus projetos pessoais e para que outras pessoas possam contribuir.

As atuais features dele são:
* Separação de código por camadas (src/ e dist/)
* Stylus (Pré-processador de CSS mais moderno existente)
* Uglify (Minificação de arquivos JS)
* Jade (Template Engine para HTML, super eficiente)
* Watch (O Grunt observa os arquivos alterados e de acordo com seu tipo roda alguma tarefa. Ex: arquivos .styl (do Stylus) são compilados em .min.css)
* LiveReload (todas as alterações no CSS e nas views (Jade) são efetuadas sem precisar recarregar a página)
* Minificação de Imagens (JPG e PNG)
* Web Server (Utiliza o grunt-contrib-connect para gerar um servidor web para acessar a página)

## 1) Instalação
* 1) Clone o repositório
* 2) Acesse a pasta clonada via Terminal
* 3) Rode `npm install`
* 4) Após instalar todas as dependências, rode `grunt`
* 5) Se você quiser apenas compilar os arquivos para subir o site, basta rodar `grunt build`

## 2) Como criar páginas novas
* 1) Editar o src/assets/js/app.js
* 2) Duplicar este pedaço de código
```
when('/sobre-nos', {
templateUrl: 'sobre-nos.html',
controller: 'SobreNosController'
}).
```
* 4) Fazer as adaptações necessárias
* 5) Criar o arquivo de view em src/views/view.jade
* 6) Criar o controller da página em src/assets/js/controllers.js
* 7) Pronto, rota, controller e view de uma página nova configurado! Enjoy :-D

## 3) Dúvidas
* 1) Onde colocar dependências externas (ou onde o Bower instala seus componentes)
`/src/assets/lib`
* 2) Como acessar o site depois de rodar grunt
`http://localhost:9001/`

Se quiser desabilitar as rotas do angular, basta remover este trecho de configuração do routerProvider e ser feliz!