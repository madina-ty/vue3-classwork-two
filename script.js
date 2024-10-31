Vue.createApp({
    data() {
      return {
        name: '',
        surname: '',
        birthday: '',
        email: '',
        submitted: false
      }
    },
    methods: {
      fillInputs() {
       this.submitted= true;
      }
    }
  }).mount('#registration');

  const app = Vue.createApp({
    data() {
      return {
        newTask: '',
        tasks: [
          { title: 'Do homework', completed: false },
          { title: 'Take cat to vet', completed: false },
          { title: 'Buy gym membership', completed: true }
        ]
      };
    },
    methods: {
      addTask() {
        if (this.newTask) {
          this.tasks.push({ title: this.newTask, completed: false });
          this.newTask = '';
        }
      },
      removeTask(index) {
        this.tasks.splice(index, 1);   
      },
      clickCheckbox(index) {
        this.tasks[index].completed = !this.tasks[index].completed;
    }
    }
  });
  
  app.mount('#app');