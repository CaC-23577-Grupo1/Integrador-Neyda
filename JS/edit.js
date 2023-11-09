
// Array de muestra para generar el contenido
const productos = [
    {
        id: 1,
        nombre_producto: 'BABY YODA BLUEBALL',
        comentario: 'Figura Funko coleccionable de Baby Yoda Blueball de la saga Mandalorian.',
        categoria: 'starWars',
        licencia: "starWarsLicense",
        sku: "STW001001",
        precio: 1799.99,
        stock: 1,
        descuento: 0.30,
        cuotas: "0",
        img_preview__frente: 'star-wars/baby-yoda-1.webp',
        img_preview__dorso: "star-wars/baby-yoda-box.webp" 
    },
    
    {   
        id: 2,
        nombre_producto: 'PIDGEOTTO',
        comentario: 'Figura Funko coleccionable de Pidgeotto de la saga Pokemon.',
        categoria: 'pokemon',
        licencia: "pokemonLicense",
        sku: "PKM001003",
        precio: 1799.99,
        stock: 1,
        descuento: 0.1,
        cuotas: "3",
        img_preview__frente: 'pokemon/pidgeotto-1.webp',
        img_preview__dorso: "pokemon/pidgeotto-box.webp"
    },

    {
        id: 3,
        nombre_producto: 'SNAPE-PATRONUS',
        comentario: 'Figura Funko coleccionable de Snape Patronus de la saga Harry Potter.',
        categoria: 'harryPotter',
        licencia: "harryPotterLicense",
        sku: "HPT001001",
        precio: 1799.99,
        stock: 1,
        descuento: 0.1,
        cuotas: "6",
        img_preview__frente: '../images/harry-potter/snape-patronus-1.webp',
        img_preview__dorso: "../images/harry-potter/snape-patronus-box.webp"
    },
];
 // Crear una variable para guardar el id del producto seleccionado por el usuario
 let url = new URL(window.location.href); 
 const productIdSelected = url.searchParams.get('id');
// Primero nos aseguramos que todos los elementos HTML esten disponibles para ser manipulados con "DOMContentLoaded"

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOMContentLoaded ocurrido');

    //Filtrar el array productos para conseguir el producto correspondiente al id seleccionado y guardar el resultado de la filtración en una variable

    let infoProduct = productos.find(product => product.id == productIdSelected);

    
   //agarrar todos los tag de form que sean tipo entradas y cambiarles el .value según la variable infoProduct y el id correspondiente

   document.getElementById('nombre_producto').value = infoProduct.nombre_producto ?? '';
   document.getElementById('comentario').value = infoProduct.comentario ?? '';
   document.getElementById('categoria').value = infoProduct.categoria ?? '';
   document.getElementById('licencia').value = infoProduct.licencia ?? '';
   document.getElementById('sku').value = infoProduct.sku ?? '';
   document.getElementById('precio').value = infoProduct.precio ?? '';
   document.getElementById('stock').value = infoProduct.stock ?? '';
   document.getElementById('descuento').value = infoProduct.descuento * 100;
   document.getElementById('cuotas').value = infoProduct.cuotas ?? '';
  // document.getElementById('img_preview__frente').src = infoProduct.img_preview__frente || imagen_predeterminada.jpg; 
  // document.getElementById('img_preview__dorso').src = infoProduct.img_preview__dorso || imagen_predeterminada.jpg; //imagen_predeterminada.jpg debe proporcionar una url de una imagen por defecto en caso de no encontrarse la imagen
   

});

//GUARDAR EN UNA VARIABLE EL BOTON MODIFICAR PRODUCTO
let modificarProducto = document.getElementById('modificar_producto');

//ESCUCHAR EL CLICK DEL BOTON MODIFICAR PRODUCTO Y DEFINIR LA FUNCION PARA CAPTURAR NUEVOS VALORES DEL FORMULARIO

modificarProducto.addEventListener('click', function() {
   
    function capture_changes() {
    
    console.log('Ejecutando capture_changes');
    
    let nombreProducto = document.getElementById('nombre_producto').value;
    let comentario = document.getElementById('comentario').value;
    let categoria = document.getElementById('categoria').value;
    let licencia = document.getElementById('licencia').value;
    let sku = document.getElementById('sku').value;
    let precio = document.getElementById('precio').value;
    let stock = document.getElementById('stock').value;
    let descuento = document.getElementById('descuento').value;
    let cuotas = document.getElementById('cuotas').value;

    return {
        nombreProducto,
        comentario,
        categoria,
        licencia,
        sku,
        precio,
        stock,
        descuento,
        cuotas,
      };

      
    };

//GUARDAR EN UNA CONSTANTE EL RETURN DE LA FUNCION DE CAPTURAR CAMBIOS
    const productoActualizado = capture_changes();

//GUARDAR EN UNA VARIABLE EL INDEX DEL PRODUCTO SELECCIONADO

    let indexProducto = productos.findIndex(product => product.id == productIdSelected);

//ACTUALIZAR DATOS EN EL ARRAY

    productos[indexProducto] = productoActualizado;

   
});