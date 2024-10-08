# JK Stack

**JK Stack** est un outil conçu pour automatiser la création d'architectures de projets dans différents frameworks, notamment [NextJS](https://nextjs.org), [Django](https://www.djangoproject.com), et [Flutter](https://flutter.dev). Il permet de configurer rapidement un projet avec la structure de dossiers, fichiers et configurations initiales spécifiques à vos besoins de développement.

## Sommaire

- [JK Stack](#jk-stack)
	- [Sommaire](#sommaire)
	- [Contexte](#contexte)
	- [Fonctionnalités](#fonctionnalités)
	- [Prérequis](#prérequis)
	- [Utilisation](#utilisation)
	- [Structures des projets](#structures-des-projets)
		- [Django](#django)
		- [NextJS](#nextjs)
		- [Flutter](#flutter)

## Contexte

En tant que développeur, j'ai souvent dû recréer les mêmes structures de projets à chaque nouveau démarrage, que ce soit pour mes backends avec Django, mes apps web en NextJS, ou mes apps mobiles avec Flutter. Après avoir répété ce processus plusieurs fois, je me suis dit : "Il doit bien y avoir une façon de tout automatiser, non ?". Et voilà comment MyBoilerplate est né. Ces commandes personnalisées me permettent de lancer mes projets en quelques secondes, avec une architecture prête à l'emploi, configurée exactement comme je le veux.

> **Disclaimer** : La structure proposée reflète mes préférences personnelles. Vous êtes libre de l'utiliser, l'adapter ou l'améliorer pour mieux correspondre à votre propre stack de développement.

## Fonctionnalités

- **Boilerplate NextJS** : Fournit un projet NextJS version 14 avec l'App Router, TypeScript, Prisma, Tailwind CSS, quelques composants, quelques dépendances et des dossiers supplémentaires pour vous offrir une architecture optimisée dès le départ.
- **Boilerplate Django** : Fournit un projet Django avec une première application et des configurations de base tels que Django Rest Framework, la gestion des web sockets, une base de données MySQL, etc.
- **Boilerplate Flutter** : Configurez rapidement des projets Flutter avec une architecture modulaire pour les applications mobiles.

## Prérequis

Assurez-vous d'avoir installé les éléments suivants sur votre machine :

- [Node.js](https://nodejs.org) et [pnpm](https://pnpm.io) pour NextJS
- [Python](https://www.python.org) et [pip](https://pip.pypa.io/en/stable) pour Django
- [Flutter SDK](https://flutter.dev/docs/get-started/install) pour Flutter

## Utilisation

1. Cloner le dépôt :

```sh
git clone https://github.com/justekouassi/jkstack.git
```

2. Accéder au dossier du projet :

```sh
cd jkstack
```

3. Installer les scripts globalement
```sh
npm i -g .
```

4. Pour créer un nouveau projet, exécuter l'une des commandes suivantes selon votre besoin :
```sh
mynext monprojet_web # boilerplate NextJS
mydjango monprojet app # boilerplate Django
myflutter monprojet_mobile # boilerplate Flutter
```

## Structures des projets

### Django

```txt
MonProjet/
│
├── MonProjet/                     # Répertoire de configuration globale
│   ├── __init__.py
│   ├── asgi.py                    # ASGI pour WebSockets ou async
│   ├── consumers.py               # 
│   ├── routing.py                 # 
│   ├── settings.py                # 
│   ├── urls.py                    # Configuration des routes principales
│   └── wsgi.py                    # WSGI pour la production
│
├── MonApp/                        # Répertoire pour la première application
│   ├── __init__.py
│   ├── admin.py                   # Configuration de l'admin pour l'app
│   ├── apps.py                    # 
│   ├── cron.py                    # 
│   ├── urls.py                    # 
│   ├── migrations/                # Fichiers de migration pour la BDD
│   ├── modelAdmins/               # Formulaires liés aux modèles ou personnalisés
│   ├── models/                    # Modèles de données
│   ├── serializers/               # 
│   ├── services/                  # 
│   ├── templates/                 # Routes spécifiques à l'app Templates spécifiques à l'app
│   ├── templatetags/              # 
│   ├── views/                     # Logiques de vues
│   └── tests/                     # Tests unitaires pour l'app
│
├── static/                        # Fichiers statiques globaux (ex. Bootstrap, JS)
│   ├── css/                       # Fichiers CSS
│   ├── docs/                      # Fichiers documentation
│   ├── js/                        # Fichiers JavaScript
│   └── media/                     # Fichiers media
│
├── requirements.txt               # Liste des dépendances pour l'environnement virtuel
├── manage.py                      # Script de gestion Django
└── .env                           # Variables d'environnement (ne jamais inclure dans Git)
```

### NextJS

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

### Flutter

```txt

```