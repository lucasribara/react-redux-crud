import http from "../http-common";


const getAll = () => {
    return http.get("/tutorials");        
}

const get = (id) => {
    return http.get(`/tutorials/${id}`);        
}

const create = (data) => {
    return http.post(`/tutorials`, data);
}

const update = (id, data) => {
    return http.put(`/tutorials/${id}`, data);
}

const remove = (id) => {
    return http.delete(`/tutorials/${id}`);
}

const removeAll = () => {
    return http.delete(`/tutorials`);        
}

const findByTitle = (title) => {
    return http.get(`/tutorials?title=${title}`);        
}

const getPublished = () => {
    return http.get("/tutorials/published");
}

const TutorialDataService = {
    getAll,
    get,
    create,
    update,
    remove,
    removeAll,
    getPublished,
    findByTitle
  };
export default TutorialDataService;