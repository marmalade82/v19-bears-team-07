import React, { useRef, useState } from "react"
import { Formik, Form } from "formik"
import { FormGroup, Col, Container, Button, Modal } from "reactstrap"

import NameInput from "../formInputs/NameInput/NameInput"
import ImageInput from "../formInputs/ImageInput/ImageInput"
import DescriptionInput from "../formInputs/DescriptionInput/DescriptionInput"
import AppUrlInput from "../formInputs/AppUrlInput/AppUrlInput"
import Github from "../formInputs/GithubInput/GithubInput"
import validationSchema from "./validationSchema"
import DeleteApp from "../DeleteApp/DeleteApp"
import "./AppForm.css"

const AppForm = ({ formMode, initialValues, submitForm, ...rest }) => {
  const [successModal, setSucessModal] = useState(false)
  const imageRef = useRef(null)
  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        try {
          await submitForm(values)
          setSucessModal(true)
        } catch (e) {
          console.log(e)
        }
        resetForm(initialValues)
        imageRef.current.value = ""
        setSubmitting(false)
        setTimeout(() => {
          setSucessModal(false)
        }, 3000)
      }}
    >
      {({ errors, touched, isSubmitting, setFieldValue }) => (
        <Form>
          <FormGroup>
            <Container>
              <input type="hidden" value="for disrupting autocomplete" />
              <Modal
                isOpen={successModal}
                centered={true}
                style={{ backgroundColor: "transparent" }}
                contentClassName={"AppForm-ModalContent"}
                backdrop={false}
              >
                <img
                  src={"https://i.gifer.com/54vL.gif"}
                  alt={"fireworks"}
                  width={"200vw"}
                  height={"auto"}
                />
              </Modal>
              <br />
              <NameInput error={errors.name} touched={touched.name} />
              <br />
              <ImageInput
                ref={imageRef}
                setFieldValue={setFieldValue}
                errors={errors.image}
                touched={touched.image}
              />
              <br />
              <DescriptionInput
                error={errors.description}
                touched={touched.description}
              />
              <br />
              <AppUrlInput error={errors.appUrl} touched={touched.appUrl} />
              <br />
              <Github error={errors.github} touched={touched.github} />
              <br />
              <Col>
                <SubmitButtonsSection
                  formMode={formMode}
                  isSubmitting={isSubmitting}
                  app={initialValues}
                  {...rest}
                />
              </Col>
            </Container>
          </FormGroup>
        </Form>
      )}
    </Formik>
  )
}

const SubmitButtonsSection = ({ formMode, isSubmitting, app, ...rest }) => {
  if (formMode === "add") {
    return (
      <Button type="submit" color="primary" disabled={isSubmitting}>
        Submit
      </Button>
    )
  }
  if (formMode === "edit") {
    const { id: appId, name } = app
    return (
      <div style={{ display: "flex" }}>
        <Button
          style={{ marginRight: "1em" }}
          type="submit"
          color="primary"
          disabled={isSubmitting}
        >
          Update
        </Button>
        <DeleteApp name={name} appId={appId} {...rest} />
      </div>
    )
  }
}

export default AppForm
