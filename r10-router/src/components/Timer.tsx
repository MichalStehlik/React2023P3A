import styles from './Timer.module.css';
import { useEffect, useRef } from 'react';
import {Link} from "react-router-dom"

export type TimerProps = {
    isRunning: boolean;
    testTime: number;
    totalTime: number;
    setTestTime: (time: number) => void;
    Name: string;   
    ThresholdType: 'minutes' | 'percentage';
    ThresholdValue: number;
}

export const Timer:React.FC<TimerProps> = ({isRunning, testTime, totalTime, setTestTime, Name, ThresholdValue, ThresholdType}) => {
    const progressBar = useRef<HTMLProgressElement>(null);

    useEffect(() => {
        let myInterval: number | null = null;
        
        if (isRunning) {
            myInterval = window.setInterval(() => {
                if(testTime > 0) {
                    setTestTime(testTime - 1);
                    const timeLeftPercentage = (testTime / totalTime) * 100;
                    const timeLeftMinutes = testTime / 60;


                    if(ThresholdType === 'minutes' && timeLeftMinutes <= ThresholdValue) {
                        progressBar.current?.classList.add(styles.time__progress_bar_critical);
                    } else if(ThresholdType === 'percentage' && timeLeftPercentage <= ThresholdValue) {
                        progressBar.current?.classList.add(styles.time__progress_bar_critical);
                    } else {
                        progressBar.current?.classList.remove(styles.time__progress_bar_critical);

                    }
                }
            }, 1000);
        } else {
            if(myInterval) clearInterval(myInterval);
        }

        return () => {
            if (myInterval) clearInterval(myInterval);
        };
    }, [testTime, totalTime, isRunning, setTestTime, ThresholdType, ThresholdValue, progressBar, Name]);

    return (
        <div className={styles['timer']}>
            <h1 className={styles['timer__title']}>{Name}</h1>
    
            <progress ref={progressBar} className={'time__progress_bar'} value={testTime} max={totalTime}></progress>
            <div className={styles['timer__time_wrapper']}>
                <h1 className={styles['timer__time']}>
                    
                    {Math.floor(testTime / 3600).toString().padStart(2, "0") + 
                    ":" + Math.floor((testTime % 3600) / 60).toString().padStart(2, "0")}
                </h1>
                <span className={styles['timer__milliseconds']}>
                    {(testTime % 60).toString().padStart(2, "0")}
                </span>
            </div>
            <Link to="/settings">Settings</Link>
        </div>
    );
    
}