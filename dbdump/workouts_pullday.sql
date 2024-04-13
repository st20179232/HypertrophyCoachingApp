-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: workouts
-- ------------------------------------------------------
-- Server version	8.0.35

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
-- Table structure for table `pullday`
--

DROP TABLE IF EXISTS `pullday`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pullday` (
  `ExerciseType` varchar(100) DEFAULT NULL,
  `EquipmentType` varchar(100) DEFAULT NULL,
  `Variation` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pullday`
--

LOCK TABLES `pullday` WRITE;
/*!40000 ALTER TABLE `pullday` DISABLE KEYS */;
INSERT INTO `pullday` VALUES ('Pulldown','Gym','Wide Grip Pulldown'),('Row','Gym','T-Bar Row'),('Pulldown','Gym','Narrow Grip Pulldown'),('Shrug','Gym','Smith Machine Kelso Shrug'),('Curl','Gym','Preacher Curl'),('Hammer Curl','Gym','Cable Hammer Curl'),('Pulldown','Free Weight','Pull Up'),('Row','Free Weight','Bent Over Row'),('Row','Free Weight','DB Row'),('Shrug','Free Weight','DB Kelso Shrug'),('Curl','Free Weight','Barbell Curl'),('Hammer Curl','Free Weight','DB Hammer Curl'),('Pulldown','Band Only','Pull Up'),('Row','Band Only','Inverted Row'),('Row','Band Only','Banded Row'),('Shrug','Band Only','Banded Shrug'),('Curl','Band Only','Banded Curl'),('Hammer Curl','Band Only','Banded Hammer Curl');
/*!40000 ALTER TABLE `pullday` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-13 22:27:06
