const cloudinary = require("cloudinary").v2
const multer = require("multer")

cloudinary.config({
    cloud_name: "dfbwwac4s",
    api_key: "326729792671826",
    api_secret: "sWh2vKGM10IsSbtXo3-D2PuIni4",
})


const storage = new multer.memoryStorage();

async function imageUploadUtil(file){
    const result = await cloudinary.uploader.upload(file,{
        resource_type: "auto"
    })

    return result
}

const upload = multer({storage});

module.exports = {upload, imageUploadUtil};