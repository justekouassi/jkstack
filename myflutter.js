#!/usr/bin/env node

import { execSync } from "child_process"
import { join } from "path"
import { createStructure, deleteStructure } from "./helper.js"
import { requirementsTxt } from "./files/django/requirements.txt.js"
import { gitignore } from "./files/flutter/gitignore.js"
import { getAsgiPy } from "./files/django/asgi.py.js"
import { consumersPy } from "./files/django/consumers.py.js"
import { getRoutingPy } from "./files/django/routing.py.js"
import { getUrlsPy } from "./files/django/project.urls.py.js"
import { getWsgiPy } from "./files/django/wsgi.py.js"
import { getSettingsPy } from "./files/django/settings.py.js"
import { getAppUrlsPy } from "./files/django/app.urls.py.js"
import { analysisOptionsYaml } from "./files/flutter/analysis_options.yaml.js"
import { makeRequestDart } from "./files/flutter/make_request.dart.js"
import { appPropertiesDart } from "./files/flutter/app_properties.dart.js"
import { configDart } from "./files/flutter/config.dart.js"
import { constantsDart } from "./files/flutter/constants.dart.js"

// Nom du projet et de l'app principales en arguments
const projectName = process.argv[2]
const appName = process.argv[3]
if (!projectName) {
	console.error("Vous devez spécifier un nom de projet.")
	process.exit(1)
}

// Crée le projet avec des options préconfigurées
execSync(`flutter create ${projectName}`, { stdio: "inherit" })

/** Liste des dossiers et fichiers à créer avec leur contenu */
const customStructure = {
	"/": {
		files: {
			".gitignore": `${gitignore}`,
			"analysis_options.yaml": `${analysisOptionsYaml}`,
			"devtools_options.yaml": "",
			"README.md": `# ${projectName}`,
		},
		directories: ["assets", "fonts"],
	},
	assets: {
		directories: ["icons", "images", "logos", "svg"],
	},
	lib: {
		files: {
			"routes.dart": `${gitignore}`,
			"theme.dart": `# ${projectName}`,
		},
		directories: [
			"api",
			"config",
			"data",
			"l10n",
			"screens",
			"services",
			"widgets",
		],
	},
	"lib/api": {
		files: {
			"make_request.dart": `${makeRequestDart}`,
		},
		directories: ["model"],
	},
	"lib/api/model": {
		files: {
			"model_api.dart": `${makeRequestDart}`,
		},
	},
	"lib/api": {
		files: {
			"make_request.dart": `${makeRequestDart}`,
		},
		directories: ["model"],
	},
	"lib/config": {
		files: {
			"app_properties.dart": `${appPropertiesDart}`,
			"config.dart": `${configDart}`,
			"config.dart.template": `${configDart}`,
			"constants.dart": `${constantsDart}`,
		},
		directories: ["model"],
	},
}

/** Liste des fichiers à supprimer */
const filesToDelete = {}

// Crée la structure personnalisée
const projectPath = join(process.cwd(), projectName)
createStructure(projectPath, customStructure)

// supprimer les fichiers inutiles
deleteStructure(projectPath, filesToDelete)

// installation de bibliothèques
execSync(`pip install -r ${projectName}/requirements.txt`, { stdio: "inherit" })

console.log("Projet créé avec succès.")
