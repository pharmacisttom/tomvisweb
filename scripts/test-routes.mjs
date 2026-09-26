const urls = [
  'http://localhost:3000/',
  'http://localhost:3000/demo',
  'http://localhost:3000/technology',
  'http://localhost:3000/security',
  'http://localhost:3000/contact',
  'http://localhost:3000/admin',
  'http://localhost:3000/solutions/smartop',
  'http://localhost:3000/solutions/smart-ems',
  'http://localhost:3000/solutions/cooperative',
  'http://localhost:3000/solutions/pos',
  'http://localhost:3000/solutions/finance',
  'http://localhost:3000/solutions/healthcare',
  'http://localhost:3000/solutions/inspection',
  'http://localhost:3000/solutions/dashboard',
  'http://localhost:3000/robots.txt',
  'http://localhost:3000/sitemap.xml',
];

async function check() {
  console.log('Testing all Tomvis routes:');
  let allPass = true;
  for (const url of urls) {
    try {
      const res = await fetch(url);
      const text = await res.text();
      console.log(`[${res.status}] ${url} (${text.length} bytes)`);
      if (res.status !== 200) allPass = false;
    } catch (err) {
      console.error(`[FAIL] ${url}:`, err.message);
      allPass = false;
    }
  }

  if (allPass) {
    console.log('\n>>> ALL 16 ROUTES RETURNED 200 OK! <<<');
  } else {
    process.exit(1);
  }
}

check();
