import { Button } from 'primereact/button';
import classNames from 'classnames';
import styles from './CollectionTitle.module.css';
import { Collection } from '@/types/CollectionType';
import React from 'react';

interface Props {
    collection: Collection;
    userId: number | undefined;
    onDeleteCollection: () => void;
    onToggleVisibility: () => void;
}

function CollectionTitle({ collection, userId, onDeleteCollection, onToggleVisibility }: Props) {
    return (
        <div className={styles.titleContainer}>
            <h2 className={styles.title}>{collection.name}</h2>
            {userId === collection.authorId && (
                <div className={styles.buttons}>
                    <Button
                        className={classNames(styles.button, 'pi', 'pi-trash')}
                        onClick={onDeleteCollection}
                        label=" "
                    />
                    <Button
                        className={classNames(
                            styles.button,
                            'pi',
                            collection.private ? 'pi-lock' : 'pi-lock-open',
                            {
                                'pi-lock': collection.private,
                                'pi-lock-open': !collection.private,
                            },
                        )}
                        onClick={onToggleVisibility}
                        label=" "
                    />
                </div>
            )}
        </div>
    );
}

export default React.memo(CollectionTitle);
