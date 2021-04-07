var app = new Vue(
  {
    el: "#app",
    data: {
      emailList: [],
    },
    mounted: function(){
      for(var i = 0; i < 10; i++){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
          .then((risposta) => {
            this.emailList.push(risposta.data.response);
          }
        );
      }
    }
  }
);
