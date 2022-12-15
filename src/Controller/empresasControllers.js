const companiesModel = require("../Model/empresasDasMinas");

const findCompanies = async (req, res) => {
    try {
        const allCompanies = await companiesModel.find();
        res.status(200).json(allCompanies);
    } catch {
        res.status(404).json({message: error.message})
    }
};

const addCompany = async (req, res) => {
    try {
        const {
            Name,
            Location,
            Type,
            Contact, 
            Bio,
        } = req.body;
        const newCompany = new companiesModel ({
            Name,
            Location,
            Type,
            Contact, 
            Bio,
        })
        const savedCompany = await newCompany.save();
        res.status(200).json({"New company sucessfully added": savedCompany})
    } catch (error) {
        console.error(error);
        res.status(500).json(error.message);
    }
}

const updateCompany = async (req, res) => {
    try {
    const {id} = req.params;
    const {
        Name,
        Location,
        Type,
        Contact, 
        Bio,
    } = req.body;
    const findCompany = await companiesModel.findById(id);
    if (findCompany == null) {
        res.status(404).json({message: "Não consegui encontrar a empresa que você estava procurando, por favor cheque o id inserido novamente."})
    };
    findCompany.Name = Name;
    findCompany.Location = Location;
    findCompany.Type = Type;
    findCompany.Contact = Contact;
    findCompany.Bio = Bio;
    const updatedCompany = await findCompany.save();
    res.status(200).json({message: "Sua empresa foi atualizada com sucesso. <3"}) 
} catch (error) {
    res.status(500).json({message: error.message})
} 
};

const deleteCompany = async (req, res) => {
    const {id} = req.params
    const findCompany = await companiesModel.findById(id)
    if (findCompany == null){
        res.status(404).json({message: "Não consegui encontrar a empresa, por favor cheque o id inserido."})
    };
    await findCompany.remove();
    res.status(200).json({message: `A empresa ${findCompany.Name} foi deletada com sucesso.`})    
}

const findCompanyByLocation = async (req, res) => {
    const location = req.query.Location;
    const reg = new RegExp(location, 'i');
    const findCompany = await companiesModel.find({Location: {$regex: reg}});
    if (findCompany == null) {
        res.status(404).json({message: "Não consegui encontrar essa empresa, você tem certeza que a informação está correta?"})
    };
    res.status(200).json(findCompany);
}
      
module.exports = {
    findCompanies,
    addCompany,
    updateCompany,
    deleteCompany,
    findCompanyByLocation
}