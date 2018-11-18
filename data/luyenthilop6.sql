-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Nov 18, 2018 at 04:47 PM
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
  `MaDeThi` int(11) NOT NULL,
  `NoiDung` varchar(1000) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `HinhMinhHoa` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `MaMonHoc` int(11) NOT NULL,
  `NgayTao` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `DapAnDung` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`MaCauHoi`),
  KEY `MaDeThi` (`MaDeThi`),
  KEY `MaMonHoc` (`MaMonHoc`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cauhoi`
--

INSERT INTO `cauhoi` (`MaCauHoi`, `MaDeThi`, `NoiDung`, `HinhMinhHoa`, `MaMonHoc`, `NgayTao`, `DapAnDung`) VALUES
(5, 1, 'Ai là tác giả truyện Lượm', NULL, 2, '2018-11-07 13:36:45', 'A'),
(6, 1, 'Ai phát minh định lý Viet', NULL, 1, '2018-11-07 13:36:45', ''),
(7, 1, 'Tam giác vuông có 2 cạnh vuông là 3 và 4.Hỏi cạnh huyền là bao nhiu', NULL, 1, '2018-11-07 13:38:52', 'C'),
(8, 1, 'What biggest country in the world?', NULL, 3, '2018-11-07 13:38:52', 'B');

-- --------------------------------------------------------

--
-- Table structure for table `dapan`
--

DROP TABLE IF EXISTS `dapan`;
CREATE TABLE IF NOT EXISTS `dapan` (
  `MaDapAn` int(11) NOT NULL AUTO_INCREMENT,
  `MaCauHoi` int(11) NOT NULL,
  `A` varchar(1000) NOT NULL,
  `B` varchar(1000) NOT NULL,
  `C` varchar(1000) NOT NULL,
  `D` varchar(1000) NOT NULL,
  PRIMARY KEY (`MaDapAn`),
  KEY `MaCauHoi` (`MaCauHoi`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `dapan`
--

INSERT INTO `dapan` (`MaDapAn`, `MaCauHoi`, `A`, `B`, `C`, `D`) VALUES
(1, 5, 'Tố Hữu', 'Đỗ Phủ', 'Lý Bạch', 'Kim Đồng'),
(2, 6, 'Newtonss', 'Pytago', 'Enstein', 'Viet');

-- --------------------------------------------------------

--
-- Table structure for table `dethi`
--

DROP TABLE IF EXISTS `dethi`;
CREATE TABLE IF NOT EXISTS `dethi` (
  `MaDeThi` int(11) NOT NULL AUTO_INCREMENT,
  `TenDeThi` varchar(300) NOT NULL,
  `ThoiGian` int(11) NOT NULL,
  `SoCau` int(11) NOT NULL,
  `SoDiemMotCau` int(11) NOT NULL,
  `NgayTao` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`MaDeThi`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `dethi`
--

INSERT INTO `dethi` (`MaDeThi`, `TenDeThi`, `ThoiGian`, `SoCau`, `SoDiemMotCau`, `NgayTao`) VALUES
(1, '  Đề kiểm tra 15 phút tháng 8 - Môn Toán ', 20, 20, 2, '2018-11-07 13:34:21'),
(2, '  Đề kiểm tra 15 phút tháng 9 - Môn Toán ', 50, 50, 5, '2018-11-07 13:34:21'),
(3, '  Đề kiểm tra 15 phút tháng 10 - Môn Toán ', 40, 40, 4, '2018-11-07 13:34:59'),
(5, '  Đề kiểm tra 15 phút tháng 11 - Môn Toán ', 50, 50, 50, '2018-11-08 09:48:15'),
(6, '  Đề kiểm tra 45 phút tháng 10 - Môn Toán ', 45, 10, 1, '2018-11-18 16:21:30'),
(7, '  Đề kiểm tra 45 phút tháng 11 - Môn Toán ', 45, 10, 1, '2018-11-18 16:21:30');

-- --------------------------------------------------------

--
-- Table structure for table `monhoc`
--

DROP TABLE IF EXISTS `monhoc`;
CREATE TABLE IF NOT EXISTS `monhoc` (
  `MaMonHoc` int(11) NOT NULL AUTO_INCREMENT,
  `TenMonHoc` varchar(100) NOT NULL,
  PRIMARY KEY (`MaMonHoc`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `monhoc`
--

INSERT INTO `monhoc` (`MaMonHoc`, `TenMonHoc`) VALUES
(1, 'Toán'),
(2, 'Tiếng Việt'),
(3, 'Tiếng Anh');

-- --------------------------------------------------------

--
-- Table structure for table `nguoidung`
--

DROP TABLE IF EXISTS `nguoidung`;
CREATE TABLE IF NOT EXISTS `nguoidung` (
  `MaNguoiDung` int(11) NOT NULL AUTO_INCREMENT,
  `TenNguoiDung` varchar(100) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `MatKhau` varchar(50) NOT NULL,
  `SDT` varchar(20) NOT NULL,
  PRIMARY KEY (`MaNguoiDung`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `nguoidung`
--

INSERT INTO `nguoidung` (`MaNguoiDung`, `TenNguoiDung`, `Email`, `MatKhau`, `SDT`) VALUES
(1, 'Tấn Phan', 'tanphan0805@gmail.com', '12345', '0338082216'),
(2, 'Phan Văn Tấn', 'phanvantan080597@gmail.com', '12345', '0123456789'),
(3, 'Phan Văn Tấn', 'tanphan0805@gmail.com', 'tanphan0805', '08732409328'),
(4, 'Teo', 'teo123@gmail.com', '1', '0347'),
(5, 'Xuân Sơn', 'xuan97@gmail.com', 'c4ca4238a0b923820dcc509a6f75849b', '3465821'),
(6, 'Teo a', 'xuan97@gmail.com', 'c20ad4d76fe97759aa27a0c99bff6710', '324234');

-- --------------------------------------------------------

--
-- Table structure for table `thongtinbailam`
--

DROP TABLE IF EXISTS `thongtinbailam`;
CREATE TABLE IF NOT EXISTS `thongtinbailam` (
  `MaBaiLam` int(11) NOT NULL AUTO_INCREMENT,
  `MaDeThi` int(11) NOT NULL,
  `MaNguoiDung` int(11) NOT NULL,
  `NgayThi` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `SoCauLam` int(11) NOT NULL,
  `SoCauDung` int(11) NOT NULL,
  PRIMARY KEY (`MaBaiLam`),
  KEY `MaDeThi` (`MaDeThi`,`MaNguoiDung`),
  KEY `MaNguoiDung` (`MaNguoiDung`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `ykiennguoidung`
--

DROP TABLE IF EXISTS `ykiennguoidung`;
CREATE TABLE IF NOT EXISTS `ykiennguoidung` (
  `MaYKien` int(11) NOT NULL AUTO_INCREMENT,
  `MaNguoiDung` int(11) NOT NULL,
  `NoiDung` varchar(1000) NOT NULL,
  `NgayGoi` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`MaYKien`),
  KEY `fk_yknd_nd` (`MaNguoiDung`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `ykiennguoidung`
--

INSERT INTO `ykiennguoidung` (`MaYKien`, `MaNguoiDung`, `NoiDung`, `NgayGoi`) VALUES
(3, 1, 'Rất hay', '2018-11-07 13:45:31');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cauhoi`
--
ALTER TABLE `cauhoi`
  ADD CONSTRAINT `cauhoi_ibfk_1` FOREIGN KEY (`MaDeThi`) REFERENCES `dethi` (`MaDeThi`),
  ADD CONSTRAINT `cauhoi_ibfk_2` FOREIGN KEY (`MaMonHoc`) REFERENCES `monhoc` (`MaMonHoc`);

--
-- Constraints for table `dapan`
--
ALTER TABLE `dapan`
  ADD CONSTRAINT `dapan_ibfk_1` FOREIGN KEY (`MaCauHoi`) REFERENCES `cauhoi` (`MaCauHoi`);

--
-- Constraints for table `thongtinbailam`
--
ALTER TABLE `thongtinbailam`
  ADD CONSTRAINT `thongtinbailam_ibfk_1` FOREIGN KEY (`MaDeThi`) REFERENCES `dethi` (`MaDeThi`),
  ADD CONSTRAINT `thongtinbailam_ibfk_2` FOREIGN KEY (`MaNguoiDung`) REFERENCES `nguoidung` (`MaNguoiDung`);

--
-- Constraints for table `ykiennguoidung`
--
ALTER TABLE `ykiennguoidung`
  ADD CONSTRAINT `ykiennguoidung_ibfk_1` FOREIGN KEY (`MaNguoiDung`) REFERENCES `nguoidung` (`MaNguoiDung`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
