import React from "react";

import { Field, Form, Formik } from 'formik';

import styles from "./SearchMovies.module.css"

const SearchMovies = ({onSubmit}) => {
     return (
        <>
            <Formik
                initialValues={{ query: ' ' }}
                onSubmit={(values, { resetForm }) => {
                onSubmit(values.query.trim());
                resetForm();
                }}
            >
                <Form className={styles.Form}>
                <Field
                    as="input"
                    autoComplete="off"
                    placeholder="Search movie..."
                    name="query"
                    autoFocus
                />
                <button type="submit">Search</button>
                </Form>
             </Formik> 
         </>
     )
}
   
      

export default SearchMovies;
 