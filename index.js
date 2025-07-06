const fs = require('node:fs')
const markdownit = require('markdown-it')
const template = require('./template/template')

function main() {
    /*
        GETTING FILE NAME USING COMMAND LINE ARGUMENTS
        node index.js README.md
    */
    const commandLineArguments = process.argv
    if (commandLineArguments.length != 3) {
        console.error('Error invalid arguements, correct usage:')
        console.error('node index.js input_file')
        return
    }
    let input_file = './drop_box/' + commandLineArguments[2]
    let output_file = './drop_box/' + commandLineArguments[2].split('.')[0] + '.html'

    /*
        Putting file contents into memory
    */
    let data
    try {
        data = fs.readFileSync(input_file, { encoding: 'utf8', flag: 'r' })
    } catch (e) {
        console.error(`${input_file} doesn't exist`)
        return
    }

    /*
        Converting markdown to html
    */
    const md = markdownit({
        html: true,
        linkify: true
    })
    let content = md.render(data)
    content = template(content)

    /*
        Outputting html to file
    */
    try {
        fs.writeFileSync(output_file, content)
        console.log('File written successfully!')
    } catch (err) {
        console.error('Error writing file:', err)
        return
    }

    /*
        Copying styling into drop_box
    */
    let source = './template/index.css'
    let destination = './drop_box/index.css'
    try {
        fs.copyFileSync(source, destination);
        console.log('Styling Copied Successfully!')
    } catch (err) {
        console.error('Error copying styling:', err)
    }
}

main()