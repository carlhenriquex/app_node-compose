Explicando os principais elementos

services: define os serviços que serão executados.

db: representa o container do MySQL.

backend: representa o container da aplicação Node.js.

image: indica qual imagem será utilizada para criar o container.

build: indica que o Docker deverá construir uma imagem utilizando o Dockerfile localizado em backend/.

environment: define as variáveis de ambiente necessárias para configurar o MySQL.

volumes: mantém os dados do banco persistentes, mesmo que o container seja removido.

ports: realiza o mapeamento da porta 3000 do computador para a porta 3000 do container.

depends_on: estabelece uma dependência entre os serviços.

condition: service_healthy: determina que o backend aguarde o MySQL passar na verificação de saúde antes de iniciar.

O init.sql será executado apenas na inicialização de um banco ainda não inicializado. Se o volume já possuir dados, modificar o SQL não fará com que ele seja executado novamente.

## Executando a aplicacão

```bash
    docker compose up -d --build
```