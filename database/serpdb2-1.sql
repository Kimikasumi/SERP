-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-05-2019 a las 00:32:53
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
-- Base de datos: `serpdb2`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bodega_mp`
--

CREATE TABLE `bodega_mp` (
  `cod_bodega_mp` int(11) NOT NULL,
  `cod_m_prima` int(11) DEFAULT NULL,
  `cantidad` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bodega_producto`
--

CREATE TABLE `bodega_producto` (
  `cod_bodega_p` int(11) NOT NULL,
  `cod_producto` int(11) DEFAULT NULL,
  `cantidad` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
-- Estructura de tabla para la tabla `compra`
--

CREATE TABLE `compra` (
  `cod_compra` int(11) NOT NULL,
  `valor` int(11) DEFAULT NULL,
  `objeto` varchar(50) DEFAULT NULL,
  `cantidad` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cuenta`
--

CREATE TABLE `cuenta` (
  `cod_cuenta` int(11) NOT NULL,
  `nom_cuenta` varchar(30) DEFAULT NULL,
  `saldo` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
-- Estructura de tabla para la tabla `estado_solicitud`
--

CREATE TABLE `estado_solicitud` (
  `cod_estado_solicitud` int(11) NOT NULL,
  `nom_estado_solicitud` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `funcionario`
--

CREATE TABLE `funcionario` (
  `cedula` varchar(10) NOT NULL,
  `nom_funcionario` varchar(30) DEFAULT NULL,
  `direccion` varchar(30) DEFAULT NULL,
  `telefono` varchar(10) DEFAULT NULL,
  `fecha_ingreso` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `correo` varchar(30) DEFAULT NULL,
  `eficacia` int(2) DEFAULT '10',
  `ausencias` int(2) DEFAULT '0',
  `foto` varchar(100) DEFAULT 'https://www.tuexperto.com/wp-content/uploads/2015/07/perfil_01.jpg',
  `cod_cargo` int(2) DEFAULT NULL,
  `cod_modulo` int(2) DEFAULT NULL,
  `cod_genero` int(1) DEFAULT NULL,
  `cod_sucursal` int(2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
-- Estructura de tabla para la tabla `inventario`
--

CREATE TABLE `inventario` (
  `cod_sucursal` int(11) NOT NULL,
  `cod_producto` int(11) NOT NULL,
  `cantidad` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `materia_prima`
--

CREATE TABLE `materia_prima` (
  `cod_m_prima` int(11) NOT NULL,
  `nom_m_prima` varchar(30) DEFAULT NULL,
  `fecha_compra` date DEFAULT NULL,
  `precio` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
(5, 'Puntos de Venta');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `m_p_producto`
--

CREATE TABLE `m_p_producto` (
  `cod_m_prima` int(11) NOT NULL,
  `cod_producto` int(11) NOT NULL,
  `cantidad` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE `producto` (
  `cod_producto` int(11) NOT NULL,
  `nom_producto` varchar(30) DEFAULT NULL,
  `precio` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proveedor`
--

CREATE TABLE `proveedor` (
  `cod_proveedor` int(11) NOT NULL,
  `nom_proveedor` varchar(70) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `p_m_p`
--

CREATE TABLE `p_m_p` (
  `cod_proveedor` int(11) NOT NULL,
  `cod_m_prima` int(11) NOT NULL,
  `cantidad_m_prima` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `repeticion_semanal`
--

CREATE TABLE `repeticion_semanal` (
  `cod_repeticion_semanal` int(11) NOT NULL,
  `nom_repeticion_semanal` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `solicitud_inv`
--

CREATE TABLE `solicitud_inv` (
  `cod_solicitud` int(11) NOT NULL,
  `cod_sucursal` int(11) DEFAULT NULL,
  `cod_producto` int(11) DEFAULT NULL,
  `cantidad` int(11) DEFAULT NULL,
  `estado` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `solicitud_presupuesto`
--

CREATE TABLE `solicitud_presupuesto` (
  `cod_solicitud_presupuesto` int(11) NOT NULL,
  `cod_repeticion_semanal` int(11) DEFAULT NULL,
  `desc_solicitud_presupuesto` varchar(150) DEFAULT NULL,
  `valor_presupuesto` int(11) DEFAULT NULL,
  `area_solicitante` varchar(50) DEFAULT NULL,
  `cod_estado` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sucursal`
--

CREATE TABLE `sucursal` (
  `cod_sucursal` int(11) NOT NULL,
  `nom_sucursal` varchar(30) DEFAULT NULL,
  `cod_ciudad` int(11) DEFAULT NULL,
  `direc` varchar(80) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `bodega_mp`
--
ALTER TABLE `bodega_mp`
  ADD PRIMARY KEY (`cod_bodega_mp`),
  ADD KEY `cod_m_prima` (`cod_m_prima`);

--
-- Indices de la tabla `bodega_producto`
--
ALTER TABLE `bodega_producto`
  ADD PRIMARY KEY (`cod_bodega_p`),
  ADD KEY `cod_producto` (`cod_producto`);

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
-- Indices de la tabla `compra`
--
ALTER TABLE `compra`
  ADD PRIMARY KEY (`cod_compra`);

--
-- Indices de la tabla `cuenta`
--
ALTER TABLE `cuenta`
  ADD PRIMARY KEY (`cod_cuenta`);

--
-- Indices de la tabla `departamento`
--
ALTER TABLE `departamento`
  ADD PRIMARY KEY (`cod_departamento`);

--
-- Indices de la tabla `estado_solicitud`
--
ALTER TABLE `estado_solicitud`
  ADD PRIMARY KEY (`cod_estado_solicitud`);

--
-- Indices de la tabla `funcionario`
--
ALTER TABLE `funcionario`
  ADD PRIMARY KEY (`cedula`),
  ADD KEY `fk_cod_cargo` (`cod_cargo`),
  ADD KEY `fk_cod_modulo` (`cod_modulo`),
  ADD KEY `fk_cod_genero` (`cod_genero`),
  ADD KEY `fk_cod_sucursal` (`cod_sucursal`);

--
-- Indices de la tabla `genero`
--
ALTER TABLE `genero`
  ADD PRIMARY KEY (`cod_genero`);

--
-- Indices de la tabla `inventario`
--
ALTER TABLE `inventario`
  ADD PRIMARY KEY (`cod_producto`,`cod_sucursal`),
  ADD KEY `cod_sucursal` (`cod_sucursal`);

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
-- Indices de la tabla `m_p_producto`
--
ALTER TABLE `m_p_producto`
  ADD PRIMARY KEY (`cod_m_prima`,`cod_producto`),
  ADD KEY `cod_producto` (`cod_producto`);

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`cod_producto`);

--
-- Indices de la tabla `proveedor`
--
ALTER TABLE `proveedor`
  ADD PRIMARY KEY (`cod_proveedor`);

--
-- Indices de la tabla `p_m_p`
--
ALTER TABLE `p_m_p`
  ADD PRIMARY KEY (`cod_m_prima`,`cod_proveedor`),
  ADD KEY `cod_proveedor` (`cod_proveedor`);

--
-- Indices de la tabla `repeticion_semanal`
--
ALTER TABLE `repeticion_semanal`
  ADD PRIMARY KEY (`cod_repeticion_semanal`);

--
-- Indices de la tabla `solicitud_inv`
--
ALTER TABLE `solicitud_inv`
  ADD PRIMARY KEY (`cod_solicitud`),
  ADD KEY `solicitud_inv_ibfk_1` (`estado`),
  ADD KEY `fk_cod_sucursal1` (`cod_sucursal`),
  ADD KEY `fk_cod_producto1` (`cod_producto`);

--
-- Indices de la tabla `solicitud_presupuesto`
--
ALTER TABLE `solicitud_presupuesto`
  ADD PRIMARY KEY (`cod_solicitud_presupuesto`),
  ADD KEY `cod_estado` (`cod_estado`),
  ADD KEY `cod_repeticion_semanal` (`cod_repeticion_semanal`);

--
-- Indices de la tabla `sucursal`
--
ALTER TABLE `sucursal`
  ADD PRIMARY KEY (`cod_sucursal`),
  ADD KEY `cod_ciudad` (`cod_ciudad`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `bodega_mp`
--
ALTER TABLE `bodega_mp`
  ADD CONSTRAINT `bodega_mp_ibfk_1` FOREIGN KEY (`cod_m_prima`) REFERENCES `materia_prima` (`cod_m_prima`);

--
-- Filtros para la tabla `bodega_producto`
--
ALTER TABLE `bodega_producto`
  ADD CONSTRAINT `bodega_producto_ibfk_1` FOREIGN KEY (`cod_producto`) REFERENCES `producto` (`cod_producto`);

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
  ADD CONSTRAINT `fk_cod_modulo` FOREIGN KEY (`cod_modulo`) REFERENCES `modulo` (`cod_modulo`),
  ADD CONSTRAINT `fk_cod_sucursal` FOREIGN KEY (`cod_sucursal`) REFERENCES `sucursal` (`cod_sucursal`);

--
-- Filtros para la tabla `inventario`
--
ALTER TABLE `inventario`
  ADD CONSTRAINT `inventario_ibfk_1` FOREIGN KEY (`cod_sucursal`) REFERENCES `sucursal` (`cod_sucursal`),
  ADD CONSTRAINT `inventario_ibfk_2` FOREIGN KEY (`cod_producto`) REFERENCES `producto` (`cod_producto`);

--
-- Filtros para la tabla `m_p_producto`
--
ALTER TABLE `m_p_producto`
  ADD CONSTRAINT `m_p_producto_ibfk_1` FOREIGN KEY (`cod_producto`) REFERENCES `producto` (`cod_producto`),
  ADD CONSTRAINT `m_p_producto_ibfk_2` FOREIGN KEY (`cod_m_prima`) REFERENCES `materia_prima` (`cod_m_prima`);

--
-- Filtros para la tabla `p_m_p`
--
ALTER TABLE `p_m_p`
  ADD CONSTRAINT `p_m_p_ibfk_1` FOREIGN KEY (`cod_proveedor`) REFERENCES `proveedor` (`cod_proveedor`),
  ADD CONSTRAINT `p_m_p_ibfk_3` FOREIGN KEY (`cod_m_prima`) REFERENCES `materia_prima` (`cod_m_prima`);

--
-- Filtros para la tabla `solicitud_inv`
--
ALTER TABLE `solicitud_inv`
  ADD CONSTRAINT `fk_cod_producto1` FOREIGN KEY (`cod_producto`) REFERENCES `inventario` (`cod_producto`),
  ADD CONSTRAINT `fk_cod_sucursal1` FOREIGN KEY (`cod_sucursal`) REFERENCES `inventario` (`cod_sucursal`),
  ADD CONSTRAINT `solicitud_inv_ibfk_1` FOREIGN KEY (`estado`) REFERENCES `estado_solicitud` (`cod_estado_solicitud`);

--
-- Filtros para la tabla `solicitud_presupuesto`
--
ALTER TABLE `solicitud_presupuesto`
  ADD CONSTRAINT `solicitud_presupuesto_ibfk_1` FOREIGN KEY (`cod_estado`) REFERENCES `estado_solicitud` (`cod_estado_solicitud`),
  ADD CONSTRAINT `solicitud_presupuesto_ibfk_2` FOREIGN KEY (`cod_repeticion_semanal`) REFERENCES `repeticion_semanal` (`cod_repeticion_semanal`);

--
-- Filtros para la tabla `sucursal`
--
ALTER TABLE `sucursal`
  ADD CONSTRAINT `sucursal_ibfk_1` FOREIGN KEY (`cod_ciudad`) REFERENCES `ciudad` (`cod_ciudad`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
