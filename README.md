# Site de Advocacia
_Criar um site de advocacia, mas não aquele tradicional site institucional cheio de fotos, links padrões e conteúdos inúteis, como é o nosso [**site atual**](https://pellizzetti.adv.br). A ideia é criar um site semelhante a um app, especialmente focado em mobile, que atualmente está sendo nosso maior fluxo. Desejamos manter alguns links para manter a boa indexação do google._

## Design
- Focado em celular
- Design Minimalista, Inovador e criativo, focado em experiência de usuário

# Página Principal
A página principal pode ser utilizado o seguinte template, que tem um estilo de menus, inclusive com o background e esquema de cores do exemplo abaixo.

- https://html5up.net/dimension/download
- Exemplo: http://algorithmsbook.com/

## Menus
[Novo Processo]

[Meu Processo]

[Consulta]

[Saiba-Mais]

- botão de whats app embaixo - botão de telefone - direções

## SubMenus
[Novo Processo]

  - Previdenciário

  - Administrativo

  - Asfalto

  - Alvará

  - Família

  - Consumidor

  - Tributário

  - Outros

[Consulta]

  - Online

  - Pessoal

[Saiba-Mais]

  - Blog : https://pellizzetti.adv.br/blog/

  - História : https://pellizzetti.adv.br/advogado-previdenciario-cascavel/

# Funcionamento
- A página vai funcionar basicamente através de formulários específicos de acordo com escolha dos menus (Exceto o Saiba-Mais que vai direcionar a outros temas), com as devidas condicionais etc... tería que ter um db para gravar as informações destes formulários, que seriam uteis no futuro, basicamente um sistema CRUD, exemplo:

[Novo Processo]

  - Previdenciário

    1. Telefone

    2. Tipo: 1. Aposentadoria; 2. Pensão Por Morte 3. Auxílio Doença

    3. Sistema: INSS - Previdência Pública

    4. Escolha dos campos de acordo com as escolhas anteriores, condicionais...

## Formulários
- Gostaria de ter um formulário de boa qualidade, tenho visto o Typeform mas é inviável para utilizar, achei uma solução opensource [**ohmyform**](https://github.com/ohmyform/ohmyform) que parece viável, mas pode ser qualquer tipo de solução, até uma simulação de chat;
- No momento só vamos precisar das informações dos formulários de forma simples, pode ser até por e-mail, que eu acho uma solução simples, rápida e que dificilmente irá falhar.

# Blog
- Reformular o blog;
- Navegação e filtragem fácil por conteúdos, podem ser tags: #previdenciario #administrativo #asfalto
- Compatível com o layout do site principal (esquema de cores etc);
- Manter a ideia minimalista do site principal;
- Editor de textos simples -richtext (e aceitar md se possível);
- Painel de controle simples para publicações, adicionar usuários etc;
- Se for um blog estático também já está ótimo:
- Temos que ter um bom controle do SEO;
- Precisamos migrar o conteúdo que já temos;
- Deve permitir o acesso ao perfil do criador do conteúdo: ex. Bruno - /advogado-previdenciario-cascavel outros advogados /marcos /eduardo ... que serão sites criados
