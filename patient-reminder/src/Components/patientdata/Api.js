 import axios from "axios";


const api = axios.create({
  baseURL: "https://data.research.dhis2.org/in5320/api", 
  headers: {
    "Content-Type": "application/json",
    Authorization: "Basic " + btoa("admin:district"), 
  },
});


export const fetchRegisteredPatients = async (orgUnitId, programId) => {
  try {
    const response = await api.get("/trackedEntityInstances", {
      params: {
        ou: orgUnitId, 
        program: programId, 
        fields: "trackedEntityInstance,orgUnit,attributes", 
        paging: false, 
      },
    });

    
    return response.data.trackedEntityInstances.map((patient) => {
      const attributes = Object.fromEntries(
        patient.attributes.map((attr) => [attr.attribute, attr.value])
      );
      return {
        id: patient.trackedEntityInstance,
        orgUnit: patient.orgUnit,
        ...attributes, 
      };
    });
  } catch (error) {
    console.error("Error fetching registered patients:", error);
    throw error;
  }
};

(async () => {
  const orgUnitId = "PMa2VCrupOd"; 
  const programId = "x5T8A6QtcP2"; 
  try {
    const patients = await fetchRegisteredPatients(orgUnitId, programId);
    console.log("Registered Patients:", patients);
  } catch (error) {
    console.error("Failed to fetch patients:", error);
  }
})();
