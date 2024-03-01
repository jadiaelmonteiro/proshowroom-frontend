const baseUrl = 'https://proshow-api.azurewebsites.net/';

export const http = {
    get: async (endpoint, params) => {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await fetch(`${baseUrl}${endpoint}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${params.jwt}`
                    },
                });
                const data = await response.json();
                if (!response.ok) {
                    reject(`Error in request: ${response.status} - ${response.statusText}`);
                } else {
                    resolve(data);
                }
            } catch (error) {
                reject(new Error(error));
            }
        })
    },

    post: async (endpoint, body) => {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await fetch(`${baseUrl}${endpoint}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${body.jwt}`
                    },
                    body: JSON.stringify(body.body),
                });
                const data = await response.json();
                if (!response.ok) {
                    reject(`Error in request: ${response.status} - ${response.statusText}`);
                } else {
                    resolve(data);
                }
            } catch (error) {
                reject(new Error(error));
            }
        })
    },

    getById: async (endpoint, params) => {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await fetch(`${baseUrl}${endpoint}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${params.jwt}`
                    },
                });
                const data = await response.json();
                if (!response.ok) {
                    reject(`Error in request: ${response.status} - ${response.statusText}`);
                } else {
                    resolve(data);
                }
            } catch (error) {
                reject(new Error(error));
            }
        })
    },

    updatedById: async (endpoint, params) => {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await fetch(`${baseUrl}${endpoint}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${params.jwt}`
                    },
                    body: JSON.stringify(params.body)
                });
                const data = await response.json();
                if (!response.ok) {
                    reject(`Error in request: ${response.status} - ${response.statusText}`);
                } else {
                    resolve(data);
                }
            } catch (error) {
                reject(new Error(error.message));
            }
        })
    },

    deleteById: async (endpoint, params) => {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await fetch(`${baseUrl}${endpoint}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${params.jwt}`
                    },
                });
                const data = await response.json();
                if (!response.ok) {
                    reject(`Error in request: ${response.status} - ${response.statusText}`);
                } else {
                    resolve(data);
                }
            } catch (error) {
                reject(new Error(error));
            }
        })
    },

    updatedById: async (endpoint, params) => {
        return new Promise(async (resolve, reject) => {
            try {
                const form = new FormData();
                form.append('id', params.body.id);
                form.append('File', params.file);
                form.append('firstName', params.body.firstName);
                form.append('email', params.body.email);
                form.append('address', params.body.address);
                form.append('city', params.body.city);
                form.append('code', params.body.code);
                form.append('lastName', params.body.lastName);
                form.append('state', params.body.state);
                form.append('phone', params.body.phone);
                form.append('passwordNew', params.body.passwordNew);
                form.append('passwordOld', params.body.passwordOld);
                form.append('changePassword', params.body.changePassword);


                const response = await fetch(`${baseUrl}${endpoint}`, {
                    method: 'PUT',
                    headers: {
                        'Authorization': `Bearer ${params.jwt}`
                    },
                    body: form
                });
                const data = await response.json();
                if (!response.ok) {
                    reject(`Error in request: ${response.status} - ${response.statusText}`);
                } else {
                    resolve(data);
                }
            } catch (error) {
                reject(new Error(error.message));
            }
        })
    },

    postAnnouncement: async (endpoint, body) => {
        return new Promise(async (resolve, reject) => {
            try {
                const form = new FormData();
                form.append('title', body.body.title);
                form.append('description', body.description);
                form.append('File', body.file);
                form.append('value', body.body.value);
                form.append('categorie', body.body.categorie);
                form.append('state', body.body.state);
                form.append('userId', body.body.userId);

                const response = await fetch(`${baseUrl}${endpoint}`, {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${body.jwt}`
                    },
                    body: form,
                });
                const data = await response.json();
                if (!response.ok) {
                    reject(`Error in request: ${response.status} - ${response.statusText}`);
                } else {
                    resolve(data);
                }
            } catch (error) {
                reject(new Error(error));
            }
        })
    },
};
