# lightweight-html-to-pdf-converter

A lightweight library for converting HTML to PDF using Puppeteer and Handlebars for dynamic content generation.

## Installation

You can install this library via npm:

```bash
npm install lightweight-html-to-pdf-converter
```

## Usage

```javascript
const { convertHtmlToPdf } = require('lightweight-html-to-pdf-converter');
const path = require('path');
const moment = require('moment');

// Define the path to the Handlebars template
const templatePath = path.join(__dirname, 'templates', 'exampleTemplate.hbs');

// Define the data to inject into the template
const data = { date: moment().format('YYYY-MM-DD'), title: 'Example PDF' };

// Define the output path for the generated PDF
const outputPath = path.join(__dirname, 'output', `Example-${moment().format('YYYYMMDDHHmmss')}.pdf`);

// Convert HTML to PDF
convertHtmlToPdf(templatePath, data, outputPath);
```

## API

### convertHtmlToPdf(templatePath, data, outputPath)

Converts HTML to PDF using Puppeteer and Handlebars for dynamic content.

- `templatePath`: Path to the Handlebars template file.
- `data`: Data object to inject into the template.
- `outputPath`: Path to output the generated PDF.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
