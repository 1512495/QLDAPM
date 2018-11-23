-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 22, 2018 at 05:50 PM
-- Server version: 10.1.32-MariaDB
-- PHP Version: 7.2.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";
create database luyenthilop6;
use luyenthilop6;

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `luyenthilop6`
-- drop database luyenthilop6
-- --------------------------------------------------------

--
-- Table structure for table `baihoc`
--


DROP TABLE IF EXISTS `baihoc`;
CREATE TABLE IF NOT EXISTS `baihoc` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `TieuDe` varchar(200) NOT NULL,
  `TomTat` varchar(500) NOT NULL,
  `ChiTiet` varchar(5000) NOT NULL,
  `NoiDung` varchar(5000) NOT NULL,
  `HinhAnh` varchar(200) DEFAULT NULL,
  
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------
INSERT INTO `baihoc` (`id`, `TieuDe`, `TomTat`,`ChiTiet`,`NoiDung`,`HinhAnh`) value
(1,'Bài học phân số thập phân - môn Toán','Cung cấp kiến thức cơ bản, các thao tác tính','Chưa có dữ liệu','abcd','1.jpg'),
(2,'Bài học vận tốc, quãng đường, thời gian - môn Toán','Các tính quãng đường, vận tốc, thời gian','chưa có dữ liệu','abcd','2.jpg'),
(3,'Bài học đơn vị đo độ dài - môn Toán','Cung cấp kiến thức về độ dài: mm, cm, dm, m, km','chưa có dữ liệu','abcd','3.png'),
(4,'Bài học Việt Nam-Tổ quốc em - môn Tiếng việt','Phân tích về chủ đề đất nước','chưa có dữ liệu','abcd','4.png'),
(5,'Bài học Cánh chim hòa bình - môn Tiếng việt','Cung cấp kiến thức cơ bản, các thao tác tính','chưa có dữ liệu','abcd','5.jpg'),
(6,'Bài học phân số thập phân - môn Toán','Cung cấp kiến thức cơ bản, các thao tác tính','chưa có dữ liệu','abcd','6.jpg'),
(7,'Bài học phân số thập phân - môn Toán','Cung cấp kiến thức cơ bản, các thao tác tính','chưa có dữ liệu','abcd','7.jpg'),
(8,'Bài học phân số thập phân - môn Toán','Cung cấp kiến thức cơ bản, các thao tác tính','chưa có dữ liệu','abcd','8.jpg'),
(9,'Bài học phân số thập phân - môn Toán','Cung cấp kiến thức cơ bản, các thao tác tính','chưa có dữ liệu','abcd','9.jpg');


--
-- Table structure for table `cauhoi`
--

