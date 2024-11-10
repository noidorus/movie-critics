import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { RadioButton } from 'primereact/radiobutton';
import { Button } from 'primereact/button';
import { useCreateCollection } from './hooks/useCreateCollection';
import styles from './CreateCollectionDialog.module.css';

type Props = {
    visible: boolean;
    onHide: () => void;
};

export default function CreateCollectionDialog({ visible, onHide }: Props) {
    const {
        collectionName,
        setCollectionName,
        isPrivate,
        setIsPrivate,
        formError,
        loading,
        actionError,
        onSubmit,
    } = useCreateCollection(onHide);

    return (
        <Dialog header="Создать подборку" visible={visible} onHide={onHide} draggable={false}>
            <form onSubmit={onSubmit}>
                <div className={styles.input}>
                    <label htmlFor="collectionName">Название подборки</label>
                    <InputText
                        id="collectionName"
                        value={collectionName}
                        onChange={(e) => setCollectionName(e.target.value)}
                    />
                    {formError && <p className={styles.error}>{formError}</p>}
                </div>

                <div className={styles.radio}>
                    <div>
                        <RadioButton
                            inputId="privateYes"
                            name="privacy"
                            value={true}
                            onChange={(e) => setIsPrivate(e.value)}
                            checked={isPrivate === true}
                        />
                        <label htmlFor="privateYes">Приватная</label>
                    </div>
                    <div>
                        <RadioButton
                            inputId="privateNo"
                            name="privacy"
                            value={false}
                            onChange={(e) => setIsPrivate(e.value)}
                            checked={isPrivate === false}
                        />
                        <label htmlFor="privateNo">Публичная</label>
                    </div>
                </div>

                <Button
                    type="submit"
                    label={loading ? 'Загрузка...' : 'Создать'}
                    className={styles.button}
                />
                {actionError && <p className={styles.error}>{actionError}</p>}
            </form>
        </Dialog>
    );
}
