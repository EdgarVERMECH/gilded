Pour réaliser le TP d'intégration continue, nous avons utilisé un projet d'un autre module (Architecture applicative) en TypeScript.
Ce projet modélise une boutique d'un jeu vidéo. Le but est de communiquer avec le script via la console pour exécuter des actions telles qu'acheter des objets, des ventes aux enchères, etc.

Ce qui marche dans le TP :
-build du code
-exécution des tests unitaires (avec Jest)
-exécution des tests statiques (avec Flow)
-génération d'un package (npm pack)

Nous n'avons pas eu de problèmes particuliers pour réaliser ces parties du TP.

La publication du package sur Nexus ne fonctionnait pas. Nous avons essayé de le publier en utilisant la commande suivante :
"bat "curl -v -u $USERNAME:$PASSWORD -F "gilded-rose-kata-1.0.0.tgz" --upload-file ./${ARTIFACT_NAME} ${NEXUS_REPO}/${ARTIFACT_NAME}".
Bien que cela ne causait pas d'erreur sur Jenkins, cela ne publiait pas notre package sur Nexus.
Nous nous sommes rendus compte que nous avions sauté certaines étapes, telles que :
-l'oubli de télécharger le plugin Nexus
-la création de credentials
Mais la même erreur persistait.
Donc, sur vos conseils, nous avons essayé de publier notre package en utilisant npm publish.
Nous avons donc créé un fichier .npmrc et mis le projet en public (dans le package.json).
Mais cela ne fonctionnais toujours pas.

Nous avons constaté qu'il existe beaucoup de ressources sur la publication de projets Maven, mais beaucoup moins sur npm. Nous avons donc cherché une solution. Il s'est avéré que nous avions manqué un point de paramétrage au niveau de Nexus, "Realms". Il fallait activer "npm Bearer Token Realm". Finalement, nous avons réussi à publier notre package sur Nexus, mais nous avons perdu énormément de temps. Cela ne nous a pas permis de brancher un serveur SonarQube à notre projet.


Nous voulions faire ces parties, mais après une discussion avec vous, vous nous avez expliqué qu'au vu de notre projet, cela ne serait pas utile :
-le packaging sous Docker
-la publication d'une image dans un repo Cloud (AWS ECR, par exemple)
-le déploiement de votre release (AWS ECS, dépôt du JAR sur un serveur, ...)

TP réalisé par Alexandre FAVRE et Edgar VERMECH.