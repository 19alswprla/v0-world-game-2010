import sharp from 'sharp';
import path from 'path';

const inputUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/World_games_logo_final-bTFwmdjCJKxiOjZX54HjZhFLQFLqml.png';
const outputPath = path.join(process.cwd(), 'public', 'logo.png');

async function removeWhiteBackground() {
  // Fetch the image
  const response = await fetch(inputUrl);
  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  // Get raw pixel data with alpha channel
  const { data, info } = await sharp(buffer)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  // Process pixels - make white/near-white pixels transparent
  const threshold = 245;
  
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    
    // Check if pixel is white or near-white
    if (r > threshold && g > threshold && b > threshold) {
      data[i + 3] = 0; // Set alpha to 0 (transparent)
    }
  }

  // Create new image with transparent background
  await sharp(data, {
    raw: {
      width: info.width,
      height: info.height,
      channels: 4
    }
  })
    .png()
    .toFile(outputPath);

  console.log('Successfully removed white background and saved to:', outputPath);
}

removeWhiteBackground();
