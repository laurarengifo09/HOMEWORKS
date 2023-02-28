//Nombre: Laura Sofia Rengifo Ibarra
//Codigo: 2210043
//Estructuras de datos y algoritmos 2

const Bodega_1 = [ [
    {precio: 110000000, marca: 'BMW', modelo:2018, km:50000 },
    {precio: 75000000, marca: 'Mazda', modelo:2017, km:30000}],
    {precio: 70000000, marca: 'Mazda', modelo:2019, km:20000 },
    {precio: 25000000, marca: 'Ford', modelo:2010, km:99000},
    {precio: 45000000, marca: 'Ford', modelo:2014, km:65000},
    {precio: 43000000, marca: 'Renault', modelo:2020, km:50000}
]
const Bodega_2 = [ [
    {precio: 55000000, marca: 'Renault', modelo:2018, km:50000 },
    {precio: 110000000, marca: 'Audi', modelo:2015, km:70000}],
    {precio: 89000000, marca: 'BMW', modelo:2016, km:56000 },
    {precio: 55000000, marca: 'Ford', modelo:2019, km:39000},
    {precio: 35000000, marca: 'Mazda', modelo:2010, km:65000},
    {precio: 73000000, marca: 'Mazda', modelo:2020, km:10000}
]

//function concat - flat
const Vehiculos = Bodega_1.concat(Bodega_2).flat()
console.log(Vehiculos)

//function splice - agregar un nuevo vehiculo
Vehiculos.splice(1,0,{precio: 70000000, marca: 'Mazda', modelo:2020, km:10000})
console.log(Vehiculos)

//function unshift
let Vehiculo_agregado = Vehiculos.unshift(
    {precio: 75000000, marca: 'Renault', modelo:2010, km:100000 }
);
console.log('hay un total de '+ Vehiculo_agregado + ' vehiculos en el array')

//function slice, pop, push - Crear un nuevo array con algunos vehiculos 
const NewArray_Vehiculos=Vehiculos.slice(1,5);
let ultimo= Vehiculos.pop()
NewArray_Vehiculos.push(ultimo);

//function shift
NewArray_Vehiculos.shift()
console.log(NewArray_Vehiculos);

//function foreach 
let result=[]
Vehiculos.forEach((x)=>{
    if(x.km > 50000){
        result.push(x)
    }
})
console.log(result)

// function at = acceder a un arreglo 
const acceder = Vehiculos.at(-1)
console.log(acceder)

//function flatmap 
let descuento =Vehiculos.flatMap(
    Vehiculos => Vehiculos.precio * 0.20
)
console.log (descuento)

//function map y sort 
let nombres = Vehiculos.map(x=>{
    return x.marca;
  })
  .sort();
console.log ("los Marcas de los Vehiculos son:" + nombres)
  

//function reduce 
let sumatoria = Vehiculos.reduce((a,b) =>{
    return { precio:a.precio +b.precio}

})
console.log ( 'la sumatoria del precio de todos los vehiculos es: '+ sumatoria.precio)

//function findLast()
function ultimo_modelo (Vehiculos){
    return Vehiculos.modelo >2017;
}
console.log(Vehiculos.findLast(ultimo_modelo));

//function find 
let carro = Vehiculos.find(x => x.precio>100000000)

//function findLastIndex
let buscado = Vehiculos.findLastIndex(x=> x.modelo == 2015 && x.marca == 'Audi');
console.log('el Vehiculo buscado esta en la posición: '+ buscado)



//function every - todos los vehiculos cuestan menos de 50,000,000?
const valor=Vehiculos.every(precio);

function precio(a){
    return a.Precio<50000000;
}
console.log(valor)


//function filter 
let menorKm = Vehiculos.filter(x =>{
    return x.km< 60000
 })
console.log ("los Vehiculos con un km menor a 60000 son: ")
console.log(menorKm);

//function Reverse 
console.log(Vehiculos.reverse())

//function copywithin
const modelos =[2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020]
modelos.copyWithin(1,5);

//function entries 
const iterator = modelos.entries ();
for(const a of iterator){
    console.log(a);
}

//function some 
let some = modelos.some(function(a){
    return a===2010
});
console.log(some)

//function join 
const separar = modelos.join('-');

//function includes 
const  verificar = modelos.includes('2022');
if(verificar){
    console.log('esta incluido en el array')
}else{
    console.log('este año no esta incluido')
}

// function indexof
const año_2017 = modelos.indexOf(2017);

//function values 
var iterator_2 =modelos.values();
for (let año of iterator_2){
    console.log(año);
}
//function LastIndexOf 
const año_2010 = modelos.lastIndexOf('2017')

//function reduceRight
const array_precios =[110000000, 65000000, 54000000, 76000000, 100000000]
let suma= array_precios.reduceRight((a,i)=> a+i);

//function localeString 
const localeString= modelos.toLocaleString('de-DE')
// Expected Output : '2.010,2.015,2.016,2.017,2.018,2.019,2.020,2.017,2.018,2.019,2.020'

//function toString
console.log(array_precios.toString())

//function keys
console.log(Object.keys(array_precios))



