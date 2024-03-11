import React, { PropsWithChildren, useEffect, useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import styles from './ModalDialog.module.css';

type ModalDialogProps = {
    show: boolean;
    onClose: () => void;
    title: string;
};

const ModalDialog: React.FC<PropsWithChildren<ModalDialogProps>> = ({ show, onClose, title, children }) => {
    const [visible, setVisible] = useState(false);
    const prepareToClose = useCallback(() => {
        setVisible(false);
        const interval = setTimeout(() => {
            //clearTimeout(interval);
            onClose();
        }, 1000);
    }, [onClose]);
    useEffect(() => {
        setVisible(show);
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                prepareToClose();
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
        <div className={styles.backdrop} onClick={prepareToClose}>
            <dialog open={show} className={`${styles.dialog} ${visible ? styles.visible : undefined}`}>
                <header>
                    <p className={styles.title}>{title}</p>  
                </header>     
            {children}
                <footer>
                    <button onClick={prepareToClose}>Close</button>
                </footer>
            </dialog>
        </div>
        , document.body 
    );
}

export default ModalDialog;