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
-- Table structure for table `main_flower`
--

DROP TABLE IF EXISTS `main_flower`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `main_flower` (
  `main_flower_seq` bigint NOT NULL AUTO_INCREMENT,
  `main_flower_image` varchar(200) DEFAULT NULL,
  `main_flower_name` varchar(50) DEFAULT NULL,
  `main_flower_desc` text,
  `main_flower_color` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`main_flower_seq`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `main_flower`
--

LOCK TABLES `main_flower` WRITE;
/*!40000 ALTER TABLE `main_flower` DISABLE KEYS */;
INSERT INTO `main_flower` VALUES (4,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/mainFlower/970c9e16-4b8f-4d4c-b62e-17f65251e8b7.png','거베라','사랑, 우정','노랑'),(5,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/mainFlower/4abaab18-ae08-4d48-b96d-619bf4af2e94.png','거베라','감사','분홍'),(6,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/mainFlower/a9c8c928-2b0d-4ea5-8ed3-c30a60358048.png','거베라','신비','주황'),(7,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/mainFlower/a248c566-ab0d-4167-ba10-c5c2efb0221a.png','라넌큘러스','배려','노랑'),(8,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/mainFlower/0e040f71-9642-4cb9-9661-57c62b192a57.png','라넌큘러스','행복','보라'),(9,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/mainFlower/681d8dfe-f1a3-4329-8761-256f4d9f3c4b.png','라넌큘러스','아름다움','분홍'),(10,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/mainFlower/7122426a-7260-4731-8a24-31099d2e6e1a.png','리시안셔스','사랑','분홍'),(11,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/mainFlower/1bfda472-c66e-415f-a938-267f0ebb56d5.png','리시안셔스','고귀함','연보라'),(12,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/mainFlower/c81e9bf7-b53b-4165-884e-a3ddd722906c.png','리시안셔스','순수, 인연','하양'),(13,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/mainFlower/165bf28f-aa3d-43d1-8c39-8e4e1967a668.png','백합','유쾌','노랑'),(14,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/mainFlower/8189846a-9fcf-45c5-9805-9253c8a4a7d6.png','백합','사랑','분홍'),(15,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/mainFlower/f1adf446-9288-441b-bce9-166d8dfb6922.png','백합','순결','하양'),(16,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/mainFlower/93280440-b7ee-4567-954a-9d1ec0ddf40f.png','수국','진심','보라'),(17,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/mainFlower/82ae7b8d-d0a7-497e-b4c9-dc811b240913.png','수국','꿈','분홍'),(18,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/mainFlower/ab1b4964-4db4-4896-a2c3-f006cd7de1a9.png','수국','냉정','하늘'),(19,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/mainFlower/f670e90d-cdd3-4ed5-a0a6-ad805bfacbfa.png','작약','수줍음','분홍'),(20,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/mainFlower/7f1bae61-1adb-4855-b2dc-d0d0581334d9.png','작약','성실','빨강'),(21,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/mainFlower/49a3cf6f-e7e5-4d46-98e8-fee5702c03d2.png','작약','결혼','하양'),(22,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/mainFlower/7f72c611-8c7c-4ea8-a137-f3071ba862fa.png','장미','사랑, 맹세','분홍'),(23,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/mainFlower/fa339934-90b4-49a8-a8b4-c51ece7fe03f.png','장미','사랑','빨강'),(24,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/mainFlower/0132299c-3a21-4b43-9d4e-b767b7c4fce0.png','장미','수줍음','주황'),(25,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/mainFlower/8c1fc5cd-28d4-41d8-897e-59c09ea1d732.png','장미','존경, 순결','하양'),(26,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/mainFlower/eafabd55-d6ba-402a-8d74-9b8d1d020998.png','카네이션','사랑','노랑'),(27,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/mainFlower/53c23f46-68ca-4dea-9a16-ab815ce4ca79.png','카네이션','사랑','분홍'),(28,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/mainFlower/1627c477-6355-48a6-b301-9f42cf5ed6dc.png','카네이션','사랑, 감동','빨강'),(29,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/mainFlower/84be4748-ee54-4906-95a6-45db1ec0b9cb.png','카네이션','질투, 우정','주황'),(30,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/mainFlower/21aa1c3a-3d85-4569-b812-c34a5f608743.png','튤립','사랑','노랑'),(31,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/mainFlower/17524866-8edc-4bd0-a8c9-1063ba251709.png','튤립','영원한 사랑','보라'),(32,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/mainFlower/64b69d06-78ce-4a9b-b25f-e6e06ffb355d.png','튤립','사랑, 배려','분홍'),(33,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/mainFlower/b384b421-1f93-4f59-8671-d92988ccf689.png','튤립','헛된 사랑','빨강'),(34,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/mainFlower/2d6865d9-9bb9-4f9f-9c30-cfdeb67e80e2.png','프리지아','기쁨, 우정','노랑'),(35,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/mainFlower/fe071ce6-830a-4b09-9f2d-c27629aec14a.png','프리지아','동경','보라'),(36,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/mainFlower/e01bb8f5-4990-4971-bb8c-83d7f626bbc7.png','프리지아','사랑','분홍'),(37,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/mainFlower/8a93af86-e3cb-466f-a8ed-56e16da35447.png','해바라기','애모, 숭배','노랑'),(38,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/mainFlower/3da3684c-d004-4d6e-a3dd-d91d535cf972.png','히아신스','용기','노랑'),(39,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/mainFlower/1119c142-c0ac-4c10-a432-a78731475b23.png','히아신스','사랑, 비애','보라'),(40,'https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/mainFlower/4760983f-f2ca-4663-8242-433001bafdc8.png','히아신스','사랑, 기억','분홍');
/*!40000 ALTER TABLE `main_flower` ENABLE KEYS */;
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