CREATE TABLE `cauhoi` (
  `MaCauHoi` int(11) NOT NULL,
  `MaDeThi` int(11) NOT NULL,
  `NoiDung` varchar(1000) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `HinhMinhHoa` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `MaMonHoc` int(11) NOT NULL,
  `A` varchar(300) NOT NULL,
  `B` varchar(300) NOT NULL,
  `C` varchar(300) NOT NULL,
  `D` varchar(300) NOT NULL,
  `NgayTao` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `DapAnDung` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cauhoi`
--

INSERT INTO `cauhoi` (`MaCauHoi`, `MaDeThi`, `NoiDung`, `HinhMinhHoa`, `MaMonHoc`, `A`, `B`, `C`, `D`, `NgayTao`, `DapAnDung`) VALUES
(5, 1, 'Ai là tác giả truyện Lượm', NULL, 2, 'Đỗ Phủ', 'Lý Bạch', 'Tố Hữu', 'Chu Đăng Khoa', '2018-11-07 13:36:45', 'Tố Hữu'),
(6, 1, 'Ai phát minh định lý Viet', NULL, 1, 'Newton', 'Viet', 'Pytago', 'Enstein', '2018-11-07 13:36:45', 'Viet'),
(7, 1, 'Tam giác vuông có 2 cạnh vuông là 3 và 4.Hỏi cạnh huyền là bao nhiu', NULL, 1, '1', '5', '7', '12', '2018-11-07 13:38:52', '5'),
(8, 1, 'What is the biggest country in the world?', NULL, 3, 'Russia', 'Canada', 'USA', 'China', '2018-11-07 13:38:52', 'Russia'),
(9, 2, 'Khi tăng chiều rộng của 1 hình chữ nhật lên 10% thì chu vi sẽ tăng thêm', NULL, 1, '10%', '20%', '100%', 'Cả A và C đều sau', '2018-11-19 16:08:09', '20%'),
(10, 2, 'Muốn nhân 1 số với 0.05, ta chia số đó cho ... rồi dịch dấu phẩy sang trái...chữ số', NULL, 1, '2, 1', '20, 1', '20, 2', '10, 2', '2018-11-19 16:10:03', '20, 2'),
(11, 2, 'Khi chiều dài HCN giảm đi 20cm, chu vi sẽ giảm', NULL, 1, '20cm', '40cm', '60cm', '80cm', '2018-11-19 16:14:02', '40cm'),
(12, 2, 'Khi chiều dài HCN giảm đi 20cm, diện tích sẽ giảm', NULL, 1, '20 cm2', '40 cm2', '60 cm2', 'Cả A và B đều sai', '2018-11-19 16:14:02', 'Cả A và B đều sai');

-- --------------------------------------------------------

--
-- Table structure for table `dethi`
--

CREATE TABLE `dethi` (
  `MaDeThi` int(11) NOT NULL,
  `TenDeThi` varchar(300) NOT NULL,
  `ThoiGian` int(11) NOT NULL,
  `SoCau` int(11) NOT NULL,
  `SoDiemMotCau` int(11) NOT NULL,
  `NgayTao` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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

CREATE TABLE `monhoc` (
  `MaMonHoc` int(11) NOT NULL,
  `TenMonHoc` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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

CREATE TABLE `nguoidung` (
  `MaNguoiDung` int(11) NOT NULL,
  `TenNguoiDung` varchar(100) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `MatKhau` varchar(50) NOT NULL,
  `SDT` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `nguoidung`
--

INSERT INTO `nguoidung` (`MaNguoiDung`, `TenNguoiDung`, `Email`, `MatKhau`, `SDT`) VALUES
(1, 'Tấn Phan', 'tanphan0805@gmail.com', '12345', '0338082216'),
(2, 'Phan Văn Tấn', 'phanvantan080597@gmail.com', '12345', '0123456789'),
(3, 'Phan Văn Tấn', 'tanphan0805@gmail.com', 'tanphan0805', '08732409328'),
(4, 'Teo', 'teo123@gmail.com', '1', '0347'),
(5, 'Xuân Sơn', 'xuan97@gmail.com', 'c4ca4238a0b923820dcc509a6f75849b', '3465821'),
(6, 'Teo a', 'xuan97@gmail.com', 'c20ad4d76fe97759aa27a0c99bff6710', '324234'),
(7, 'aa', 'aa', 'd41d8cd98f00b204e9800998ecf8427e', '');

-- --------------------------------------------------------

--
-- Table structure for table `thongtinbailam`
--

CREATE TABLE `thongtinbailam` (
  `MaBaiLam` int(11) NOT NULL,
  `MaDeThi` int(11) NOT NULL,
  `MaNguoiDung` int(11) NOT NULL,
  `NgayThi` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `SoCauLam` int(11) NOT NULL,
  `SoCauDung` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `thongtinlienhe`
--

CREATE TABLE `thongtinlienhe` (
  `MaLienHe` int(11) NOT NULL,
  `Name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `Email` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `Subject` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `Message` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `thongtinlienhe`
--

INSERT INTO `thongtinlienhe` (`MaLienHe`, `Name`, `Email`, `Subject`, `Message`) VALUES
(1, '1', '1@1', '111', '111'),
(2, '2', '2@2', '2', '2');

-- --------------------------------------------------------

--
-- Table structure for table `ykiennguoidung`
--

CREATE TABLE `ykiennguoidung` (
  `MaYKien` int(11) NOT NULL,
  `MaNguoiDung` int(11) NOT NULL,
  `NoiDung` varchar(1000) NOT NULL,
  `NgayGoi` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `ykiennguoidung`
--

INSERT INTO `ykiennguoidung` (`MaYKien`, `MaNguoiDung`, `NoiDung`, `NgayGoi`) VALUES
(3, 1, 'Rất hay', '2018-11-07 13:45:31');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `baihoc`
--

--
-- Indexes for table `cauhoi`
--
ALTER TABLE `cauhoi`
  ADD PRIMARY KEY (`MaCauHoi`),
  ADD KEY `MaDeThi` (`MaDeThi`),
  ADD KEY `MaMonHoc` (`MaMonHoc`);

--
-- Indexes for table `dethi`
--
ALTER TABLE `dethi`
  ADD PRIMARY KEY (`MaDeThi`);

--
-- Indexes for table `monhoc`
--
ALTER TABLE `monhoc`
  ADD PRIMARY KEY (`MaMonHoc`);

--
-- Indexes for table `nguoidung`
--
ALTER TABLE `nguoidung`
  ADD PRIMARY KEY (`MaNguoiDung`);

--
-- Indexes for table `thongtinbailam`
--
ALTER TABLE `thongtinbailam`
  ADD PRIMARY KEY (`MaBaiLam`),
  ADD KEY `MaDeThi` (`MaDeThi`,`MaNguoiDung`),
  ADD KEY `MaNguoiDung` (`MaNguoiDung`);

--
-- Indexes for table `thongtinlienhe`
--
ALTER TABLE `thongtinlienhe`
  ADD PRIMARY KEY (`MaLienHe`);

--
-- Indexes for table `ykiennguoidung`
--
ALTER TABLE `ykiennguoidung`
  ADD PRIMARY KEY (`MaYKien`),
  ADD KEY `fk_yknd_nd` (`MaNguoiDung`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `baihoc`
--
ALTER TABLE `baihoc`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `cauhoi`
--
ALTER TABLE `cauhoi`
  MODIFY `MaCauHoi` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `dethi`
--
ALTER TABLE `dethi`
  MODIFY `MaDeThi` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `monhoc`
--
ALTER TABLE `monhoc`
  MODIFY `MaMonHoc` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `nguoidung`
--
ALTER TABLE `nguoidung`
  MODIFY `MaNguoiDung` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `thongtinbailam`
--
ALTER TABLE `thongtinbailam`
  MODIFY `MaBaiLam` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `thongtinlienhe`
--
ALTER TABLE `thongtinlienhe`
  MODIFY `MaLienHe` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `ykiennguoidung`
--
ALTER TABLE `ykiennguoidung`
  MODIFY `MaYKien` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

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
