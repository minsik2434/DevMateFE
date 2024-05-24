import axios from "axios"

const postData = async (url, data) => {
    try{
        return await axios.post(url, data);
    }
    catch(error){
        console.log(`postData Error = ${error}`);
        throw error;
    }
};

export default { postData };