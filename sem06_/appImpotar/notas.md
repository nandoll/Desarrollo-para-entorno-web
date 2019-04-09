crear un nuevo proyecto

rails new appImportar
entrar a db

#crear una nueva BD 
*sqlite3 development.sqlite3*

#crear la table personas
CREATE TABLE personas(
   ...> id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
   ...> dni VARCHAR(8) NOT NULL,
   ...> nombre vachar(20) NOT NULL,
   ...> apellido VARCHAR(20) NOT NULL);

#Insertar nuevos registros
INSERT INTO personas VALUES(
   ...> NULL, '45151421', 'Fernando', 'Antezana');

#Crear el esquema a partir de la tabla (cd..)
rake db:schema:dump

#generar el scaffold a partir de la table importante --no-migration

rails g scaffold persona dni:string{8} nombre:string{20} apellido:string{20} --no-migration
