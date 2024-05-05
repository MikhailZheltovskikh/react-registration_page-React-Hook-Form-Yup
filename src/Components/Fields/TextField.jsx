import styles from "./TextField.module.css"
import { forwardRef } from 'react';

export const TextField = forwardRef(({ label, error, ...otherProps }, ref) => {
	return (
		<div className={styles.item}>
			{error && <span className={styles.error}>{error}</span>}
			<label>
				<span className={styles.name}>{label}</span>
				<input className={styles.input} ref={ref} {...otherProps} />
			</label>
		</div>
	);
});
