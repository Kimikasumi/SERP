
export interface Funcionario {
    cedula?: number;
    nom_funcionario?: string;
    nom_cargo?: string;
    nom_modulo?: string;
    nom_genero?: string;
    direccion?: string;
    telefono?: string;
    nom_sucursal?: string;
    correo?: string;
    eficacia?: number;
    ausencias?: number;
    foto?: string
}


export interface Funcionario2 {
    cedula?: number;
    nom_funcionario?: string;
    cod_cargo?: number;
    cod_modulo?: number;
    cod_genero?: number;
    direccion?: string;
    telefono?: string;
    cod_sucursal?: number;
    correo?: string;
    eficacia?: number;
    ausencias?: number;
    foto?: string
}