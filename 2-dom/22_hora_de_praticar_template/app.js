new Vue ({
  el: '#desafio',
  data: {
    nome: 'Pedro Antonini',
    idade: 22,
    imagem: 'https://images.ecycle.com.br/wp-content/uploads/2021/05/20195924/o-que-e-paisagem.jpg'
  },
  methods: {
    idadeVezes3(){
      return this.idade * 3
    },
    random(){
      return Math.random()
    }
  }
})