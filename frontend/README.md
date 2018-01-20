# Vuejs
Partie frontend. 
Utilise la librairie Bootstrap.
Utilise la bibliothèque axios pour les requêtes HTTP.

## Lancement
``` 
$ npm run dev
```

## Composants

#### detailsTodo 
Contient une TODO et ses informations.
#### formTodo 
Contient un formulaire pour l'ajout d'une TODO ou la modification.
#### home 
Première page contient le composant myContent.
#### myContent 
Contient les composants myRightContent et todoList.
#### myHeader 
Contient le header de l'application (le même pour toute les routes).
#### myRightContent 
Contient le bouton "Créer une tâche".
#### todo 
Contient une TODO avec ses liens (modification, suppression, details).
#### todoList
Contient le composant todo.

## Routes

#### home
Cette route est le point d’entrée des autres actions. Elle contient la TODO-list avec les liens de modification, suppression, details et le bouton pour ajouter une nouvelle TODO.
#### ajouter
Il s'agit de la route pour ajouter une nouvelle TODO.
#### modifier
Route pour modifier une todo dont l'identifiant est passé en paramètre dans l'URL.
#### details
La route qui affiche plus en détail une TODO, son identifiant est passé en paramètre dans l'URL.

## Fonctionnalités faîtes

#### Récupération de la TODO-list
#### Modification d'une TODO
#### Suppression d'une TODO
#### Récupération d'une TODO


