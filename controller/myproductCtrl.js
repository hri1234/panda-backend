const File = require('../models/myproductModel');

const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.SECRET_KEY,
});

const getaProduct = async (req, res) => {
    try {
        data = await File.find({ _id: req.params.id })
        res.status(200).json(data);
    } catch (error) {
        res.status(404).json(error.message);
    }
}

const getAllProduct = async (req, res) => {
    try {
        const data = await File.find()
        res.json(data)
    } catch (error) {
        res.status(404).json(error.message);
    }
};

const createProduct = async (req, res) => {
    try {
        const dataUrl = `data:${req.files['image1'][0].mimetype};base64,${req.files['image1'][0].buffer.toString('base64')}`;
        const dataUrl1 = `data:${req.files['image1'][0].mimetype};base64,${req.files['image1'][0].buffer.toString('base64')}`;
        const dataUrl2 = `data:${req.files['image2'][0].mimetype};base64,${req.files['image2'][0].buffer.toString('base64')}`;
        const dataUrl3 = `data:${req.files['image3'][0].mimetype};base64,${req.files['image3'][0].buffer.toString('base64')}`;
        const dataUrl4 = `data:${req.files['image4'][0].mimetype};base64,${req.files['image4'][0].buffer.toString('base64')}`;
        const dataUrl5 = `data:${req.files['image5'][0].mimetype};base64,${req.files['image5'][0].buffer.toString('base64')}`;
        const dataUrl6 = `data:${req.files['image6'][0].mimetype};base64,${req.files['image6'][0].buffer.toString('base64')}`;

        const result = await cloudinary.uploader.upload(dataUrl);
        const result1 = await cloudinary.uploader.upload(dataUrl1);
        const result2 = await cloudinary.uploader.upload(dataUrl2);
        const result3 = await cloudinary.uploader.upload(dataUrl3);
        const result4 = await cloudinary.uploader.upload(dataUrl4);
        const result5 = await cloudinary.uploader.upload(dataUrl5);
        const result6 = await cloudinary.uploader.upload(dataUrl6);

        const newUser = await File.create({
            images: result.secure_url,
            image1: result1.secure_url,
            image2: result2.secure_url,
            image3: result3.secure_url,
            image4: result4.secure_url,
            image5: result5.secure_url,
            image6: result6.secure_url,
            ...req.body,
        });

        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const updateProduct = async (req, res) => {
    try {
        const dataUrl = `data:${req.files['images'][0].mimetype};base64,${req.files['images'][0].buffer.toString('base64')}`;
        const dataUrl1 = `data:${req.files['image1'][0].mimetype};base64,${req.files['image1'][0].buffer.toString('base64')}`;
        const dataUrl2 = `data:${req.files['image2'][0].mimetype};base64,${req.files['image2'][0].buffer.toString('base64')}`;
        const dataUrl3 = `data:${req.files['image3'][0].mimetype};base64,${req.files['image3'][0].buffer.toString('base64')}`;
        const dataUrl4 = `data:${req.files['image4'][0].mimetype};base64,${req.files['image4'][0].buffer.toString('base64')}`;
        const dataUrl5 = `data:${req.files['image5'][0].mimetype};base64,${req.files['image5'][0].buffer.toString('base64')}`;
        const dataUrl6 = `data:${req.files['image6'][0].mimetype};base64,${req.files['image6'][0].buffer.toString('base64')}`;

        const result = await cloudinary.uploader.upload(dataUrl);
        const result1 = await cloudinary.uploader.upload(dataUrl1);
        const result2 = await cloudinary.uploader.upload(dataUrl2);
        const result3 = await cloudinary.uploader.upload(dataUrl3);
        const result4 = await cloudinary.uploader.upload(dataUrl4);
        const result5 = await cloudinary.uploader.upload(dataUrl5);
        const result6 = await cloudinary.uploader.upload(dataUrl6);

        const data = await File.findByIdAndUpdate({ _id: req.params.id }, {
            $set:
            {
                images: result.secure_url,
                image1: result1.secure_url,
                image2: result2.secure_url,
                image3: result3.secure_url,
                image4: result4.secure_url,
                image5: result5.secure_url,
                image6: result6.secure_url,
                ...req.body,
            }
        });
        res.status(200).json(data);
    } catch (error) {
        res.status(404).json(error.message);
    }
};


const deleteProduct = async (req, res) => {
    try {
        let result = await File.findByIdAndDelete({ _id: req.params.id },
            {
                $set: req.body
            })
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json(error.message);
    }
}


module.exports = {
    createProduct,
    getaProduct,
    getAllProduct,
    updateProduct,
    deleteProduct,
};