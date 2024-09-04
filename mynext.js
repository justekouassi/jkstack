#!/usr/bin/env node

import { execSync } from 'child_process';
import { existsSync, mkdirSync, writeFileSync } from 'fs';
import { join } from 'path';
import { prismaTs, schemaPrisma } from './constants.js';

// Nom du projet en argument
const projectName = process.argv[2];
if (!projectName) {
	console.error('Vous devez spécifier un nom de projet.');
	process.exit(1);
}

const projectPath = join(process.cwd(), projectName);

// Crée le projet avec create-next-app et les options configurées
// execSync(`pnpx create-next-app@latest ${projectName} --ts --tailwind --src-dir --app`, { stdio: 'inherit' });

/** Liste des dossiers et fichiers à créer avec leur contenu */
const customStructure = {
	'prisma': {
		'files': {
			'schema.prisma': `${schemaPrisma}`,
			'seed.ts': '',
		},
		'directories': ['migrations']
	},
	'src/app/api': {
		'files': {
			'route.ts': '// route.ts'
		}
	},
	'src/lib': {
		'files': {
			'prisma.ts': `${prismaTs}`
		}
	},
	'src/services': { 'files': {} },
	'src/components': { 'files': {} },
	'src/hooks': { 'files': {} },
	'src/styles': {
		'files': {
			'globals.css': ''
		}
	},
	'src/utils': {
		'files': {
			'helpers.ts': ''
		}
	}
};

// Fonction pour créer les dossiers et fichiers
function createStructure(basePath, structure) {
	Object.entries(structure).forEach(([dir, { files, directories = [] }]) => {
		const fullPath = join(basePath, dir);
		if (!existsSync(fullPath)) {
			mkdirSync(fullPath, { recursive: true });
		}

		// Crée les fichiers avec leur contenu
		Object.entries(files).forEach(([file, content]) => {
			const filePath = join(fullPath, file);
			if (!existsSync(filePath)) {
				writeFileSync(filePath, content, 'utf8');
			}
		});

		// Crée les sous-dossiers
		directories.forEach(subDir => {
			const subDirPath = join(fullPath, subDir);
			if (!existsSync(subDirPath)) {
				mkdirSync(subDirPath, { recursive: true });
			}
		});
	});
}

// Crée la structure personnalisée
createStructure(projectPath, customStructure);

console.log('Structure personnalisée créée avec succès.');
