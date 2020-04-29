-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 29, 2020 at 09:02 PM
-- Server version: 10.1.37-MariaDB
-- PHP Version: 7.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `shop`
--

-- --------------------------------------------------------

--
-- Table structure for table `category_name`
--

CREATE TABLE `category_name` (
  `id` int(11) NOT NULL,
  `category_name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `category_name`
--

INSERT INTO `category_name` (`id`, `category_name`) VALUES
(1, 'men'),
(2, 'women');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `product_id` int(11) NOT NULL,
  `name` varchar(80) NOT NULL,
  `price` double NOT NULL,
  `images` varchar(255) NOT NULL,
  `category_name_id` int(11) NOT NULL,
  `status` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`product_id`, `name`, `price`, `images`, `category_name_id`, `status`) VALUES
(29, 'CAMP TRAIL', 77, '[\"productMenImg1.webp\",\"productMenImg2.webp\"]', 1, 1),
(30, 'CANBY WOOD', 85.25, '[\"productWommenImg1.jpg\",\"productWommenImg2.jpg\"]', 2, 1),
(33, 'Francis Wood Sunglasses', 215, '[\"productMenImg5.1.jpg\",\"productMenImg5.2.jpg\"]', 1, 1),
(34, 'Prescott Wood Sunglasses', 250.45, '[\"productMenImg6.1.webp\",\"productMenImg6.2.webp\"]', 1, 1),
(35, 'Keller Wood Sunglasses', 136.25, '[\"productMenImg7.1.webp\",\"productMenImg7.2.webp\"]', 1, 1),
(36, 'Riley ACTV Sunglasses', 76.58, '[\"productMenImg8.1.jpg\",\"productMenImg8.2.jpg\"]', 1, 1),
(37, 'Arlene Acetate Sunglasses', 149.25, '[\"productWomenImg3.1.webp\",\"productWomenImg3.2.webp\"]', 2, 1),
(38, 'Canby Acetate Sunglasses', 256.78, '[\"productWomenImg4.1.webp\",\"productWomenImg4.2.webp\"]', 2, 1),
(39, 'Ainsworth Acetate Sunglasses', 148.77, '[\"productWomenImg5.1.webp\",\"productWomenImg5.2.webp\"]', 2, 1),
(40, 'Foster Acetate Sunglasses', 307.77, '[\"productWomenImg6.1.webp\",\"productWomenImg6.2.webp\"]', 2, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category_name`
--
ALTER TABLE `category_name`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`product_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category_name`
--
ALTER TABLE `category_name`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
