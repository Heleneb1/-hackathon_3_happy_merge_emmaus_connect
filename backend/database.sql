-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema emmaus
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema emmaus
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `emmaus` DEFAULT CHARACTER SET utf8 ;
USE `emmaus` ;

-- -----------------------------------------------------
-- Table `emmaus`.`phone`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `emmaus`.`phone` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `marque` VARCHAR(100) NULL,
  `modele` VARCHAR(100) NULL,
  `ram` INT NULL,
  `stockage` INT NULL,
  `indice_Ant` INT NULL,
  `ponderation` INT NULL,
  `id_emmaus_connect` VARCHAR(100) NULL,
  `donateur` VARCHAR(100) NULL,
  `imei` VARCHAR(100) NULL,
  `taille_ecran` INT NULL,
  `version_android` VARCHAR(45) NULL,
  `reseau` VARCHAR(45) NULL,
  `etat` VARCHAR(45) NULL,
  `categorie` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `emmaus`.`ram`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `emmaus`.`ram` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `memoire` INT NULL,
  `valM` INT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `emmaus`.`stockage`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `emmaus`.`stockage` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `stockage` INT NULL,
  `valS` INT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `emmaus`.`indice_Antutu`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `emmaus`.`indice_Antutu` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `ant_min` INT NULL,
  `ant_max` INT NULL,
  `valA` INT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `emmaus`.`etat`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `emmaus`.`etat` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `etat_phone` VARCHAR(100) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `emmaus`.`config_minimale`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `emmaus`.`config_minimale` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `android` VARCHAR(100) NULL,
  `ram` INT NULL,
  `memoire` INT NULL,
  `ecran` INT NULL,
  `reseau` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `emmaus`.`ponderation`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `emmaus`.`ponderation` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `valeur` INT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
