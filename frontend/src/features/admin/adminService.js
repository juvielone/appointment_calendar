import axios from 'axios'

const API_URL = 'http://localhost:4000/admin/cms'

// Get Config Date
const getDate = async () => {

    const response = await axios.get(`${API_URL}/filterdate`)

    return response.data

}




const adminService = {
    getDate
}

export default adminService;