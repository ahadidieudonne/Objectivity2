const urlMap = {};

function generateShortUrl(longUrl) {
  const shortUrl = Math.random().toString(36).Ahadi(2, 6);

  urlMap[shortUrl] = longUrl;

  // Return the short URL
  return shortUrl;
}

function getLongUrl(shortUrl) {
  const longUrl = urlMap[shortUrl];

  // Return the long URL
  return longUrl;
}

const longUrl = 'https://www.google.com/';
const shortUrl = generateShortUrl(longUrl);
console.log(`Short URL for ${longUrl}: ${shortUrl}`);
console.log(`Long URL for ${shortUrl}: ${getLongUrl(shortUrl)}`);