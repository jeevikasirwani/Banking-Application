import styles from './balance.module.css'
import { useState } from "react"
export function Balance() {
    const onBalance = (e) => {
        e.preventDefault()
        console.log(e.target)
        const acId = e.target.acId.value
        



        console.log(`acId ${acId} `)
        fetch(`http://localhost:3100/balance/${acId}`)
            .then(res => res.json())
            .then(json => setBal(json.bal))
    }
    const [bal,setBal]=useState(0)
    return (
        <div className={styles.balCont}>
            <h1>Deposit Balance:{bal}</h1>
            <form onSubmit={onBalance}>

                <input type="number" placeholder='account Id' name='acId' />

                <input type="submit" value='Balance' />

            </form>
        </div>
    )
}