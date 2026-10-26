# Korok Swap

Une web app communautaire pour les joueurs de *The Legend of Zelda : Breath of the Wild* (BOTW) et *Tears of the Kingdom* (TOTK). Parcourez tous les items des deux jeux avec recherche et filtres, et partagez vos créations TOTK grâce à leurs QR codes Zelda Notes.

> Korok Swap est un projet de fans. Il n'est ni affilié à Nintendo, ni approuvé, ni sponsorisé par Nintendo. The Legend of Zelda et tous les noms associés sont des marques de Nintendo.

## Statut

**V1, en cours : front seul.** Il n'y a pas encore de backend. Les données des items sont stockées dans des fichiers JSON côté front.

## Stack technique

- [React](https://react.dev) 19 avec TypeScript
- [Vite](https://vite.dev) pour le serveur de développement et le build
- ESLint et Prettier pour la qualité et le formatage du code

## Lancer le projet

Le front se trouve dans `front/`.

```bash
cd front
npm install
npm run dev
```

Ouvrez ensuite http://localhost:5173.

## Scripts

À lancer depuis le dossier `front/`.

| Commande | Description |
| --- | --- |
| `npm run dev` | Lance le serveur de développement |
| `npm run build` | Vérifie les types et construit pour la production |
| `npm run lint` | Analyse le code avec ESLint |
| `npm run format` | Formate `src/` avec Prettier |
| `npm run preview` | Prévisualise le build de production en local |

## Données des items

Le catalogue d'items vient de la [Hyrule Compendium API](https://gadhagod.github.io/Hyrule-Compendium-API/) de gadhagod. Merci à son auteur.

Les données sont stockées dans `front/src/data/botw.json` et `front/src/data/totk.json`. Pour les régénérer, lancez la commande suivante depuis la racine du dépôt (elle écrase les deux fichiers) :

```bash
npx tsx scripts/fetch-items.mts
```

Les images des items sont servies par l'API, et sa licence est à vérifier avant toute mise en ligne publique.
