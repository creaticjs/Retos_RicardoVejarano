Vue.component('guitars', {
  props: ['nombre', 'precio', 'cantidad', 'subtotal'],
  data: function () {
    return {
    };
  },
  methods: {
  },
  template: `<div>
    <div class="col s3"> {{nombre}}</div>   
                <div class="col s3">{{precio}} </div>
                <div class="col s3">{{cantidad}} </div>
                <div class="col s3">{{subtotal}}  </div>
                </div>
                `
});



function navegateBack() {
  window.location.replace('http://127.0.0.1:5500/index.html');
}

let app = new Vue({
  el: '#app',
  data: {
    nombreUsuario: '',
    cedulaUsuario: '',
    celularUsuario: 0,
    productos: [],
    guitarras: [],
    id: 1,
    totalGuitarFacture: 0,
    totalGuitarFactureIva: 0,
    idGuitar: 1,
  },
  computed: {
    result: function () {
      return this.precio * this.cantidad;
    }
  },
  filters: {
    uppercase: function (str) {
      return str.toUpperCase()
    }
  },
  methods: {
    addGuitar: function (valor) {
      this.guitarras.push({ id: this.id, nombre: valor.nombre, precio: valor.precio, cantidad: 1, subtotal: valor.precio })
      this.idGuitar = this.idGuitar + 1;
      this.getTotalOfGuitars();
    },
    getTotalOfGuitars: function () {
      app.totalGuitarFacture = 0;
      this.guitarras.forEach(function (p) {
        app.totalGuitarFacture = Number(app.totalGuitarFacture) + Number(p.precio);
      })
      app.totalGuitarFactureIva = app.totalGuitarFacture + (app.totalGuitarFacture * 0.19);
      console.log('total', app.totalGuitarFacture);
    },
  }
})