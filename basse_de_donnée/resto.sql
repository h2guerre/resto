-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : mer. 23 mars 2022 à 20:27
-- Version du serveur :  5.7.31
-- Version de PHP : 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `resto`
--

-- --------------------------------------------------------

--
-- Structure de la table `administrateur`
--

DROP TABLE IF EXISTS `administrateur`;
CREATE TABLE IF NOT EXISTS `administrateur` (
  `idAdmin` int(11) NOT NULL AUTO_INCREMENT,
  `nomAdmin` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `logAdmin` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `passAdmin` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`idAdmin`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `categorie`
--

DROP TABLE IF EXISTS `categorie`;
CREATE TABLE IF NOT EXISTS `categorie` (
  `idCat` int(11) NOT NULL AUTO_INCREMENT,
  `nomCat` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`idCat`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `clients`
--

DROP TABLE IF EXISTS `clients`;
CREATE TABLE IF NOT EXISTS `clients` (
  `idCl` int(8) NOT NULL AUTO_INCREMENT,
  `nomCl` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `prenomCl` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`idCl`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `clients`
--

INSERT INTO `clients` (`idCl`, `nomCl`, `prenomCl`) VALUES
(1, 'bere', 'raoul'),
(3, 'BANDAOGO', 'Amza'),
(4, 'OUEDRAOGO', 'Yves'),
(9, 'BERE', 'Raoul'),
(13, 'OUEDRAOGO ', 'Hafyz');

-- --------------------------------------------------------

--
-- Structure de la table `commande`
--

DROP TABLE IF EXISTS `commande`;
CREATE TABLE IF NOT EXISTS `commande` (
  `idCmd` int(8) NOT NULL AUTO_INCREMENT,
  `idCl` int(8) NOT NULL,
  `idEtat` int(8) NOT NULL,
  `dateDbuCmd` date NOT NULL,
  `dateFinCmd` date NOT NULL,
  PRIMARY KEY (`idCmd`),
  KEY `idCl` (`idCl`),
  KEY `idEtat` (`idEtat`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `livraison`
--

DROP TABLE IF EXISTS `livraison`;
CREATE TABLE IF NOT EXISTS `livraison` (
  `idLivr` int(8) NOT NULL AUTO_INCREMENT,
  `idCl` int(8) NOT NULL,
  `idEtat` int(8) NOT NULL,
  `dateDbuLivr` date NOT NULL,
  `dateFinLivr` date NOT NULL,
  PRIMARY KEY (`idLivr`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `produit`
--

DROP TABLE IF EXISTS `produit`;
CREATE TABLE IF NOT EXISTS `produit` (
  `idProd` int(11) NOT NULL AUTO_INCREMENT,
  `catProd` int(11) NOT NULL,
  `nomProd` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `prixProd` int(5) NOT NULL,
  `descriProd` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `photoProd` text COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`idProd`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `produit`
--

INSERT INTO `produit` (`idProd`, `catProd`, `nomProd`, `prixProd`, `descriProd`, `photoProd`) VALUES
(1, 4, 'shawarma', 1000, 'viandehgvjjnlknkllkhlih:', '1.jpg'),
(2, 4, 'frite et burger', 1000, 'maxi cheese burger avec fritte', '2.jpg'),
(5, 2, 'pegasus', 6000, NULL, '3.jpg'),
(6, 2, 'riz au sauce poulet', 1500, NULL, '6.jpg'),
(7, 3, 'coffrÃ© garni', 2500, NULL, '7.jpg'),
(8, 3, 'yaouanane', 1000, NULL, '8.jpg'),
(9, 1, 'langue sautÃ©e', 1000, NULL, '9.jpg'),
(10, 1, 'hachÃ© de fruite', 1000, NULL, '10.jpg'),
(11, 5, 'jus de bissap', 500, NULL, '11.jpg'),
(12, 5, 'jus de fraise', 650, NULL, '12.jpg');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
