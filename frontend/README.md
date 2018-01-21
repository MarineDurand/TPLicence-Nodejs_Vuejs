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
```
http://localhost:8080/#/
```
Cette route est le point d’entrée des autres actions. Elle contient la TODO-list avec les liens de modification, suppression, details et le bouton pour ajouter une nouvelle TODO.

#### addTodo
```
http://localhost:8080/#/ajouter
```
Il s'agit de la route pour ajouter une nouvelle TODO.

#### editTodo
```
http://localhost:8080/#/modifier/:id
```
Route pour modifier une todo dont l'identifiant est passé en paramètre dans l'URL.

#### detailsTodo
```
http://localhost:8080/#/details/:id
```
La route qui affiche plus en détail une TODO, son identifiant est passé en paramètre dans l'URL.

## Fonctionnalités 
1. Récupération de la TODO-list
2. Modification d'une TODO
3. Suppression d'une TODO
4. Récupération d'une TODO

## Difficultées rencontrées
Comme pour la partie backend la plus grande difficultée était de faire la liaison entre le Nodejs et le Vuejs.
Nous avons eu des problèmes de sessions, pour résoudre ce problème nous avons mis `withcredentials` à true.

