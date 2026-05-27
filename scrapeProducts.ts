import fs from 'fs';

const categoriesMap = {
  'large-kiddie': 'aea',
  'small-kiddie': 'aebal',
  'screen-kiddie': 'au',
  'trains': 'an',
  'carousel': 'ap',
  'themed-rides': 'ai',
  'animals-bumpers': 'aoat',
  'prize-machines': 'ac',
  'parent-child': 'ab',
  'air-hockey': 'ay',
  'music': 'aaa',
  'claw-machines': 'ar',
  'sports': 'as',
  'interactive': 'aab',
  'racing': 'aac',
  'shooting': 'aad',
  'tokens': 'am',
  'used': 'sp'
};

async function scrape() {
  const result = {};

  for (const [id, path] of Object.entries(categoriesMap)) {
    try {
      console.log(`Fetching ${path}...`);
      const res = await fetch(`https://www.auto-land.com.tw/${path}`);
      const text = await res.text();
      
      const products = [];
      const matches = Array.from(text.matchAll(/<img[^>]+src="([^"]+)"[^>]+alt="([^"]+)"/g));
      
      for (const m of matches) {
        let src = m[1];
        let alt = m[2];
        
        // Exclude UI images
        if (alt === '奧特龍' || alt === 'Facebook' || alt === 'lineat' || alt === '線條' || src.includes('.webp') || alt.includes('image') || alt.match(/\.(jpg|png|webp)$/i)) {
          continue;
        }

        // Clean alt
        alt = alt.replace(/&amp;/g, '&').replace(/&#39;/g, "'");
        
        if (alt && alt.trim() !== '') {
          let finalUrl = src;
          // wix URLs can be extracted clean like: https://static.wixstatic.com/media/8bf147_c15746a068bf4e9fa36a70ce4e647cec~mv2.jpg
          const mediaMatch = src.match(/(https:\/\/static.wixstatic.com\/media\/[^/]+)/);
          if (mediaMatch) {
            finalUrl = mediaMatch[1];
          }

          products.push({
            id: alt.replace(/\s+/g, '-').toLowerCase(),
            title: alt.trim(),
            img: finalUrl
          });
        }
      }
      
      // deduplicate by title
      const uniqueProducts = Array.from(new Map(products.map(item => [item.title, item])).values());
      result[id] = uniqueProducts;
    } catch(e) {
      console.error(e);
    }
  }

  // Generate JS file
  let js = `export const categoryProducts: Record<string, {id: string, title: string, img: string}[]> = ` + JSON.stringify(result, null, 2) + `;\n`;
  fs.writeFileSync('src/data/products.ts', js);
  console.log('Done!');
}
scrape();
