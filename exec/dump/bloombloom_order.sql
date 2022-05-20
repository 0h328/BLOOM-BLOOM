-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: bloombloom.kro.kr    Database: bloombloom
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `order`
--

DROP TABLE IF EXISTS `order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order` (
  `order_seq` bigint NOT NULL AUTO_INCREMENT,
  `user_seq` bigint NOT NULL,
  `store_seq` bigint NOT NULL,
  `bouquet_seq` bigint NOT NULL,
  `created_date` datetime DEFAULT NULL,
  `order_desc` text,
  `order_uri` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`order_seq`),
  KEY `FK_user_TO_order_1` (`user_seq`),
  KEY `FK_store_TO_order_1` (`store_seq`),
  KEY `FK_bouquet_TO_order_1` (`bouquet_seq`),
  CONSTRAINT `FK_bouquet_TO_order_1` FOREIGN KEY (`bouquet_seq`) REFERENCES `bouquet` (`bouquet_seq`),
  CONSTRAINT `FK_store_TO_order_1` FOREIGN KEY (`store_seq`) REFERENCES `store` (`store_seq`),
  CONSTRAINT `FK_user_TO_order_1` FOREIGN KEY (`user_seq`) REFERENCES `user` (`user_seq`)
) ENGINE=InnoDB AUTO_INCREMENT=123 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order`
--

LOCK TABLES `order` WRITE;
/*!40000 ALTER TABLE `order` DISABLE KEYS */;
INSERT INTO `order` VALUES (96,7,19,140,'2022-05-19 14:56:13','예쁘게 해주세요','3724451'),(97,7,20,139,'2022-05-19 14:56:37','정성스럽게 만들어주세요','237002e'),(98,7,24,147,'2022-05-19 20:08:01','예쁜 꽃들로 만들어주세요','e9351b2'),(99,7,24,140,'2022-05-19 20:09:58','예쁘게 부탁드려요','297c7c9'),(100,6,28,151,'2022-05-19 21:17:53','이쁘게 만들어주세요!','f5b61ec'),(102,7,36,147,'2022-05-19 22:33:47','예쁜꽃들로 만들어주세요예쁜꽃들로 만들어주세요예쁜꽃들로 만들어주세요예쁜꽃들로 만들어주세요예쁜꽃들로 만들어주세요예쁜꽃들로 만들어주세요예쁜꽃들로 만들어주세요','fdfe22e'),(103,5,56,142,'2022-05-19 22:40:09','안녕','0655fa3'),(104,7,45,147,'2022-05-19 22:48:09','선물로 드릴 꽃다발이에요 예쁘게 해주세요','0d2a190'),(105,7,29,139,'2022-05-19 22:59:46','처방','47d2113'),(108,7,28,146,'2022-05-19 23:05:06','ㄴㅇㅁㄴㅇ','a17c0a5'),(109,7,52,148,'2022-05-19 23:10:19','gg','c47e903'),(110,11,51,145,'2022-05-19 23:35:16','테스트','ae9ac44'),(111,6,47,144,'2022-05-19 23:42:14','이쁘게 해주세요!','e78e551'),(112,6,59,125,'2022-05-20 01:54:25','이쁘게 만들어주세요:)','c4fc23b'),(115,6,30,144,'2022-05-20 05:32:27','잘 부탁드립니다. :)','5556751'),(117,7,59,147,'2022-05-20 10:12:02','만들어줘~~','dda62da'),(118,7,46,162,'2022-05-20 10:14:55','부탁해요~~!~!~','5082f4c'),(119,6,46,174,'2022-05-20 10:43:04','.','3a06e3a'),(120,5,56,176,'2022-05-20 11:08:15','???','ca3fff3'),(121,5,42,177,'2022-05-20 11:14:35','주문','21f2488'),(122,7,55,173,'2022-05-20 11:43:48','잘 부탁드립니다. :)','f9c98b6');
/*!40000 ALTER TABLE `order` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-20 12:01:32
