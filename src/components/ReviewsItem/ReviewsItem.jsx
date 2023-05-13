import React from "react";

import styles from "./ReviewsItem.module.css"

export const ReviewsItem = ({reviews}) => {
    return (
        <ul className={styles.List}>
                {reviews.map(author =>
                    <li className={styles.Item} key={author.id}>
                        <h3>Author: {author.author}</h3>
                        <p>{ author.content}</p>
                    </li>)}
        </ul>
    )
}