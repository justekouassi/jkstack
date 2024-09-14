#!/usr/bin/env node

import { program } from "commander"

// Configuration de base des commandes
program
	.name("myboilerplate")
	.description("A boilerplate set for Django, Next.js, and Flutter projects")
	.version("0.1.0")

// Commande pour Next.js
program
	.command("next")
	.description("Create a Next.js boilerplate")
	.action(() => {
		console.log("Initializing Next.js boilerplate...")
	})

// Commande pour Django
program
	.command("django")
	.description("Create a Django boilerplate")
	.action(() => {
		console.log("Initializing Django boilerplate...")
	})

// Commande pour Flutter
program
	.command("flutter")
	.description("Create a Flutter boilerplate")
	.action(() => {
		console.log("Initializing Flutter boilerplate...")
	})

// Parse les arguments et affiche l'aide si aucune commande n'est spécifiée
program.parse(process.argv)

if (!process.argv.slice(2).length) {
	program.outputHelp()
}
