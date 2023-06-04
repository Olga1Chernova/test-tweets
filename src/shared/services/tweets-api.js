import axios from "axios";

const contactsInstance = axios.create({
    baseURL: "https://647ccc0fc0bae2880ad1321f.mockapi.io/users"
})

export const getAllUsers = async () => {
    const { data } = await contactsInstance.get("/");
    return data;
}

export const deleteContact = async (id) => {
    const { data } = await contactsInstance.delete(`/${id}`);
    return data;
}