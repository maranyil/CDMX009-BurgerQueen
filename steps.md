# Guardar y listar una orden en Firestore

## Setup
- Instalar dependencias de Firestore
- Configuracion de Firestore en nuestro proyecto, new firebase({...})

### Guardar

- Usar firestore.collection.create(...) metodo para guardar una orden 

### Listar 

- Usar firestore.collection('orders').get() para traer las ordenes guardadaas