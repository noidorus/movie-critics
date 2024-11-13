import { Checkbox } from 'primereact/checkbox';
import { CheckboxChangeEvent } from 'primereact/checkbox';
import styles from './CreateCollectionCheckbox.module.css';

type Props = {
    formVisible: boolean;
    toggleFormVisibility: (visible: boolean) => void;
};

const CreateCollectionCheckbox = ({ formVisible, toggleFormVisibility }: Props) => {
    return (
        <div className={styles.collection}>
            <Checkbox
                inputId="createCollection"
                checked={formVisible}
                onChange={(e: CheckboxChangeEvent) => toggleFormVisibility(e.checked || false)}
            />
            <label htmlFor="createCollection">Создать подборку</label>
        </div>
    );
};

export default CreateCollectionCheckbox;
