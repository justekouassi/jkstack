#!/usr/bin/env node

import { program } from "commander"

// Configuration du programme principal
program
	.name("myboilerplate")
	.description("A boilerplate set for Django, Next.js, and Flutter projects")
	.version("0.1.0")

// Commande pour Next.js
program
	.command("mynext <projectName>")
	.description("Create a Next.js boilerplate")

// Commande pour Django
program
	.command("mydjango <projectName> <appName>")
	.description("Create a Django boilerplate")

// Commande pour Flutter
program
	.command("myflutter <projectName>")
	.description("Create a Flutter boilerplate")

// Parse les arguments et affiche l'aide si aucune commande n'est spécifiée
program.parse(process.argv)

if (!process.argv.slice(2).length) {
	program.outputHelp().addHelpText("uiyf_h ")
}