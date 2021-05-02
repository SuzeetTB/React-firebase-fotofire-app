import { useEffect, useState } from "react";
import { projectFirestore } from "../firebase/config";

const useFirestore = (collection) => {
    const [docs,setDocs] = useState([]);

    useEffect(() => {
        //effect
        
        const unsub = projectFirestore.collection(collection)
        .orderBy('createdAt','desc')
            .onSnapshot(snap=>{
                let documents = [];//array
                snap.forEach(doc=>{
                    ///...doc.data() gets all properties of data from the database
                    documents.push({...doc.data(),id:doc.id});
                    //console.log({...doc.data(),id:doc.id});
                });
                //console.log(documents)
                setDocs(documents);
        });
        return () => {
            //cleanup when no longer in use / this is a cleanup function that react will run when
            // a component using the hook unmounts
            unsub();
        }
    }, [collection])
    return { docs };
}
 
export default useFirestore;