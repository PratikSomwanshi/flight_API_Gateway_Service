class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        const response = await this.model.create(data);
        return response;
    }

    async get(id) {
        const response = await this.model.findByPk(id);
        return response;
    }

    async getAll() {
        const response = await this.model.findAll();
        return response;
    }

    async update(data, id) {
        const resource = await this.model.findByPk(id);

        resource.set({ ...data });

        await resource.save();

        return resource;
    }

    async delete(id) {
        const resource = await this.model.findByPk(id);
        await resource.destroy();
        return resource;
    }
}

module.exports = CrudRepository;
