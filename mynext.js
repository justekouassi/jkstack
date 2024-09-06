#!/usr/bin/env node

import { execSync } from "child_process"
import { join } from "path"
import { prismaTs } from "./files/nextjs/prisma.ts.js"
import { schemaPrisma } from "./files/nextjs/schema.prisma.js"
import { createStructure } from "./helper.js"

// Nom du projet en argument
const projectName = process.argv[2]
if (!projectName) {
	console.error("Vous devez spécifier un nom de projet.")
	process.exit(1)
}

// Crée le projet avec create-next-app et les options configurées
execSync(
	`pnpx create-next-app@latest ${projectName} --ts --tailwind --src-dir --app`,
	{ stdio: "inherit" }
)

// installation de bibliothèques
execSync(
	`pnpm install prisma @prisma/client @vercel/analytics @vercel/speed-insights`,
	{ stdio: "inherit" }
)

/** Liste des dossiers et fichiers à créer avec leur contenu */
const customStructure = {
	"/": {
		files: {
			".env": `DATABASE_URL=mysql://root@localhost:3306/${projectName}`,
		},
	},
	prisma: {
		files: {
			"schema.prisma": `${schemaPrisma}`,
			"seed.ts": "",
			".gitignore": "migrations/",
		},
		directories: ["migrations"],
	},
	"public/docs": { files: {} },
	"public/img": { files: {} },
	"src/app": {
		files: {
			"sitemap.xml": "",
		},
	},
	"src/app/api": { files: {} },
	"src/components": {
		files: {},
		directories: ["buttons", "forms", "switch", "carousels"],
	},
	"src/constants": { files: {} },
	"src/hooks": { files: {} },
	"src/lib": {
		files: {
			"prisma.ts": `${prismaTs}`,
		},
	},
	"src/services": { files: {} },
	"src/styles": {
		files: {
			"globals.css": "",
		},
	},
	"src/utils": {
		files: {
			"formatting.ts": "",
		},
	},
}

// Crée la structure personnalisée
const projectPath = join(process.cwd(), projectName)
createStructure(projectPath, customStructure)

console.log("Projet créé avec succès.")
