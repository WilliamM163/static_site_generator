/**
 * Adds html5 template and styling to elements
 * @param {string} input 
 * @returns 
 */
function template(input) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>William's Blog</title>
    <link rel="stylesheet" href="index.css">
</head>
<body>
${input}
</body>
</html>
    `
}

module.exports = template