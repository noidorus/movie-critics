import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import styles from './CommentInput.module.css';
import { useInput } from './hooks/useInput';
import React from 'react';
import classNames from 'classnames';

type Props = {
    filmId: number;
};

function CommentInput({ filmId }: Props) {
    const { commentText, setCommentText, handleSubmit, loading, error } = useInput(filmId);

    return (
        <div className={styles.commentInputContainer}>
            <InputTextarea
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                rows={4}
                placeholder="Введите ваш комментарий..."
                className={styles.textarea}
                disabled={loading}
            />
            {error && <p className={styles.error}>{error}</p>}
            <div className={styles.sendContainer}>
            <Button
                label="Отправить"
                onClick={handleSubmit}
                loading={loading}
                className={styles.submitButton}
                disabled={loading || !commentText || commentText.length > 400}
            />
            <p>
                <span className={styles.counter}>
                    <span className={classNames({
                        [styles.counterValueError]: commentText.length > 400 || !commentText,
                    })}>
                    {commentText.length}
                    </span>
                    /400
                </span>
            </p>
            </div>
        </div>
    );
}

export default React.memo(CommentInput);
