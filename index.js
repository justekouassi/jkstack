#!/usr/bin/env node

import { program } from "commander"

// Configuration du programme principal
program
	.name("myboilerplate")
	.description("A boilerplate set for Django, Next.js, and Flutter projects")
	.version("0.1.0")

// Ajout d'une commande pour exécuter des scripts basés sur les options
program
	.option("-D, --django <projectName>", "Create a Django project and app")
	.option("-F, --flutter <projectName>", "Create a Flutter project")
	.option("-N, --next <projectName>", "Create a Next.js project")

// Commande pour Django
program
	.command("mydjango <projectName> <appName>")
	.description("Create a Django boilerplate")

// Commande pour Flutter
program
	.command("myflutter <projectName>")
	.description("Create a Flutter boilerplate")

// Commande pour Next.js
program
	.command("mynext <projectName>")
	.description("Create a Next.js boilerplate")

// Parse les arguments et affiche l'aide si aucune commande n'est spécifiée
program.parse(process.argv)

if (!process.argv.slice(2).length) {
	program.outputHelp()
}
