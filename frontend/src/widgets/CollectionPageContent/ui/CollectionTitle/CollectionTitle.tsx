import { Button } from 'primereact/button';
import classNames from 'classnames';
import styles from './CollectionTitle.module.css';
import { Collection } from '@/app/types/CollectionType';
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
                    <Button className={styles.button} onClick={onDeleteCollection} label=" ">
                        <span className={classNames(styles.icon, 'pi', 'pi-trash')}> </span>
                    </Button>
                    <Button className={styles.button} onClick={onToggleVisibility} label=" ">
                        <span
                            className={classNames(styles.icon, 'pi', {
                                'pi-lock': collection.private,
                                'pi-lock-open': !collection.private,
                            })}
                        ></span>
                    </Button>
                </div>
            )}
        </div>
    );
}

export default React.memo(CollectionTitle);
