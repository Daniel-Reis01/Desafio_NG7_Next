import React, {useEffect, useState} from "react";
import axios from "axios";

 const useRandomUsers = () => {

    const baseURL = "https://randomuser.me/api/?results=500";
    const [post, setPost] =useState(null);
    
    useEffect(() => {
    
        axios.get(baseURL).then((response) => {
            setPost(response.data.results);
            console.log(response);
        });
    }, []);
    
    return post;
};
export default useRandomUsers