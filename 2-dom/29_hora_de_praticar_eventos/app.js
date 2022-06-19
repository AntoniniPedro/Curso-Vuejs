new Vue({
    el: '#desafio',
    data: {
        valor: 'sdasdas'
    },
    methods: {
        exibirAlerta() {
            alert(this.valor)
        },
        valorDoInput(event) {
            this.valor = event.target.value
        }
    }
})