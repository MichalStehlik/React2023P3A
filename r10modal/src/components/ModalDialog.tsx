import React, { PropsWithChildren, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './ModalDialog.module.css';

type ModalDialogProps = {
    show: boolean;
    onClose: () => void;
    title: string;
};

const ModalDialog: React.FC<PropsWithChildren<ModalDialogProps>> = ({ show, onClose, title, children }) => {
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        setVisible(show);
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };
        console.log("Adding event listener for Escape key.");
        document.addEventListener('keydown', handleEscape);
        /*
        if (show) {
            console.log("Adding event listener for Escape key.");
            document.addEventListener('keydown', handleEscape);
        } else {
            console.log("Removing event listener for Escape key.");
            document.removeEventListener('keydown', handleEscape);
        }
        */
        return () => {
            console.log("Removing event listener for Escape key after dismount.");
            document.removeEventListener('keydown', handleEscape);
        };
    }, [show]);
    return show && createPortal(
        <div className={styles.backdrop} onClick={onClose}>
            <dialog open={show} className={`${styles.dialog} ${visible ? styles.visible : undefined}`}>
                <header>
                    <p className={styles.title}>{title}</p>  
                </header>     
            {children}
                <footer>
                    <button onClick={onClose}>Close</button>
                </footer>
            </dialog>
        </div>
        , document.body 
    );
}

export default ModalDialog;