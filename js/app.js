var app = new Vue({
  el: "#app",
  data: {
    count: 0,
    totalClicks: 0,
    countRaisedTo: 0,
  },
  methods: {
    increment() {
      this.count += 1;
      this.totalClicks += 1;
    },
    decrement() {
      if (this.count === 0) return;

      this.count -= 1;
      this.totalClicks += 1;
    },
  },
  computed: {
    raisedTo() {
      if (this.count === 0) return (this.countRaisedTo = 0);

      this.countRaisedTo = this.count * this.count;
      console.log(this.countRaisedTo);
    },
  },
});
