var app = new Vue(
  {
    el: "#app",
    data: {},
    mounted: function(){
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((risposta1) => {
        }
      );
    }
  }
);
