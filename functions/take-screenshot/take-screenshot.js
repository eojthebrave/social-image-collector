const chromium = require("chrome-aws-lambda");

exports.handler = async (event, context) => {
  const qs = new URLSearchParams(event.queryStringParameters);
  const pageToScreenshot = qs.get('url');

  if (!pageToScreenshot)
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Page URL not defined" }),
    };

  const browser = await chromium.puppeteer.launch({
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath,
    headless: chromium.headless,
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 630 });
  await page.goto(pageToScreenshot, { waitUntil: "networkidle2" });
  const buffer = await page.screenshot({ type: 'png' });
  await browser.close();

  return {
    statusCode: 200,
    isBase64Encoded: true,
    headers: {
      "Content-Type": "image/png",
      "Content-Length": `${buffer.length}`
    },
    body: buffer.toString('base64'),
  };
};
