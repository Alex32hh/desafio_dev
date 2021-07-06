-- phpMyAdmin SQL Dump
-- version 4.9.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Jul 06, 2021 at 03:58 PM
-- Server version: 5.7.26
-- PHP Version: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `CNAB`
--

-- --------------------------------------------------------

--
-- Table structure for table `transactions`
--

CREATE TABLE `transactions` (
  `id` int(11) NOT NULL,
  `tipo` int(11) NOT NULL,
  `data` varchar(200) NOT NULL,
  `valor` int(100) NOT NULL,
  `cpf` varchar(100) NOT NULL,
  `cart` varchar(100) NOT NULL,
  `hora` varchar(200) NOT NULL,
  `DonoDaLoja` varchar(200) NOT NULL,
  `NomeLoja` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `transactions`
--

INSERT INTO `transactions` (`id`, `tipo`, `data`, `valor`, `cpf`, `cart`, `hora`, `DonoDaLoja`, `NomeLoja`) VALUES
(1, 3, '20190301', 142, '09620676017', '4753****3153', '153453', 'JOÃO MACEDO   ', 'BAR DO JOÃO       '),
(2, 5, '20190301', 132, '55641815063', '3123****7687', '145607', 'MARIA JOSEFINA', 'LOJA DO Ó - MATRIZ'),
(3, 3, '20190301', 122, '84515254073', '6777****1313', '172712', 'MARCOS PEREIRA', 'MERCADO DA AVENIDA'),
(4, 2, '20190301', 112, '09620676017', '3648****0099', '234234', 'JOÃO MACEDO   ', 'BAR DO JOÃO       '),
(5, 1, '20190301', 152, '09620676017', '1234****7890', '233000', 'JOÃO MACEDO   ', 'BAR DO JOÃO       '),
(6, 2, '20190301', 107, '84515254073', '8723****9987', '123333', 'MARCOS PEREIRA', 'MERCADO DA AVENIDA'),
(7, 2, '20190301', 502, '84515254073', '8473****1231', '231233', 'MARCOS PEREIRA', 'MERCADO DA AVENIDA'),
(8, 3, '20190301', 602, '23270298056', '6777****1313', '172712', 'JOSÉ COSTA    ', 'MERCEARIA 3 IRMÃOS'),
(9, 1, '20190301', 200, '55641815063', '1234****3324', '090002', 'MARIA JOSEFINA', 'LOJA DO Ó - MATRIZ'),
(10, 5, '20190301', 802, '84515254073', '3123****7687', '145607', 'MARCOS PEREIRA', 'MERCADO DA AVENIDA'),
(11, 2, '20190301', 102, '23270298056', '8473****1231', '231233', 'JOSÉ COSTA    ', 'MERCEARIA 3 IRMÃOS'),
(12, 3, '20190301', 6102, '23270298056', '6777****1313', '172712', 'JOSÉ COSTA    ', 'MERCEARIA 3 IRMÃOS'),
(13, 4, '20190301', 152, '55641815063', '1234****6678', '100000', 'MARIA JOSEFINA', 'LOJA DO Ó - FILIAL'),
(14, 8, '20190301', 102, '84515254073', '2344****1222', '123222', 'MARCOS PEREIRA', 'MERCADO DA AVENIDA'),
(15, 3, '20190301', 103, '23270298056', '6777****1313', '172712', 'JOSÉ COSTA    ', 'MERCEARIA 3 IRMÃOS'),
(16, 9, '20190301', 102, '55641815063', '6228****9090', '000000', 'MARIA JOSEFINA', 'LOJA DO Ó - MATRIZ'),
(17, 4, '20190601', 506, '84515254073', '1234****2231', '100000', 'MARCOS PEREIRA', 'MERCADO DA AVENIDA'),
(18, 2, '20190301', 109, '23270298056', '8723****9987', '123333', 'JOSÉ COSTA    ', 'MERCEARIA 3 IRMÃOS'),
(19, 8, '20190301', 2, '84515254073', '2344****1222', '123222', 'MARCOS PEREIRA', 'MERCADO DA AVENIDA'),
(20, 2, '20190301', 5, '23270298056', '7677****8778', '141808', 'JOSÉ COSTA    ', 'MERCEARIA 3 IRMÃOS'),
(21, 3, '20190301', 192, '84515254073', '6777****1313', '172712', 'MARCOS PEREIRA', 'MERCADO DA AVENIDA');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `transactions`
--
ALTER TABLE `transactions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
