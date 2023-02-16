Pour réaliser le TP d'intégration continue, nous avons utilisé un projet d'un autre module (Architecture applicative) en TypeScript.
Ce projet modélise une boutique d'un jeu vidéo, le but est de communiquer avec le script via la console pour exécuter des actions (acheter des objets, ventes aux enchères, ...).

Ce qui marche dans le TP :
-build du code
-exécution des tests unitaires (avec Jest)
-exécution des tests statiques (avec Flow)
-génération d'un package (npm pack)
Nous n'avons pas eu de problèmes particuliers pour réaliser ces parties du TP.

La publication du package sur Nexus ne fonctionnais pas, nous avons essayé de le publier grâce à la commande suivante :
bat "curl -v -u $USERNAME:$PASSWORD -F "gilded-rose-kata-1.0.0.tgz" --upload-file ./${ARTIFACT_NAME} ${NEXUS_REPO}/${ARTIFACT_NAME}"
Ce qui ne causait pas d'erreur sur Jenkins, mais qui ne publiait pas notre package sur Nexus.
Nous nous sommes rendu compte que nous avions sauté certaines étapes, comme :
-l'oubli de télécharger le plugin Nexus
-la création de credentials
Mais la même erreur persistait.
Donc, sur vos conseils, nous avons essayé de publier notre package en utilisant npm publish.
Nous avons donc créé un fichier .npmrc et mis le projet en public (dans le package.json).
Mais cela ne fonctionnais toujours pas.
On trouve beaucoup de pbulication sur comment publier un projet maeven mais beaucoup moins pour npm.
Finalement ils nous manquaient dans nexus un point de paramétrage niveau "Realms", il fallait activer "npm Bearer Token Realm"

Nous voulions faire ces parties, mais après une discussion avec vous, vous nous avez expliqué qu'au vu de notre projet, cela ne serait pas utile :
-le packaging sous Docker
-la publication d'une image dans un repo Cloud (AWS ECR, par exemple)
-le déploiement de votre release (AWS ECS, dépôt du JAR sur un serveur, ...)

Et finalement, nous aurions aimé brancher un serveur SonarQube à notre projet, mais la perte de temps que nous avons eue avec la publication du package sur Nexus ne nous a pas permis de le faire.
TP réalisé par Alexandre FAVRE et Edgar VERMECH.