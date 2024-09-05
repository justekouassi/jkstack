# My Boilerplate

jfuv

## Sommaire

- [My Boilerplate](#my-boilerplate)
	- [Sommaire](#sommaire)
	- [NextJS](#nextjs)
		- [Installation](#installation)
		- [Structure du projet](#structure-du-projet)

## NextJS

### Installation

Suivez les étapes ci-dessous pour installer et configurer le projet sur votre machine locale.

1. Clonez le dépôt :

```sh
git clone https://github.com/justekouassi/my_boilerplate.git
```

2. Accédez au dossier du projet :

```sh
cd my_boilerplate
```

3. Installez les dépendances :

```sh
pnpm install
```

4. Configurez la base de données avec Prisma :

- Créez un fichier .env à la racine du projet et configurez votre base de données (exemple avec PostgreSQL) :
```conf
DATABASE_URL="postgresql://user:password@localhost:5432/monprojet"
```

- Exécutez les migrations pour synchroniser la base de données :
```sh
pnpx prisma migrate dev
```

5. Démarrez le serveur de développement :

```sh
pnpm run dev
```

### Structure du projet

```txt
MonProjet/
├── prisma/
│   ├── schema.prisma        # Schéma Prisma de la base de données
│   ├── migrations/          # Dossier des migrations Prisma
│   └── seed.ts              # Script de seed pour peupler la base de données
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Layout principal de l'application
│   │   └── page.tsx         # Page d'accueil
│   ├── app/api/
│   │   └── users/
│   │       └── route.ts     # API pour la gestion des utilisateurs
│   ├── components/          # Composants réutilisables de l'application
│   ├── hooks/               # Hooks personnalisés
│   ├── lib/
│   │   └── prisma.ts        # Configuration Prisma
│   ├── services/            # Services pour la logique métier
│   ├── styles/
│   │   └── globals.css      # Styles globaux avec Tailwind CSS
│   └── utils/
│       └── helpers.ts       # Fonctions utilitaires
├── .env                     # Fichier d'environnement (à créer)
├── next.config.js           # Configuration Next.js
├── package.json             # Dépendances du projet
└── tsconfig.json            # Configuration TypeScript
```

