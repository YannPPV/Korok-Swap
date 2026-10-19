# Korok Swap

Web app communautaire pour les joueurs de **The Legend of Zelda : Breath of the Wild** (BOTW) et **Tears of the Kingdom** (TOTK). Elle permet de s'échanger des objets en partageant sa boîte d'objets grâce aux QR codes de l'app Nintendo Switch (Zelda Notes), et de partager ses créations TOTK.

> Projet d'école, avec l'idée de le lancer publiquement plus tard.

## Fonctionnalités

### V1 (en cours) : front seul

- **Catalogue d'items** : liste de tous les items de BOTW et TOTK, avec recherche et filtres. Un item présent dans les deux jeux apparaît une seule fois (pas de doublon).
- **Espace créations TOTK** : partage de ses créations et dépôt des QR codes. Au dépôt, le joueur sélectionne les items contenus dans une liste fournie.
- **Annonces d'échange** : un bouton dans l'annonce démarre un échange. L'échange et la discussion se font dans l'app Nintendo et sur Discord (le Discord du créateur de l'annonce est visible).
- **Retour d'échange** : deux boutons pour indiquer comment l'échange s'est passé (réussi ou mal passé).
- Interface en anglais, site responsive.

### Hors périmètre

- Pas d'application mobile : Korok Swap est uniquement un site web.
- Pas d'authentification pour le moment.
- Pas de récupération des infos joueurs depuis l'app Nintendo (aucune API publique Nintendo).

## Technologies

| Domaine | Choix |
| --- | --- |
| Front | React.js avec TypeScript (obligatoire) |
| Outil de build | Vite (template `react-ts`) |
| Qualité du code | ESLint et Prettier |
| Données (V1) | Fichiers JSON |

## Choix techniques

- **React + TypeScript** : TypeScript est une contrainte du projet. Le mode `strict` est activé dans `tsconfig.app.json`.
- **Vite** : démarrage rapide et configuration minimale.
- **ESLint + Prettier** : ESLint détecte les problèmes de code, Prettier gère le formatage. `eslint-config-prettier` évite les conflits entre les deux.
- **Données en JSON pour la V1** : on valide d'abord le front et le catalogue, sans back. Les items viennent d'une source externe, et ceux que l'API ne fournit pas sont laissés de côté.
- **Catalogue d'abord** : les items de BOTW et TOTK sont fusionnés en une seule entrée quand ils sont communs aux deux jeux.
- **Échange hors de l'app** : l'échange se déroule dans l'app Nintendo et sur Discord, Korok Swap ne gère pas l'échange lui-même.

## Sécurité et confiance

Scanner un QR code Zelda Notes donne accès à la boîte d'objets Nintendo de son propriétaire, jusqu'à ce qu'il révoque l'accès. Les retraits sont irréversibles, et il n'existe qu'une seule boîte par joueur. Les risques identifiés sont les faux QR codes et les fausses plaintes. Un avertissement clair devra être affiché dans l'app.

## Roadmap

- **V1** : front seul, données en JSON.
- **V2** : ajout du back-end, données en base de données.
- **V3** : authentification et statistiques sur les profils.

## Installation

```bash
git clone <url-du-depot>
cd korok-swap
npm install
npm run dev
```

## Scripts

| Commande | Description |
| --- | --- |
| `npm run dev` | Lance le serveur de développement |
| `npm run build` | Vérifie les types et construit le projet |
| `npm run lint` | Analyse le code avec ESLint |
| `npm run preview` | Prévisualise le build |
