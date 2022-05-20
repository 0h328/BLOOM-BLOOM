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
-- Table structure for table `bouquet`
--

DROP TABLE IF EXISTS `bouquet`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bouquet` (
  `bouquet_seq` bigint NOT NULL AUTO_INCREMENT,
  `user_seq` bigint NOT NULL,
  `wrap_seq` bigint NOT NULL,
  `sub_flower_seq` bigint NOT NULL,
  `deco_seq` bigint NOT NULL,
  `bouquet_image` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`bouquet_seq`),
  KEY `FK_user_TO_bouquet_1` (`user_seq`),
  KEY `FK_wrap_TO_bouquet_1` (`wrap_seq`),
  KEY `FK_deco_TO_bouquet_1` (`deco_seq`),
  KEY `FK_sub_flower_TO_bouquet_1` (`sub_flower_seq`),
  CONSTRAINT `FK_deco_TO_bouquet_1` FOREIGN KEY (`deco_seq`) REFERENCES `deco` (`deco_seq`),
  CONSTRAINT `FK_sub_flower_TO_bouquet_1` FOREIGN KEY (`sub_flower_seq`) REFERENCES `sub_flower` (`sub_flower_seq`),
  CONSTRAINT `FK_user_TO_bouquet_1` FOREIGN KEY (`user_seq`) REFERENCES `user` (`user_seq`),
  CONSTRAINT `FK_wrap_TO_bouquet_1` FOREIGN KEY (`wrap_seq`) REFERENCES `wrap` (`wrap_seq`)
) ENGINE=InnoDB AUTO_INCREMENT=178 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bouquet`
--

LOCK TABLES `bouquet` WRITE;
/*!40000 ALTER TABLE `bouquet` DISABLE KEYS */;
INSERT INTO `bouquet` VALUES (15,12,2,4,2,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/bouquet/d15df11a-5a6d-444d-93ad-8d2e4fabc012.png'),(39,13,5,2,9,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/bouquet/8cd80ee0-6a32-40f6-aa73-8fb3b0e47e5d.png'),(40,14,9,3,3,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/bouquet/29b5c2fa-873e-4a32-ab0f-a90a278e3a5d.png'),(41,15,4,2,2,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/bouquet/b1f8609e-b0a0-402d-88e3-f1a40527d58a.png'),(42,16,8,2,2,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/bouquet/ff06eefa-3509-4708-822f-59bc518006e3.png'),(106,18,3,2,7,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/bouquet/5c1c5d5e-5e02-45ed-a1be-a6998f3265c7.png'),(108,14,3,2,3,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/bouquet/0511ff91-fdb4-48b1-bc71-74f1a357fd95.png'),(116,11,2,3,3,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/bouquet/1815c86b-da66-4d4b-bbb0-4aa396f4f5d6.png'),(117,8,2,3,4,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/bouquet/edf75e7a-6b9a-45c5-b97c-926189662bb7.png'),(123,21,9,3,5,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/bouquet/8e470a31-b919-489f-8248-2ea1b00345c1.png'),(125,6,6,3,6,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/bouquet/cf368c5c-9b06-4ffb-b9c9-fb6d30ef7ade.png'),(126,9,3,2,2,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/bouquet/01d9af05-05da-4e3a-a949-5f599bf221e7.png'),(127,6,2,2,2,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/bouquet/e65546ef-73e8-4aa0-af0e-75c19ab3a32b.png'),(139,7,7,3,5,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/bouquet/79c055eb-bb6f-4c62-9f1f-3da7dff23372.png'),(140,7,6,2,2,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/bouquet/a5691811-3577-470a-904a-005436eadd07.png'),(142,5,4,4,5,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/bouquet/0f454ab8-c5a2-44a3-9d4d-55002713b3f1.png'),(143,6,2,2,2,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/bouquet/c24bd436-8c88-4ad9-b7e0-c90af09aa3d5.png'),(144,6,2,2,2,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/bouquet/551e0b68-0f65-4256-bfc3-fcf0c81b74b4.png'),(145,11,4,4,6,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/bouquet/34df79d8-7dba-4c24-9c58-6bf02fa7e23f.png'),(146,7,3,3,9,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/bouquet/eee7fbff-36fa-4b33-b0dd-f402af3ab59c.png'),(147,7,5,3,6,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/bouquet/88126d26-54fd-4282-9446-afd16dd5a2e6.png'),(148,7,3,2,2,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/bouquet/2e9ec1eb-f5b3-49ea-8ab2-efe84ad20206.png'),(150,8,3,4,4,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/bouquet/9831e53c-ad10-4aef-9da9-f793b1e4d55b.png'),(151,6,3,2,6,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/bouquet/1a1187b0-87bd-49d9-89ee-c9bef3db9406.png'),(153,5,5,3,6,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/bouquet/49b0495b-baff-4d04-bc2c-129da6c35136.png'),(154,10,3,2,7,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/bouquet/a074183d-0dbd-4c2e-906e-a4b079bddb03.png'),(155,10,4,3,2,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/bouquet/cdb6b178-abc7-49aa-940e-128b08868cdb.png'),(156,10,6,4,3,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/bouquet/8de7da50-2afc-4a76-9538-0fca21d04f81.png'),(157,10,9,3,5,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/bouquet/0a0b04d4-4c0a-4b19-aff9-808fe7d61577.png'),(158,10,6,2,4,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/bouquet/efbe8d27-8ede-4885-9b0a-12da58674114.png'),(159,10,6,2,4,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/bouquet/7eedd025-0a0a-4cbe-820c-bf69c3aca4af.png'),(160,9,6,3,9,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/bouquet/e1187da1-4040-4c56-ac3b-71ef1487e669.png'),(161,15,4,3,4,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/bouquet/929b1394-890a-4150-ae81-0f20250ee96d.png'),(162,7,6,3,3,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/bouquet/1cc8ea04-c4a6-4791-b6d2-929b676138db.png'),(164,11,2,2,2,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/bouquet/d538429f-ada0-46d4-9cac-65a4faf0b124.png'),(165,11,4,3,4,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/bouquet/6308515b-fa0e-499a-af0c-37b51e3ffa0e.png'),(166,22,8,3,2,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/bouquet/e84aad84-948c-4201-861e-8f4d80532615.png'),(167,7,4,3,4,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/bouquet/e9d8233a-7f84-4cf5-aec5-dc01e62f0427.png'),(169,7,2,4,2,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/bouquet/21b63101-7ff3-4308-a2ed-223ca376205a.png'),(170,7,8,3,7,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/bouquet/5ec96851-976f-4ed7-bb26-907873167c02.png'),(171,7,7,3,4,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/bouquet/0e173a9b-8e7b-4f00-82b1-8bd18e436b45.png'),(172,7,4,3,9,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/bouquet/8e8fa1fe-6326-42a9-ad1c-a3f577693219.png'),(173,7,2,2,3,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/bouquet/87250a6c-b69f-4d0c-9dce-7b9977ec5585.png'),(174,6,2,2,2,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/bouquet/5471b27e-27b2-4283-af5b-c43111b468f8.png'),(175,5,5,4,5,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/bouquet/ddc5d280-4542-4a75-8b31-898bdeec25d7.png'),(176,5,3,3,3,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/bouquet/640b6310-a86a-44b8-90f6-37f82c3bbe79.png'),(177,5,3,2,6,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/bouquet/d0249ada-3720-41e3-a994-b52837acb251.png');
/*!40000 ALTER TABLE `bouquet` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-20 12:01:31
