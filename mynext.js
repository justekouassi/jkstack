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

// création du projet avec des options préconfigurées et installation de bibliothèques
const projectInitializationScript = `pnpx create-next-app@latest ${projectName} -v --ts --tailwind --src-dir --app --no-eslint --import-alias "@/*"`
const librariesInstallationScript =
	"pnpm install prisma @prisma/client @vercel/analytics @vercel/speed-insights"
execSync(
	`${projectInitializationScript} && cd ${projectName} && ${librariesInstallationScript}`,
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
