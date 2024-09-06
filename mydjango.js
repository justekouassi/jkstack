#!/usr/bin/env node

import { execSync } from "child_process"
import { join } from "path"
import { createStructure } from "./helper.js"
import { requirementsTxt } from "./files/django/requirements.txt.js"
import { gitignore } from "./files/django/gitignore.js"

// Nom du projet en argument
const projectName = process.argv[2]
if (!projectName) {
	console.error("Vous devez spécifier un nom de projet.")
	process.exit(1)
}

// Crée le projet avec des options préconfigurées
execSync(`django-admin startproject ${projectName}`, { stdio: "inherit" })

/** Liste des dossiers et fichiers à créer avec leur contenu */
const customStructure = {
	"/": {
		files: {
			".gitignore": `${gitignore}`,
			"README.md": `# ${projectName}`,
			"requirements.txt": `${requirementsTxt}`,
		},
	},
	static: {
		directories: ["css", "js", "docs", "media"],
	},
	"static/css": {
		files: {
			"custom_admin.css": "",
			"dashboard.css": "",
		},
	},
	"static/js": {
		files: {
			"custom_admin.js": "",
			"dashboard.js": "",
		},
	},
}

// Crée la structure personnalisée
const projectPath = join(process.cwd(), projectName)
createStructure(projectPath, customStructure)

// installation de bibliothèques
execSync(`pip install -r requirements.txt`, { stdio: "inherit" })

console.log("Projet créé avec succès.")
