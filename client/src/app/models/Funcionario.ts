
export interface Funcionario {
    cod_funcionario?: number;
    nom_funcionario?: string;
    nom_cargo?: string;
    nom_modulo?: string;
    nom_genero?: string;
    direccion?: string;
    telefono?: string;
    cedula?: string;
    fecha_ingreso?: Date;
    correo?: string;
    eficacia?: number;
    ausencias?: number;
    foto?: string
}


export interface Funcionario2 {
    cod_funcionario?: number;
    nom_funcionario?: string;
    cod_cargo?: number;
    cod_modulo?: number;
    cod_genero?: number;
    direccion?: string;
    telefono?: string;
    cedula?: string;
    fecha_ingreso?: Date;
    correo?: string;
    eficacia?: number;
    ausencias?: number;
    foto?: string
}