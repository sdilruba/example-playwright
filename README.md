# Playwright project

This is an example Playwright Project in JS

How to run?
npx playwright test shareNow.spec.js

How to debug?
npx playwright test shareNow.spec.js --debug

Timeout to debug easier:
await new Promise(r => setTimeout(r, 5000));

What to use instead of click() if it gives "element intercepts pointer events" error?
click({ force: true })
