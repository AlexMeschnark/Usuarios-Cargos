# Usuarios-Cargos

Projeto CRUD com duas tabelas com relação de 1 para 1.

Neste projeto foi utilizado Cors, Express, bodyParser, Knex.

Para rodar em sua máquina, entre na pasta database do projeto e no arquivo knex.js troque para as configurações do seu banco de dados. Em "client" coloque o seu banco, no meu caso estava utilizando o MySQL. Na "connection" coloque seu host e sua porta. (É possível ver seu host e porta dentro do seu banco de dados, mas normalmente é a mesma que a minha). Crie um banco de dados "rh" com as tabelas "cargos" e "usuarios", com suas suas respectivas colunas necessárias. Em caso de MySQL:

CREATE DATABASE rh; 

USE rh;

 CREATE TABLE cargos (
	id_cargo INT unsigned NOT NULL AUTO_INCREMENT,
    nome_cargo VARCHAR(100) NOT NULL,
    descricao VARCHAR(250),
    PRIMARY KEY (id_cargo)
);

CREATE TABLE usuarios
(
   	id_usuario INT unsigned NOT NULL AUTO_INCREMENT,
    nome_usuario VARCHAR(100) NOT NULL,
    email varchar(100) NOT NULL,
    id_gerente INT unsigned,
    id_cargo INT unsigned,
    PRIMARY KEY (id_usuario)
);

ALTER TABLE usuarios
 ADD CONSTRAINT  FOREIGN KEY (`id_cargo`) REFERENCES cargos (`id_cargo`);
 
 Depois de configurado basta utilizar os seguintes comandos no cmd dentro da pasta do projeto: npm i para instalar todas as dependencias e npm run dev para iniciar o projeto.
 
Este projeto contém os métodos GET, PUT, POST, DELETE. É possível trazer uma lista de usuários com o método GET e trazer mais detalhadamente um usuário por ID. É possível editar, criar e deletar usuários e cargos. 


 
 
