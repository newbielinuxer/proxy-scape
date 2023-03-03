const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');

const sources = [
  'https://www.sslproxies.org',
  'https://free-proxy-list.net',
  'https://www.us-proxy.org',
  'https://www.proxy-list.download',
  'https://www.proxyserverlist24.top'
];

const proxies = [];

function scrape(source) {
  console.log(`Scraping ${source}...`);
  request(source, function(error, response, html) {
    if (!error && response.statusCode == 200) {
      const $ = cheerio.load(html);
      $(`#${source.split('.')[1]} tbody tr`).each(function() {
        const ip = $(this).find('td:nth-child(1)').text();
        const port = $(this).find('td:nth-child(2)').text();
        const country = $(this).find('td:nth-child(3)').text();
        proxies.push({ ip, port, country });
      });
      console.log(`Found ${$(`#${source.split('.')[1]} tbody tr`).length} proxies.`);
      if (proxies.length >= sources.length * 50) {
        saveProxies();
      }
    } else {
      console.error(error);
    }
  });
}

function saveProxies() {
  console.log(`Saving ${proxies.length} proxies to file...`);
  const data = proxies.map(proxy => `${proxy.ip}:${proxy.port}`).join('\n');
  fs.writeFileSync('proxies.txt', data);
  console.log('Done!');
}

sources.forEach(scrape);
