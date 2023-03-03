# Public Proxy Scraper

This Node.js script scrapes public proxies from multiple sources and saves them to a file. The script uses the following sources:

- https://www.sslproxies.org
- https://free-proxy-list.net
- https://www.us-proxy.org
- https://www.proxy-list.download
- https://www.proxyserverlist24.top

To run the script, first make sure you have Node.js installed on your system. Then clone or download this repository, navigate to the project directory in your terminal, and run the following commands:

npm install

node index.js


The script will scrape the proxy sources and save the results to a file named `proxies.txt` in the project directory. The file will contain one proxy per line in the format `IP:port`.

Note that some public proxies may not be reliable or may be blocked by certain websites or services, so use them with caution. Also note that the script is limited by the number of sources and the rate at which it can scrape them, so you may need to add more sources or adjust the scraping rate to get more proxies.

If you have any questions or issues with the script, feel free to create an issue in this repository. Happy scraping!
