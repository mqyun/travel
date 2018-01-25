-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: 2018-01-25 13:46:56
-- 服务器版本： 10.1.10-MariaDB
-- PHP Version: 7.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `travel`
--

-- --------------------------------------------------------

--
-- 表的结构 `admin`
--

CREATE TABLE `admin` (
  `id` int(10) NOT NULL,
  `account` varchar(50) CHARACTER SET utf8 NOT NULL,
  `password` varchar(50) CHARACTER SET utf8 NOT NULL,
  `name` varchar(20) CHARACTER SET utf8 NOT NULL,
  `quanxian` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `admin`
--

INSERT INTO `admin` (`id`, `account`, `password`, `name`, `quanxian`) VALUES
(1, 'admin', '202cb962ac59075b964b07152d234b70', '超级管理员', 1);

-- --------------------------------------------------------

--
-- 表的结构 `chanpin`
--

CREATE TABLE `chanpin` (
  `id` int(10) NOT NULL,
  `place` varchar(50) CHARACTER SET utf8 NOT NULL,
  `introduce` varchar(1000) CHARACTER SET utf8 NOT NULL,
  `fenlei` int(10) NOT NULL,
  `price` varchar(50) CHARACTER SET utf8 NOT NULL,
  `hasimg` int(10) NOT NULL,
  `adminid` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `chanpin`
--

INSERT INTO `chanpin` (`id`, `place`, `introduce`, `fenlei`, `price`, `hasimg`, `adminid`) VALUES
(2, '北京', '北京介绍', 3, '100.00', 0, 1);

-- --------------------------------------------------------

--
-- 表的结构 `chanpinimg`
--

CREATE TABLE `chanpinimg` (
  `id` int(10) NOT NULL,
  `chanpinid` int(10) NOT NULL,
  `url` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- 表的结构 `dingdan`
--

CREATE TABLE `dingdan` (
  `id` int(10) NOT NULL,
  `chanpinid` int(10) NOT NULL,
  `userid` int(10) NOT NULL,
  `ddrenshu` int(10) NOT NULL,
  `allprice` varchar(50) NOT NULL,
  `time` datetime NOT NULL,
  `state` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- 表的结构 `fenlei`
--

CREATE TABLE `fenlei` (
  `id` int(10) NOT NULL,
  `name` varchar(50) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `fenlei`
--

INSERT INTO `fenlei` (`id`, `name`) VALUES
(3, '海滨海岛'),
(4, '特殊地貌'),
(5, '城市风景'),
(6, '生物景观'),
(7, '壁画石窟'),
(8, '民俗风情'),
(9, '历史圣地'),
(10, '纪念地'),
(11, '其他');

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE `user` (
  `id` int(10) NOT NULL,
  `account` varchar(100) CHARACTER SET utf8 NOT NULL,
  `password` varchar(100) CHARACTER SET utf8 NOT NULL,
  `name` varchar(20) CHARACTER SET utf8 NOT NULL,
  `phone` varchar(20) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- 表的结构 `xingcheng`
--

CREATE TABLE `xingcheng` (
  `id` int(10) NOT NULL,
  `chanpinid` int(10) NOT NULL,
  `renshu` int(10) NOT NULL,
  `ydrenshu` int(10) NOT NULL,
  `starttime` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `chanpin`
--
ALTER TABLE `chanpin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `chanpinimg`
--
ALTER TABLE `chanpinimg`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `dingdan`
--
ALTER TABLE `dingdan`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `fenlei`
--
ALTER TABLE `fenlei`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `xingcheng`
--
ALTER TABLE `xingcheng`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- 使用表AUTO_INCREMENT `chanpin`
--
ALTER TABLE `chanpin`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- 使用表AUTO_INCREMENT `chanpinimg`
--
ALTER TABLE `chanpinimg`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;
--
-- 使用表AUTO_INCREMENT `dingdan`
--
ALTER TABLE `dingdan`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;
--
-- 使用表AUTO_INCREMENT `fenlei`
--
ALTER TABLE `fenlei`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- 使用表AUTO_INCREMENT `user`
--
ALTER TABLE `user`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;
--
-- 使用表AUTO_INCREMENT `xingcheng`
--
ALTER TABLE `xingcheng`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
