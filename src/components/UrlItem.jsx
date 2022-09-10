import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const UrlItem = ({url}) => {
    const [imgRandM, setImgRandM] = useState({});

    useEffect(() => {
      axios.get(url).then((res) => setImgRandM(res.data));
    }, []);
    console.log(imgRandM);

    return (
        <li className="rickAndMorty-item">
            <div className="rickAndMorty-card">
             {imgRandM.name}
            <br />
            <img src={imgRandM.image} alt="" />
            </div>
        </li>
    );
};

export default UrlItem;