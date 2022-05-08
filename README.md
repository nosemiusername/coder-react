# Description

Este proyecto es el desafio correspondiente al curso de react de coderhouse, consitente en una app de un e-commerce para poder vender productos de un rubro a elección.

## Motivación

Alamano es la marca de fantasia que cree basado en productos para el hogar que fabrican en mi familia. Todos los productos expuestos son reales.

## User story/brief:

- Un usuario debe poder ingresar, navegar por los productos e ir a sus detalles.
- Desde el detalle se debe poder ver la descripción, foto y precio e ingresarlo al carrito.
- Una vez que el carrito tenga al menos un producto, se deberá visualizar un listado compacto de la orden con el precio total.
- Al ingresar su nombre, apellido, teléfono e e-mail (ingresándolo dos veces para corroborar que sea correcto), debe activarse el botón de ‘realizar compra’.
- Al clickear ‘realizar compra’ debe guardarse en la base de datos una orden que tenga todos los productos, la fecha y dar feedback del número de orden.

# Requisitos

## Requisitos Obligtorios Implementados

- Inicio: Al momento de ingresar a la app en la ruta base ‘/’
  - Visualizar -como mínimo- un set de productos disponibles para la compra.
  - Contar con algún acceso visible a la vista de carrito que debe alojarse en el route /cart.
  - Acceder a un menú desplegable que contendrá las categorías. Al clickear en una, debe navegar a la lista de productos de la misma mediante un route /categories/:categoryId. Éste invocará la misma vista que el home, pero visualizando sólamente productos de esa categoría.
- Flow: Al clickear un ítem del listado debe navegar a la ruta /item/:id, donde id es el id del item (generado por firebase), y ver la descripción del producto ( foto, precio, selector de cantidad). Si se ingresa a /item/:id y el producto no existe en firebase, debemos responder un mensaje adecuado que indique algo relacionado a que el producto no existe.
- Firebase:
  - Implementar al menos dos colecciones:
    - items: catálogo completo
      - Link para foto (puede almacenarse de modo estático en la página en una subruta /images/:itemid )
      - Precio unitario
      - Descripción (sólo se ve en detalle)
      - Categoria (id a mano para versión estática, o id de firebase para versión dinámica -opcional-)
    - orders: las órdenes generadas, que deben incluir los productos, descripciones y los precios al momento de la compra.
      - Las órdenes deben poder tener items surtidos, cada uno con su cantidad. Por ejemplo: remeras x 2 y gorra x 1
      - id, items, fecha, estado ( por defecto en ‘generada’)
- El cart debe ser accesible durante toda la experiencia y tener una indicación de la cantidad de items incluidos agregados (ej. si hay un ítem con dos unidades y un ítem con una unidad, debe decir ‘tres’).
- Checkout:
  - Items con sus cantidades
  - Total de la orden
  - Input para nombre, apellido y teléfono
  - Input para email y lógica de repetir el email 2 veces (a excepción de que realicen el desafío extra de auth, en ese caso no sería necesario)
  - Finalizada la orden, debo recibir mi order id con el id del objeto de firebase.
- La navegabilidad debe ocurrir utilizando el router, y no href’s o location.

## Requisitos Opcionales Implementados

- Checkout:
  - Postal, Ciudad, Region
- Categories versión dinámica: Crear una colección de categories en firebase para hidratar el menú y usar los id’s de éstos para linkearlos a sus ítems. Idealmente, categories/:id debería tener una descripción {id: ‘ad43k348j’, key: ‘calzado’, description: ‘Calzado’} para que quede /categories/calzado en lugar de /categories/ad43k348j
- auth/login: Implementar alguno de los servicios de autenticación disponibles de firebase para evitar el flujo de email. Si un usuario está logueado, el checkout debería decir ‘comprar como xxxx@gmail.com’, para evitar compras con cuentas indeseadas.
- Cart persistente: Hacer que el cart sea persistente en alguna api de almacenamiento local en el navegador (local/session storage).
- Mis órdenes: Con el orderId que se entrega al final de la compra, el usuario podría buscar su orden y usar el componente que ya utilizaste para el detalle, para mostrar cómo quedó conformada la order y el precio, pero no mostrar datos personales de la compra.
- Página para actualizar el perfil
- Se puede agregar al carrito tanto pinchando en la imagen y luego agregando la cantidad, o presionando el boton agregar al carrito
- Valida stock desde el disponible, pero aun no descuenta en función de las compras realizadas

## Implementación de buenas prácticas

- Uso de enviroment
- Modularizacion:
  - servicios
  - contextos
  - páginas
  - componentes
  - helpers
  - utils
  - identación
- Página de error
- Control del carro vacío
- Documentación de las funciones

# Tecnologías

<p align="left"> <a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg" width="36" height="36" alt="HTML5" /></a> <a href="https://reactjs.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" width="36" height="36" alt="React" /></a> <a href="https://mui.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/materialui-colored.svg" width="36" height="36" alt="Material UI" /></a> <a href="https://www.w3.org/TR/CSS/#css" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg" width="36" height="36" alt="CSS3" /></a> </p>

## Librerías Utilizadas

- [MUI Phone Numbe](https://www.npmjs.com/package/material-ui-phone-number)

# Setup

## Install

```
npm i
```

## Configurar ambiente

Completar el archivo env con la configuracion correspondiente

```
REACT_APP_FIREBASE_API_KEY
REACT_APP_FIREBASE_AUTH_DOMAIN
REACT_APP_FIREBASE_PROJECT_ID
REACT_APP_FIREBASE_STORAGE_BUCKET
REACT_APP_FIREBASE_MESSAGING_SENDER_ID
REACT_APP_FIREBASE_APP_ID
```

## Execute

```
npm start
```
