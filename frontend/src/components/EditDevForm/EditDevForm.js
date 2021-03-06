import React, { useRef } from "react"
import { Formik, Form } from "formik"
import { FormGroup, Container, Button, Modal } from "reactstrap"

import NameInput from "../formInputs/NameInput/NameInput"
import BioInput from "../formInputs/BioInput/BioInput"
import GithubInput from "../formInputs/GithubInput/GithubInput"
import TwitterInput from "../formInputs/TwitterInput/TwitterInput"
import LinkedinInput from "../formInputs/LinkedinInput/LinkedinInput"
import ImageInput from "../formInputs/ImageInput/ImageInput"
import validationSchema from "./validationSchema"
import updateProfile from "../../shared/fetchActions/updateProfile"
import * as forBackend from "../../shared/convertForBackend"
import updateUserImage from "../../shared/fetchActions/updateUserImage"
import "./EditDevForm.css"

const EditDevForm = ({ initialValues, userId, refreshUserData }) => {
  const [successModal, setSucessModal] = React.useState(false)
  const imageRef = useRef(null)
  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          const updatedUser = await forBackend.convertUser(values)
          await updateProfile(updatedUser, userId)

          if (values.image && typeof values.image !== "string") {
            const formData = new FormData()
            formData.append("image", values.image)
            await updateUserImage(userId, formData)
          }

          setSucessModal(true)
        } catch (e) {
          console.log(e)
        }
        imageRef.current.value = ""
        setSubmitting(false)
        refreshUserData()
        setTimeout(() => {
          setSucessModal(false)
        }, 3000)
      }}
      validationSchema={validationSchema}
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
                contentClassName={"EditDevForm-ModalContent"}
                backdrop={false}
              >
                <img
                  src={"https://i.gifer.com/54vL.gif"}
                  alt={"fireworks"}
                  width={"200vw"}
                  height={"auto"}
                />
              </Modal>
              <NameInput error={errors.name} touched={touched.name}></NameInput>
              <BioInput error={errors.bio} touched={touched.bio}></BioInput>
              <ImageInput
                ref={imageRef}
                setFieldValue={setFieldValue}
                errors={errors.picture}
                touched={touched.picture}
              />
              <GithubInput error={errors.github} touched={touched.github} />
              <TwitterInput error={errors.twitter} touched={touched.twitter} />
              <LinkedinInput
                error={errors.linkedin}
                touched={touched.linkedin}
              />
              <Button type="submit" color="primary" disabled={isSubmitting}>
                Submit
              </Button>
              {isSubmitting ? <div>Submitting...</div> : <div></div>}
            </Container>
          </FormGroup>
        </Form>
      )}
    </Formik>
  )
}

export default EditDevForm
