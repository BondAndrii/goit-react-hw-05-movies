import React from "react";

import PropTypes from "prop-types";

import styles from "./ReviewsItem.module.css"

const ReviewsItem = ({reviews}) => {
    return (
        <ul className={styles.List}>
            {reviews.map(author => {
                // console.log(author)
                return (
                        <li className={styles.Item} key={author.id}>
                        <h3>Author: {author.author}</h3>
                        <p>{ author.content}</p>
                    </li>)}
                    )
                }
                    
        </ul>
    )
}

export default ReviewsItem;

ReviewsItem.propTypes = {
    reviews: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        author: PropTypes.string,
        content: PropTypes.string,
    }))
}