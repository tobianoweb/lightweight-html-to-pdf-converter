const puppeteer = require('puppeteer');
const handlebars = require('handlebars');
const fs = require('fs');
const path = require('path');
const moment = require('moment');

/**
 * Convert HTML to PDF using Puppeteer and Handlebars for dynamic content.
 * @param {string} templatePath Path to the Handlebars template.
 * @param {Object} data Data to inject into the template.
 * @param {string} outputPath Path to output the generated PDF.
 */
const convertHtmlToPdf = async (templatePath, data, outputPath) => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const templateContent = fs.readFileSync(templatePath, 'utf8');
    const template = handlebars.compile(templateContent);
    const html = template(data);
    await page.setContent(html);
    await page.pdf({path: outputPath, format: 'A4'});
    await browser.close();
    console.log(`PDF generated: ${outputPath}`);
  } catch (error) {
    console.error('Error generating PDF:', error);
  }
};

/**
 * Example usage:
 * convertHtmlToPdf(
 *   path.join(__dirname, 'templates', 'exampleTemplate.hbs'),
 *   { date: moment().format('YYYY-MM-DD'), title: 'Example PDF' },
 *   path.join(__dirname, 'output', `Example-${moment().format('YYYYMMDDHHmmss')}.pdf`)
 * );
 */

module.exports = {
  handlebars,
  convertHtmlToPdf
};
