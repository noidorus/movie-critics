import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import styles from './CommentInput.module.css';
import { useInput } from './hooks/useInput';
import React from 'react';

type Props = {
    filmId: number;
};

function CommentInput({ filmId }: Props) {
    const { commentText, setCommentText, handleSubmit, loading, error } = useInput(filmId);

    return (
        <div className={styles.commentInputContainer}>
            <h3 className={styles.title}>Оставить комментарий</h3>
            <InputTextarea
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                rows={4}
                placeholder="Введите ваш комментарий..."
                className={styles.textarea}
                disabled={loading}
            />
            {error && <p className={styles.error}>{error}</p>}
            <Button
                label="Отправить"
                onClick={handleSubmit}
                loading={loading}
                className={styles.submitButton}
                disabled={loading || !commentText}
            />
        </div>
    );
}

export default React.memo(CommentInput);
