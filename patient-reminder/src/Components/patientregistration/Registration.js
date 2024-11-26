import React, { useState, useEffect } from "react";
import { useDataQuery } from "@dhis2/app-runtime";
import { registerPatient } from "./Api";
import "./Registration.css";
import {
  Button,
  NoticeBox,
  CircularLoader,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@dhis2/ui";

// Query to fetch organization units
const orgUnitQuery = {
  organisationUnits: {
    resource: "organisationUnits.json",
    params: {
      level: 2,
      fields: "id,name",
      paging: false,
    },
  },
};

const Registration = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    phone: "",
    address: "",
    orgUnit: "",
  });

  const [orgUnits, setOrgUnits] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [enrollmentSuccess, setEnrollmentSuccess] = useState(false);

  const { loading, error, data } = useDataQuery(orgUnitQuery);

  useEffect(() => {
    if (data?.organisationUnits?.organisationUnits) {
      setOrgUnits(data.organisationUnits.organisationUnits);
    }
  }, [data]);

  const handleChange = ({ target: { name, value } }) =>
    setFormData((prev) => ({ ...prev, [name]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setEnrollmentSuccess(false);

    try {
      const response = await registerPatient(formData);
      if (response.status === "OK") {
        setEnrollmentSuccess(true);
      }
    } catch (err) {
      console.error("Error registering patient:", err);
      alert("Error registering patient. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderLoadingState = () => (
    <div className="loader">
      <CircularLoader />
      <p>Loading organization units...</p>
    </div>
  );

  const renderErrorState = () => (
    <div className="error">Error fetching organization units</div>
  );

  const renderForm = () => (
    <form onSubmit={handleSubmit} className="registration-form">
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="dob"
        placeholder="Date of Birth"
        value={formData.dob}
        onChange={handleChange}
        required
      />
      <div className="gender-selection">
        <label>
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={formData.gender === "Male"}
            onChange={handleChange}
            required
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={formData.gender === "Female"}
            onChange={handleChange}
            required
          />
          Female
        </label>
      </div>
      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="address"
        placeholder="Address"
        value={formData.address}
        onChange={handleChange}
      />
      <select
        name="orgUnit"
        value={formData.orgUnit}
        onChange={handleChange}
        required
      >
        <option value="">Select Organization Unit</option>
        {orgUnits.map(({ id, name }) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
      </select>
      <div className="form-buttons">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Registering..." : "Register"}
        </Button>
        <Button type="reset">Cancel</Button>
      </div>
    </form>
  );

  const renderTable = () => (
    <div className="org-unit-table">
      <h3>Available Organization Units</h3>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orgUnits.map(({ id, name }) => (
            <TableRow key={id}>
              <TableCell>{id}</TableCell>
              <TableCell>{name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );

  return (
    <div className="registration-container">
      <h2>Patient Registration</h2>
      {loading && renderLoadingState()}
      {error && renderErrorState()}
      {!loading && !error && (
        <>
          {renderForm()}
          {enrollmentSuccess && (
            <NoticeBox title="Success" success>
              Patient Registered Successfully!
            </NoticeBox>
          )}
          {renderTable()}
        </>
      )}
    </div>
  );
};

export default Registration;