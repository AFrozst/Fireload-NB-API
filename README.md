# Fireload-NB-API

## 🔌 Configuraciones

Es necesario crear la base de datos **fireload-nb-db** en su servidor pgAdmin.

## 💿 Instalar Dependencias

Desde su CLI y dentro de la carpeta _fireload-nb-api/_, ejecuta el siguiente comando:

npm install

**Asegúrese de haber modificado las configuraciones de la base de datos dentro de config/config.js**

Cree su archivo _.env_ segun las variables del _.env.example_. Modifique los campos de la base de datos segun la configuracion de su pgAdmin.

Para ejecutar migraciones use el siguiente comando dentro de la carpeta _fireload-nb-api/_ **solo use este comando una vez cuando la configuracion del .env este terminado**:

npm run create-schema

Para ejecutar los seeder, use el siguiente comando **solo se necesita en un entorno local/desarrollo, evite usarlo en producción** :

npm run seeder

## 💻 Ejecutar Proyecto

Para ejecutar el proyecto use el siguiente comando dentro de la carpeta _fireload-nb-api/_:

npm run start

Para ver el esquema de la base de datos, ejecute en su navegador:

https://drive.google.com/file/d/1m5MqO7-VSKblMKou-8BuTPcxA7-zHlE7/view

Se utilizaron PostgreSQL y Node.js para el desarrollo de este proyecto con la implementacion del framework Express.
