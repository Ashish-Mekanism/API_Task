const axios = require("axios");
const fs = require("fs");
const util = require("util");
const stream = require("stream");
const pipeline = util.promisify(stream.pipeline);
const imageOriginalBaseUrl = "https://image.tmdb.org/t/p/original/";
const imageThumbnailBaseUrl = "https://image.tmdb.org/t/p/w500/";
const downloadFile = async (fileName, type) => {
  return new Promise(async (resolve, reject) => {
    try {
      const request = await axios.get(
        type === "original"
          ? `${imageOriginalBaseUrl}${fileName}`
          : `${imageThumbnailBaseUrl}${fileName}`,
        {
          responseType: "stream",
        }
      );
      await pipeline(
        request.data,
        fs.createWriteStream(`./images/${type}/${fileName}`)
      );
      resolve("download pdf pipeline successful " + fileName);
    } catch (error) {
      reject(error);
    }
  });
};

(async () => {
  let allData = [];
  for (i = 1; i <= 100; i++) {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=71c2b1854411b92e7b92973b99ed1887&page=${i}`
      );
      allData = [...allData, ...data.results];
      for (const movie of data.results) {
        try {
          await downloadFile(movie.backdrop_path, "original");
          await downloadFile(movie.backdrop_path, "thumbnail");
          await downloadFile(movie.poster_path, "original");
          await downloadFile(movie.poster_path, "thumbnail");
        } catch (error) {
          console.log("error downloading file ===>", error);
        }
      }
      console.log("finished page ===>", i);
    } catch (error) {
      console.log("api failed ===>", error);
    }
  }
  fs.writeFileSync("./data.json", JSON.stringify(allData));
})();
