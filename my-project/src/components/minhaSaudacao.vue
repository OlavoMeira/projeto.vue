<template>
<!-- 1. Estrutura de Componente de Arquivo Único (SFC)
      O curso enfatiza que o Vue utiliza Single File Components, onde HTML, JavaScript e CSS residem no mesmo arquivo
      .
      Exercício: Crie um novo componente chamado minhaSaudacao.vue.
      No <template>, adicione um título <h1> e um parágrafo.
      No <script>, defina uma variável com seu nome.
      No <style>, adicione uma cor específica para o título.
      Objetivo: Praticar a organização dos três blocos básicos dentro de um único arquivo
-->
  <h1> Esse é o meu novo componente.</h1>
    <p>Nome: {{ nome }}</p>
    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati atque reiciendis accusamus, eligendi iusto est libero nemo sint, ipsam iure debitis quos nisi eaque odit iste ipsa officiis autem dolorem? </p>
<!-- 
    2. Reatividade e Interpolação
    Um dos pilares do Vue é que tudo é reativo; se você altera um valor, ele deve ser propagado por todo o ecossistema do projeto.
    Exercício: Crie um contador simples.
    Exiba o valor de uma variável contador no HTML.
    Crie um botão que, ao ser clicado, aumente esse valor.
    Objetivo: Observar a atualização automática da interface quando os dados mudam

-->
    <div> 
      <button @click="incrementar"> 
         almenta valor
      </button>
       {{ contador }}
    </div>
   <!-- 3. Diretivas de Condição e Repetição (v-if e v-for)
        As diretivas são essenciais para a lógica dentro do template.
        Exercício:
        Crie uma lista de tarefas (Array) no seu script.
        Use a diretiva v-for para renderizar essa lista na tela.
        Use a diretiva v-if para mostrar uma mensagem como "Nenhuma tarefa pendente" caso a lista esteja vazia.
        Objetivo: Praticar a renderização dinâmica de elementos baseada em dados e condições.-->
    <div>
      <span  v-if="acumula.length == 0 " > Nem uma tarefa pendente.</span>
      <span v-for="(obj, index) in acumula" :key="index" class="item-lista">
        {{obj}}
      </span>    
    </div>

 <!--   4. Ligação de Dados Bidirecional (Two-way Data Binding)
    Este conceito é fundamental para trabalhar com formulários, permitindo que a interface e o código estejam sempre sincronizados.
    Exercício:
    Crie um campo de input de texto.
    Utilize a diretiva correspondente ao two-way data binding (mencionada como essencial para formulários nas fontes) para ligar o input a uma variável.
    Exiba o que está sendo digitado em tempo real em um parágrafo logo abaixo do campo.
    Objetivo: Dominar a sincronização de dados entre o usuário e o estado da aplicação.
-->
    <div>
        <input type="text" v-model="novoNome" placeholder="Digite um nome..." @keyup.enter="adicionarNome">
        <button @click="adicionarNome">Adicionar</button>
    </div>

  <!-- 
   5. Manipulação de Eventos
    O curso menciona que o uso de eventos é vital, como o exemplo de apertar "Enter" para adicionar itens ou clicar para completar tarefas.
    Exercício:
    No seu formulário de tarefas, adicione um botão "Adicionar".
    Configure um evento de clique que pegue o valor do input e o insira no Array de tarefas.
    Dica: Tente fazer com que a tecla "Enter" também dispare essa ação.
    Como as fontes disponibilizadas focam principalmente na introdução e na estrutura geral do que será construído (como a Todo List com CRUD e consumo de API), esses exercícios visam consolidar a base necessária para os tópicos mais avançados que o curso propõe, como o uso de Vuex ou Vue Router.
    Nota: Algumas diretivas e métodos específicos de implementação (como a sintaxe exata da Composition API) podem variar dependendo do que foi mostrado detalhadamente entre as aulas 2 e 14, informações que não constam integralmente nesta fonte introdutória.
   -->
    
      <div>
          <input type="text" v-model="novaTarefa" placeholder="Oque presisa ser feito" @keyup.enter="adicionarTarefa">
          <button @click="adicionarTarefa">Adicionar Tarefa</button>

      </div>

      <div>
          <p v-if="listadeTarefas.length === 0"> Nenhuma  tarefa pedente.</p>

          <ul v-else>
            <li v-for="(tarefa, index) in listadeTarefas" :key="index">
              {{ tarefa }}
              <button @click="removerTarefa(index)" > V </button>
            </li>
          </ul>
      </div>
    
</template>

<script>
export default {
  data(){
    return{
      nome: "Olavo",
      contador: 0,
      novoNome:"",
      novaTarefa: "",
      listadeTarefas: [],
      acumula: [

      ],
    }
  },
  methods: {
    incrementar() {
      this.contador = this.contador + 1;
    },
    adicionarNome() {
      if (this.novoNome !== "") {
        this.acumula.push(this.novoNome);
        this.novoNome = "";
      }
    },
    
    adicionarTarefa() {
      
      if (this.novaTarefa.trim() !== "") {
        this.listadeTarefas.push(this.novaTarefa);
        this.novaTarefa = ""; 
      }
    },
    removerTarefa(posicao) {
      this.listadeTarefas.splice(posicao, 1);
    }
  
  }
}
  
</script>

<style>
  h1 {
    color: blueviolet;
  }
.item-lista{
  margin: 2px;
}
  
</style>