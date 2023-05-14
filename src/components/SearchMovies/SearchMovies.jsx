import React
// { useState }
    from "react";

import { Field, Form, Formik } from 'formik';

// import Maper  from "components/Maper/Maper";

// import styles from "./SearchMovies.module.css"



// const SearchMovies = ({onSubmit, list, getId}) => {
    
    // const [searchMovie, setSearchMovie] = useState('');    

    // const handleChange = (event) => {
    //     const { value } = event.target;
    //     setSearchMovie(value);
    //     // onChange(value);
        
    // }
    // const handleSubmit = (event) => {        
    //     event.preventDefault();
    //     onSubmit(searchMovie)        
    //     reset()
    // }

    // const reset = () => {
    //     setSearchMovie('')
    // }
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
                <Form>
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
  /* <form className={styles.Form} onSubmit={handleSubmit}>
            <label> 
                <input
                value={searchMovie}
                type='text'
                placeholder="enter film`s name"
                onChange={handleChange}
                ></input>
                <button type="submit">Submit</button>
            </label>
            </form>
            <Maper data={list} onClick={getId} />             */
    // </>     
    // )
// }
