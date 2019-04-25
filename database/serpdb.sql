-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 25-04-2019 a las 05:37:58
-- Versión del servidor: 10.1.38-MariaDB
-- Versión de PHP: 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `serpdb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cargo`
--

CREATE TABLE `cargo` (
  `cod_cargo` int(2) NOT NULL,
  `nom_cargo` varchar(30) DEFAULT NULL,
  `salario` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `cargo`
--

INSERT INTO `cargo` (`cod_cargo`, `nom_cargo`, `salario`) VALUES
(1, 'Gerente General', 15000000),
(2, 'Director', 8000000),
(3, 'Asistente', 2000000),
(4, 'Empleado', 4500000),
(5, 'Seguridad', 1500000),
(6, 'Aseo', 1500000);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ciudad`
--

CREATE TABLE `ciudad` (
  `cod_ciudad` int(11) NOT NULL,
  `nom_ciudad` varchar(30) DEFAULT NULL,
  `cod_departamento` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `ciudad`
--

INSERT INTO `ciudad` (`cod_ciudad`, `nom_ciudad`, `cod_departamento`) VALUES
(1, 'Bogota D.C', 1),
(2, 'Cali', 2),
(3, 'Tulua', 2),
(4, 'Palmira', 2),
(5, 'Medellin', 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `departamento`
--

CREATE TABLE `departamento` (
  `cod_departamento` int(11) NOT NULL,
  `nom_departamento` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `departamento`
--

INSERT INTO `departamento` (`cod_departamento`, `nom_departamento`) VALUES
(1, 'Bogota'),
(2, 'Valle del Cauca'),
(3, 'Antioquia');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `funcionario`
--

CREATE TABLE `funcionario` (
  `cod_funcionario` int(11) NOT NULL,
  `nom_funcionario` varchar(30) DEFAULT NULL,
  `cod_cargo` int(2) DEFAULT NULL,
  `cod_modulo` int(2) DEFAULT NULL,
  `cod_genero` int(1) DEFAULT NULL,
  `direccion` varchar(30) DEFAULT NULL,
  `telefono` varchar(10) DEFAULT NULL,
  `cedula` varchar(10) DEFAULT NULL,
  `fecha_ingreso` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `correo` varchar(30) DEFAULT NULL,
  `eficacia` int(2) DEFAULT '10',
  `ausencias` int(2) DEFAULT '0',
  `foto` varchar(100) DEFAULT 'https://www.tuexperto.com/wp-content/uploads/2015/07/perfil_01.jpg'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `funcionario`
--

INSERT INTO `funcionario` (`cod_funcionario`, `nom_funcionario`, `cod_cargo`, `cod_modulo`, `cod_genero`, `direccion`, `telefono`, `cedula`, `fecha_ingreso`, `correo`, `eficacia`, `ausencias`, `foto`) VALUES
(1, 'Carlos Gutierrez', 1, 1, 1, 'Carrera 9 Calle 134 ', '3203428662', '123456789', '2019-04-25 03:20:29', 'caguti1999@gmail.com', 10, 0, 'https://www.tuexperto.com/wp-content/uploads/2015/07/perfil_01.jpg'),
(2, 'Sofia Gaviria', 2, 3, 2, 'Carrera 9 Calle 134 ', '3203428662', '123456789', '2019-04-25 03:21:14', 'sofig@gmail.com', 10, 0, 'https://www.tuexperto.com/wp-content/uploads/2015/07/perfil_01.jpg'),
(3, 'Ernesto Velandia', 3, 3, 1, 'Carrera 9 Calle 134 ', '3203428662', '1010101010', '2019-04-25 03:22:53', 'ernvelan@gmail.com', 10, 0, 'https://www.tuexperto.com/wp-content/uploads/2015/07/perfil_01.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `genero`
--

CREATE TABLE `genero` (
  `cod_genero` int(1) NOT NULL,
  `nom_genero` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `genero`
--

INSERT INTO `genero` (`cod_genero`, `nom_genero`) VALUES
(1, 'Masculino'),
(2, 'Femenino');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `materia_prima`
--

CREATE TABLE `materia_prima` (
  `cod_m_prima` int(11) NOT NULL,
  `nom_m_prima` varchar(30) DEFAULT NULL,
  `cantidad` int(11) DEFAULT NULL,
  `precio` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `materia_prima`
--

INSERT INTO `materia_prima` (`cod_m_prima`, `nom_m_prima`, `cantidad`, `precio`) VALUES
(1, 'Cuero', 1, 80000),
(2, 'Tela', 4, 25000),
(3, 'Drill', 8, 50000);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `modulo`
--

CREATE TABLE `modulo` (
  `cod_modulo` int(2) NOT NULL,
  `nom_modulo` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `modulo`
--

INSERT INTO `modulo` (`cod_modulo`, `nom_modulo`) VALUES
(1, 'Gerencia'),
(2, 'Producción'),
(3, 'Finanzas'),
(4, 'Recursos Humanos'),
(5, 'Puntos de Venta'),
(6, 'Marketing'),
(7, 'Otro');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `presupuestos`
--

CREATE TABLE `presupuestos` (
  `cod_presupuesto` int(11) NOT NULL,
  `area_destino` varchar(50) DEFAULT NULL,
  `estado_presupuesto` varchar(50) DEFAULT NULL,
  `fecha_solicitud` date DEFAULT NULL,
  `dinero_solicitado` int(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `presupuestos`
--

INSERT INTO `presupuestos` (`cod_presupuesto`, `area_destino`, `estado_presupuesto`, `fecha_solicitud`, `dinero_solicitado`) VALUES
(1, 'Finanzas', 'Realizado', '2019-04-24', 1000000),
(2, 'Ventas', 'Inactivo', '2019-04-24', 1200000);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE `producto` (
  `cod_producto` int(11) DEFAULT NULL,
  `nom_producto` varchar(30) DEFAULT NULL,
  `cantidad` int(11) DEFAULT NULL,
  `precio` int(11) DEFAULT NULL,
  `cod_m_prima` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`cod_producto`, `nom_producto`, `cantidad`, `precio`, `cod_m_prima`) VALUES
(1, 'Botas', 3, 80000, 1),
(2, 'Sandalias', 7, 20000, 2),
(3, 'Tennis', 5, 80000, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `retail`
--

CREATE TABLE `retail` (
  `cod_retail` int(11) NOT NULL,
  `nom_retail` varchar(30) DEFAULT NULL,
  `cod_ciudad` int(11) DEFAULT NULL,
  `direc` varchar(80) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `retail`
--

INSERT INTO `retail` (`cod_retail`, `nom_retail`, `cod_ciudad`, `direc`) VALUES
(1, 'La paila', 3, 'Calle 15 # 23-35'),
(2, 'San José', 2, 'Calle 89 # 84-21'),
(3, 'Dekar', 1, 'Cra 80 # 12-10');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `cod_usuario` int(11) NOT NULL,
  `nom_usuario` varchar(30) DEFAULT NULL,
  `correo` varchar(40) DEFAULT NULL,
  `contraseña` varchar(30) DEFAULT NULL,
  `rango` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cargo`
--
ALTER TABLE `cargo`
  ADD PRIMARY KEY (`cod_cargo`);

--
-- Indices de la tabla `ciudad`
--
ALTER TABLE `ciudad`
  ADD PRIMARY KEY (`cod_ciudad`),
  ADD KEY `cod_departamento` (`cod_departamento`);

--
-- Indices de la tabla `departamento`
--
ALTER TABLE `departamento`
  ADD PRIMARY KEY (`cod_departamento`);

--
-- Indices de la tabla `funcionario`
--
ALTER TABLE `funcionario`
  ADD PRIMARY KEY (`cod_funcionario`),
  ADD KEY `fk_cod_cargo` (`cod_cargo`),
  ADD KEY `fk_cod_modulo` (`cod_modulo`),
  ADD KEY `fk_cod_genero` (`cod_genero`);

--
-- Indices de la tabla `genero`
--
ALTER TABLE `genero`
  ADD PRIMARY KEY (`cod_genero`);

--
-- Indices de la tabla `materia_prima`
--
ALTER TABLE `materia_prima`
  ADD PRIMARY KEY (`cod_m_prima`);

--
-- Indices de la tabla `modulo`
--
ALTER TABLE `modulo`
  ADD PRIMARY KEY (`cod_modulo`);

--
-- Indices de la tabla `presupuestos`
--
ALTER TABLE `presupuestos`
  ADD PRIMARY KEY (`cod_presupuesto`);

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
  ADD KEY `cod_m_prima` (`cod_m_prima`);

--
-- Indices de la tabla `retail`
--
ALTER TABLE `retail`
  ADD PRIMARY KEY (`cod_retail`),
  ADD KEY `cod_ciudad` (`cod_ciudad`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`cod_usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `funcionario`
--
ALTER TABLE `funcionario`
  MODIFY `cod_funcionario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `ciudad`
--
ALTER TABLE `ciudad`
  ADD CONSTRAINT `ciudad_ibfk_1` FOREIGN KEY (`cod_departamento`) REFERENCES `departamento` (`cod_departamento`);

--
-- Filtros para la tabla `funcionario`
--
ALTER TABLE `funcionario`
  ADD CONSTRAINT `fk_cod_cargo` FOREIGN KEY (`cod_cargo`) REFERENCES `cargo` (`cod_cargo`),
  ADD CONSTRAINT `fk_cod_genero` FOREIGN KEY (`cod_genero`) REFERENCES `genero` (`cod_genero`),
  ADD CONSTRAINT `fk_cod_modulo` FOREIGN KEY (`cod_modulo`) REFERENCES `modulo` (`cod_modulo`);

--
-- Filtros para la tabla `producto`
--
ALTER TABLE `producto`
  ADD CONSTRAINT `producto_ibfk_1` FOREIGN KEY (`cod_m_prima`) REFERENCES `materia_prima` (`cod_m_prima`);

--
-- Filtros para la tabla `retail`
--
ALTER TABLE `retail`
  ADD CONSTRAINT `retail_ibfk_1` FOREIGN KEY (`cod_ciudad`) REFERENCES `ciudad` (`cod_ciudad`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
