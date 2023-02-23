import imagemin from "imagemin";
import imageminMozjpeg from "imagemin-mozjpeg";
import imageminPngquant from "imagemin-pngquant";

const files = await imagemin(["./assets/imgs/*.{jpg,png}"], {
  destination: "build/static/media",
  plugins: [
    imageminMozjpeg({
      quality: 80,
    }),
    imageminPngquant({
      quality: [0.6, 0.8],
    }),
  ],
});

console.log(files);
//=> [{data: <Buffer 89 50 4e …>, destinationPath: 'build/images/foo.jpg'}, …]
