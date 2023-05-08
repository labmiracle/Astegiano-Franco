
const carrito = {
    productos: [{
    nombre: 'papel higienico',
    unidades: 4,
    precio: 5
    },
    {
    nombre: 'chocolate',
    unidades: 2,
    precio: 1.5
    }],

    get precioTotal() {
        let sum = 0
        for (let i of this.productos){

            sum += i.precio;
        }

        console.log(sum);
        return sum;

    }
    }

let result = carrito.precioTotal; // when calling precioTotal with () I get a type error => ????
