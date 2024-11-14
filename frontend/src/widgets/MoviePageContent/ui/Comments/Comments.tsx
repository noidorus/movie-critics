import ErrorComponent from '@/shared/ErrorComponent/ErrorComponent';
import Loader from '@/shared/Loader/Loader';
import { Comment } from '@/app/types/CommentType';
import styles from './Comments.module.css';
import { User } from '@/app/types/UserType';
import CommentInput from './ui/CommentInput/СommentInput';
import React from 'react';

type Props = {
    filmId: number;
    comments: Comment[];
    loading: boolean;
    error: string | null;
    user: User | null;
};

function Comments({ filmId, comments, loading, error, user }: Props) {
    if (loading) {
        return <Loader />;
    }

    if (error) {
        return <ErrorComponent error={error} />;
    }

    return (
        <section className={styles.commentsSection}>
            <h2 className={styles.title}>Комментарии</h2>
            {user && <CommentInput filmId={filmId} />}
            {comments.length === 0 ? (
                <p className={styles.noComments}>Пока нет комментариев.</p>
            ) : (
                comments
                    .slice()
                    .reverse()
                    .map((comment) => (
                        <div key={comment.id} className={styles.comment}>
                            <h4 className={styles.author}>{comment.authorId}</h4>
                            <p className={styles.text}>{comment.text}</p>
                        </div>
                    ))
            )}
        </section>
    );
}

export default React.memo(Comments);
