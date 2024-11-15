import { Checkbox } from 'primereact/checkbox';
import { CheckboxChangeEvent } from 'primereact/checkbox';
import styles from './CreateCollectionCheckbox.module.css';
import React from 'react';

type Props = {
    formVisible: boolean;
    toggleFormVisibility: (visible: boolean) => void;
};

function CreateCollectionCheckbox({ formVisible, toggleFormVisibility }: Props) {
    return (
        <div className={styles.collection}>
            <Checkbox
                inputId="createCollection"
                checked={formVisible}
                onChange={(e: CheckboxChangeEvent) => toggleFormVisibility(e.checked || false)}
            />
            <label htmlFor="createCollection" className={styles.label}>
                Создать подборку
            </label>
        </div>
    );
}

export default React.memo(CreateCollectionCheckbox);
