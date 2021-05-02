import { useState, useEffect } from "react";
import { projectStorage,projectFirestore, timeStamp } from '../firebase/config';

const useStorage = (file) =>{
    const [progress,setProgress] =useState(0);//File upload progress
    const [error,setError] =useState(null);//Errors list
    const [url,setUrl] =useState(null);//Url setter

    useEffect(()=>{
        //reference
        const storageRef = projectStorage.ref(file.name);
        const collectionRef = projectFirestore.collection('images');

        storageRef.put(file).on('state_changed',(snap)=>{ //snap = snaphot object of file being uploaded realtime i.e it happens multiple times during upload
            let percentage = (snap.bytesTransferred / snap.totalBytes)*100;
            setProgress(percentage);
        },(err)=>{
            setError(err);
        },async()=>{
            const url = await storageRef.getDownloadURL();
            const createdAt = timeStamp();
            collectionRef.add({/* url:url */url,createdAt});
            setUrl(url);
             
        })
    },[file]);
    return { progress, url, error};
}

export default useStorage;