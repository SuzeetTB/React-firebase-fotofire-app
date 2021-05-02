import { useState, useEffect } from "react";
import { projectStorage,projectFirestore, timeStamp } from '../firebase/config';
import publicIp from 'public-ip';

const useStorage = (file) =>{
    const [progress,setProgress] =useState(0);//File upload progress
    const [error,setError] =useState(null);//Errors list
    const [url,setUrl] =useState(null);//Url setter
    const [ip, setIp] = useState(null);//ip setter

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
            const ip = await publicIp.v4({
                fallbackUrls:["https://ifconfig.co.ip"]
            });
            const createdAt = timeStamp();
            collectionRef.add({/* url:url */url,ip,createdAt});
            setUrl(url);
            setIp(`${ip}`);
        })
    },[file]);
    return { progress, url, error, ip};
}

export default useStorage;