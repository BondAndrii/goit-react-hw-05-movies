import React from "react";

export const ReviewsItem = ({reviews}) => {
    return (
        <ul>
                {reviews.map(author =>
                    <li key={author.id}>
                        <p>Author: {author.author}</p>
                        <p>{ author.content}</p>
                    </li>)}
        </ul>
    )
}