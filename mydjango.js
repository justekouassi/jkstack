#!/usr/bin/env node

import { execSync } from "child_process"
import { join } from "path"
import { createStructure, deleteStructure } from "./helper.js"
import { requirementsTxt } from "./files/django/requirements.txt.js"
import { gitignore } from "./files/django/gitignore.js"
import { getAsgiPy } from "./files/django/asgi.py.js"
import { consumersPy } from "./files/django/consumers.py.js"
import { getRoutingPy } from "./files/django/routing.py.js"
import { getUrlsPy } from "./files/django/project.urls.py.js"
import { getWsgiPy } from "./files/django/wsgi.py.js"
import { getSettingsPy } from "./files/django/settings.py.js"
import { getAppUrlsPy } from "./files/django/app.urls.py.js"

// Nom du projet et de l'app principales en arguments
const projectName = process.argv[2]
const appName = process.argv[3]
if (!projectName) {
	console.error("Vous devez spécifier un nom de projet.")
	process.exit(1)
}
if (!appName) {
	console.error("Vous devez spécifier un nom d'application.")
	process.exit(1)
}

// crée le projet avec des options préconfigurées
const projectInitializationScript = `django-admin startproject ${projectName}`
const startFirstAppScript = `python manage.py startapp ${appName}`
execSync(
	`${projectInitializationScript} && cd ${projectName} && ${startFirstAppScript}`,
	{ stdio: "inherit" }
)

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
	[projectName]: {
		files: {
			"asgi.py": `${getAsgiPy(projectName)}`,
			"consumers.py": `${consumersPy}`,
			"routing.py": `${getRoutingPy(projectName)}`,
			"settings.py": `${getSettingsPy(projectName, appName)}`,
			"urls.py": `${getUrlsPy(projectName, appName)}`,
			"wsgi.py": `${getWsgiPy(projectName)}`,
		},
	},
	[appName]: {
		files: {
			"cron.py": "",
			"urls.py": `${getAppUrlsPy(appName)}`,
		},
		directories: [
			"modelAdmins",
			"models",
			"serializers",
			"services",
			"templates",
			"templatetags",
			"tests",
			"views",
		],
	},
}

/** Liste des fichiers à supprimer */
const filesToDelete = {
	[appName]: {
		files: {
			"models.py": null,
			"tests.py": null,
			"views.py": null,
		},
	},
}

// Crée la structure personnalisée
const projectPath = join(process.cwd(), projectName)
createStructure(projectPath, customStructure)

// supprimer les fichiers inutiles
deleteStructure(projectPath, filesToDelete)

// installation de bibliothèques
execSync(`pip install -r ${projectName}/requirements.txt`, { stdio: "inherit" })

console.log("Projet créé avec succès.")
