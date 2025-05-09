# Estoque A.C. Eletropeças
  A  AC Eletropeças refere-se a uma loja de concertos e vendas de peças e assessórios para eletrodomésticos, localizada no centro do município de Parelhas no Rio Grande do Norte. Com o crescimento do estabelecimento, o proprietário Alexsandro dos Santos Azevedo relatou a necessidade de um controle melhor sobre a entrada e saída da mercadoria do estoque, que até então era realizado de forma manual em cadernos e fichários, o que consome considerável tempo e apresentou por vezes diversas falhas e inconsistências, gerando perda de mercadoria e compras desnecessárias. Dessa maneira, o projeto consistirá no desenvolvimento de um software para o gerenciamento e controle dos produtos do estabelecimento. </br>
  Nesse software será possível fazer o controle de mercadorias(entrada e saída), excluir produtos, fazer devidas alterações quanto as características do produto, nome  e quantidade. Colocando assim, o senhor Alexsandro conseguirá evitar gastos desnecessários com produtos, a perca de artigos por falta de controle das quantidades e conseguirá gerenciar de forma virtual todos os produtos de sua loja. Trazendo eficiência para seu trabalho e agilidade, além da economia do tempo e recursos da AC Eletropeças.

<h2>Definições do Sistema</h2>

**Definição da Arquitetura:** MVC - Model, View, Controller</br>
**Linguagem de Programação:** TypeScript, HTML, Bootstrap</br>
**Ambiente de Desenvolvimento:** VScode Studio</br>
**SGBD:** PostgresSQL - PSQL </br>
**ORM:** Prisma</br>
**Sistema Operacional:** Ubuntu 22.04

<h2>Requisitos de Software</h2>

  <h3>Requisitos Funcionais</h3>
  <p>
        Os requisitos funcionais do sistema se referem diretamente às funcionalidades que
    ele possui, isso é, quais operações e tarefas o sistema é capaz de executar. Esses
    requisitos são fundamentais para determinar o que o sistema deve fazer e quais
    resultados devem ser alcançados ao executar essas funções. No caso particular do
    sistema de estoque da AC Eletropeças, é importante destacar que ele possui
    diversos requisitos funcionais específicos que garantem a sua eficácia:
  </p>
  
  | Código  | Identificação | Descrição |
  | --- | --- | ---|
  | RF01 | cadastrarFunc( ) | Cadastrar usuário do tipo funcionário |
  | RF02 | logarComoAdm( ) | O usuário fará login como usuário administrador, obtendo todas as suas permissões |
  | RF03 | logarComoFunc( ) | O usuário fará login como funcionário |
  | RF04 | listarPecas( ) | Os usuários administrador poderão visualizar as peças em estoque e suas informações, tais como nome, preço, quantidade e descrição |
  | RF05 | buscarPecaNome( ) | Os usuários administrador e funcionário poderão buscar peças no estoque a partir de seu nome |
  | RF06 | addPeca( ) | O usuário administrador poderá adicionar novas peças ao estoque |
  | RF07 | deletarPeca( ) | O usuário administrador poderá deletar peças do estoque |
  | RF08 | editarPeca( ) | O usuário administrador poderá editar os dados das peças do estoque |
  | RF09 | reduzirEstoque( ) | Os usuários administrador e funcionário poderão reduzir manualmente através de um botão a quantidade de determinada peça no estoque |
  | RF10 | sair( ) | Os usuário administrador e funcionário poderão sair da página    do estoque ao clicarem manualmente em um botão, sendo redirecionados para a página de login |

  <h3>Requisitos Não-Funcionais</h3>
  
  <p> 
        Os requisitos não-funcionais são as restrições do software, ou seja, eles especificam
    como o sistema deve operar. Isso inclui aspectos de qualidade e desempenho, restrições, 
    limitações e aspectos técnicos. No caso da AC Eletropeças, temos os
    seguintes requisitos não-funcionais:
  </p>
  
  | Requisito Não-Funcional  | Métrica |
  | --- | --- |
  | Autenticação e Autorização | Há um controle de acesso para garantir que apenas   o administrador tenha acesso a determinadas funcionalidades |
  | Integridade dos Dados | O login do administrador não será alterado indevidamente pois o acesso dele será cadastrado no banco de dados pelo programador, na criação do código |
  | Interface do Usuário | A aba de vendas, a qual o funcionário terá acesso, é de fácil manejo, simplificando o trabalho do mesmo |
  | Segurança dos Dados | Há criptografia nas senhas dos usuários e do administrador |

  **Observações Importantes:**

  <p>
       No requisito de segurança, implementamos a criptografia das senhas dos usuários
  para prevenir o hackeamento desses dados. Existe também uma aba exclusiva para
  o administrador, que terá controle total sobre o estoque. O funcionário só poderá
  subtrair produtos durante as vendas, enquanto o administrador terá total autonomia
  para cadastrar, alterar informações sobre os produtos ou excluí-los. 
  </p>
  
<h2>Projeto de Banco de Dados</h2>

  <h3>Diagrama de Entidade-Relacionamento</h3>
  

  - O sistema é composto por duas entidades que se relacionam: Usuário e Peças. </br>
  - A entidade-mãe "Usuário" possui duas entidades filhas "Funcionário" e "Administrador." </br>
  - A entidade "Administrador" possui, além dos atributos da sua entidade-mãe, o atributo PermissãoDeAlterações, que lhe permite adicionar novas peças, editá-las e deletá-las. </br>
  - A entidade "Funcionário" possui, além dos atributos da sua entidade-mãe, o atributo PermissãoDeBaixa, que lhe permite apenas dar baixa na peça que foi vendidada, não podendo realizar as alterações que são permitidas ao usuário Administrador. </br>
  - De modo geral, ambos podem vizualizar e pesquisar as peças disponíveis. No entando, quanto ao relacionamento entre as entidades, que se rreferem a manipulação do banco de dados, o usuário "Administrador" pode realizar alterações como editar, adicionar e deletar peças, enquanto que o usuário "Funcionário" apenas decresce o número da quantidade de peças quando realiza uma venda. </br>
  
  <img src="Projeto de Banco de Dados.png">

  <h3>Código SQL do Modelo Físico</h3>

  ```
  CREATE TABLE Usuario (
      id_usuario SERIAL PRIMARY KEY,
      email VARCHAR(50) NOT NULL UNIQUE,
      password VARCHAR(100) NOT NULL,
  );
  
  
  CREATE TABLE Pecas (
      id_peca SERIAL PRIMARY KEY,
      nome VARCHAR(50) NOT NULL,
      quantidade INT NOT NULL,
      preco DECIMAL(10,2) NOT NULL,
      descricao TEXT
  ); 
  ```

  <h3> Conexão do banco de dados <h3>

    Criar um arquivo .env na raiz do projeto com essas variáveis de acordo com seu banco de dados.
   - PGUSER=
   - PGHOST=
   - PGPASSWORD=
   - PGDATABASE=
   - PGPORT=
