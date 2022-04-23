import React, {useState} from "react";
import storage from '../../firebase-app'
import {createImage} from "../../services/image-service";
import {findOne} from "../../services/follow-service";

const Images = ({users = []}) => {
    const [IDS, setIDS] = useState({});
    const [image, setImage] = useState('');
    const userReference = async () => {
        await createImage("me", users._id)
            .then(message => setIDS(message));
    }
    userReference();
    const upload = async () => {
       const find = await findOne("me", users._id);
        if(find) {
            if (image == null)
                return;
            storage.ref(`/images${image.name}`).put(image, IDS)
                .on("state_changed", alert("success"), alert);
        }
    }

    return(
        <div>
            <input type="file" onChange={(e) => {
                setImage(e.target.files[0])
            }}/>
            <i className="fa-solid fa-paperclip" onClick={upload}/>
        </div>
    )
};
export default Images;