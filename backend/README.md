# Nodejs
Partie backend.

## Lancement du serveur
```
$ node index.js
```

## Fonctionnalités
Chaque fonctionnalié est mise dans un module.

#### Gestion de l’initialisation de la TODO-list
Pour la gestion de l'initialisation de la TODO-list il est utilisé le middleware d’express.
La TODO-list s'initialise à la création de la session et est détruite à la desctruction de la session.

#### Ajout d'une TODO
Une route POST est crée pour l'ajout d'une TODO dans la list. Elle gère l'envoie d'un formulaire avec le middleware body-parser.

#### Suppression d'une TODO
Une route DELETE est crée pour la suppression d'une TODO de la list. L'identifiant de la TODO est passé en paramètre dans l'URL.

#### Récupération de la TODO-list
Une route GET qui récupère toutes les TODOS.

#### Récupération de TODOS par pagination.
Une route GET qui récupère des TODOS selon la pagination. Le nombre de TODOS à afficher par page est passé en paramètre dans l'URL (offset, size).

#### Récupération d'une TODO
Une route GET pour récupérer une seule TODO. L'identifiant de la TODO demandée est passé en paramètre dans l'URL.

#### Modification d'une TODO
Une route POST pour modifier le nom ou le détail d'une TODO. L'identifiant de la TODO est passé en paramètre dans l'URL.
