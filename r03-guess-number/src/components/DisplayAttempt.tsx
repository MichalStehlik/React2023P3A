import styles from "./DisplayAttempt.module.css"

export const DisplayAttempt = ({mystery, guessed, attempt} : {mystery: number, guessed: number | undefined, attempt: number}) => {
    if (guessed === undefined) {
        return <p>Vyberte číslo.</p>
    }
    else if (mystery === guessed) {
        return <p className={styles.equal}>Uhodl jste na {attempt} pokus.</p>
    }
    else if (mystery > guessed) {
        return <p className={styles.upper}>Hádejte větší.</p>
    }
    else {
        return <p className={styles.lower}>Hádejte menší.</p>
    }
}

export default DisplayAttempt