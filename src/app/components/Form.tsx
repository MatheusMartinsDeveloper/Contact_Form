"use client"
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function FormContainer() {
    const formSchema = Yup.object().shape({
        firstName: Yup.string()
            .required("This field is required")
            .min(3, "First Name is very short")
            .max(13, "First Name is very long"),
        lastName: Yup.string()
            .required("This field is required")
            .min(3, "Last Name is very short")
            .max(13, "Last Name is very long"),
        email: Yup.string()
            .required("This field is required")
            .email("Please enter a valid email address"),
        queryType: Yup.string()
            .required("Please select a query type"),
        message: Yup.string()
            .required("This field is required"),
        permission: Yup.string()
            .required("To submit this form, please consent to being contacted")
    });

    const submit = (values: unknown): void => {
        console.log(values);
    }

    return (
        <section className="bg-White rounded-lg p-5 w-[55%]">
            <div className="flex flex-col justify-center items-start gap-5 w-full">
                <div>
                    <h1 className="text-GreyDarker text-3xl font-Karla font-[700]">Contact Us</h1>
                </div>
                <Formik
                    initialValues={{
                        firstName: "",
                        lastName: "",
                        email: "",
                        queryType: "",
                        message: "",
                        permission: ""
                    }}
                    validationSchema={formSchema}
                    onSubmit={submit}
                >
                    {({ errors, handleSubmit }) => (
                        <Form className="flex flex-col gap-5 w-full"
                            onSubmit={handleSubmit}>
                            <div className="flex gap-4 w-full">
                                <div className="flex flex-col gap-1 w-full">
                                    <label className="text-GreyDarker text-base font-Karla font-bold"
                                        htmlFor="firstName">First Name *</label>
                                    <Field 
                                        className={`text-sm font-Karla font-normal outline-none rounded-lg border-2 border-GreyMedium p-2.5 hover:border-GreenMedium focus:border-GreenMedium ${errors.firstName ? `border-Red` : ``}`}
                                        id="firstName"
                                        name="firstName"
                                        type="text"
                                    />
                                    <ErrorMessage
                                        name="firstName"
                                        component={"span"}
                                        className="text-Red text-sm font-Karla font-bold"
                                    />
                                </div>
                                <div className="flex flex-col gap-1 w-full">
                                    <label className="text-GreyDarker text-base font-Karla font-bold"
                                        htmlFor="lastName">Last Name *</label>
                                    <Field 
                                        className={`text-sm font-Karla font-normal outline-none rounded-lg border-2 border-GreyMedium p-2.5 hover:border-GreenMedium focus:border-GreenMedium ${errors.lastName ? `border-Red` : ``}`}
                                        id="lastName"
                                        name="lastName"
                                        type="text"
                                    />
                                    <ErrorMessage
                                        name="lastName"
                                        component={"span"}
                                        className="text-Red text-sm font-Karla font-bold"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-1 w-full">
                                <label className="text-GreyDarker text-base font-Karla font-bold"
                                    htmlFor="email">Email Address *</label>
                                <Field 
                                    className={`text-sm font-Karla font-normal outline-none rounded-lg border-2 border-GreyMedium p-2.5 hover:border-GreenMedium focus:border-GreenMedium ${errors.email ? `border-Red` : ``}`}
                                    id="email"
                                    name="email"
                                    type="email"
                                />
                                <ErrorMessage
                                    name="email"
                                    component={"span"}
                                    className="text-Red text-sm font-Karla font-bold"
                                />
                            </div>
                            <div className="flex flex-col gap-1 w-full">
                                <label className="text-GreyDarker text-base font-Karla font-bold"
                                    htmlFor="">Query Type *</label>
                                <div className="flex items-center gap-4 w-full">
                                    <div className="flex items-center gap-5 outline-none rounded-lg border-2 border-GreyMedium p-2.5 w-full cursor-pointer hover:border-GreenMedium focus:border-GreenMedium">
                                        <Field
                                            className="w-[20px] h-[20px] cursor-pointer"
                                            id="generalEnquiry"
                                            name="queryType"
                                            value="General Enquiry"
                                            type="radio"
                                        />
                                        <label className="text-GreyDarker text-base font-Karla font-bold w-full cursor-pointer"
                                            htmlFor="generalEnquiry">
                                            General Enquiry
                                        </label>
                                    </div>
                                    <div className="flex items-center gap-5 outline-none rounded-lg border-2 border-GreyMedium p-2.5 w-full cursor-pointer hover:border-GreenMedium focus:border-GreenMedium">
                                        <Field
                                            className="w-[20px] h-[20px] cursor-pointer"
                                            id="suportRequest"
                                            name="queryType"
                                            value="Suport Request"
                                            type="radio"
                                        />
                                        <label className="text-GreyDarker text-base font-Karla font-bold w-full cursor-pointer"
                                            htmlFor="suportRequest">
                                            Suport Request
                                        </label>
                                    </div>
                                </div>
                                <ErrorMessage
                                    name="queryType"
                                    component={"span"}
                                    className="text-Red text-sm font-Karla font-bold"
                                />
                            </div>
                            <div className="flex flex-col gap-1 w-full">
                                <label className="text-GreyDarker text-base font-Karla font-bold"
                                    htmlFor="message">Message *</label>
                                <Field 
                                    className={`text-sm font-Karla font-normal outline-none rounded-lg border-2 border-GreyMedium p-4 resize-none hover:border-GreenMedium focus:border-GreenMedium ${errors.message ? `border-Red` : ``}`}
                                    id="message"
                                    name="message"
                                    as="textarea"
                                />
                                <ErrorMessage
                                    name="message"
                                    component={"span"}
                                    className="text-Red text-sm font-Karla font-bold"
                                />
                            </div>
                            <div className="flex items-center gap-4 w-full">
                                <Field 
                                    className={`w-[15px] h-[15px] cursor-pointer`}
                                    id="permission"
                                    name="permission"
                                    type="checkbox"
                                />
                                <span className="text-GreyDarker text-base font-Karla font-normal">
                                    I consent to being contacted by the team *
                                </span>
                            </div>
                            <ErrorMessage
                                name="permission"
                                component={"span"}
                                className="text-Red text-sm font-Karla font-bold"
                            />
                            <button
                                className="text-White text-base font-Karla font-bold bg-GreenMedium border-2 border-GreenMedium rounded-lg p-3 w-full hover:bg-transparent hover:text-GreenMedium"
                                onClick={submit}
                            > Submit
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </section>
    );
}