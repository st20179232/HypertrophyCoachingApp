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
-- Table structure for table `exercise`
--

DROP TABLE IF EXISTS `exercise`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `exercise` (
  `ExerciseType` varchar(255) DEFAULT NULL,
  `EquipmentType` varchar(20) DEFAULT NULL,
  `Variation` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `exercise`
--

LOCK TABLES `exercise` WRITE;
/*!40000 ALTER TABLE `exercise` DISABLE KEYS */;
INSERT INTO `exercise` VALUES ('Squat','Gym','Hack Squat'),('Squat','Gym','Smith Machine Squat'),('Squat','Gym','Belt Squat'),('Squat','Gym','Pendulum Squat'),('Squat','Free Weight','Barbell Squat'),('Squat','Free Weight','Goblet Squat'),('Squat','Free Weight','Split Squat'),('Squat','Band Only','Squat'),('Squat','Band Only','Split Squat'),('Hinge','Gym','Smith Machine RDL(Glutes) // SLDL(Hamstrings)'),('Hinge','Gym','Belt Squat RDL(Glutes) // SLDL(Hamstrings'),('Hinge','Gym','Hyperextension'),('Hinge','Free Weight','Trap Bar RDL(Glutes) // SLDL(Hamstrings)'),('Hinge','Free Weight','Barbell RDL(Glutes) // SLDL(Hamstrings)'),('Hinge','Free Weight','DB RDL(Glutes) // SLDL(Hamstrings)'),('Hinge','Band Only','Banded Good Morning'),('Hinge','Band Only','RDL(Glutes) // SLDL(Hamstrings)'),('Leg Extension','Gym','Leg Extension'),('Leg Extension','Free Weight','Banded Single Leg Extension'),('Leg Extension','Band Only','Banded Single Leg Extension'),('Leg Curl','Gym','Seated Leg Curl'),('Leg Curl','Gym','Lying Leg Curl'),('Leg Curl','Gym','Standing Leg Curl'),('Leg Curl','Free Weight','DB Lying Leg Curl'),('Leg Curl','Band Only','Banded Leg Curl'),('Leg Curl','Band Only','Nordic Curl'),('Calf Raise','Gym','Machine Standing Calf Raise'),('Calf Raise','Gym','Seated Calf Raise'),('Calf Raise','Gym','Calf Press'),('Calf Raise','Free Weight','Barbell Standing Calf Raise'),('Calf Raise','Free Weight','Barbell Seated Calf Raise'),('Calf Raise','Free Weight','DB Standing Calf Raise'),('Calf Raise','Free Weight','DB Seated Calf Raise'),('Calf Raise','Band Only','Standing Calf Raise'),('Calf Raise','Band Only','Seated Calf Raise'),('Chest Press','Gym','Smith Machine Bench Press'),('Chest Press','Gym','Machine Chest Press'),('Chest Press','Gym','Cable Press'),('Chest Press','Free Weight','Barbell Bench Press'),('Chest Press','Free Weight','DB Bench Press'),('Chest Press','Band Only','Push Up'),('Incline Chest Press','Gym','Smith Machine Incline Press'),('Incline Chest Press','Gym','Machine Incline Press'),('Incline Chest Press','Gym','Incline Cable Press'),('Incline Chest Press','Free Weight','Barbell Incline Press'),('Incline Chest Press','Free Weight','DB Incline Press'),('Incline Chest Press','Band Only','Decline Push Up'),('Chest Fly','Gym','Pec Deck'),('Chest Fly','Gym','Cable Fly'),('Chest Fly','Free Weight','DB Fly'),('Chest Fly','Band Only','Sliding Chest Fly'),('Chest Fly','Band Only','Banded Pec Fly'),('Shoulder Raise','Gym','Machine Lateral Raise'),('Shoulder Raise','Gym','Cable Lateral Raise'),('Shoulder Raise','Gym','Cable Upright Row'),('Shoulder Raise','Free Weight','DB Lateral Raise'),('Shoulder Raise','Free Weight','DB Upright Row'),('Shoulder Raise','Free Weight','Barbell Upright Row'),('Shoulder Raise','Band Only','Banded Lateral Raise'),('Shoulder Raise','Band Only','Banded Upright Row'),('Shoulder Press','Gym','Smith Machine Shoulder Press'),('Shoulder Press','Gym','Machine Shoulder Press'),('Shoulder Press','Free Weight','Barbell Shoulder Press'),('Shoulder Press','Free Weight','DB Shoulder Press'),('Shoulder Press','Band Only','High Decline Press'),('Shoulder Press','Band Only','Banded Shoulder Press'),('Triceps Press','Gym','Smith Machine Close Grip Press'),('Triceps Press','Gym','Smith Machine JM Press'),('Triceps Press','Gym','Machine Close Grip Press'),('Triceps Press','Gym','Machine Dip'),('Triceps Press','Free Weight','Close Grip Bench Press'),('Triceps Press','Free Weight','DB JM Press'),('Triceps Press','Free Weight','Barbell JM Press'),('Triceps Press','Free Weight','BW Dip'),('Triceps Press','Band Only','Close Grip/Diamond Push'),('Triceps Press','Band Only','JM Push Up'),('Triceps Press','Band Only','BW JM Press'),('Overhead Triceps','Gym','Smith Machine Skullcrusher'),('Overhead Triceps','Gym','Cable Overhead Extension'),('Overhead Triceps','Free Weight','Barbell Skullcrusher'),('Overhead Triceps','Free Weight','DB Skullcrusher'),('Overhead Triceps','Free Weight','Barbell Overhead Extension'),('Overhead Triceps','Free Weight','DB Overhead Extension'),('Overhead Triceps','Band Only','Overhead Extension'),('Overhead Triceps','Band Only','BW Skullcrusher'),('Pushdown','Gym','Cable Pushdown'),('Pushdown','Band Only','Banded Pushdown'),('Row','Gym','Chest Supported Row'),('Row','Gym','T-Bar Row'),('Row','Gym','Cable Row'),('Row','Free Weight','Bent Over Row'),('Row','Free Weight','DB Row'),('Row','Free Weight','Landmine Row'),('Row','Band Only','Inverted Row'),('Row','Band Only','Banded Row'),('Rear Fly','Gym','Reverse Pec Deck'),('Rear Fly','Gym','Cable Rear Delt Fly'),('Rear Fly','Free Weight','Dumbbell Rear Delt Fly'),('Rear Fly','Band Only','Banded Rear Delt Fly'),('Shrug','Gym','Smith Machine Shrug'),('Shrug','Gym','Machine Shrug'),('Shrug','Gym','Smith Machine Kelso Shrug'),('Shrug','Gym','Machine Kelso Shrug'),('Shrug','Gym','Cable Kelso Shrug'),('Shrug','Free Weight','Barbell Shrug'),('Shrug','Free Weight','Trap Bar Shrug'),('Shrug','Free Weight','DB Shrug'),('Shrug','Free Weight','DB Kelso Shrug'),('Shrug','Band Only','Banded Shrug'),('Shrug','Band Only','Banded Kelso Shrug'),('Shrug','Band Only','Inverted Kelso Shrug'),('Pulldown','Gym','Wide Grip Pulldown'),('Pulldown','Gym','Assisted Pull Up'),('Pulldown','Gym','Narrow Grip Pulldown'),('Pulldown','Gym','Machine Pulldown'),('Pulldown','Band Only','Pull Up'),('Forearm Curl','Gym','Cable Wrist Curl'),('Forearm Curl','Free Weight','DB Wrist Curl'),('Forearm Curl','Free Weight','Barbell Wrist Curl'),('Forearm Curl','Band Only','Banded Wrist Curl'),('Curl','Gym','Machine Curl'),('Curl','Gym','Cable Curl'),('Curl','Gym','Face-Away Curl'),('Curl','Gym','Cable Preacher Curl'),('Curl','Gym','Preacher Curl'),('Curl','Free Weight','DB Curl'),('Curl','Free Weight','DB Preacher Curl'),('Curl','Free Weight','Barbell Curl'),('Curl','Free Weight','Barbell Preacher Curl'),('Curl','Band Only','Inverted Row Curl'),('Curl','Band Only','Banded Curl'),('Hammer Curl','Gym','Machine Hammer Curl'),('Hammer Curl','Gym','Preacher Hammer Curl'),('Hammer Curl','Gym','Cable Hammer Curl'),('Hammer Curl','Gym','Cable Reverse Curl'),('Hammer Curl','Free Weight','DB Hammer Curl'),('Hammer Curl','Free Weight','DB Preacher Hammer Curl'),('Hammer Curl','Free Weight','DB Reverse Curl'),('Hammer Curl','Free Weight','Barbell Reverse Curl'),('Hammer Curl','Free Weight','Neutral Grip Bar Curl'),('Hammer Curl','Band Only','Banded Hammer Curl'),('Hammer Curl','Band Only','Banded Reverse Curl'),('Pulldown','Gym','Wide Grip Pulldown'),('Pulldown','Gym','Assisted Pull Up'),('Pulldown','Band Only','Pull Up'),('Abs','Gym','Machine Crunch'),('Abs','Gym','Cable Crunch'),('Abs','Gym','Leg Raise'),('Abs','Free Weight','Crunch'),('Abs','Free Weight','Leg Raise'),('Abs','Band Only','Crunch'),('Abs','Band Only','Leg Raise'),('Row','Free Weight','Bench Supported Row'),('Triceps Press','Band Only','BW Dip');
/*!40000 ALTER TABLE `exercise` ENABLE KEYS */;
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
