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
-- Table structure for table `present`
--

DROP TABLE IF EXISTS `present`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `present` (
  `present_seq` bigint NOT NULL AUTO_INCREMENT,
  `bouquet_seq` bigint NOT NULL,
  `present_desc` text,
  `present_uri` varchar(50) DEFAULT NULL,
  `present_sender` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`present_seq`),
  KEY `FK_bouquet_TO_present_1` (`bouquet_seq`),
  CONSTRAINT `FK_bouquet_TO_present_1` FOREIGN KEY (`bouquet_seq`) REFERENCES `bouquet` (`bouquet_seq`)
) ENGINE=InnoDB AUTO_INCREMENT=481 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `present`
--

LOCK TABLES `present` WRITE;
/*!40000 ALTER TABLE `present` DISABLE KEYS */;
INSERT INTO `present` VALUES (300,41,'제 꽃이예요','5a93ea2ad16a4285a1c1f8f012282cd7','박현우'),(301,41,'제 꽃이예요','6421eb5efdc3466fa2c5f987949f0038','박현우'),(302,41,'제 꽃이예요','86225246f4f1499f901014be1036e9d8','박현우'),(303,40,'ㅎㅇ','70a7185652654d11890067178290c4d9','홍승기'),(304,106,'사랑했다','f5843f3925b14c2396cde2038bc529a9','주지환'),(305,106,'사랑했다','a6f26173126f47049094382976b0b8ac','주지환'),(306,106,'사랑했다','8995a9c64c6b4fbe8b7fc7ec46ad04ad','주지환'),(307,106,'사랑했다','3651b26b53b24dec94d6dce963856a4c','주지환'),(308,106,'사랑했다','de91bd3a43c5430987ffa961dce2ae5d','주지환'),(376,116,'우와','7f472e21fb544efdab3d56718e91e169','박건우'),(378,117,'412124','a27d0ba9912143608837688a646304ad','이상원'),(379,117,'412124','8baf3575c77b4ef6a9c068f45aeefbd4','이상원'),(383,123,'이직 축하드립니다','bccd93f07e6d4a8885d1579a87ba356b','이정은'),(384,123,'이직 축하드립니다','6c259d6443ea4d6fb4f29919c19fd1fb','이정은'),(385,127,'편지 내용을 작성해주세요.','36c02cd619054627abef8e0f4f90278f','문준호'),(386,127,'편지 내용을 작성해주세요.','f7a56a6d132d4e96be12807307e5adc5','문준호'),(387,127,'편지 내용을 작성해주세요','ccbb8ef78ad44d33ba56a34d7000eee0','문준호'),(388,127,'편지 내용을 작성해주세요','202757271fe2446aa85a8d39c8cdee28','문준호'),(396,140,'받아줘','d6182d1bcbb942cb8d72ead06a47ba67','김정연'),(397,140,'받아줘','16abd8306383482a92611bc1f6887f1f','김정연'),(399,144,'편지내용','4ab7f6a01d284a3f83fb08758820eecb','문준호'),(400,144,'편지내용','9577e6d323cd4399b9fa70c2b61e57be','문준호'),(401,145,'uwa','f3f5c8a7fa0a4ac5b64166093c2c5865','박건우'),(402,151,'야호','c7d967f60fbd4097828dd5fd3ebeca0a','문준호'),(403,147,'받아줘','c9de96d3e35a437bab455cb4f18c5bc5','김정연'),(404,147,'받아줘','6de0429d0ca342448e8e8a2ddd6cec03','김정연'),(405,147,'받아줘','d3962c1251c747bea4c6317edbfe4d76','김정연'),(406,148,'받아줘','7a33e2a4c52748bba017a9bcfb34b896','김정연'),(407,148,'받아줘','a38af8423fa043d09cde4324cf4b99c2','김정연'),(408,153,'하하','9403ee918b274e8bbd8b25e1a0029599','김정혁'),(409,153,'하하','705b6afd5ae64a14a521a79c20f0cf48','김정혁'),(410,153,'하하','9972b985fd974ca4b9f6e8030bfb266d','김정혁'),(411,147,'안녕','ade5fe79d8b14d6a8081f06f82d2a61d','김정연'),(412,147,'안녕','b4c691e57ff54f55a985984da5ec0616','김정연'),(413,154,'애기사랑?','45cc54248a3a4ce890d5054dcae53b07','박찬미'),(414,154,'애기사랑?','1f7a11969a5a4c23a02bbecaad9ac294','박찬미'),(415,155,'어떠냐!! ','ed69aa747c77487bab981b592d5134fa','박찬미'),(416,155,'어떠냐!! ','b5e227ce641548249783ae891a239dee','박찬미'),(417,156,'자잔~~','e1d20fa1589646fd89c2754646cabab7','박찬미'),(418,156,'자잔~~','1fb1e87a958e4e069b46f6f0e674a3d9','박찬미'),(419,157,'짠','a2295d10b3ea458c95f6e501a5fcadfb','박찬미'),(420,157,'짠','c0c0f0527fb74b609c9096d72d79ae54','박찬미'),(421,159,'마지막~~','39761e81c4744a6c87c42e6d3a47bc42','박찬미'),(422,159,'마지막~~','5dde6696d4964833804e278db8b233e2','박찬미'),(423,159,'마지막~~','a6e7efbe214c403d8900f82863dfe60d','박찬미'),(424,159,'마지막~~','2f32b90c0fcc4b85b7a770b09e8d23d0','박찬미'),(425,159,'','174e36f27eb541c3a37ae8d374e6acc5','박찬미'),(426,159,'','a33509e027e94568b2dd010009363878','박찬미'),(427,148,'선물이란다','3bc1cc3c95e6491da957b40bdc0109c3','김정연'),(428,160,'test','fc4f129fc85949de97318495987f12cb','김영후'),(429,160,'test','0d0bb6724f974d089dc3eb972d7a8596','김영후'),(430,140,'하이','2032e41861474b00bc37fbefd4764201','김정연'),(433,140,'먹어요','98922ab91a8147d29d490b09a9bc1b99','김정연'),(434,140,'먹어요','64e1859a770e4a4581daec1a72cd1e67','김정연'),(435,116,'고마워요!','dca4a6f8173943fc8a6fdd9767eac758','박건우'),(436,116,'고마워요!','fc77867bd6f141e59076292ecd36b8f5','박건우'),(437,151,'이직 축하드립니다.','58e47aa71a58415abe2d6c7e4c99aa2b','박건우'),(438,151,'이직 축하드립니다.','88a4f5f8c7944a79a7988c947f673040','박건우'),(439,153,'ddd','95062e36098c48ea918bd99f850185bc','김정혁'),(440,153,'ddd','19ac466b5d9748218123fa579073e731','김정혁'),(441,165,'안녕하세요','8d939b8433fb402fb8dea1272af82527','문준호'),(442,165,'안녕하세요','6ab51876342f48f3b3ebe924123bcae9','문준호'),(443,153,'ddd','9980f8ad7e8b44bd99f289542e051a23','김정혁'),(444,166,'다들 수고하셨어요!!!','2fde5624210e43adb3c421d91dda7ddc','권오우'),(445,166,'다들 수고하셨어요!!!','686a636f2ebd4b47913b85264c2fc418','권오우'),(446,173,'과연???','73bc837cf27e45939d3ee05b339d3b43','김정연'),(447,173,'과연???','b13d638f6f23465aabcaeccf19ffe760','김정연'),(448,162,'어디보자~~','b02432dfb56b4781b9a7cf0676b49c8d','김정연'),(449,162,'어디보자~~','aa25011a564643d8959168b8337bec11','김정연'),(450,169,'과연???','ae92af1f1bec4bc5820cb0f6dd438ee4','김정연'),(451,169,'과연???','2b71fcc9f209482baed480a398450f74','김정연'),(452,174,'헤헤','47024517e82f4659acbc592a956b551d','박건우'),(453,171,'어디보자','6bd3730c6fc34b778d6fa0e97fcd0d61','김정연'),(454,171,'어디보자','82ae88ec06b44c14afb7f3ad700e338b','김정연'),(455,174,'헤헤','5f518c8bb76e4577972df18cd6f31c92','박건우'),(456,147,'네에','b7009f1d044b4a94824ceff5ec007353','김정연'),(457,147,'네에','7aca20d2f3ef48a4ac7968049f256969','김정연'),(458,151,'이이','1a770858b094401aa6860be1dd5b6408','박건우'),(461,151,'이이','920015b1e0034194ac79c48143234099','박건우'),(462,173,'감사합니디','36823e0693d548459f1b9dc10c115020','김정연'),(463,173,'감사합니디','e2ed751436824b3e91fe57a3de5b41a3','김정연'),(476,175,'안녕','83fb948f755f4470954797cf61d76b93','김정혁'),(477,175,'안녕','16b098cfb0ac4ea7a141437a4bffe4c1','김정혁'),(478,175,'ㅇㅇ','cc9cbd1908b24a36bce422c4bea31d91','김정혁'),(479,175,'ㅇㅇ','8e71c382a74e48fdbc2e89ab39acab83','김정혁'),(480,176,'안녕','cdb539f28c0644f5a8d99a01288154ea','김정혁');
/*!40000 ALTER TABLE `present` ENABLE KEYS */;
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
