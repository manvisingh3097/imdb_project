import React, { useState, useEffect } from "react";
import axios from "axios";
import { useFormik } from "formik";
import *  as Yup from "yup";
import { Link } from "react-router-dom";
import EndPoints from "../api/Endpoints";

const RegisterPage = () => {
    const [requestedResponse, setrequestedResponse] = useState({
        textMessage: "",
        alertClass: ""
    });

    const initialvalues = {
        firstName: "",
        email: "",
        mobile: "",
        password: "",
    };

    const onSubmit = (values) => {
        console.log(values);
        axios.post(EndPoints.REGISTER_URL, values)
            .then((response) => {
                setrequestedResponse({
                    textMessage: response.data.message,
                    alertClass: "alert alert-success"
                })
            }, (error) => {
                console.log(error);
                setrequestedResponse({
                    textMessage: error.response.data.message,
                    alertClass: "alert alert-danger"
                })
            })

            .catch((error) => console.log(error));

};

const validationSchema = Yup.object({
    firstName: Yup.string()
            .required('First name is required'),
        email: Yup.string()
            .required('Email name is required')
            .email('email must be a valid email'),
        mobile: Yup.string()
            .required('Mobile is required'),
        password: Yup.string()
            .required('Password must be valid')
            .min(6, 'Password must be at least 6 Characters'),
    });

    const formik = useFormik({
        initialvalues,
        onSubmit,
        validationSchema,
        validateOnMount: true,
    });

    return(
        
    )

}