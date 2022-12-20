# Crud de Usuarios (codigo espagetti) - Tarea 05

### Objetivo: Simular una entrevista tecnica, el estudiante debera corregir el codigo y agregar ciertos features

---- 

- El modelo de Users empleado presenta la siguiente estructura: 
```javascript
{
    id: 1,
    first_name: 'string',
    last_name: 'string',
    email: 'string',
    password: 'string',
    birthday: 'YYYY/MM/DD'
}
```

- se encuentran las acciones de CRUD para los usuarios con sus respectivos verbos (get, post, patch y delete)

> las rutas permitidas que se pueden manejar son las siguientes: 

    - localhost:9000/api/v1/users
    - localhost:9000/api/v1/users/:id
