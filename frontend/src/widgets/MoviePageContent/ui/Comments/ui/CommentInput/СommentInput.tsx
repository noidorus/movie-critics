import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { useInput } from './hooks/useInput';
import { useToastNotifications } from '@/shared/hooks/useToastNotifications';
import { Toast } from 'primereact/toast';
import React from 'react';
import classNames from 'classnames';
import styles from './CommentInput.module.css';

type Props = {
    filmId: number;
};

function CommentInput({ filmId }: Props) {
    const { commentText, setCommentText, handleSubmit, loading, error } = useInput(filmId);
    const toast = useToastNotifications(
        error
            ? { severity: 'error', summary: 'Ошибка', detail: error }
            : null
    );

    const counterValueError = commentText.length > 400 || !commentText;
    const submitButtonDisabled = counterValueError || loading;

    return (
        <div className={styles.commentInputContainer}>
            <Toast ref={toast} />
            <InputTextarea
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                rows={4}
                placeholder="Введите ваш комментарий..."
                className={styles.textarea}
                disabled={loading}
            />
            <div className={styles.sendContainer}>
                <Button
                    label="Отправить"
                    onClick={handleSubmit}
                    loading={loading}
                    className={styles.submitButton}
                    disabled={submitButtonDisabled}
                />
                <p>
                    <span className={styles.counter}>
                        <span
                            className={classNames({
                                [styles.counterValueError]: counterValueError,
                            })}
                        >
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
