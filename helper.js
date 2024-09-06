import { existsSync, mkdirSync, writeFileSync } from "fs"
import { join } from "path"

/** Fonction pour créer les dossiers et fichiers */
export function createStructure(basePath, structure) {
	Object.entries(structure).forEach(([dir, { files, directories = [] }]) => {
		const fullPath = join(basePath, dir)
		if (!existsSync(fullPath)) {
			mkdirSync(fullPath, { recursive: true })
		}

		// Crée les fichiers avec leur contenu
		Object.entries(files).forEach(([file, content]) => {
			const filePath = join(fullPath, file)
			if (!existsSync(filePath)) {
				writeFileSync(filePath, content, "utf8")
			}
		})

		// Crée les sous-dossiers
		directories.forEach((subDir) => {
			const subDirPath = join(fullPath, subDir)
			if (!existsSync(subDirPath)) {
				mkdirSync(subDirPath, { recursive: true })
			}
		})
	})
}