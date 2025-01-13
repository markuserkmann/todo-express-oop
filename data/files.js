import fs from 'node:fs/promises'

class FileManager {
    
    async writeFile(filename, data) {
        try {
            data = JSON.stringify(data, null, 2)
            await fs.writeFile(filename, data) 
         } catch(error) {
            console.log('write error: ', error)
        }
    }
    async readFile(filename) {
        try {
            const Content = await fs.readFile(filename, 'utf8')

            const data = JSON.parse(Content)
            return data
        } catch(error) {
            console.log("Error read: ", error)
            return null
        }
    }
}

export const fileManager = new FileManager()