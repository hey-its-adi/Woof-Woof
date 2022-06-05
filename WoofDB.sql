-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jun 04, 2022 at 05:54 PM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 8.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `WoofDB`
--

-- --------------------------------------------------------

--
-- Table structure for table `animals`
--

CREATE TABLE `animals` (
  `a_id` int(10) NOT NULL,
  `name` varchar(30) NOT NULL,
  `location` varchar(30) NOT NULL,
  `phone` int(12) NOT NULL,
  `vaccine` varchar(30) NOT NULL,
  `fname` varchar(30) DEFAULT NULL,
  `img` blob DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `animals`
--

INSERT INTO `animals` (`a_id`, `name`, `location`, `phone`, `vaccine`, `fname`, `img`) VALUES
(4, 'jcbkjs', 'vver', 23424, 'Vaccinated', NULL, NULL),
(5, 'jcbkjs', 'vver', 23424, 'Vaccinated', NULL, NULL),
(6, 'jcbkjs', 'vver', 23424, 'Vaccinated', NULL, NULL),
(7, 'jcbkjs', 'vver', 23424, 'Vaccinated', NULL, NULL),
(8, 'jcbkjs', 'vver', 23424, 'Vaccinated', NULL, NULL),
(9, 'jcbkjs', 'vver', 23424, 'Vaccinated', NULL, NULL),
(10, 'jcbkjs', 'vver', 23424, 'Vaccinated', NULL, NULL),
(11, 'jcbkjs', 'vver', 23424, 'Vaccinated', NULL, NULL),
(12, 'jcbkjs', 'vver', 23424, 'Vaccinated', NULL, NULL),
(13, 'sgg', 'vver', 23424, 'Vaccinated', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `u_id` int(10) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(30) NOT NULL,
  `phone` int(12) NOT NULL,
  `password` varchar(30) NOT NULL,
  `address` varchar(30) NOT NULL,
  `type` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`u_id`, `name`, `email`, `phone`, `password`, `address`, `type`) VALUES
(1, 'Ashwin', 'ashwinr@gmail.com', 39482982, 'asdf', 'chennai', 'organisation'),
(5, 'Pavan', 'pavan@gmail.com', 2898298, 'asdf', 'chennai', 'null');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `animals`
--
ALTER TABLE `animals`
  ADD PRIMARY KEY (`a_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`u_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `animals`
--
ALTER TABLE `animals`
  MODIFY `a_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `u_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

