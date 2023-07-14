import styles from './EmptyList.module.css'
import { ClipboardText } from 'phosphor-react'

export function EmptyList() {
  return (
    <div className={styles.emptyList}>
        <ClipboardText size={42}/>
        <strong>You don't have any registered tasks yet</strong>
        <p>Create a new task</p>
    </div>
  );
}
