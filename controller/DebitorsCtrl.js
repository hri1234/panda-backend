const Creditors = require("../models/CreditorsModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongodbId");

const createCreditors = asyncHandler(async (req, res) => {
 try {
    const newCreditors = await Creditors.create(req.body);
    res.json(newCreditors);
 } catch (error) {
    throw new Error(error);
 }
});

const updateCreditors = asyncHandler(async (req, res) => {
 const { id } = req.params;
 validateMongoDbId(id);
 try {
    const updateCreditors = await Creditors.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updateCreditors);
 } catch (error) {
    throw new Error(error);
 }
});

const deleteCreditors = asyncHandler(async (req, res) => {
 const { id } = req.params;
 validateMongoDbId(id);
 try {
    const deleteCreditors = await Creditors.findByIdAndDelete(id);
    res.json(deleteCreditors);
 } catch (error) {
    throw new Error(error);
 }
});

const getaCreditors = asyncHandler(async (req, res) => {
 const { id } = req.params;
 validateMongoDbId(id);
 try {
    const getaCreditors = await Creditors.findById(id);
    res.json(getaCreditors);
 } catch (error) {
    throw new Error(error);
 }
});

const getAllCreditors = asyncHandler(async (req, res) => {
 try {
    const getAllCreditors = await Creditors.find();
    res.json(getAllCreditors);
 } catch (error) {
    throw new Error(error);
 }
});

module.exports = {
 createCreditors,
 updateCreditors,
 deleteCreditors,
 getaCreditors,
 getAllCreditors,
};