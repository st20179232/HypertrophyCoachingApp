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
-- Table structure for table `legday`
--

DROP TABLE IF EXISTS `legday`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `legday` (
  `ExerciseType` varchar(100) DEFAULT NULL,
  `EquipmentType` varchar(100) DEFAULT NULL,
  `Variation` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `legday`
--

LOCK TABLES `legday` WRITE;
/*!40000 ALTER TABLE `legday` DISABLE KEYS */;
INSERT INTO `legday` VALUES ('Squat','Gym','Hack Squat'),('Hinge','Gym','Smith Machine RDL(Glutes) // SLDL(Hamstrings)'),('Leg Extension','Gym','Leg Extension'),('Leg Curl','Gym','Seated Leg Curl'),('Calf Raise','Gym','Machine Calf Raise'),('Squat','Free Weight','Barbell Squat'),('Hinge','Free Weight','Barbell RDL(Glutes) // SLDL(Hamstrings)'),('Leg Extension','Free Weight','Banded Single Leg Extension'),('Leg Curl','Free Weight','DB Lying Leg Curl'),('Calf Raise','Free Weight','DB Standing Calf Raise'),('Squat','Band Only','Split Squat'),('Hinge','Band Only','Banded Good Morning'),('Leg Extension','Band Only','Banded Single Leg Extension'),('Leg Curl','Band Only','Nordic Curl'),('Calf Raise','Band Only','Standing Calf Raise');
/*!40000 ALTER TABLE `legday` ENABLE KEYS */;
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
