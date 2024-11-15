import { InputText } from 'primereact/inputtext';
import { useCreateCollection } from './hooks/useCreateCollection';
import { RadioButton } from 'primereact/radiobutton';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast'; 
import styles from './CreateCollectionForm.module.css';
import classNames from 'classnames';
import { useToastNotifications } from './hooks/useToastNotifications';

export type Props = {
    onHide: () => void;
    visible: boolean;
    movieId?: number;
};

export default function CreateCollectionForm({ onHide, visible, movieId }: Props) {
    const {
        collectionName,
        setCollectionName,
        isPrivate,
        setIsPrivate,
        formError,
        createLoading,
        addMovieLoading,
        createError,
        addMovieError,
        onSubmit,
    } = useCreateCollection(onHide, movieId);

    const toast = useToastNotifications(createError, addMovieError);

    if (!visible) {
        return null;
    }

    return (
        <>
            <Toast ref={toast} />
            <form onSubmit={onSubmit}>
                <div className={styles.input}>
                    <label htmlFor="collectionName" className={styles.label}>Название подборки</label>
                    <InputText
                        id="collectionName"
                        value={collectionName}
                        className={styles.inputText}
                        onChange={(e) => setCollectionName(e.target.value)}
                    />
                    {formError && <p className={styles.error}>{formError}</p>}
                    <div className={styles.counter}>
                        <span className={classNames({
                            [styles.counterValueError]: collectionName.length > 30 || !collectionName,
                        })}>
                        {collectionName.length}
                        </span>
                        /30
                    </div>
                </div>
                <div className={styles.radio}>
                    <div>
                        <RadioButton
                            inputId="privateYes"
                            name="privacy"
                            value={true}
                            onChange={(e) => setIsPrivate(e.value)}
                            checked={isPrivate}
                        />
                        <label htmlFor="privateYes" className={styles.radioLabel}>Приватная</label>
                    </div>
                    <div>
                        <RadioButton
                            inputId="privateNo"
                            name="privacy"
                            value={false}
                            onChange={(e) => setIsPrivate(e.value)}
                            checked={!isPrivate}
                        />
                        <label htmlFor="privateNo" className={styles.radioLabel}>Публичная</label>
                    </div>
                </div>
                <Button
                    type="submit"
                    label={createLoading || addMovieLoading ? 'Загрузка...' : 'Создать'}
                    className={styles.submitButton}
                    disabled={!collectionName || collectionName.length > 30 || createLoading || addMovieLoading}
                />
            </form>
        </>
    );
}
