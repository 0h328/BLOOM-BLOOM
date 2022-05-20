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
-- Table structure for table `deco`
--

DROP TABLE IF EXISTS `deco`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `deco` (
  `deco_seq` bigint NOT NULL AUTO_INCREMENT,
  `deco_image` varchar(200) DEFAULT NULL,
  `deco_name` varchar(50) DEFAULT NULL,
  `deco_color` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`deco_seq`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `deco`
--

LOCK TABLES `deco` WRITE;
/*!40000 ALTER TABLE `deco` DISABLE KEYS */;
INSERT INTO `deco` VALUES (2,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/deco/a7a05e70-1fe5-4de3-93b6-ab18ddfe6af6.png','노랑 리본','노랑'),(3,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/deco/2c390600-72af-4ffc-a8f9-7f02fa068c3c.png','네이비 리본','네이비'),(4,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/deco/c4ecf7ef-136f-482d-99dd-14e0393d75ae.png','보라 리본','보라'),(5,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/deco/20d7e147-7654-4532-bf85-c97fb9ad93c2.png','분홍 리본','분홍'),(6,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/deco/c668f091-a5b5-4501-84a5-cc518e5924ee.png','브라운 화이트 리본','브라운, 화이트'),(7,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/deco/a2aef258-531d-4655-b3c9-a4403cea2c6e.png','브라운 리본','브라운'),(8,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/deco/813736d5-b150-4072-8523-d379ead91a1d.png','빨강 리본','빨강'),(9,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/deco/56e80abc-e1e1-45fb-90ef-fcbc01a2628c.png','진분홍 리본','진분홍');
/*!40000 ALTER TABLE `deco` ENABLE KEYS */;
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
