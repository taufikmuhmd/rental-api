const getAdditionalData = async (id, model) => {
    const result = await model.findById(id).select('-password')
    return result
};


module.exports = getAdditionalData