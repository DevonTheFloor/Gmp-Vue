-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : lun. 11 mai 2020 à 20:25
-- Version du serveur :  10.4.11-MariaDB
-- Version de PHP : 7.4.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `gm`
--

-- --------------------------------------------------------

--
-- Structure de la table `forum`
--

CREATE TABLE `forum` (
  `id` int(11) NOT NULL,
  `titre` varchar(100) NOT NULL,
  `auteur` varchar(50) NOT NULL,
  `message` text NOT NULL,
  `quand` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `forum`
--

INSERT INTO `forum` (`id`, `titre`, `auteur`, `message`, `quand`) VALUES
(1, 'nouveau message', 'Oim', 'Tout premier message du forum: hello world!', '2020-04-26 22:38:55'),
(2, 'en dure dans app.post', 'Oim', 'req.body arrive vide, comment cela se fait \'t\'il?', '2020-04-30 10:24:29'),
(3, 'titre cool', 'lautre', 'cool comment for cool work from a cool dev web, yeah!!', '2020-04-30 17:29:42'),
(4, 'test encore', 'lautre', 'Super nouveau message pour mes potos', '2020-04-30 22:41:40'),
(5, 'juste comme ça', 'lautre', 'voilà juste comme ça histoire de dire que ça fonctionne et que franchement ça le fait.', '2020-05-01 19:57:31'),
(6, 'test', 'lautre', 'test en live', '2020-05-04 10:31:03');

-- --------------------------------------------------------

--
-- Structure de la table `market`
--

CREATE TABLE `market` (
  `id` int(11) NOT NULL,
  `categorie` varchar(100) NOT NULL,
  `titre` varchar(1000) NOT NULL,
  `annonce` text NOT NULL,
  `urlimg` varchar(255) NOT NULL,
  `quand` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `market`
--

INSERT INTO `market` (`id`, `categorie`, `titre`, `annonce`, `urlimg`, `quand`) VALUES
(1, 'Auto', 'Fiat punto grande', 'superbe fiat punto toi même tu vois frèrrrrr', 'https://voiture.kidioui.fr/image/img-auto/fiat-punto.jpg', '2020-05-01 18:08:01'),
(2, 'nouvelle annonce', 'maison', 'là il faut fair preuve d\'imagination pour dev un reseau tout seul', 'https://voiture.kidioui.fr/image/img-auto/fiat-punto.jpg', '2020-05-01 20:15:57');

-- --------------------------------------------------------

--
-- Structure de la table `rezo`
--

CREATE TABLE `rezo` (
  `id` int(11) NOT NULL,
  `auteur` varchar(80) NOT NULL,
  `message` text NOT NULL,
  `quand` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `rezo`
--

INSERT INTO `rezo` (`id`, `auteur`, `message`, `quand`) VALUES
(1, 'oim ', 'Oui Jérôme c\'est moi, non je n\'ai pas changé.', '2020-05-02 07:13:04'),
(2, 'Encore', 'T\'es chanteur toi maintenant?', '2020-05-02 07:14:40'),
(3, 'Lautre', 'Chanteur de chaaaaaarmeuhhhhhh!', '2020-05-02 07:34:18'),
(4, 'adakor', 'Je suis producteur, je cherche un guignole, heu! Un artiste', '2020-05-02 08:27:18'),
(5, 'cava', 'Partir en live, pas bonne idée ce chat!!', '2020-05-02 09:18:19'),
(6, 'oim', 'pourquoi tu es parti sans moi, yes to do?!\r\n', '2020-05-03 19:05:34'),
(7, 'reoim', 'message en live', '2020-05-04 10:31:45'),
(8, 'juste', 'un bridou?', '2020-05-11 07:35:23'),
(9, 'Inpecteur', 'Sais tu danser la carioca!?', '2020-05-11 07:43:52'),
(10, 'iuyt', 'message', '2020-05-11 10:16:12');

-- --------------------------------------------------------

--
-- Structure de la table `test`
--

CREATE TABLE `test` (
  `hgf` varchar(54) NOT NULL,
  `hgdf` varchar(54) NOT NULL,
  `hgd` varchar(54) NOT NULL,
  `hgfd` varchar(54) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `mdp` varchar(255) NOT NULL,
  `isadm` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `email`, `mdp`, `isadm`) VALUES
(1, 'test@test.fr', 'mots_secret', 0),
(2, 'retest@retest.fr', 'mots_secret2', NULL),
(3, 'retest@retest.fr', 'mots_secret3', NULL),
(33, 'test5', '$2b$10$lXdDWgi54Q./tl/qSZNOaOOG1AQ4OKj3jg2aHXntoNFP20YbLRxYS', NULL),
(38, 'test7', '$2b$10$VYuthabRV7iNcJ/.98o6Z.Cwvq5EZUzmX0nTNvSlUDhiAnLm9BJ5.', NULL),
(39, 'test7', '$2b$10$b/RGqBLkMgk0QHp2n94mNuWKIvCcoZyzA9J3H1X5PF6Q5OtjaKOZO', NULL),
(44, 'test', '$2b$10$Ztvv/b9EO043uoHoeaAGBOmpDjo0YJHwFh0Q/lOxcRGGHvW/enWv2', NULL),
(45, 'test2', '$2b$10$lDNshhXPWDF714qfcUgTnOFN14stRHvXxUvxn6SZDz45DEFJZg8ey', NULL);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `forum`
--
ALTER TABLE `forum`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `market`
--
ALTER TABLE `market`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `rezo`
--
ALTER TABLE `rezo`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `forum`
--
ALTER TABLE `forum`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT pour la table `market`
--
ALTER TABLE `market`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `rezo`
--
ALTER TABLE `rezo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
