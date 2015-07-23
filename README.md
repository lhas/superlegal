# Super legal
## powered by BBlender

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

## Instalação
1) Clone o repositório;
2) Acesse a pasta clonada via Terminal;
3) Rode `npm install`;
4) Após instalar todas as dependências, rode `grunt`
5) Se você quiser apenas compilar os arquivos para subir o site, basta rodar `grunt build`
