export const dynamic = 'force-dynamic';

export async function GET() {
  const baseUrl = "https://d-2-orpin.vercel.app/";
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url><loc>${baseUrl}</loc><lastmod>2025-07-10</lastmod><changefreq>daily</changefreq><priority>1.0</priority></url>
        <url><loc>${baseUrl}categories/men-clothes</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}categories/children-clothes-boys</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}categories/children-clothes-girls</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}categories/shoes-and-sneakers</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}categories/ladies-sneakers</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}categories/children-sneakers</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}categories/t-shirt</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}categories/Basic-T-shirt</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}categories/Patterned-T-shirt</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}categories/Dors</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}categories/dors-Basic</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}categories/dors-patterned</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}categories/hoodie</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}categories/Basic-hoodie</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}categories/Patterned-hoodie</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}categories/shirt</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}categories/pirahan-marakeshi</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}categories/pirahan-linen</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}categories/shirt-sport</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}categories/Pirahan-pashmi</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}categories/Pirahan-jean</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}categories/pants</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}categories/comfortable-pants</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}categories/jeans</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}categories/Mom-fit-pants</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}categories/bag-pants</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}categories/cargo-pants</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}categories/shorts</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}categories/Mens-top</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}categories/socks</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}categories/mens-set</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}categories/mens-set-t</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}categories/dors-and-pants-set</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}categories/tops-and-shorts-set</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}categories/Baft</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}categories/patterned-baft</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}categories/Baft-basic</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}categories/puffer-mens</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}categories/puffer-basic</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}categories/puffer-mens-h</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}categories/Jacket-sweatshirt</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}categories/Jacket-sweatshirt-ba</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}categories/Jacket-sweatshirt-p</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}categories/jean-coat</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}categories/Jile</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}categories/C-kot-jean</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}categories/winter-hat</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}categories/winter-hat-basic</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}categories/shorts-pants-men</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}categories/accessories-hat-bag</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}categories/bag-sport-mens</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}categories/kids-set</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}categories/kids-set-shalvar</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}categories/set-kids</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}categories/kids-hoodei</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}categories/kids-shlavar</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}categories/kids-pants</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}categories/kids-dors</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}categories/kids-dors-t</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}categories/kids-hoodie</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}categories/girls-t-shart</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}categories/Basic-T-shirt-for-girls</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}categories/Patterned-t-shirt-girls</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}categories/Girls-set</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}categories/T-shirt-and-shorts-set</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}categories/Hoodie-and-pants-set</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}categories/girls-pants</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}categories/Girls-dors</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}categories/Basic-dors-girls</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}categories/Patterned-dors-girls</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}categories/Girls-hoodie</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}categories/Basic-hoodie-girls</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}categories/Patterned-hoodie-girls</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}categories/SET-CROPTOP</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}categories/set-douther-baby</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}categories/Vance</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}categories/Vance-Amiri</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}categories/Vance-Breschka</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}categories/Vance-Nike</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}categories/Vans-Adidas</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}categories/Running</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}categories/Running-New-Balance</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}categories/Running-Balenciaga</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}categories/Adidas-running</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}categories/Running-Nike</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}categories/Mens-boots</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}categories/Breshka-boot</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}categories/half-boot</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}categories/majlesi-shoes</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}categories/College-shoes</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}categories/Vance-baby</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}categories/Running-child</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}categories/Running-balenciaga</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}categories/sport-child</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}categories/sport-fashion</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}articles-hub</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}about-us</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}contact-us</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}gallery</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}faq</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}payment-rules</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}privacy</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}rules</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}licenses</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}incredible-offers</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}products/tshirt-mens-ballenciaga/تیشرت بالنسیاگا مردانه 1</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}products/tshirt-org-branding/تیشرت اورجینال 1</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}products/pants-streetstyle-mens/شلوار بگ جین وارداتی3</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}products/pants-streetstyle/شلوار بگ جین وارداتی2</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}products/jean-streetstyle/شلوار بگ جین وارداتی 1</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}products/set-sport-jordan/ست تیشرت و شلوارک ورزشی3</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}products/mens-joggers-pants/شلوار اسلش جاگر 1</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}products/poloshirt-mens-tshirt/تیشرت جودون یقه دار</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}products/SHORTS-MENS-FOOTBALL/شلوارک کیت باشگاه1</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}products/tshirt-mens-kite/تیشرت کیت باشگاهی 1</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}products/SHORTS-MENS-NIKE/شلوارک پنبه لاکرا نایک</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}products/TSHIRT-MENS-MOROCOU/تیشرت مراکشی نیم زیپ</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}products/set-sport-mens/ست ورزشی قهرمانی جردن</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}products/set-sport-mens/ست ورزشی قهرمانی نایک</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}products/tshirt-mens-clothes/تیشرت رینگر</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}products/tshirt-mens-shorts/تیشرت و شلوارک ورزشی</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}products/set-machinist-mens/ست ورزشی مچینست</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}products/bag-sport-mens/ساک ورزشی just do it</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}products/tshirt-cotton-orginal/تیشرت یقه بلیزر لینن</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}best-selling</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}article/tshirt-box-style</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}article/style-sport-mens</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}article/Washing-clothes</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}products/TSHIRT-MACHINIST-MEN/تیشرت مچینیست 1</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}products/pants-morocco-mens/شلوار اولد مانی</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}products/jacet-coat-sport/پیراهن لینن طرحدار</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}products/TSHIRT-SHORTS-COTTON/ست تیشرت و شلوارک نخ پنبه2</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}products/SET-BULLS-SPORT/ست تاپ و شلوارک ورزشی 3</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${baseUrl}products/Tshirt-nike-shorts/ست تیشرت و شلوارک نخ پنبه</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
    </urlset>`.trim(),
    {
      headers: {
        "Content-Type": "application/xml",
      },
    }
  );
}
