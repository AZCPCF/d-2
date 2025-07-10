import { appUrl } from "@/utils/env";

export const dynamic = "force-dynamic";

export async function GET() {
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url><loc>${appUrl}categories/men-clothes</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}categories/children-clothes-boys</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}categories/children-clothes-girls</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}categories/shoes-and-sneakers</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}categories/ladies-sneakers</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}categories/children-sneakers</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}categories/t-shirt</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}categories/Basic-T-shirt</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}categories/Patterned-T-shirt</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}categories/Dors</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}categories/dors-Basic</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}categories/dors-patterned</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}categories/hoodie</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}categories/Basic-hoodie</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}categories/Patterned-hoodie</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}categories/shirt</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}categories/pirahan-marakeshi</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}categories/pirahan-linen</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}categories/shirt-sport</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}categories/Pirahan-pashmi</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}categories/Pirahan-jean</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}categories/pants</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}categories/comfortable-pants</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}categories/jeans</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}categories/Mom-fit-pants</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}categories/bag-pants</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}categories/cargo-pants</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}categories/shorts</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}categories/Mens-top</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}categories/socks</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}categories/mens-set</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}categories/mens-set-t</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}categories/dors-and-pants-set</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}categories/tops-and-shorts-set</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}categories/Baft</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}categories/patterned-baft</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}categories/Baft-basic</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}categories/puffer-mens</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}categories/puffer-basic</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}categories/puffer-mens-h</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}categories/Jacket-sweatshirt</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}categories/Jacket-sweatshirt-ba</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}categories/Jacket-sweatshirt-p</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}categories/jean-coat</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}categories/Jile</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}categories/C-kot-jean</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}categories/winter-hat</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}categories/winter-hat-basic</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}categories/shorts-pants-men</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}categories/accessories-hat-bag</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}categories/bag-sport-mens</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}categories/kids-set</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}categories/kids-set-shalvar</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}categories/set-kids</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}categories/kids-hoodei</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}categories/kids-shlavar</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}categories/kids-pants</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}categories/kids-dors</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}categories/kids-dors-t</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}categories/kids-hoodie</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}categories/girls-t-shart</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}categories/Basic-T-shirt-for-girls</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}categories/Patterned-t-shirt-girls</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}categories/Girls-set</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}categories/T-shirt-and-shorts-set</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}categories/Hoodie-and-pants-set</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}categories/girls-pants</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}categories/Girls-dors</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}categories/Basic-dors-girls</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}categories/Patterned-dors-girls</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}categories/Girls-hoodie</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}categories/Basic-hoodie-girls</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}categories/Patterned-hoodie-girls</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}categories/SET-CROPTOP</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}categories/set-douther-baby</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}categories/Vance</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}categories/Vance-Amiri</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}categories/Vance-Breschka</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}categories/Vance-Nike</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}categories/Vans-Adidas</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}categories/Running</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}categories/Running-New-Balance</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}categories/Running-Balenciaga</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}categories/Adidas-running</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}categories/Running-Nike</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}categories/Mens-boots</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}categories/Breshka-boot</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}categories/half-boot</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}categories/majlesi-shoes</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}categories/College-shoes</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}categories/Vance-baby</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}categories/Running-child</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}categories/Running-balenciaga</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}categories/sport-child</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}categories/sport-fashion</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}articles-hub</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}about-us</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}contact-us</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}gallery</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}faq</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}payment-rules</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}privacy</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}rules</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}licenses</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}incredible-offers</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}products/tshirt-mens-ballenciaga/تیشرت بالنسیاگا مردانه 1</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}products/tshirt-org-branding/تیشرت اورجینال 1</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}products/pants-streetstyle-mens/شلوار بگ جین وارداتی3</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}products/pants-streetstyle/شلوار بگ جین وارداتی2</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}products/jean-streetstyle/شلوار بگ جین وارداتی 1</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}products/set-sport-jordan/ست تیشرت و شلوارک ورزشی3</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}products/mens-joggers-pants/شلوار اسلش جاگر 1</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}products/poloshirt-mens-tshirt/تیشرت جودون یقه دار</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}products/SHORTS-MENS-FOOTBALL/شلوارک کیت باشگاه1</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}products/tshirt-mens-kite/تیشرت کیت باشگاهی 1</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}products/SHORTS-MENS-NIKE/شلوارک پنبه لاکرا نایک</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}products/TSHIRT-MENS-MOROCOU/تیشرت مراکشی نیم زیپ</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}products/set-sport-mens/ست ورزشی قهرمانی جردن</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}products/set-sport-mens/ست ورزشی قهرمانی نایک</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}products/tshirt-mens-clothes/تیشرت رینگر</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}products/tshirt-mens-shorts/تیشرت و شلوارک ورزشی</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}products/set-machinist-mens/ست ورزشی مچینست</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}products/bag-sport-mens/ساک ورزشی just do it</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}products/tshirt-cotton-orginal/تیشرت یقه بلیزر لینن</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}best-selling</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}article/tshirt-box-style</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}article/style-sport-mens</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}article/Washing-clothes</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}products/TSHIRT-MACHINIST-MEN/تیشرت مچینیست 1</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}products/pants-morocco-mens/شلوار اولد مانی</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}products/jacet-coat-sport/پیراهن لینن طرحدار</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}products/TSHIRT-SHORTS-COTTON/ست تیشرت و شلوارک نخ پنبه2</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}products/SET-BULLS-SPORT/ست تاپ و شلوارک ورزشی 3</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
        <url><loc>${appUrl}products/Tshirt-nike-shorts/ست تیشرت و شلوارک نخ پنبه</loc><priority>1.0</priority><changefreq>daily</changefreq><lastmod>2025-07-10</lastmod></url>
    </urlset>`.trim(),
    {
      status: 200,
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control": "no-store",
      },
    }
  );
}
