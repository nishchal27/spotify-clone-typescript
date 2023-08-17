"use client";

import Modal from "@/components/Modal";
import { useEffect, useState } from "react";


const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    //**what we are doing here is: making sure that none of the model is running or open during server side rendering.
    useEffect(() => {
        setIsMounted(true);
    }, []);

    if(!isMounted){
        return null;
    }

    return (
        <>
            <Modal title="test Modal" description="test desc." isOpen onChange={() => {}} >
                Test children
            </Modal>
        </>
    )
};

export default ModalProvider;