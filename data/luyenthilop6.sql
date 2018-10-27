-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Oct 27, 2018 at 05:55 AM
-- Server version: 5.7.21
-- PHP Version: 7.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `luyenthilop6`
--

-- --------------------------------------------------------

--
-- Table structure for table `cauhoi`
--

DROP TABLE IF EXISTS `cauhoi`;
CREATE TABLE IF NOT EXISTS `cauhoi` (
  `MaCauHoi` int(11) NOT NULL AUTO_INCREMENT,
  `NoiDung` varchar(1000) NOT NULL,
  `HinhMinhHoa` varchar(100) NOT NULL,
  `MaMonHoc` varchar(10) NOT NULL,
  `SoLanThi` int(11) NOT NULL,
  `SoLanDung` int(11) NOT NULL,
  `NgayTao` date NOT NULL,
  `DapAnDung` varchar(5) NOT NULL,
  PRIMARY KEY (`MaCauHoi`),
  KEY `fk_ch_mh` (`MaMonHoc`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `dapan`
--

DROP TABLE IF EXISTS `dapan`;
CREATE TABLE IF NOT EXISTS `dapan` (
  `MaCauHoi` int(11) NOT NULL,
  `A` varchar(1000) NOT NULL,
  `B` varchar(1000) NOT NULL,
  `C` varchar(1000) NOT NULL,
  `D` varchar(1000) NOT NULL,
  PRIMARY KEY (`MaCauHoi`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `dethi`
--

DROP TABLE IF EXISTS `dethi`;
CREATE TABLE IF NOT EXISTS `dethi` (
  `MaDeThi` int(11) NOT NULL AUTO_INCREMENT,
  `MaCauHoi` int(11) NOT NULL,
  `ThoiGian` int(11) NOT NULL,
  `SoCau` int(11) NOT NULL,
  `SoDiemMotCau` int(11) NOT NULL,
  `SoLanThi` int(11) NOT NULL,
  `NgayTao` date NOT NULL,
  PRIMARY KEY (`MaDeThi`),
  KEY `fk_dt_ch` (`MaCauHoi`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `monhoc`
--

DROP TABLE IF EXISTS `monhoc`;
CREATE TABLE IF NOT EXISTS `monhoc` (
  `MaMonHoc` int(11) NOT NULL AUTO_INCREMENT,
  `TenMonHoc` varchar(100) NOT NULL,
  PRIMARY KEY (`MaMonHoc`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `nguoidung`
--

DROP TABLE IF EXISTS `nguoidung`;
CREATE TABLE IF NOT EXISTS `nguoidung` (
  `MaNguoiDung` int(11) NOT NULL AUTO_INCREMENT,
  `TenNguoiDung` varchar(100) NOT NULL,
  `Email` varchar(20) NOT NULL,
  `MatKhau` varchar(50) NOT NULL,
  `SDT` varchar(20) NOT NULL,
  `GioiTinh` varchar(4) NOT NULL,
  PRIMARY KEY (`MaNguoiDung`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `thongtinbailam`
--

DROP TABLE IF EXISTS `thongtinbailam`;
CREATE TABLE IF NOT EXISTS `thongtinbailam` (
  `MaDeThi` int(11) NOT NULL,
  `MaNguoiDung` int(11) NOT NULL,
  `NgayThi` date NOT NULL,
  `SoCauLam` int(11) NOT NULL,
  `SoCauDung` int(11) NOT NULL,
  `SoDiem` int(11) NOT NULL,
  PRIMARY KEY (`MaDeThi`,`MaNguoiDung`),
  KEY `fk_ttbl_nd` (`MaNguoiDung`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `ykiennguoidung`
--

DROP TABLE IF EXISTS `ykiennguoidung`;
CREATE TABLE IF NOT EXISTS `ykiennguoidung` (
  `MaYKien` int(11) NOT NULL AUTO_INCREMENT,
  `MaNguoiDung` int(11) NOT NULL,
  `NoiDung` varchar(1000) NOT NULL,
  `NgayGoi` date NOT NULL,
  PRIMARY KEY (`MaYKien`),
  KEY `fk_yknd_nd` (`MaNguoiDung`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
