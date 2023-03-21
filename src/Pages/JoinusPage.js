import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  Input,
  TextField,
  Typography,
  IconButton,
} from "@mui/material";
import "../Components/Join Us/Joinus.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import CloseIcon from "@mui/icons-material/Close";
import Footer from "../Components/FooterSection/Footer";
import AddressSection from "../Components/Careers/AddressSection";

function JoinusPage() {
  const [uploadProfileimg, setuploadProfileimg] = useState({
    blob: "",
    name: "",
    type: "",
    size: 0,
  });

  const handleUploadimg = (event) => {
    const selectedimg = event.target.files[0];
    if (selectedimg) {
      convertImageToBlob(1, selectedimg);
    } else {
      setuploadProfileimg({ blob: "", name: "", type: "", size: 0 });
    }
  };

  const convertImageToBlob = (id, selectedimg) => {
    const reader = new FileReader();
    reader.onloadend = function (e) {
      setuploadProfileimg({
        blob: reader.result,
        name: selectedimg.name,
        type: selectedimg.type,
        size: selectedimg.size,
      });
    };
    reader.readAsDataURL(selectedimg);
  };

  const onImageClose = () => {
    setuploadProfileimg({ blob: "", name: "", type: "", size: 0 });
  };

  return (
    <div className="JoinUs">
      <h3 className="OctaHeaderlight centered flex-column">
        Join Us
        <p>Join Us</p>
      </h3>

      <div className="Contactbannertext centered">
        <p className="container m-0">personal information</p>
      </div>

      <div>
        <Formik
          initialValues={{
            firstName: "",
            middleName: "",
            lastName: "",
            streetAddress: "",
            streetAddressLine2: "",
            city: "",
            state: "",
            postal: "",
            country: "",
            occupation: "",
            maritalStatus: "",

            areaCode: "",
            phone: "",
            month: "",
            day: "",
            year: "",
            gender: "",
            employer: "",
            email: "",
            reffertype: "",

            profileImg: "",
            CV: "",
          }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }

            if (!values.firstName) {
              errors.firstName = "Required";
            }

            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            errors,
            handleBlur,
            handleChange,
            handleSubmit,
            isSubmitting,
            touched,
            values,
          }) => (
            <Form>
              <Grid
                container
                md={12}
                className="container JoinusGrid d-flex flex-colimn "
              >
                <label htmlFor="" className="mb-4">
                  <div
                    className=" ProfileimgBox"
                    style={{ backgroundImage: `url(${uploadProfileimg.blob})` }}
                  >
                    {uploadProfileimg.blob ? (
                      <>
                        <Box
                          sx={{
                            position: "relative",
                          }}
                        >
                          <IconButton
                            edge="start"
                            color="inherit"
                            onClick={() => {
                              onImageClose();
                            }}
                            aria-label="close"
                            size="small"
                            sx={{
                              position: "absolute",
                              right: "0px",
                              zIndex: "10 ",
                            }}
                          >
                            <CloseIcon />
                          </IconButton>
                        </Box>
                      </>
                    ) : (
                      <>
                        <Box className="centered w-100" sx={{ height: "100%" }}>
                          Upload Image
                        </Box>
                      </>
                    )}

                    <Input
                      accept="image/png, image/jpg, image/jpeg"
                      id="uploadimage"
                      type="file"
                      // name="uploadimage"
                      className={`${
                        uploadProfileimg.blob
                          ? "imguploaded inputStyle"
                          : "imgNOTuploaded inputStyle"
                      }`}
                      onChange={handleUploadimg}
                      style={{ opacity: "01" }}
                    />
                    {/* <input type="file" id="files" class="hidden" style={{ opacity: "0" }} /> */}
                    {/* <label for="uploadimage centered" className='UploadPicbtn' >
                      Upload Image
                    </label> */}
                  </div>

                  <div className="mt-5">
                    {uploadProfileimg.type != "" ? (
                      uploadProfileimg.type != "image/png" &&
                      uploadProfileimg.type != "image/jpeg" &&
                      uploadProfileimg.type != "image/jpg" ? (
                        <Typography align="center" color="red">
                          Accept only png, jepg, jpg formats
                        </Typography>
                      ) : null
                    ) : null}

                    {uploadProfileimg.size > 5000000 ? (
                      <Typography align="center" color="red">
                        Maximum Size limit is 5MB
                      </Typography>
                    ) : null}
                  </div>
                </label>

                <Grid
                  container
                  xs={12}
                  className="d-flex justify-content-between"
                >
                  <Grid
                    item
                    md={7.6}
                    xs={12}
                    className=" d-flex flex-column"
                    style={{ rowGap: "50px" }}
                  >
                    <Grid
                      container
                      xs={12}
                      className=" w-100 d-flex justify-content-between"
                    >
                      <Grid item md={3.8} xs={12} className="">
                        <TextField
                          fullWidth
                          className="FormTextfield"
                          id="firstName"
                          name="firstName"
                          label="First Name"
                          value={values.firstName}
                          onChange={handleChange}
                          error={touched.firstName && Boolean(errors.firstName)}
                          helperText={touched.firstName && errors.firstName}
                        />
                      </Grid>

                      <Grid item md={3.8} xs={12} className="">
                        <TextField
                          fullWidth
                          className="FormTextfield"
                          id="middleName"
                          name="middleName"
                          label="Middle Name"
                          value={values.middleName}
                          onChange={handleChange}
                          error={
                            touched.middleName && Boolean(errors.middleName)
                          }
                          helperText={touched.middleName && errors.middleName}
                        />
                      </Grid>

                      <Grid item md={3.8} xs={12} className="">
                        <TextField
                          fullWidth
                          className="FormTextfield"
                          id="lastName"
                          name="lastName"
                          label="Last Name"
                          value={values.lastName}
                          onChange={handleChange}
                          error={touched.lastName && Boolean(errors.lastName)}
                          helperText={touched.lastName && errors.lastName}
                        />
                      </Grid>
                    </Grid>

                    <div className="w-100 d-flex">
                      <TextField
                        fullWidth
                        className="FormTextfield"
                        id="streetAddress"
                        name="streetAddress"
                        label="Street Address"
                        value={values.streetAddress}
                        onChange={handleChange}
                        error={
                          touched.streetAddress && Boolean(errors.streetAddress)
                        }
                        helperText={
                          touched.streetAddress && errors.streetAddress
                        }
                      />
                    </div>

                    <div className="w-100 d-flex">
                      <TextField
                        fullWidth
                        className="FormTextfield"
                        id="streetAddressLine2"
                        name="streetAddressLine2"
                        label="Street Address Line 2"
                        value={values.streetAddressLine2}
                        onChange={handleChange}
                        error={
                          touched.streetAddressLine2 &&
                          Boolean(errors.streetAddressLine2)
                        }
                        helperText={
                          touched.streetAddressLine2 &&
                          errors.streetAddressLine2
                        }
                      />
                    </div>

                    <Grid
                      container
                      xs={12}
                      className="w-100 d-flex justify-content-between"
                    >
                      <Grid item md={4.8} xs={12}>
                        <TextField
                          fullWidth
                          className="FormTextfield"
                          id="city"
                          name="city"
                          label="City"
                          value={values.city}
                          onChange={handleChange}
                          error={touched.city && Boolean(errors.city)}
                          helperText={touched.city && errors.city}
                        />
                      </Grid>

                      <Grid item md={4.8} xs={12}>
                        <TextField
                          fullWidth
                          className="FormTextfield"
                          id="state"
                          name="state"
                          label="State / Province"
                          value={values.state}
                          onChange={handleChange}
                          error={touched.state && Boolean(errors.state)}
                          helperText={touched.state && errors.state}
                        />
                      </Grid>
                    </Grid>

                    <Grid
                      container
                      xs={12}
                      className="w-100 d-flex justify-content-between"
                    >
                      <Grid item md={4.8} xs={12}>
                        <TextField
                          fullWidth
                          className="FormTextfield"
                          id="postal"
                          name="postal"
                          label="Postal / Zip Code"
                          value={values.postal}
                          onChange={handleChange}
                          error={touched.postal && Boolean(errors.postal)}
                          helperText={touched.postal && errors.postal}
                        />
                      </Grid>

                      <Grid item md={4.8} xs={12}>
                        <TextField
                          fullWidth
                          className="FormTextfield"
                          id="country"
                          name="country"
                          label="Country"
                          value={values.country}
                          onChange={handleChange}
                          error={touched.country && Boolean(errors.country)}
                          helperText={touched.country && errors.country}
                        />
                      </Grid>
                    </Grid>

                    <Grid
                      container
                      xs={12}
                      className="w-100 d-flex justify-content-between"
                    >
                      <Grid item md={4.8} xs={12}>
                        <TextField
                          fullWidth
                          className="FormTextfield"
                          id="occupation"
                          name="occupation"
                          label="Occupation"
                          value={values.occupation}
                          onChange={handleChange}
                          error={
                            touched.occupation && Boolean(errors.occupation)
                          }
                          helperText={touched.occupation && errors.occupation}
                        />
                      </Grid>

                      <Grid item md={4.8} xs={12}>
                        <TextField
                          fullWidth
                          className="FormTextfield"
                          id="maritalStatus"
                          name="maritalStatus"
                          label="marital status"
                          value={values.maritalStatus}
                          onChange={handleChange}
                          error={
                            touched.maritalStatus &&
                            Boolean(errors.maritalStatus)
                          }
                          helperText={
                            touched.maritalStatus && errors.maritalStatus
                          }
                        />
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid
                    item
                    md={3.6}
                    xs={12}
                    className=" d-flex flex-column"
                    style={{ rowGap: "50px" }}
                  >
                    <Grid
                      container
                      xs={12}
                      className="w-100 d-flex justify-content-between"
                    >
                      <Grid item md={3.8} xs={12} className="">
                        <TextField
                          fullWidth
                          className="FormTextfield"
                          id="areaCode"
                          name="areaCode"
                          label="Code"
                          value={values.areaCode}
                          onChange={handleChange}
                          error={touched.areaCode && Boolean(errors.areaCode)}
                          helperText={touched.areaCode && errors.areaCode}
                        />
                      </Grid>
                      <Grid item md={7.8} xs={12} className="">
                        <TextField
                          fullWidth
                          className="FormTextfield"
                          id="phone"
                          name="phone"
                          label="Phone Number"
                          value={values.phone}
                          onChange={handleChange}
                          error={touched.phone && Boolean(errors.phone)}
                          helperText={touched.phone && errors.phone}
                        />
                      </Grid>
                    </Grid>

                    <Grid
                      container
                      xs={12}
                      className="w-100 d-flex justify-content-between"
                    >
                      <Grid item md={3.8} xs={12} className="">
                        <TextField
                          fullWidth
                          className="FormTextfield"
                          id="month"
                          name="month"
                          label="Month"
                          value={values.month}
                          onChange={handleChange}
                          error={touched.month && Boolean(errors.month)}
                          helperText={touched.month && errors.month}
                        />
                      </Grid>

                      <Grid item md={3.8} xs={12} className="">
                        <TextField
                          fullWidth
                          className="FormTextfield"
                          id="day"
                          name="day"
                          label="Day"
                          value={values.day}
                          onChange={handleChange}
                          error={touched.day && Boolean(errors.day)}
                          helperText={touched.day && errors.day}
                        />
                      </Grid>

                      <Grid item md={3.8} xs={12} className="">
                        <TextField
                          fullWidth
                          className="FormTextfield"
                          id="year"
                          name="year"
                          label="Year"
                          value={values.year}
                          onChange={handleChange}
                          error={touched.year && Boolean(errors.year)}
                          helperText={touched.year && errors.year}
                        />
                      </Grid>
                    </Grid>

                    <div>
                      <TextField
                        fullWidth
                        className="FormTextfield"
                        id="gender"
                        name="gender"
                        label="Gender"
                        value={values.gender}
                        onChange={handleChange}
                        error={touched.gender && Boolean(errors.gender)}
                        helperText={touched.gender && errors.gender}
                      />
                    </div>

                    <div>
                      <TextField
                        fullWidth
                        className="FormTextfield"
                        id="employer"
                        name="employer"
                        label="Employer"
                        value={values.employer}
                        onChange={handleChange}
                        error={touched.employer && Boolean(errors.employer)}
                        helperText={touched.employer && errors.employer}
                      />
                    </div>

                    <div>
                      <TextField
                        fullWidth
                        className="FormTextfield"
                        id="email"
                        name="email"
                        label="email"
                        value={values.email}
                        onChange={handleChange}
                        error={touched.email && Boolean(errors.email)}
                        helperText={touched.email && errors.email}
                      />
                    </div>

                    <div>
                      <TextField
                        fullWidth
                        className="FormTextfield"
                        id="reffertype"
                        name="reffertype"
                        label="how were you reffered to our office?"
                        value={values.reffertype}
                        onChange={handleChange}
                        error={touched.reffertype && Boolean(errors.reffertype)}
                        helperText={touched.reffertype && errors.reffertype}
                      />
                    </div>
                  </Grid>
                </Grid>

                <Button className="UploadResume">Upload Your Resume</Button>

                <div className=" d-flex ml-auto ms-auto ">
                  <Button className="ResetButton">Reset</Button>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="SubmitButton"
                  >
                    Submit
                  </Button>
                </div>
              </Grid>
            </Form>
          )}
        </Formik>
      </div>

      <AddressSection />
    </div>
  );
}

export default JoinusPage;
