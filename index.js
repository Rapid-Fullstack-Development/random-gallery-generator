const axios = require("axios");
const fs = require("fs");

const UNSLASH_ACCESS_KEY = process.env.UNSLASH_ACCESS_KEY;
const BASE_URL = "https://api.unsplash.com";
const NUM_PHOTOS = 30;
const RANDOM_PHOTO_URL = `${BASE_URL}/photos/random?client_id=${UNSLASH_ACCESS_KEY}&count=${NUM_PHOTOS}`;

async function main () {

    const { data } = await axios.get(RANDOM_PHOTO_URL);

    await fs.promises.writeFile("./gallery.json", JSON.stringify(data, null, 4));
}

main()
    .catch(err => {
        console.error("Error!");
        console.error(err);
    });

