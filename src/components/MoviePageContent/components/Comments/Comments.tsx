import ErrorComponent from '@/components/ErrorComponent/ErrorComponent';
import Loader from '@/components/Loader/Loader';
import { Comment } from '@/types/CommentType';
import styles from './Comments.module.css';
import { User } from '@/types/UserType';
import CommentInput from './components/CommentInput/СommentInput';

type Props = {
    filmId: number;
    comments: Comment[];
    loading: boolean;
    error: string | null;
    user: User | null;
};

export default function Comments({ filmId, comments, loading, error, user }: Props) {
    if (loading) {
        return <Loader />;
    }

    if (error) {
        return <ErrorComponent error={error} />;
    }

    return (
        <section className={styles.commentsSection}>
            <h3 className={styles.title}>Комментарии</h3>
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
