## Enviando a aplicação para o DockerHub

<p>A partir da raiz do projeto, digite:</p>

<code>docker build -t alumni-site:dev .</code>

<p>Após o sucesso do build, esteja logado com sua conta do DockerHub para enviar a imagem.</p>

<p>Para se conectar ao Docker:</p>

<code>docker login</code>

<p>Insira suas credenciais e faça o login.</p>

**Criando a tag para a imagem.**

<p>Com a imagem montada, e o login efetuado, execute:</p>

<code>docker images</code>

<p>Recupere o id da imagem alumni-site, pois iremos utilizar no próximo passo.</p>

<code>docker tag "id_imagem" eureca/alumni-site:dev</code>

<code>docker push eureca/alumni-site:dev</code>

- <b>"eureca/"</b> é o nome da organização que o docker enviará/atualizará a imagem.
- <b>alumni-site:dev</b> é o nome da imagem.