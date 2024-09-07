import {
	existsSync,
	mkdirSync,
	writeFileSync,
	readdirSync,
	rmdirSync,
	unlinkSync
} from "fs"
import { join } from "path"

/** met la première lettre d'un mot en majuscule */
export function capitalizeFirstLetter(word) {
	return word.charAt(0).toUpperCase() + word.slice(1)
}

/** crée l'aborescence de dossiers et fichiers */
export function createStructure(basePath, structure) {
	Object.entries(structure).forEach(
		([dir, { files = {}, directories = [] }]) => {
			const fullPath = join(basePath, dir)
			if (!existsSync(fullPath)) {
				mkdirSync(fullPath, { recursive: true })
			}

			// crée les fichiers avec leur contenu
			if (files) {
				Object.entries(files).forEach(([file, content]) => {
					const filePath = join(fullPath, file)
					writeFileSync(filePath, content.trimStart(), "utf8")
				})
			}

			// crée les sous-dossiers
			directories.forEach((subDir) => {
				const subDirPath = join(fullPath, subDir)
				if (!existsSync(subDirPath)) {
					mkdirSync(subDirPath, { recursive: true })
				}
			})
		}
	)
}

/** supprime des fichiers et dossiers */
export function deleteStructure(basePath, structure) {
	Object.entries(structure).forEach(
		([dir, { files = {}, directories = [] }]) => {
			const fullPath = join(basePath, dir)

			// supprime les fichiers
			Object.entries(files).forEach(([file]) => {
				const filePath = join(fullPath, file)
				if (existsSync(filePath)) {
					unlinkSync(filePath)
				}
			})

			// supprime les sous-dossiers
			directories.forEach((subDir) => {
				const subDirPath = join(fullPath, subDir)
				if (existsSync(subDirPath)) {
					rmdirSync(subDirPath, { recursive: true })
				}
			})
		}
	)

	// Supprime le dossier principal après avoir vidé son contenu
	Object.keys(structure).forEach((dir) => {
		const fullPath = join(basePath, dir)
		if (existsSync(fullPath) && readdirSync(fullPath).length === 0) {
			rmdirSync(fullPath)
		}
	})
}
