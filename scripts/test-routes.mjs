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
  'http://localhost:3000/solutions/smart-pos',
  'http://localhost:3000/solutions/smart-finance',
  'http://localhost:3000/solutions/smart-healthcare',
  'http://localhost:3000/solutions/smart-inspection',
  'http://localhost:3000/solutions/smart-dashboard',
  // Backward compatibility alias routes
  'http://localhost:3000/solutions/pos',
  'http://localhost:3000/solutions/finance',
  'http://localhost:3000/solutions/healthcare',
  'http://localhost:3000/solutions/inspection',
  'http://localhost:3000/solutions/dashboard',
  // SEO & indexing routes
  'http://localhost:3000/robots.txt',
  'http://localhost:3000/sitemap.xml',
];

async function check() {
  console.log('Testing all TOMVIS routes:');
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

  // Also verify that a non-existent route returns 404
  try {
    const res404 = await fetch('http://localhost:3000/non-existent-solution-path');
    console.log(`[${res404.status}] http://localhost:3000/non-existent-solution-path (Expected 404)`);
    if (res404.status !== 404) {
      console.warn(`[WARN] Expected 404 but got ${res404.status}`);
    }
  } catch (err) {
    console.error('[FAIL] 404 test:', err.message);
  }

  if (allPass) {
    console.log('\n>>> ALL TOMVIS STANDARD & ALIAS ROUTES RETURNED 200 OK! <<<');
  } else {
    process.exit(1);
  }
}

check();
