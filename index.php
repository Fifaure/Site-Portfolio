<!DOCTYPE html>
<html lang="fr">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
  <link rel="stylesheet" href="navbar.css">
  <title>Portfolio Mory Camille</title>
</head>

<body>
  <header>
    <div>
      <strong class="outline-text">
        <div>Bonjour,</div>
        Je m'appelle Camille Mory
        <div id="etu">Étudiant en BTS SIO</div>
      </strong>
    </div>
  </header>
  <div class="transition"></div>
  <nav>
    <div class="navbar" id="nav">
      <div class="container nav-container">
        <input class="checkbox" type="checkbox" name="" id="menu-toggle" />
        <div class="hamburger-lines">
          <span class="line line1"></span>
          <span class="line line2"></span>
          <span class="line line3"></span>
        </div>
        <div class="menu-items">
          <li><a href="#qui">Qui-suis-je?</a></li>
          <li><a href="#parc">Parcours</a></li>
          <li><a href="#act">Réalisation</a></li>
          <li><a href="#veille">Veille</a></li>
          <li><a href="CV_Camille.pdf" target="_blank">Mon CV</a></li>
          <li><a href="Stage.php">Rapport de Stage</a></li>
        </div>
      </div>
    </div>
  </nav>
  
  <div id="qui">
    <br>
    <div class="contain">
      <div class="qui">Présentation</div>
      <div class="h2pres">Qui-suis-je?</div>
    </div>
    <div id="pres">
      <p id="paragraphe">
        Étant passionné dans le domaine du développement et de l'informatique en général
        depuis mon plus jeune âge, je suis actuellement étudiant en BTS SIO à GAP.
        J'apprends les bases de tous types de langages de programmation avec enthousiasme.
        <br><br>
        J'ai réalisé quelques projets en dehors des cours qui m'ont permis de voir la programmation
        sous un autre angle.
      </p>
    </div>
  </div>
  <div id="parc" class="pair">
    <br>
    <div class="contain2">
      <div class="parc">Présentation</div>
      <div class="h2pres2">Parcours</div>
    </div>
    <div id="pres">
      <table class="sBorder">
        <tr>
          <td id="td1"><b>Baccalauréat 2023</b></td>
          <td id="td1"><b><a href="Pix.pdf" target="_blank" class="a">PIX 2024</a></b></td>
          <td id="td1"><b>Brevet 2020</b></td>
        </tr>
        <tr>
          <td>
            Lycée Saint-Joseph GAP<br>
            Spécialités : Maths, NSI<br>
            Mention : Assez Bien
          </td>
          <td><a href="Pix.pdf" target="_blank" class="a">605 points</a></td>
          <td>
            Collège Saint-Joseph GAP<br>
            Mention : Assez Bien
          </td>
        </tr>
      </table>
    </div>
  </div>
  <div id="act">
    <br>
    <div class="contain3">
      <div class="act">Activités</div>
      <div class="h2pres3">Réalisation</div>
    </div>
    <div id="pres">
      <table class="sBorder">
        <tr>
          <td id="td1"><b>Python</b></td>
          <td id="td1"><b>Web</b></td>
          <td id="td1"><b>java</b></td>
        </tr>
        <tr>
          <td>
            -Bot Dofus Farm<br>
            -Plein de projet fait en lycée
          </td>
          <td>
            -Portfolio<br>
            -<a href="http://pizzagap.cluster003.ovh.net" class="a">7Pizza</a>
          </td>
          <td>
            -<a href="B1_TP_Shifumi_G2_Mory_Camille.pdf" target="_blank" class="a">Shifumi</a><br>
            -<a href="B1_BatailleNavale_G2_Mory_Camille.pdf" target="_blank" class="a">Bataille Naval</a><br>
            -<a href="DOCUMENTATION_UTILISATEUR.pdf" target="_blank" class="a">Projet 1ère année M2L</a>
          </td>
        </tr>
      </table>
    </div>
  </div>
  <div id="veille" class="pair">
    <br>
    <div class="contain3">
      <div class="act">Activités</div>
      <div class="h2pres4">Veille</div>
    </div>
    <div class="veille">
      <p>
        <b>Moteur Graphique</b><br><br>
        -Je suis l'actualité des nouvelles technologies dans le domaine des Moteurs Graphiques
      </p>

      <table class="aBorder">
        <!-- Main -->
        <tr>
          <th>Moteur Graphique</th>
          <th>Date</th>
          <th>Version</th>
          <th>Nouveauté</th>
          <th>Lien</th>
        </tr>
        <!-- Unreal Engine -->
        <tr>
          <td rowspan="3">Unreal Engine</td>
          <!-- 5.5 -->
          <td>2024-11-12</td>
          <td>5.5</td>
          <td>
            Voici un résumé des améliorations apportées par <b>Unreal Engine 5.5</b> :<br>
            Optimisation de <b>Nanite</b> : Meilleure gestion des géométries complexes.<br>
            Améliorations de <b>Lumen</b> : Meilleure qualité d'éclairage global et performances accrues.<br>
            <b>MetaSounds</b> amélioré : Plus de contrôle et de flexibilité pour la conception audio.<br>
            Outils d'animation enrichis : Améliorations pour les workflows d'animation.<br>
            Performance optimisée : Meilleure efficacité sur les grandes scènes et les environnements détaillés.<br>
          </td>
          <td><a href="https://www.unrealengine.com/en-US/blog/unreal-engine-5-5-is-now-available"
              target="_blank" class="a">Article</a></td>
        </tr>
        <!-- 5.4 -->
        <tr>
          <td>2024-04-23</td>
          <td>5.4</td>
          <td>
            <b>Unreal Engine 5.4</b> apporte des avancées majeures pour les développeurs :<br>
            <b>Performances</b> : Meilleur rendu graphique, optimisations pour le Ray Tracing et les mondes ouverts.<br>
            <b>Lumen</b> & <b>Nanite</b> : Améliorations pour des performances accrues et une prise en charge
            élargie.<br>
            <b>Modélisation</b> : Outils enrichis pour la création 3D et procédurale en temps réel.<br>
            <b>Niagara</b> : Effets visuels encore plus réalistes grâce à des optimisations.<br>
            <b>VR</b> et <b>AR</b> : Meilleures performances et compatibilité multi-plateformes.<br>
            <b>Interface utilisateur</b> : Outils plus flexibles pour créer des interfaces avancées.
          </td>
          <td><a href="https://www.unrealengine.com/fr/blog/unreal-engine-5-4-is-now-available"
              target="_blank" class="a">Article</a></td>
        </tr>
        <!-- 5.3 -->
        <tr>
          <td>2023-09-06</td>
          <td>5.3</td>
          <td>
            Voici un résumé des améliorations apportées par <b>Unreal Engine 5.3</b> :<br>
            <b>Lumen</b> et <b>Nanite</b> : Meilleure gestion des matériaux translucides et optimisation du rendu
            global.<br>
            <b>Ray Tracing</b> et <b>Path Tracing</b> : Rendus photoréalistes en temps réel plus efficaces.<br>
            <b>Niagara</b> : Simulations réalistes pour fluides et particules.<br>
            <b>Animation</b> : Améliorations du Control Rig pour des personnages complexes.<br>
            <b>Mondes ouverts</b> : World Partition optimise le streaming d’assets.<br>
            <b>Performances</b> : Réduction de la latence grâce à une gestion asynchrone améliorée.
          </td>
          <td><a href="https://www.unrealengine.com/en-US/blog/unreal-engine-5-3-is-now-available"
              target="_blank" class="a">Article</a></td>
        </tr>

      </table>
    </div>

  </div>
  <script src="js.js"></script>
</body>

</html>