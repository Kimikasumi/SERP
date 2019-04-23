CREATE TABLE DEPARTAMENTO(
    cod_departamento int primary key,
    nom_departamento varchar(30)
);

INSERT INTO DEPARTAMENTO VALUES(1,'Bogota');
INSERT INTO DEPARTAMENTO VALUES(2,'Valle del Cauca');
INSERT INTO DEPARTAMENTO VALUES(3,'Antioquia');

CREATE TABLE CIUDAD(
    cod_ciudad int primary key,
    nom_ciudad varchar(30),
    cod_departamento int,
    foreign key (cod_departamento) 
        references DEPARTAMENTO(cod_departamento)
);

INSERT INTO CIUDAD VALUES(1,'Bogota D.C',1);
INSERT INTO CIUDAD VALUES(2,'Cali',2);
INSERT INTO CIUDAD VALUES(3,'Tulua',2);
INSERT INTO CIUDAD VALUES(4,'Palmira',2);
INSERT INTO CIUDAD VALUES(5,'Medellin',3);

CREATE TABLE RETAIL(
    cod_retail int primary key,
    nom_retail varchar(30),
    cod_ciudad int,
    direc varchar(80),
    foreign key (cod_ciudad)         
        references CIUDAD(cod_ciudad)
);

INSERT INTO RETAIL VALUES(1,'La paila',3,'Calle 15 # 23-35');
INSERT INTO RETAIL VALUES(2,'San José',2,'Calle 89 # 84-21');
INSERT INTO RETAIL VALUES(3,'Dekar',1,'Cra 80 # 12-10');