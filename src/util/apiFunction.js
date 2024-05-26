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

const getData = async (url) =>{
    try{
        return await axios.get(url);
    }
    catch(error){
        console.log(`getData Error = ${error}`);
        throw error;
    }
}

const patchDataSetHeader = async (url, data, header) =>{
    try {
        return await axios.patch(url, data, header);
    }
    catch(error){
        console.log(error);
        throw error;
    }

}

const getDataSetHeader = async (url, header) =>{
    try {
        return await axios.get(url, header);
    }
    catch(error){
        console.log(error);
        throw error;
    }

}

export default { postData , getData, patchDataSetHeader, getDataSetHeader };