import sharp from 'sharp'

/* --- favicon.ico + apple-touch-icon ------------------------------------ */
const iconSvg = Buffer.from(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="12" fill="#1c1a17"/>
  <text x="31" y="45" text-anchor="middle" font-family="Georgia, serif" font-size="40" fill="#f4f1ea">A</text>
  <circle cx="48" cy="42" r="4" fill="#7a2a30"/>
</svg>`)

await sharp(iconSvg, { density: 384 }).resize(180, 180).png().toFile('public/apple-touch-icon.png')
await sharp(iconSvg, { density: 384 }).resize(32, 32).png().toFile('public/favicon-32.png')
await sharp(iconSvg, { density: 384 }).resize(48, 48).png().toFile('public/favicon.ico')

/* --- Open Graph image (1200 x 630) ----------------------------------- */
const og = Buffer.from(`
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#f4f1ea"/>
  <rect x="0" y="0" width="1200" height="8" fill="#7a2a30"/>
  <text x="92" y="140" font-family="'Courier New', monospace" font-size="21" letter-spacing="6" fill="#8b8578">AJEJOHNSON.TECH</text>
  <text x="88" y="300" font-family="Georgia, 'Times New Roman', serif" font-size="92" fill="#1c1a17">Ajejohnson Emmanuel</text>
  <text x="92" y="372" font-family="Arial, Helvetica, sans-serif" font-size="32" fill="#57514a">Full-Stack Developer &amp; Digital Product Builder</text>
  <line x1="92" y1="430" x2="272" y2="430" stroke="#1c1a17" stroke-opacity="0.28" stroke-width="2"/>
  <text x="92" y="512" font-family="Arial, Helvetica, sans-serif" font-size="23" fill="#8b8578">Selected work — GenPay · TalkNaija Media · QuickShip Africa · Eko United FC</text>
</svg>`)

await sharp(og).png().toFile('public/og-image.png')

/* --- signature, re-tinted from public/signature.png ------------------- *
 * The source is black strokes on transparency; recolour via the alpha
 * channel so it reads on both the light page and the dark footer.        */
const sigTrim = await sharp('public/signature.png').trim({ threshold: 10 }).toBuffer()
const sigMeta = await sharp(sigTrim).metadata()
const sigAlpha = await sharp(sigTrim).extractChannel(3).toBuffer()
const tintSignature = (hex, out) =>
  sharp({
    create: {
      width: sigMeta.width,
      height: sigMeta.height,
      channels: 3,
      background: hex,
    },
  })
    .joinChannel(sigAlpha)
    .webp({ quality: 92, alphaQuality: 100 })
    .toFile(out)

await tintSignature('#f4f1ea', 'src/assets/images/signature-paper.webp')
await tintSignature('#1c1a17', 'src/assets/images/signature-ink.webp')

console.log('static assets generated')
