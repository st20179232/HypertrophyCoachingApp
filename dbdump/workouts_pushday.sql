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
-- Table structure for table `pushday`
--

DROP TABLE IF EXISTS `pushday`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pushday` (
  `ExerciseType` varchar(100) DEFAULT NULL,
  `EquipmentType` varchar(100) DEFAULT NULL,
  `Variation` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pushday`
--

LOCK TABLES `pushday` WRITE;
/*!40000 ALTER TABLE `pushday` DISABLE KEYS */;
INSERT INTO `pushday` VALUES ('Incline Chest Press','Gym','Smith Machine Incline Press'),('Chest Fly','Gym','Pec Deck'),('Shoulder Press','Gym','Machine Shoulder Press'),('Shoulder Raise','Gym','Cable Lateral Raise'),('Tricep Press','Gym','Machine Dip'),('Tricep Pushdown','Gym','Cable Pushdown'),('Incline Chest Press','Free Weight','Barbell Incline Press'),('Chest Fly','Free Weight','DB Fly'),('Shoulder Press','Free Weight','DB Shoulder Press'),('Shoulder Raise','Free Weight','DB Lateral Raise'),('Triceps Press','Free Weight','Close Grip Bench Press'),('Overhead Triceps','Free Weight','DB Skullcrusher'),('Incline Chest Press','Band Only','Decline Push Up'),('Chest Press','Band Only','Push Up'),('Shoulder Press','Band Only','High Decline Press'),('Shoulder Raise','Band Only','Banded Lateral Raise'),('Triceps Press','Band Only','BW Dip'),('Overhead Triceps','Band Only','Banded Pushdown');
/*!40000 ALTER TABLE `pushday` ENABLE KEYS */;
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
