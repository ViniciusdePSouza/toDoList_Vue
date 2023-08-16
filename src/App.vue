<template>
  <h1 :class="{ title: true, 'title-home': isHome }">Curso Vue</h1>
  <div>
    <h2>Tarefas em abertos</h2>
    <div v-for="task in uncompletedTasks" :key="task.id" class="todos-items">
      {{ task.title }}
    </div>
    <h2>Tarefas em Completas</h2>
    <div v-for="task in completedTasks" :key="task.id" class="todos-items">
      {{ task.title }}
    </div>

    <h2>Lista de Tarefas</h2>
    <div v-for="task in toDos" :key="task.id">
      <input type="checkbox" v-model="task.completed" />
      {{ task.title }}
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      showHeader: true,
      toDos: [
        {
          userId: 1,
          id: 1,
          title: "delectus aut autem",
          completed: false,
        },
        {
          userId: 1,
          id: 2,
          title: "quis ut nam facilis et officia qui",
          completed: false,
        },
        {
          userId: 1,
          id: 3,
          title: "fugiat veniam minus",
          completed: false,
        },
        {
          userId: 1,
          id: 4,
          title: "et porro tempora",
          completed: true,
        },
        {
          userId: 1,
          id: 5,
          title:
            "laboriosam mollitia et enim quasi adipisci quia provident illum",
          completed: false,
        },
      ],
      classVar: "title",
      isHome: true,
      name: "",
    };
  },
  methods: {
    onCLick(e) {
      console.log("click", e);
    },
    onMouseOver(e) {
      console.log("mouse over", e);
    },
    onMouseOut(e) {
      console.log("mouse out", e);
    },
    onChange() {
      console.log(this.name);
    },
  },
  computed: {
    completedTasks() {
      return this.toDos.filter((task) => task.completed);
    },
    uncompletedTasks() {
      return this.toDos.filter((task) => !task.completed);
    },
  },
};
</script>

<style>
.title {
  font-size: 20px;
  color: blue;
}
.title-home {
  font-size: 40px;
  color: green;
}

.todos-items {
  background-color: #000;
  margin: 0 0 5px 0;
  padding: 3px 6px;
  color: #fff;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
