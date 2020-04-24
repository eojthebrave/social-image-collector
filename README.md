Utility for taking screenshots of a URL via Netlify lambda functions and puppeteer.

Based on https://bitsofco.de/how-to-use-puppeteer-in-a-netlify-aws-lambda-function/

## Usage

Example:

```
localhost:8888/.netlify/functions/take-screenshot?url=http://drupalize.me
```

Example for use with Hey Node social-media-card URL:

```
localhost:8888/.netlify/functions/take-screenshot?url=http%3A%2F%2Flocalhost%3A8000%2Fcard-image-generator%2F%3Ftitle%3Dtest%26path%3Dasdf%2Ftwo
```

URL of page that you could take a screenshot of on HeyNode.com

http://localhost:8000/aa98a68e311231faceb067cac565cb6a/card-image-generator/?title=test&path=asdf/two

## Development

It helps to have the netlify-cli tool installed. https://github.com/netlify/cli/blob/master/docs/netlify-dev.md

You can test the function by starting netlify-dev in one terminal, and then invoking the function from another.

```bash
cd social-image-collector;
netlify dev;
```

In another terminal

```bash
cd social-image-collector;
netlify functions:invoke --name take-screenshot --no-identity --querystring "url=https://google.com"
```
