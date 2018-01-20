# Nodejs
Partie backend.

## Lancement du serveur
```
$ node index.js
```

## Fonctionnalités
Chaque fonctionnalié est mise dans un module.

1. Gestion de l’initialisation de la TODO-list
Pour la gestion de l'initialisation de la TODO-list il est utilisé le middleware d’express.
La TODO-list s'initialise à la création de la session et est détruite à la desctruction de la session.
