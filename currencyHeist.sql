-- phpMyAdmin SQL Dump
-- version 4.4.13.1deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Dec 19, 2015 at 08:29 PM
-- Server version: 5.6.27-0ubuntu1
-- PHP Version: 5.6.11-1ubuntu3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `currencyHeist`
--

-- --------------------------------------------------------

--
-- Table structure for table `featured`
--

CREATE TABLE IF NOT EXISTS `featured` (
  `id` int(11) NOT NULL,
  `post_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `image`
--

CREATE TABLE IF NOT EXISTS `image` (
  `id` int(11) NOT NULL,
  `url` varchar(110) NOT NULL,
  `caption` varchar(110) NOT NULL,
  `description` varchar(100) NOT NULL,
  `post_id` int(11) NOT NULL,
  `selling_item` tinyint(1) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `image`
--

INSERT INTO `image` (`id`, `url`, `caption`, `description`, `post_id`, `selling_item`) VALUES
(1, '_tee.jpg', 'Cave Tees', 'White', 1, 1),
(2, '_socks.jpg', 'Celtic Rugby Socks', 'Black', 1, 1),
(3, '_cap.jpg', 'Ram Snapback', 'Black', 1, 1),
(4, '_tee2.jpg', 'Back Drop Tee', 'Charcoal', 1, 1),
(5, 'cover.jpg', 'cover image', '', 2, 0),
(6, 'cover2.jpg', 'Cover', '', 1, 0),
(7, 'hustler.jpg', '', '', 3, 0);

-- --------------------------------------------------------

--
-- Table structure for table `post`
--

CREATE TABLE IF NOT EXISTS `post` (
  `id` int(11) NOT NULL,
  `type` int(11) NOT NULL,
  `title` varchar(110) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `post`
--

INSERT INTO `post` (`id`, `type`, `title`, `description`) VALUES
(1, 3, 'slider', 'Images for the slider'),
(2, 1, 'Who we are', 'The ethos of Currency Heist is creating the finest uniform of opulence and luxury for hustlers from\r\n\r\nall walks of life. Our focus is creating products of the highest level of craftsmanship, materials, and \r\n\r\nintegrity. Currency Heist guarantees the authenticity of all products purchased through the Currency \r\n\r\nHeist website. We focus on essentials that will enhance the hustlers’ daily protocol. The overall format \r\n\r\nis creating high quality products used on a daily basis by our consumers.'),
(3, 1, 'We Serve the hustler', 'People who are forced to use their Brains to make it in this world.\r\nThey outsmart the smart, cunning, and has streetsmarts. They know how to get money and is skilled at doing it to. Also they can be so sly that they can sell you stuff you don''t need. ');

-- --------------------------------------------------------

--
-- Table structure for table `post_type`
--

CREATE TABLE IF NOT EXISTS `post_type` (
  `id` int(11) NOT NULL,
  `title` varchar(110) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `post_type`
--

INSERT INTO `post_type` (`id`, `title`, `description`) VALUES
(1, 'Blog Post', 'Text Post'),
(2, 'Fashion Trend', 'Post about a latest trend in fashion'),
(3, 'slider', 'slider images');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `featured`
--
ALTER TABLE `featured`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `image`
--
ALTER TABLE `image`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `post_type`
--
ALTER TABLE `post_type`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `featured`
--
ALTER TABLE `featured`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `image`
--
ALTER TABLE `image`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT for table `post`
--
ALTER TABLE `post`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `post_type`
--
ALTER TABLE `post_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
