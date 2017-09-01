# **Carrinho Loja Virtual Buscapé**

Projeto de construção de visualização de produtos de uma loja virtual ao qual insere e retira o produto desejado do carrinho de compras.

# **Bibliotecas**


- Bootstrap ( Estrutura Responsiva )
- Fontawesome ( Icones )
- Jquery ( Funcionalidades )
  
# **Funcionamento**



-  O usuário tem a disponibilidade de visualizar os itens para efetuar a sua compra. 
-  Quando clicado em algum no botão de Adicionar carrinho, ou no icone de carrinho em telas menores, o site pergunta ao cliente se ele realmente deseja colocar este item no seu carrinho. Caso escolha a opção sim, o item vai parar em seu carrinho adicionando um badge de visualização no botão localizado no canto direito superior, informando quantos itens ele possui em seu carrinho. 
-  Clicando neste botão de menu, os itens colocados em seu carrinho podem ser visualizados, juntamente com o valor total dos produtos á  vista ou parcelado. É possivel o usuário excluir o item de seu carrinho clicando no botão (X), ao qual remove o mesmo da lista e refaz o valor total a ser pago.
- Caso não tenha mais nenhum item no carrinho, ao clicar no botão, aparece uma mensagem informando que no tem nenhum item no mesmo e o badge não aparece mais.

# **Bugs**


> Foi encontrado uma "falha" no JSON dos dados disponibilizados, ao qual dois items possuiam o mesmo id. Para resolver este problema, foi acrescentado um novo atributo chamado alias, ao qual foi utilizado como chave primária dos itens.
