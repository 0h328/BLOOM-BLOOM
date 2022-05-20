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
-- Table structure for table `wrap`
--

DROP TABLE IF EXISTS `wrap`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wrap` (
  `wrap_seq` bigint NOT NULL AUTO_INCREMENT,
  `wrap_image` varchar(200) DEFAULT NULL,
  `wrap_front_image` varchar(200) DEFAULT NULL,
  `wrap_back_image` varchar(200) DEFAULT NULL,
  `wrap_color` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`wrap_seq`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wrap`
--

LOCK TABLES `wrap` WRITE;
/*!40000 ALTER TABLE `wrap` DISABLE KEYS */;
INSERT INTO `wrap` VALUES (2,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/wrap/6b206837-ad98-4a80-a4c3-90f2144979f6.png','https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/wrap/15b7bd4d-d0dc-41bb-bf7d-d945db8ac443.png','https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/wrap/ce106177-1fae-421f-99b7-1c337cfd6f89.png','네이비'),(3,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/wrap/e3e6f70a-86e8-4703-b31c-819cbbf37795.png','https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/wrap/07045b43-cc20-4d89-8a4e-5c15aa7ee38f.png','https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/wrap/45c402fa-aa56-4b58-95ff-3df35f9d5ae8.png','노랑'),(4,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/wrap/834df0ef-790b-4c19-be2b-276f8ec0be27.png','https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/wrap/99e36000-f75b-4e9e-9cc6-b195f8923a95.png','https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/wrap/9727f80f-7d2a-4d8e-9bdf-ab1fc0c84550.png','아이보리'),(5,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/wrap/bf21cb02-77da-4e59-8249-ef1993efff81.png','https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/wrap/6f6e76f9-109d-42ff-8299-9aec5e9bfec9.png','https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/wrap/b05ce84b-4b4f-4815-9a69-75295b45b09d.png','하늘'),(6,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/wrap/ee3e3099-4401-4715-a222-cf039299a35a.png','https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/wrap/554e1deb-7afb-462a-a8d7-98c8d41bb5fb.png','https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/wrap/dd4a1a12-606e-4014-b16e-fecadaf6d423.png','보라'),(7,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/wrap/61663a99-a6e6-4e55-9f1f-cd277ba243e1.png','https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/wrap/a47702c1-82f7-45a1-86f3-09bd6fda1f08.png','https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/wrap/ee1bfd4d-7483-41cb-a74d-59c5a44a4537.png','분홍'),(8,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/wrap/db2e8867-1698-4cff-9845-777f01b9dc05.png','https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/wrap/cf3a5f69-3b08-4fd5-9fb6-222a83d96a84.png','https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/wrap/6bdf6de8-1a13-4982-aea4-be585001a5fb.png','연두'),(9,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/wrap/a5b1eadc-0ef4-4879-bece-2fa6383fe8fb.png','https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/wrap/c5879b85-b9a7-42d1-b287-593fb6ebe91d.png','https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/wrap/07626b83-60d7-4276-8f45-d8eba4f99e19.png','주황');
/*!40000 ALTER TABLE `wrap` ENABLE KEYS */;
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
