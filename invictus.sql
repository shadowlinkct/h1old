-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Mag 30, 2024 alle 01:00
-- Versione del server: 10.4.28-MariaDB
-- Versione PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `invictus`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `account`
--

CREATE TABLE `account` (
  `nome` varchar(255) DEFAULT NULL,
  `cognome` varchar(255) DEFAULT NULL,
  `genere` varchar(9) DEFAULT NULL,
  `data_n` date DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `tel_c` varchar(20) DEFAULT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `account`
--

INSERT INTO `account` (`nome`, `cognome`, `genere`, `data_n`, `email`, `password`, `tel_c`, `id`) VALUES
('Francesco', 'Mirenda', 'uomo', '2024-05-17', 'francescomirenda1112@gmail.com', '$2y$10$tqqxxhLwtqzhNDBDz6iKiui.2akFwAIPrsxuwBU22dzpfoCy3Heta', '3484663564', 1),
('geppeto', 'sans', 'uomo', '2024-05-04', 'lucia18586@tisc', '$2y$10$t0JOBXtk2yRNRWJtU9GlBednsv5UttECuGrfnA4oWNTI8HWSIH4dq', '55484694129', 2),
('asdwe', 'wadwas', 'uomo', '2024-05-05', 'francesco.m345@ail.com', '$2y$10$T5iMpsa/2K17kw2cYT9vQOyKn6ymiLp3VRrKyatvf1MCFvWKH9l22', '348466434', 3),
('Frwdadaesco', 'Mirenwsdqqdda', 'altro', '2024-05-18', 'francescomirenda1112@gmail.comwer', '$2y$10$wYTSRsgJXxVZhqvCSVssh.7zJWlNH8CL2YEiEYMORsoH7FnIROTqu', '3484642342', 4);

-- --------------------------------------------------------

--
-- Struttura della tabella `articoli`
--

CREATE TABLE `articoli` (
  `id` int(11) NOT NULL,
  `data` date NOT NULL,
  `titolo` varchar(255) NOT NULL,
  `descrizione` text NOT NULL,
  `link` varchar(255) NOT NULL,
  `immagine_principale` varchar(255) NOT NULL,
  `immagine_segnalibro` varchar(255) NOT NULL,
  `categoria` varchar(255) DEFAULT NULL,
  `intestazione` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `articoli`
--

INSERT INTO `articoli` (`id`, `data`, `titolo`, `descrizione`, `link`, `immagine_principale`, `immagine_segnalibro`, `categoria`, `intestazione`) VALUES
(1, '2024-03-20', 'Reset metabolico per dimagrire: come si fa? Schema', 'Il reset metabolico è una strategia che permette di dimagrire alzando le calorie e di raggiungere una composizione corporea migliore, specialmente quando la dieta è abbinata ad un allenamento con…', 'https://www.example.com/reset-metabolico', '../img/largetab.png', '../img/bookmarkno.png', 'METABOLISMO', 1),
(2, '2024-03-19', 'Dieta della frutta per dimagrire', 'La dieta della frutta è una dieta che si basa principalmente sul consumo di frutta fresca e di stagione per favorire il dimagrimento e migliorare la salute.', 'https://www.example.com/dieta-della-frutta', '../img/frutta-verdura-480x270.jpeg', '../img/bookmarkno.png', NULL, 2),
(3, '2024-03-18', 'Dieta ferrea per dimagrire velocemente', 'La dieta ferrea è un regime alimentare molto rigido che promette una rapida perdita di peso attraverso il consumo di alimenti a basso contenuto calorico.', 'https://www.example.com/dieta-ferrea', '../img/dieta-ferrea-1-640x360.jpg', '../img/bookmarkno.png', NULL, 2),
(4, '2024-03-17', 'Dieta vegetariana: la guida completa', 'La dieta vegetariana esclude carne e pesce, ma include una vasta gamma di alimenti a base vegetale che possono fornire tutti i nutrienti necessari per una dieta equilibrata.', 'https://www.example.com/dieta-vegetariana', '../img/dieta-vegetariana-432x243.jpg', '../img/bookmarkno.png', NULL, 2),
(5, '2024-03-14', '3 diete efficaci che funzionano', 'Scopri tre diete efficaci che hanno dimostrato di funzionare per perdere peso in modo sano e sostenibile.', 'https://www.example.com/3-diete-efficaci', '../img/diete-efficaci-1-640x360.jpg', '../img/bookmarkno.png', NULL, 2),
(6, '2024-03-13', 'Finestra anabolica: cos’è e cosa mangiare', 'Descrizione dell\'articolo sulla finestra anabolica', '#', '../img/LAK7418-600x336.jpg', '../img/bookmarkno.png', NULL, 0),
(7, '2024-03-11', 'Colazione proteica: cosa mangiare ed esempi', 'Descrizione dell\'articolo sulla colazione proteica', '#', '../img/colazione-proteica-2-640x360.jpg', '../img/bookmarkno.png', NULL, 0),
(8, '2024-03-10', 'Come perdere 5 kg in un mese?', 'Descrizione dell\'articolo su come perdere 5 kg', '#', '../img/evid_5kg-compressed-600x340.jpg', '../img/bookmarkno.png', NULL, 0),
(9, '2024-03-13', 'Ectomorfo: caratteristiche, dieta ed allenamento', 'Descrizione dell\'articolo sull\'ectomorfo', '#', '../img/1ecto.jpg', '../img/bookmarkno.png', NULL, 0),
(10, '2024-03-07', 'Reverse diet: come impostarla', 'Descrizione dell\'articolo sulla reverse diet', '#', '../img/2reverse.jpg', '../img/bookmarkno.png', NULL, 0),
(11, '2024-03-06', 'Allenamento per dimagrire e perdere peso', 'Descrizione dell\'articolo sull\'allenamento per dimagrire', '#', '../img/3alldim.jpg', '../img/bookmarkno.png', NULL, 0),
(12, '2024-03-05', 'Endomorfo: caratteristiche, dieta ed allenamento', 'Descrizione dell\'articolo sull\'endomorfo', '#', '../img/4end.jpg', '../img/bookmarkno.png', NULL, 0),
(13, '2024-03-04', 'Colazione per dimagrire: cosa mangiare ed esempi', 'Descrizione dell\'articolo sulla colazione per dimagrire', '#', '../img/5colaz.jpg', '../img/bookmarkno.png', NULL, 0),
(14, '2024-03-03', 'Colazione proteica dolce: cosa mangiare', 'Descrizione dell\'articolo sulla colazione proteica dolce', '#', '../img/6coldol.jpg', '../img/bookmarkno.png', NULL, 0);

-- --------------------------------------------------------

--
-- Struttura della tabella `preferiti`
--

CREATE TABLE `preferiti` (
  `id` int(11) NOT NULL,
  `id_utente` int(11) NOT NULL,
  `id_articolo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`id`);

--
-- Indici per le tabelle `articoli`
--
ALTER TABLE `articoli`
  ADD PRIMARY KEY (`id`);

--
-- Indici per le tabelle `preferiti`
--
ALTER TABLE `preferiti`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_utente` (`id_utente`),
  ADD KEY `id_articolo` (`id_articolo`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `account`
--
ALTER TABLE `account`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT per la tabella `articoli`
--
ALTER TABLE `articoli`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT per la tabella `preferiti`
--
ALTER TABLE `preferiti`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- Limiti per le tabelle scaricate
--

--
-- Limiti per la tabella `preferiti`
--
ALTER TABLE `preferiti`
  ADD CONSTRAINT `preferiti_ibfk_1` FOREIGN KEY (`id_utente`) REFERENCES `account` (`id`),
  ADD CONSTRAINT `preferiti_ibfk_2` FOREIGN KEY (`id_articolo`) REFERENCES `articoli` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
