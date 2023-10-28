import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./styles.register.css";
const Registraton = () => {
  return (
    <div className="content-wrapper my-12">
      <div className="container">
        <div className="mt-n5"></div>
        <div className="row">
          <form id="application-form" action="http://localhost:3001/register">
            <input type="hidden" />
            <div className="my-8">
              <div className="alert alert-danger" style={{ display: "none" }}>
                <h4 className="jui-fix-errors mb-5">
                  Please fix the following errors and submit the form again!
                </h4>
                <ul></ul>
              </div>{" "}
            </div>

            <div className="card">
              <div className="card-header fw-bold border-bottom">
                Personal Details
              </div>
              <div className="card-body py-8">
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3 field-jiuserpersonal-name required">
                      <label className="form-label" for="jiuserpersonal-name">
                        Full Name of the Applicant
                      </label>
                      <input
                        type="text"
                        id="jiuserpersonal-name"
                        className="form-control"
                        name="JIUserPersonal[name]"
                        aria-required="true"
                      />

                      <div className="invalid-feedback"></div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3 field-jiuserpersonal-gender required">
                      <label className="form-label" for="jiuserpersonal-gender">
                        Applicant's Gender
                      </label>
                      <select
                        id="jiuserpersonal-gender"
                        className="form-select"
                        name="JIUserPersonal[gender]"
                        aria-required="true"
                      >
                        <option value="">Select</option>
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                        <option value="3">Other</option>
                      </select>

                      <div className="invalid-feedback"></div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <label
                      className="control-label mb-2 small"
                      style={{ fontWeight: 500 }}
                    >
                      Applicant's Date of Birth
                      <sup style={{ color: "red" }}>*</sup>
                    </label>
                    <div className="row">
                      <div className="col-md-4">
                        <div className="mb-3 field-jiuserpersonal-dobday required">
                          <select
                            id="jiuserpersonal-dobday"
                            className="form-select"
                            name="JIUserPersonal[dobDay]"
                            aria-required="true"
                          >
                            <option value="">Day</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                            <option value="25">25</option>
                            <option value="26">26</option>
                            <option value="27">27</option>
                            <option value="28">28</option>
                            <option value="29">29</option>
                            <option value="30">30</option>
                            <option value="31">31</option>
                          </select>

                          <div className="invalid-feedback"></div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="mb-3 field-jiuserpersonal-dobmonth required">
                          <select
                            id="jiuserpersonal-dobmonth"
                            className="form-select"
                            name="JIUserPersonal[dobMonth]"
                            aria-required="true"
                          >
                            <option value="">Month</option>
                            <option value="1">January</option>
                            <option value="2">February</option>
                            <option value="3">March</option>
                            <option value="4">April</option>
                            <option value="5">May</option>
                            <option value="6">June</option>
                            <option value="7">July</option>
                            <option value="8">August</option>
                            <option value="9">September</option>
                            <option value="10">October</option>
                            <option value="11">November</option>
                            <option value="12">December</option>
                          </select>

                          <div className="invalid-feedback"></div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="mb-3 field-jiuserpersonal-dobyear required">
                          <select
                            id="jiuserpersonal-dobyear"
                            className="form-select"
                            name="JIUserPersonal[dobYear]"
                            aria-required="true"
                          >
                            <option value="">Year</option>
                            <option value="2023">2023</option>
                            <option value="2022">2022</option>
                            <option value="2021">2021</option>
                            <option value="2020">2020</option>
                            <option value="2019">2019</option>
                            <option value="2018">2018</option>
                            <option value="2017">2017</option>
                            <option value="2016">2016</option>
                            <option value="2015">2015</option>
                            <option value="2014">2014</option>
                            <option value="2013">2013</option>
                            <option value="2012">2012</option>
                            <option value="2011">2011</option>
                            <option value="2010">2010</option>
                            <option value="2009">2009</option>
                            <option value="2008">2008</option>
                            <option value="2007">2007</option>
                            <option value="2006">2006</option>
                            <option value="2005">2005</option>
                            <option value="2004">2004</option>
                            <option value="2003">2003</option>
                            <option value="2002">2002</option>
                            <option value="2001">2001</option>
                            <option value="2000">2000</option>
                            <option value="1999">1999</option>
                            <option value="1998">1998</option>
                            <option value="1997">1997</option>
                            <option value="1996">1996</option>
                            <option value="1995">1995</option>
                            <option value="1994">1994</option>
                            <option value="1993">1993</option>
                            <option value="1992">1992</option>
                            <option value="1991">1991</option>
                            <option value="1990">1990</option>
                            <option value="1989">1989</option>
                            <option value="1988">1988</option>
                            <option value="1987">1987</option>
                            <option value="1986">1986</option>
                            <option value="1985">1985</option>
                            <option value="1984">1984</option>
                            <option value="1983">1983</option>
                            <option value="1982">1982</option>
                            <option value="1981">1981</option>
                            <option value="1980">1980</option>
                            <option value="1979">1979</option>
                            <option value="1978">1978</option>
                            <option value="1977">1977</option>
                            <option value="1976">1976</option>
                            <option value="1975">1975</option>
                            <option value="1974">1974</option>
                            <option value="1973">1973</option>
                            <option value="1972">1972</option>
                            <option value="1971">1971</option>
                            <option value="1970">1970</option>
                            <option value="1969">1969</option>
                            <option value="1968">1968</option>
                            <option value="1967">1967</option>
                            <option value="1966">1966</option>
                            <option value="1965">1965</option>
                            <option value="1964">1964</option>
                            <option value="1963">1963</option>
                            <option value="1962">1962</option>
                            <option value="1961">1961</option>
                            <option value="1960">1960</option>
                            <option value="1959">1959</option>
                            <option value="1958">1958</option>
                            <option value="1957">1957</option>
                            <option value="1956">1956</option>
                            <option value="1955">1955</option>
                            <option value="1954">1954</option>
                            <option value="1953">1953</option>
                            <option value="1952">1952</option>
                            <option value="1951">1951</option>
                            <option value="1950">1950</option>
                            <option value="1949">1949</option>
                            <option value="1948">1948</option>
                            <option value="1947">1947</option>
                            <option value="1946">1946</option>
                            <option value="1945">1945</option>
                            <option value="1944">1944</option>
                            <option value="1943">1943</option>
                            <option value="1942">1942</option>
                            <option value="1941">1941</option>
                            <option value="1940">1940</option>
                            <option value="1939">1939</option>
                            <option value="1938">1938</option>
                            <option value="1937">1937</option>
                            <option value="1936">1936</option>
                            <option value="1935">1935</option>
                            <option value="1934">1934</option>
                            <option value="1933">1933</option>
                            <option value="1932">1932</option>
                            <option value="1931">1931</option>
                            <option value="1930">1930</option>
                          </select>

                          <div className="invalid-feedback"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3 field-jiuserpersonal-email required">
                        <label
                          className="form-label"
                          for="jiuserpersonal-email"
                        >
                          Applicant's Registered Email
                        </label>
                        <input
                          type="text"
                          id="jiuserpersonal-email"
                          className="form-control"
                          name="JIUserPersonal[email]"
                          aria-required="true"
                        />

                        <div className="invalid-feedback"></div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3 field-jiuserpersonal-alternateemail">
                        <label
                          className="form-label"
                          for="jiuserpersonal-alternateemail"
                        >
                          Alternate Email
                        </label>
                        <input
                          type="text"
                          id="jiuserpersonal-alternateemail"
                          className="form-control"
                          name="JIUserPersonal[alternateEmail]"
                        />

                        <div className="invalid-feedback"></div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3 field-jiuserpersonal-mobile required">
                        <label
                          className="form-label"
                          for="jiuserpersonal-mobile"
                        >
                          Registered Mobile Number
                        </label>
                        <input
                          type="text"
                          id="jiuserpersonal-mobile"
                          className="form-control"
                          name="JIUserPersonal[mobile]"
                          aria-required="true"
                        />

                        <div className="invalid-feedback"></div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3 field-jiuserpersonal-alternatemobile">
                        <label
                          className="form-label"
                          for="jiuserpersonal-alternatemobile"
                        >
                          Alternate Mobile Number (Parent's/Guardian's)
                        </label>
                        <input
                          type="text"
                          id="jiuserpersonal-alternatemobile"
                          className="form-control"
                          name="JIUserPersonal[alternateMobile]"
                        />

                        <div className="invalid-feedback"></div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3 field-jiuserpersonal-nationality required">
                        <label
                          className="form-label"
                          for="jiuserpersonal-nationality"
                        >
                          Citizen of India
                        </label>
                        <select
                          id="jiuserpersonal-nationality"
                          className="form-select"
                          name="JIUserPersonal[nationality]"
                          aria-required="true"
                        >
                          <option value="">Select</option>
                          <option value="1">Yes</option>
                          <option value="0">No</option>
                        </select>

                        <div className="invalid-feedback"></div>
                      </div>
                      <div className="mb-3 field-jiuserpersonal-domicilestate">
                        <input
                          type="hidden"
                          id="jiuserpersonal-domicilestate"
                          className="form-control"
                          name="JIUserPersonal[domicileState]"
                        />

                        <div className="invalid-feedback"></div>
                      </div>{" "}
                    </div>
                  </div>

                  <div id="o_nationality1" style={{ display: "none" }}>
                    <div className="row"></div>
                  </div>
                  <div className="row">
                    <div className="col-4">
                      <div className="mb-3 field-jiuserpersonal-minority">
                        <input
                          type="hidden"
                          id="jiuserpersonal-minority"
                          className="form-control"
                          name="JIUserPersonal[minority]"
                        />

                        <div className="invalid-feedback"></div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3 field-jiuserpersonal-id_proof required">
                        <label
                          className="form-label"
                          for="jiuserpersonal-id_proof"
                        >
                          ID Proof (Govt. approved Identity Proof with address
                          details){" "}
                        </label>
                        <select
                          id="jiuserpersonal-id_proof"
                          className="form-select"
                          name="JIUserPersonal[id_proof]"
                          aria-required="true"
                        >
                          <option value="">Select Id Proof</option>
                          <option value="Voter ID Card">Voter ID Card</option>
                          <option value="Pan Card">Pan Card</option>
                          <option value=" Ration Card"> Ration Card</option>
                          <option value="Indian Passport">
                            Indian Passport
                          </option>
                          <option value="Overseas Citizenship of India">
                            Overseas Citizenship of India
                          </option>
                          <option value=" Driving Licencse in India">
                            {}
                            Driving Licencse in India
                          </option>
                          <option value="Other Accepted ID as per Prospectus ">
                            Other Accepted ID as per Prospectus{" "}
                          </option>
                        </select>

                        <div className="invalid-feedback"></div>
                      </div>
                    </div>
                    <div
                      className="col-md-6"
                      id="id_proof_other"
                      style={{ display: "none" }}
                    >
                      <div className="mb-3 field-jiuserpersonal-id_proof_other">
                        <label
                          className="form-label"
                          for="jiuserpersonal-id_proof_other"
                        >
                          Name of the other Govt. approved Identity Proof with
                          address details
                        </label>
                        <input
                          type="text"
                          id="jiuserpersonal-id_proof_other"
                          className="form-control"
                          name="JIUserPersonal[id_proof_other]"
                          maxlength="50"
                        />

                        <div className="invalid-feedback"></div>
                      </div>
                    </div>
                    <div
                      className="col-md-6"
                      id="id_proof_no"
                      style={{ display: "none" }}
                    >
                      <div className="mb-3 field-jiuserpersonal-id_proof_no">
                        <label
                          className="form-label"
                          for="jiuserpersonal-id_proof_no"
                        >
                          ID Proof No
                        </label>
                        <input
                          type="text"
                          id="jiuserpersonal-id_proof_no"
                          className="form-control"
                          name="JIUserPersonal[id_proof_no]"
                          prompt="Address Proof ID No"
                        />

                        <div className="invalid-feedback"></div>
                      </div>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mt-8">
              <div className="card-header fw-bold border-bottom">
                Place of Birth Details
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3 field-jiuserpersonal-placeofbirthvillage required">
                      <label
                        className="form-label"
                        for="jiuserpersonal-placeofbirthvillage"
                      >
                        Village/Town/City
                      </label>
                      <input
                        type="text"
                        id="jiuserpersonal-placeofbirthvillage"
                        className="form-control"
                        name="JIUserPersonal[placeOfBirthVillage]"
                        maxlength="100"
                        aria-required="true"
                      />

                      <div className="invalid-feedback"></div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3 field-jiuserpersonal-placeofbirthcountry required">
                      <label
                        className="form-label"
                        for="jiuserpersonal-placeofbirthcountry"
                      >
                        Country
                      </label>
                      <input
                        type="text"
                        id="jiuserpersonal-placeofbirthcountry"
                        className="form-control"
                        name="JIUserPersonal[placeOfBirthCountry]"
                        maxlength="100"
                        aria-required="true"
                      />

                      <div className="invalid-feedback"></div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3 field-jiuserpersonal-placeofbirthstate required">
                      <label
                        className="form-label"
                        for="jiuserpersonal-placeofbirthstate"
                      >
                        State
                      </label>
                      <input
                        type="text"
                        id="jiuserpersonal-placeofbirthstate"
                        className="form-control"
                        name="JIUserPersonal[placeOfBirthState]"
                        maxlength="100"
                        aria-required="true"
                      />

                      <div className="invalid-feedback"></div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3 field-jiuserpersonal-placeofbirthdistrict required">
                      <label
                        className="form-label"
                        for="jiuserpersonal-placeofbirthdistrict"
                      >
                        District
                      </label>
                      <input
                        type="text"
                        id="jiuserpersonal-placeofbirthdistrict"
                        className="form-control"
                        name="JIUserPersonal[placeOfBirthDistrict]"
                        maxlength="100"
                        aria-required="true"
                      />

                      <div className="invalid-feedback"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mt-8">
              <div className="card-header fw-bold border-bottom">
                Family Details
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3 field-jiuserpersonal-mothername required">
                      <label
                        className="form-label"
                        for="jiuserpersonal-mothername"
                      >
                        Mother's Name
                      </label>
                      <input
                        type="text"
                        id="jiuserpersonal-mothername"
                        className="form-control"
                        name="JIUserPersonal[motherName]"
                        aria-required="true"
                      />

                      <div className="invalid-feedback"></div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3 field-jiuserpersonal-guardian required">
                      <label
                        className="form-label"
                        for="jiuserpersonal-guardian"
                      >
                        Father's Name
                      </label>
                      <input
                        type="text"
                        id="jiuserpersonal-guardian"
                        className="form-control"
                        name="JIUserPersonal[guardian]"
                        aria-required="true"
                      />

                      <div className="invalid-feedback"></div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="mb-3 field-jiuserpersonal-emergency_mobile_of_parent required">
                      <label
                        className="form-label"
                        for="jiuserpersonal-emergency_mobile_of_parent"
                      >
                        Emergency Contact Number
                      </label>
                      <input
                        type="text"
                        id="jiuserpersonal-emergency_mobile_of_parent"
                        className="form-control"
                        name="JIUserPersonal[emergency_mobile_of_parent]"
                        aria-required="true"
                      />

                      <div className="invalid-feedback"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card my-12">
              <div className="card-body text-center">
                <button
                  type="submit"
                  id="confirmation-alert"
                  className="btn btn-success w-full w-md-auto"
                >
                  Save and Next
                </button>{" "}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registraton;
