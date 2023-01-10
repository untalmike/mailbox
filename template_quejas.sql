-- Active: 1673369030242@@127.0.0.1@33060@buzon_quejas
CREATE DATABASE buzon_quejas DEFAULT CHARACTER SET = 'utf8mb4';

USE buzon_quejas

CREATE TABLE quejas (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    accion ENUM("Queja o Reclamo","Sugerencia","Denuncia","Felicitacion") NOT NULL,
    anonimato ENUM("Sí", "No") NOT NULL,
    nombreEmpleado VARCHAR(150) NULL,
    numeroEmpleado VARCHAR(10) NULL,
    plaza ENUM("Monterrey Obispado","Monterrey 5 de Mayo","Monterrey Tapia","Monterrey Arteaga","Guadalajara","Puebla","Querétaro","Hermosillo","Tijuana","Mérida") NOT NULL,
    experience ENUM("Gonzalo Garza", "Leyda Blanco"),
    queja VARCHAR(1200) NULL,
    sugerencia VARCHAR(1200) NULL,
    fechaDenuncia VARCHAR(10) NULL,
    horaDenuncia VARCHAR(10) NULL,
    descripcionDenuncia VARCHAR(250) NULL,
    personaFelicitacion VARCHAR(500) NULL,
    porqueFelicitacion VARCHAR(500) NULL,
    reconocimientoFelicitacion VARCHAR(500) NULL,
    comentario VARCHAR(1000) NULL,
    folio VARCHAR(10) NOT NULL,
    fechaRegistro DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
);