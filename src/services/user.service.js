import axios from 'axios';
import authHeader from "@/services/auth-header";

const API_URL = 'https://homemade20201124161107.azurewebsites.net/api/users';

class UserService {
    getAll() {
        console.log(authHeader());
        return axios.get(API_URL, { headers: authHeader() });
    }
}

export default new UserService();
