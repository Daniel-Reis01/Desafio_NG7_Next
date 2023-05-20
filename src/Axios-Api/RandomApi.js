import React, {useEffect, useState} from "react";
import axios from "axios";

 const useRandomUsers = () => {

    const baseURL = "https://randomuser.me/api/?results=500";
    const [users, setPost] =useState(null);
    
    useEffect(() => {
    
        axios.get(baseURL).then((response) => {
            setPost(response.data.results);
            console.log(response);
        });
    }, []);
    
    return users;
};
export default useRandomUsers