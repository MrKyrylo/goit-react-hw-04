import { Formik, Form, Field, ErrorMessage } from "formik";
import { Toaster } from "react-hot-toast";

export default function SearchBar({ handleSubmit }) {
  return (
    <Formik
      initialValues={{
        keyWord: "",
      }}
      validate={(values) => {
        const errors = {};
        if (!values.keyWord.trim()) {
          errors.keyWord = "Please enter a keyword";
        }
        return errors;
      }}
      onSubmit={(values, { resetForm }) => {
        handleSubmit(values);
        resetForm();
      }}
    >
      <Form className="footer">
        <Field
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="keyWord"
        />
        <ErrorMessage name="keyWord" component="div" className="error-message" />

        <button type="submit">Search</button>

        <Toaster position="bottom-center" />
      </Form>
    </Formik>
  );
}