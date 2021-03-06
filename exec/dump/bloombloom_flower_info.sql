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
-- Table structure for table `flower_info`
--

DROP TABLE IF EXISTS `flower_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `flower_info` (
  `flower_info_seq` bigint NOT NULL AUTO_INCREMENT,
  `flower_info_count` int DEFAULT NULL,
  `bouquet_seq` bigint NOT NULL,
  `main_flower_seq` bigint NOT NULL,
  PRIMARY KEY (`flower_info_seq`),
  KEY `FK_bouquet_TO_flower_info_1` (`bouquet_seq`),
  KEY `FK_main_flower_TO_flower_info_1` (`main_flower_seq`),
  CONSTRAINT `FK_bouquet_TO_flower_info_1` FOREIGN KEY (`bouquet_seq`) REFERENCES `bouquet` (`bouquet_seq`),
  CONSTRAINT `FK_main_flower_TO_flower_info_1` FOREIGN KEY (`main_flower_seq`) REFERENCES `main_flower` (`main_flower_seq`)
) ENGINE=InnoDB AUTO_INCREMENT=859 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `flower_info`
--

LOCK TABLES `flower_info` WRITE;
/*!40000 ALTER TABLE `flower_info` DISABLE KEYS */;
INSERT INTO `flower_info` VALUES (13,1,15,5),(14,1,15,4),(15,2,15,6),(16,2,15,8),(17,1,15,7),(18,1,15,10),(80,1,39,4),(81,1,39,7),(82,1,39,11),(83,1,39,14),(84,1,39,17),(85,1,39,20),(86,1,39,24),(87,2,39,28),(88,1,40,5),(89,1,40,6),(90,1,40,9),(91,1,40,12),(92,1,41,37),(93,3,42,8),(94,2,42,6),(95,2,42,10),(96,1,42,32),(543,1,106,4),(544,1,106,5),(545,1,106,6),(546,1,106,7),(547,1,106,8),(548,1,106,9),(549,1,106,11),(550,1,106,23),(551,1,106,24),(552,1,106,25),(555,1,108,5),(581,1,116,5),(582,2,117,5),(583,1,117,9),(584,1,117,15),(585,1,117,17),(586,1,117,21),(598,10,123,7),(600,2,125,5),(601,2,125,8),(602,2,125,14),(603,1,126,5),(604,3,127,5),(648,2,139,24),(649,2,139,23),(650,3,139,22),(651,3,139,25),(652,1,140,7),(653,1,140,8),(654,2,140,9),(655,2,140,12),(656,2,140,11),(657,2,140,10),(659,6,142,7),(660,5,143,5),(661,1,144,11),(662,1,145,6),(663,1,146,9),(664,1,146,12),(665,1,146,11),(666,1,146,14),(667,1,146,17),(668,1,146,18),(669,1,146,21),(670,1,146,20),(671,1,146,25),(672,1,146,26),(673,1,147,9),(674,1,147,12),(675,1,147,14),(676,1,147,15),(677,1,147,17),(678,1,147,21),(679,1,147,20),(680,1,147,19),(681,1,147,25),(682,1,147,22),(683,1,148,7),(684,1,148,4),(685,1,148,5),(686,1,148,10),(687,1,148,9),(688,1,148,12),(689,1,148,17),(690,1,148,14),(691,1,148,16),(692,1,148,18),(694,1,150,4),(695,1,150,9),(696,1,150,11),(697,2,151,18),(698,2,151,17),(699,2,151,21),(710,1,153,7),(711,3,154,23),(712,3,154,28),(713,1,155,4),(714,1,155,7),(715,1,155,12),(716,1,155,9),(717,1,155,10),(718,1,155,13),(719,1,155,15),(720,1,155,14),(721,1,155,21),(722,1,155,25),(723,1,156,8),(724,1,156,9),(725,1,156,10),(726,1,156,11),(727,1,156,14),(728,1,156,17),(729,1,156,19),(730,1,156,20),(731,1,156,31),(732,1,156,35),(733,1,157,7),(734,1,157,12),(735,1,157,15),(736,1,157,13),(737,1,157,21),(738,1,157,25),(739,1,157,30),(740,1,157,34),(741,1,157,37),(742,1,157,38),(743,1,158,8),(744,1,158,11),(745,2,158,16),(746,2,158,19),(747,1,158,31),(748,1,158,35),(749,1,158,39),(750,1,158,40),(751,1,159,8),(752,1,159,11),(753,2,159,16),(754,2,159,19),(755,1,159,31),(756,1,159,35),(757,1,159,39),(758,1,159,40),(759,1,160,4),(760,1,160,5),(761,1,160,6),(762,1,160,11),(763,1,160,10),(764,10,161,37),(765,1,162,8),(766,1,162,11),(767,1,162,10),(768,1,162,9),(769,1,162,12),(770,1,162,14),(771,1,162,15),(772,1,162,18),(773,1,162,17),(774,1,162,16),(785,10,164,22),(786,2,165,4),(787,3,166,16),(788,3,166,17),(789,4,166,8),(790,1,167,6),(791,1,167,5),(792,1,167,4),(793,1,167,8),(794,1,167,7),(795,1,167,9),(796,1,167,12),(797,1,167,11),(798,1,167,10),(799,1,167,15),(810,1,169,5),(811,1,169,4),(812,1,169,7),(813,1,169,8),(814,1,169,11),(815,1,169,15),(816,1,169,14),(817,1,169,13),(818,1,169,9),(819,1,169,10),(820,1,170,8),(821,1,170,7),(822,1,170,11),(823,1,170,37),(824,1,170,40),(825,1,170,39),(826,1,170,38),(827,1,170,35),(828,1,170,36),(829,1,170,34),(830,1,171,19),(831,1,171,20),(832,1,171,21),(833,1,171,22),(834,1,171,23),(835,1,171,24),(836,1,171,25),(837,1,171,29),(838,1,171,28),(839,1,171,26),(840,2,172,22),(841,3,172,24),(842,2,172,25),(843,3,172,23),(844,1,173,5),(845,1,173,9),(846,1,173,12),(847,1,173,11),(848,1,173,10),(849,1,173,13),(850,1,173,14),(851,1,173,15),(852,1,173,18),(853,1,173,17),(854,1,174,5),(855,1,175,5),(856,3,175,4),(857,7,176,9),(858,3,177,9);
/*!40000 ALTER TABLE `flower_info` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-20 12:01:33
