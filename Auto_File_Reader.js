//automating stuff
const readline = require('readline')
const fs = require('fs')

/*
	give the file as an argument when calling
	this file, i.e.:
	`node Auto_File_Reader.js <filePath> <searchTerm>`
	
*/
const filePath = process.argv[2] 

const readInterface = readline.createInterface({
	input: fs.createReadStream(filePath),
	console: false
})

const searchTerm = process.argv[3] 

readInterface.on('line', (line) => {
	if (line.includes(searchTerm)){
		console.log("Search term found: ");
		console.log(line)
	} else {
		console.log("Search term not found")
	}
})