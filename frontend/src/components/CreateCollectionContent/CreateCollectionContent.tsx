import { InputText } from "primereact/inputtext";
import { useCreateCollection } from "./hooks/useCreateCollection";
import { RadioButton } from "primereact/radiobutton";
import { Button } from "primereact/button";
import styles from "./CreateCollectionContent.module.css";

export type Props = {
    onHide: () => void;
    visible: boolean;
    movieId?: number;
}

export default function CreateCollectionContent({onHide, visible, movieId}: Props) {
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

    if (!visible) {
        return null;
    }


    return (
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
                    label={createLoading || addMovieLoading ? 'Загрузка...' : 'Создать'}
                    className={styles.button}
                />
                {createError || addMovieError && <p className={styles.error}>{createError || addMovieError}</p>}
            </form>
    );
}