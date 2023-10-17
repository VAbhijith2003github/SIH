import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './styles.css';
const Registraton = () => {
    return (



        <div className="content-wrapper my-12">



            <div className="container">

                <div className="mt-n5">

                </div>

                <div className="row">

                    <form id="application-form" action="/index.php/personal/form/personal" method="post" enctype="multipart/form-data">
                        <input type="hidden" name="_csrf" value="JBYPTG1OK6Sg8SnW18w-4n5OQ_64UqSIXvq0Onyvww5pfF4qN3gG_c7IapmB-mTQCjcKhPJmys4GlOVoT-q2bA==" />
                        <div className="my-8">
                            <div className="alert alert-danger" style={{ display: 'none' }}><h4 className="jui-fix-errors mb-5">Please fix the following errors and submit the form again!</h4><ul></ul></div>            </div>



                        <div className="card">
                            <div className="card-header fw-bold border-bottom">
                                Personal Details
                            </div>
                            <div className="card-body py-8">
                                <div className="row">

                                    <div className="col-md-6"><div className="mb-3 field-jiuserpersonal-name required">
                                        <label className="form-label" for="jiuserpersonal-name">Full Name of the Applicant</label>
                                        <input type="text" id="jiuserpersonal-name" className="form-control" name="JIUserPersonal[name]" value=" " aria-required="true" />

                                        <div className="invalid-feedback"></div>
                                    </div></div>
                                    <div className="col-md-6"><div className="mb-3 field-jiuserpersonal-gender required">
                                        <label className="form-label" for="jiuserpersonal-gender">Applicant's Gender</label>
                                        <select id="jiuserpersonal-gender" className="form-select" name="JIUserPersonal[gender]" aria-required="true">
                                            <option value="">Select</option>
                                            <option value="1">Male</option>
                                            <option value="2">Female</option>
                                            <option value="3">Other</option>
                                        </select>

                                        <div className="invalid-feedback"></div>
                                    </div></div>
                                    <div className="col-md-6"><div className="mb-3 field-jiuserpersonal-hindi_name">
                                        <label className="form-label" for="jiuserpersonal-hindi_name">Name in Devanagari/Hindi</label>
                                        <input type="text" id="jiuserpersonal-hindi_name" className="form-control" name="JIUserPersonal[hindi_name]" maxlength="128" />

                                        <div className="invalid-feedback"></div>
                                    </div></div>
                                    <div className="col-md-6">
                                        <label className="control-label mb-2 small" style={{ 'fontWeight': 500 }}>Applicant's Date of Birth<sup style={{ color: 'red' }}>*</sup></label>
                                        <div className="row">
                                            <div className="col-md-4"><div className="mb-3 field-jiuserpersonal-dobday required">

                                                <select id="jiuserpersonal-dobday" className="form-select" name="JIUserPersonal[dobDay]" aria-required="true">
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
                                            </div></div>
                                            <div className="col-md-4"><div className="mb-3 field-jiuserpersonal-dobmonth required">

                                                <select id="jiuserpersonal-dobmonth" className="form-select" name="JIUserPersonal[dobMonth]" aria-required="true">
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
                                            </div></div>
                                            <div className="col-md-4"><div className="mb-3 field-jiuserpersonal-dobyear required">

                                                <select id="jiuserpersonal-dobyear" className="form-select" name="JIUserPersonal[dobYear]" aria-required="true">
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
                                            </div></div>
                                        </div>
                                    </div>
                                    <div className="col-md-6"><div className="mb-3 field-jiuserpersonal-age required">
                                        <label className="form-label" for="jiuserpersonal-age">Age as on Jan 1, 2023</label>
                                        <input type="text" id="jiuserpersonal-age" className="form-control" name="JIUserPersonal[age]" readonly="" maxlength="255" aria-required="true" />

                                        <div className="invalid-feedback"></div>
                                    </div></div>
                                    <div className="col-md-6" id="">
                                        <div className="mb-3 field-jiuserpersonal-category required">
                                            <label className="form-label" for="jiuserpersonal-category">Category</label>
                                            <select id="jiuserpersonal-category" className="form-select" name="JIUserPersonal[category]" aria-required="true">
                                                <option value="">Select</option>
                                                <option value="1">General</option>
                                                <option value="6">OBC (Central List, Non Creamy)</option>
                                                <option value="3">SC</option>
                                                <option value="4">ST</option>
                                                <option value="5">EWS</option>
                                            </select>

                                            <div className="invalid-feedback"></div>
                                        </div>            </div>

                                    <div className="col-md-12 bg-info" id="category_certificate" style={{ display: 'none' }}>
                                        <div className="col-md-12" id="valid_certificate" style={{ display: 'none' }}>
                                            <div className="mb-3 field-jiuserpersonal-valid_certificate_no">

                                                <input type="hidden" id="jiuserpersonal-valid_certificate_no" className="form-control" name="JIUserPersonal[valid_certificate_no]" value="" />

                                                <div className="invalid-feedback"></div>
                                            </div>                </div>
                                        <div id="crtnumber" style={{ display: 'none' }}>
                                            <div className="col-md-12"><div className="mb-3 field-jiuserpersonal-category_certificate_no">
                                                <label className="form-label" for="jiuserpersonal-category_certificate_no">Category Certificate No</label>
                                                <input type="text" id="jiuserpersonal-category_certificate_no" className="form-control" name="JIUserPersonal[category_certificate_no]" />

                                                <div className="invalid-feedback"></div>
                                            </div></div>
                                            <div className="col-md-12"><div className="mb-3 field-jiuserpersonal-category_certificate_issuing_date">
                                                <label className="form-label" for="jiuserpersonal-category_certificate_issuing_date">Category Certificate Issuing Date</label>
                                                <input type="text" id="jiuserpersonal-category_certificate_issuing_date" className="form-control hasDatepicker" name="JIUserPersonal[category_certificate_issuing_date]" placeholder="Select Date" autocomplete="off" />


                                                <div className="invalid-feedback"></div>
                                            </div></div>
                                        </div>
                                        <div className="col-md-12 bg-info" id="ews_income" style={{ display: 'none' }}>
                                            <div className="col-md-12"><div className="mb-3 field-jiuserpersonal-ews_annual_family_income">
                                                <label className="form-label" for="jiuserpersonal-ews_annual_family_income">Annual Family Income</label>
                                                <input type="text" id="jiuserpersonal-ews_annual_family_income" className="form-control" name="JIUserPersonal[ews_annual_family_income]" />

                                                <div className="invalid-feedback"></div>
                                            </div></div>
                                        </div>
                                        <div className="col-md-12 bg-info" id="message" style={{ display: 'none', color: 'white' }}>
                                            <p>Candidates who belong to EWS/ OBC-NCL/ SC/ ST category have to upload a valid certificate for claiming the reservation in the GOI prescribed format (the OBC-NCL/EWS candidates who are unable to submit the valid Category Certificate  due to the COVID-19 pandemic at the time of application/ registration, s/he may submit the declaration to produce the valid Category Certificate within the specified date, failing which his/ her candidature will not be considered under the respective category). Certificate issued ONLY by authorized officials shall be valid.
                                            </p>

                                            <strong>Undertaking: </strong>
                                            <p>I hereby declare that I do belong to the OBC (Non-Creamy Layer)/ EWS as per the latest notification of the Government of India, and will produce/ submit the valid Category Certificate duly approved/ signed by the competent authority by the specified time to the Admission Committee. In case, I fail to do so, my candidature will not be considered under the respective category and any decision of the Admission Committee (2021) will be final and binding.
                                            </p>                </div>
                                    </div>


                                    <div className="row">
                                        <div className="col-md-6"><div className="mb-3 field-jiuserpersonal-email required">
                                            <label className="form-label" for="jiuserpersonal-email">Applicant's Registered Email</label>
                                            <input type="text" id="jiuserpersonal-email" className="form-control" name="JIUserPersonal[email]" value=" " readonly="" aria-required="true" />

                                            <div className="invalid-feedback"></div>
                                        </div></div>
                                        <div className="col-md-6"><div className="mb-3 field-jiuserpersonal-alternateemail">
                                            <label className="form-label" for="jiuserpersonal-alternateemail">Alternate Email</label>
                                            <input type="text" id="jiuserpersonal-alternateemail" className="form-control" name="JIUserPersonal[alternateEmail]" />

                                            <div className="invalid-feedback"></div>
                                        </div></div>
                                        <div className="col-md-6"><div className="mb-3 field-jiuserpersonal-mobile required">
                                            <label className="form-label" for="jiuserpersonal-mobile">Registered Mobile Number</label>
                                            <input type="text" id="jiuserpersonal-mobile" className="form-control" name="JIUserPersonal[mobile]" value=" " readonly="" aria-required="true" />

                                            <div className="invalid-feedback"></div>
                                        </div></div>
                                        <div className="col-md-6"><div className="mb-3 field-jiuserpersonal-alternatemobile">
                                            <label className="form-label" for="jiuserpersonal-alternatemobile">Alternate Mobile Number (Parent's/Guardian's)</label>
                                            <input type="text" id="jiuserpersonal-alternatemobile" className="form-control" name="JIUserPersonal[alternateMobile]" />

                                            <div className="invalid-feedback"></div>
                                        </div></div>
                                        <div className="col-md-6"><div className="mb-3 field-jiuserpersonal-nationality required">
                                            <label className="form-label" for="jiuserpersonal-nationality">Citizen of India</label>
                                            <select id="jiuserpersonal-nationality" className="form-select" name="JIUserPersonal[nationality]" aria-required="true">
                                                <option value="">Select</option>
                                                <option value="1">Yes</option>
                                                <option value="0">No</option>
                                            </select>

                                            <div className="invalid-feedback"></div>
                                        </div><div className="mb-3 field-jiuserpersonal-domicilestate">

                                                <input type="hidden" id="jiuserpersonal-domicilestate" className="form-control" name="JIUserPersonal[domicileState]" value="1658" />

                                                <div className="invalid-feedback"></div>
                                            </div>                </div>

                                        <div className="col-md-6">
                                            <div id="o_nationality" style={{ display: 'none' }}>
                                                <div className="mb-3 field-jiuserpersonal-othernationality">
                                                    <label className="form-label" for="jiuserpersonal-othernationality">Citizenship (Other than India)</label>
                                                    <select id="jiuserpersonal-othernationality" className="form-select" name="JIUserPersonal[otherNationality]">
                                                        <option value="">Select</option>
                                                        <option value="Afghanistan">Afghanistan</option>
                                                        <option value="Aland Islands">Aland Islands</option>
                                                        <option value="Albania">Albania</option>
                                                        <option value="Algeria">Algeria</option>
                                                        <option value="American Samoa">American Samoa</option>
                                                        <option value="Andorra">Andorra</option>
                                                        <option value="Angola">Angola</option>
                                                        <option value="Anguilla">Anguilla</option>
                                                        <option value="Antarctica">Antarctica</option>
                                                        <option value="Antigua And Barbuda">Antigua And Barbuda</option>
                                                        <option value="Argentina">Argentina</option>
                                                        <option value="Armenia">Armenia</option>
                                                        <option value="Aruba">Aruba</option>
                                                        <option value="Australia">Australia</option>
                                                        <option value="Austria">Austria</option>
                                                        <option value="Azerbaijan">Azerbaijan</option>
                                                        <option value="Bahamas The">Bahamas The</option>
                                                        <option value="Bahrain">Bahrain</option>
                                                        <option value="Bangladesh">Bangladesh</option>
                                                        <option value="Barbados">Barbados</option>
                                                        <option value="Belarus">Belarus</option>
                                                        <option value="Belgium">Belgium</option>
                                                        <option value="Belize">Belize</option>
                                                        <option value="Benin">Benin</option>
                                                        <option value="Bermuda">Bermuda</option>
                                                        <option value="Bhutan">Bhutan</option>
                                                        <option value="Bolivia">Bolivia</option>
                                                        <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                                        <option value="Botswana">Botswana</option>
                                                        <option value="Bouvet Island">Bouvet Island</option>
                                                        <option value="Brazil">Brazil</option>
                                                        <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                                                        <option value="Brunei">Brunei</option>
                                                        <option value="Bulgaria">Bulgaria</option>
                                                        <option value="Burkina Faso">Burkina Faso</option>
                                                        <option value="Burundi">Burundi</option>
                                                        <option value="Cambodia">Cambodia</option>
                                                        <option value="Cameroon">Cameroon</option>
                                                        <option value="Canada">Canada</option>
                                                        <option value="Cape Verde">Cape Verde</option>
                                                        <option value="Cayman Islands">Cayman Islands</option>
                                                        <option value="Central African Republic">Central African Republic</option>
                                                        <option value="Chad">Chad</option>
                                                        <option value="Chile">Chile</option>
                                                        <option value="China">China</option>
                                                        <option value="Christmas Island">Christmas Island</option>
                                                        <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                                                        <option value="Colombia">Colombia</option>
                                                        <option value="Comoros">Comoros</option>
                                                        <option value="Congo">Congo</option>
                                                        <option value="Congo The Democratic Republic Of The">Congo The Democratic Republic Of The</option>
                                                        <option value="Cook Islands">Cook Islands</option>
                                                        <option value="Costa Rica">Costa Rica</option>
                                                        <option value="Cote D'Ivoire (Ivory Coast)">Cote D'Ivoire (Ivory Coast)</option>
                                                        <option value="Croatia (Hrvatska)">Croatia (Hrvatska)</option>
                                                        <option value="Cuba">Cuba</option>
                                                        <option value="Cyprus">Cyprus</option>
                                                        <option value="Czech Republic">Czech Republic</option>
                                                        <option value="Denmark">Denmark</option>
                                                        <option value="Djibouti">Djibouti</option>
                                                        <option value="Dominica">Dominica</option>
                                                        <option value="Dominican Republic">Dominican Republic</option>
                                                        <option value="East Timor">East Timor</option>
                                                        <option value="Ecuador">Ecuador</option>
                                                        <option value="Egypt">Egypt</option>
                                                        <option value="El Salvador">El Salvador</option>
                                                        <option value="Equatorial Guinea">Equatorial Guinea</option>
                                                        <option value="Eritrea">Eritrea</option>
                                                        <option value="Estonia">Estonia</option>
                                                        <option value="Ethiopia">Ethiopia</option>
                                                        <option value="Falkland Islands">Falkland Islands</option>
                                                        <option value="Faroe Islands">Faroe Islands</option>
                                                        <option value="Fiji Islands">Fiji Islands</option>
                                                        <option value="Finland">Finland</option>
                                                        <option value="France">France</option>
                                                        <option value="French Guiana">French Guiana</option>
                                                        <option value="French Polynesia">French Polynesia</option>
                                                        <option value="French Southern Territories">French Southern Territories</option>
                                                        <option value="Gabon">Gabon</option>
                                                        <option value="Gambia The">Gambia The</option>
                                                        <option value="Georgia">Georgia</option>
                                                        <option value="Germany">Germany</option>
                                                        <option value="Ghana">Ghana</option>
                                                        <option value="Gibraltar">Gibraltar</option>
                                                        <option value="Greece">Greece</option>
                                                        <option value="Greenland">Greenland</option>
                                                        <option value="Grenada">Grenada</option>
                                                        <option value="Guadeloupe">Guadeloupe</option>
                                                        <option value="Guam">Guam</option>
                                                        <option value="Guatemala">Guatemala</option>
                                                        <option value="Guernsey and Alderney">Guernsey and Alderney</option>
                                                        <option value="Guinea">Guinea</option>
                                                        <option value="Guinea-Bissau">Guinea-Bissau</option>
                                                        <option value="Guyana">Guyana</option>
                                                        <option value="Haiti">Haiti</option>
                                                        <option value="Heard and McDonald Islands">Heard and McDonald Islands</option>
                                                        <option value="Honduras">Honduras</option>
                                                        <option value="Hong Kong S.A.R.">Hong Kong S.A.R.</option>
                                                        <option value="Hungary">Hungary</option>
                                                        <option value="Iceland">Iceland</option>
                                                        <option value="Indonesia">Indonesia</option>
                                                        <option value="Iran">Iran</option>
                                                        <option value="Iraq">Iraq</option>
                                                        <option value="Ireland">Ireland</option>
                                                        <option value="Israel">Israel</option>
                                                        <option value="Italy">Italy</option>
                                                        <option value="Jamaica">Jamaica</option>
                                                        <option value="Japan">Japan</option>
                                                        <option value="Jersey">Jersey</option>
                                                        <option value="Jordan">Jordan</option>
                                                        <option value="Kazakhstan">Kazakhstan</option>
                                                        <option value="Kenya">Kenya</option>
                                                        <option value="Kiribati">Kiribati</option>
                                                        <option value="Korea North">Korea North</option>
                                                        <option value="Korea South">Korea South</option>
                                                        <option value="Kuwait">Kuwait</option>
                                                        <option value="Kyrgyzstan">Kyrgyzstan</option>
                                                        <option value="Laos">Laos</option>
                                                        <option value="Latvia">Latvia</option>
                                                        <option value="Lebanon">Lebanon</option>
                                                        <option value="Lesotho">Lesotho</option>
                                                        <option value="Liberia">Liberia</option>
                                                        <option value="Libya">Libya</option>
                                                        <option value="Liechtenstein">Liechtenstein</option>
                                                        <option value="Lithuania">Lithuania</option>
                                                        <option value="Luxembourg">Luxembourg</option>
                                                        <option value="Macau S.A.R.">Macau S.A.R.</option>
                                                        <option value="Macedonia">Macedonia</option>
                                                        <option value="Madagascar">Madagascar</option>
                                                        <option value="Malawi">Malawi</option>
                                                        <option value="Malaysia">Malaysia</option>
                                                        <option value="Maldives">Maldives</option>
                                                        <option value="Mali">Mali</option>
                                                        <option value="Malta">Malta</option>
                                                        <option value="Man (Isle of)">Man (Isle of)</option>
                                                        <option value="Marshall Islands">Marshall Islands</option>
                                                        <option value="Martinique">Martinique</option>
                                                        <option value="Mauritania">Mauritania</option>
                                                        <option value="Mauritius">Mauritius</option>
                                                        <option value="Mayotte">Mayotte</option>
                                                        <option value="Mexico">Mexico</option>
                                                        <option value="Micronesia">Micronesia</option>
                                                        <option value="Moldova">Moldova</option>
                                                        <option value="Monaco">Monaco</option>
                                                        <option value="Mongolia">Mongolia</option>
                                                        <option value="Montenegro">Montenegro</option>
                                                        <option value="Montserrat">Montserrat</option>
                                                        <option value="Morocco">Morocco</option>
                                                        <option value="Mozambique">Mozambique</option>
                                                        <option value="Myanmar">Myanmar</option>
                                                        <option value="Namibia">Namibia</option>
                                                        <option value="Nauru">Nauru</option>
                                                        <option value="Nepal">Nepal</option>
                                                        <option value="Netherlands Antilles">Netherlands Antilles</option>
                                                        <option value="Netherlands The">Netherlands The</option>
                                                        <option value="New Caledonia">New Caledonia</option>
                                                        <option value="New Zealand">New Zealand</option>
                                                        <option value="Nicaragua">Nicaragua</option>
                                                        <option value="Niger">Niger</option>
                                                        <option value="Nigeria">Nigeria</option>
                                                        <option value="Niue">Niue</option>
                                                        <option value="Norfolk Island">Norfolk Island</option>
                                                        <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                                                        <option value="Norway">Norway</option>
                                                        <option value="Oman">Oman</option>
                                                        <option value="Other">Other</option>
                                                        <option value="Pakistan">Pakistan</option>
                                                        <option value="Palau">Palau</option>
                                                        <option value="Palestinian Territory Occupied">Palestinian Territory Occupied</option>
                                                        <option value="Panama">Panama</option>
                                                        <option value="Papua new Guinea">Papua new Guinea</option>
                                                        <option value="Paraguay">Paraguay</option>
                                                        <option value="Peru">Peru</option>
                                                        <option value="Philippines">Philippines</option>
                                                        <option value="Pitcairn Island">Pitcairn Island</option>
                                                        <option value="Poland">Poland</option>
                                                        <option value="Portugal">Portugal</option>
                                                        <option value="Puerto Rico">Puerto Rico</option>
                                                        <option value="Qatar">Qatar</option>
                                                        <option value="Reunion">Reunion</option>
                                                        <option value="Romania">Romania</option>
                                                        <option value="Russia">Russia</option>
                                                        <option value="Rwanda">Rwanda</option>
                                                        <option value="Saint Helena">Saint Helena</option>
                                                        <option value="Saint Kitts And Nevis">Saint Kitts And Nevis</option>
                                                        <option value="Saint Lucia">Saint Lucia</option>
                                                        <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                                                        <option value="Saint Vincent And The Grenadines">Saint Vincent And The Grenadines</option>
                                                        <option value="Saint-Barthelemy">Saint-Barthelemy</option>
                                                        <option value="Saint-Martin (French part)">Saint-Martin (French part)</option>
                                                        <option value="Samoa">Samoa</option>
                                                        <option value="San Marino">San Marino</option>
                                                        <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                                                        <option value="Saudi Arabia">Saudi Arabia</option>
                                                        <option value="Senegal">Senegal</option>
                                                        <option value="Serbia">Serbia</option>
                                                        <option value="Seychelles">Seychelles</option>
                                                        <option value="Sierra Leone">Sierra Leone</option>
                                                        <option value="Singapore">Singapore</option>
                                                        <option value="Slovakia">Slovakia</option>
                                                        <option value="Slovenia">Slovenia</option>
                                                        <option value="Solomon Islands">Solomon Islands</option>
                                                        <option value="Somalia">Somalia</option>
                                                        <option value="South Africa">South Africa</option>
                                                        <option value="South Georgia">South Georgia</option>
                                                        <option value="South Sudan">South Sudan</option>
                                                        <option value="Spain">Spain</option>
                                                        <option value="Sri Lanka">Sri Lanka</option>
                                                        <option value="Sudan">Sudan</option>
                                                        <option value="Suriname">Suriname</option>
                                                        <option value="Svalbard And Jan Mayen Islands">Svalbard And Jan Mayen Islands</option>
                                                        <option value="Swaziland">Swaziland</option>
                                                        <option value="Sweden">Sweden</option>
                                                        <option value="Switzerland">Switzerland</option>
                                                        <option value="Syria">Syria</option>
                                                        <option value="Taiwan">Taiwan</option>
                                                        <option value="Tajikistan">Tajikistan</option>
                                                        <option value="Tanzania">Tanzania</option>
                                                        <option value="Thailand">Thailand</option>
                                                        <option value="Togo">Togo</option>
                                                        <option value="Tokelau">Tokelau</option>
                                                        <option value="Tonga">Tonga</option>
                                                        <option value="Trinidad And Tobago">Trinidad And Tobago</option>
                                                        <option value="Tunisia">Tunisia</option>
                                                        <option value="Turkey">Turkey</option>
                                                        <option value="Turkmenistan">Turkmenistan</option>
                                                        <option value="Turks And Caicos Islands">Turks And Caicos Islands</option>
                                                        <option value="Tuvalu">Tuvalu</option>
                                                        <option value="Uganda">Uganda</option>
                                                        <option value="Ukraine">Ukraine</option>
                                                        <option value="United Arab Emirates">United Arab Emirates</option>
                                                        <option value="United Kingdom">United Kingdom</option>
                                                        <option value="United States">United States</option>
                                                        <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                                                        <option value="Uruguay">Uruguay</option>
                                                        <option value="Uzbekistan">Uzbekistan</option>
                                                        <option value="Vanuatu">Vanuatu</option>
                                                        <option value="Vatican City State (Holy See)">Vatican City State (Holy See)</option>
                                                        <option value="Venezuela">Venezuela</option>
                                                        <option value="Vietnam">Vietnam</option>
                                                        <option value="Virgin Islands (British)">Virgin Islands (British)</option>
                                                        <option value="Virgin Islands (US)">Virgin Islands (US)</option>
                                                        <option value="Wallis And Futuna Islands">Wallis And Futuna Islands</option>
                                                        <option value="Western Sahara">Western Sahara</option>
                                                        <option value="Yemen">Yemen</option>
                                                        <option value="Zambia">Zambia</option>
                                                        <option value="Zimbabwe">Zimbabwe</option>
                                                    </select>

                                                    <div className="invalid-feedback"></div>
                                                </div>                    </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div id="o_religion" style={{ display: 'none' }}>
                                                <div className="mb-3 field-jiuserpersonal-otherreligion">
                                                    <label className="form-label" for="jiuserpersonal-otherreligion">Other Religion</label>
                                                    <input type="text" id="jiuserpersonal-otherreligion" className="form-control" name="JIUserPersonal[otherReligion]" />

                                                    <div className="invalid-feedback"></div>
                                                </div>                    </div>
                                        </div>

                                    </div>

                                    <div id="o_nationality1" style={{ display: 'none' }}>
                                        <div className="row">
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-4"><div className="mb-3 field-jiuserpersonal-minority">

                                            <input type="hidden" id="jiuserpersonal-minority" className="form-control" name="JIUserPersonal[minority]" value="0" />

                                            <div className="invalid-feedback"></div>
                                        </div></div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6"><div className="mb-3 field-jiuserpersonal-id_proof required">
                                            <label className="form-label" for="jiuserpersonal-id_proof">ID Proof (Govt. approved Identity Proof with address details) </label>
                                            <select id="jiuserpersonal-id_proof" className="form-select" name="JIUserPersonal[id_proof]" aria-required="true">
                                                <option value="">Select Id Proof</option>
                                                <option value="Voter ID Card">Voter ID Card</option>
                                                <option value="Pan Card">Pan Card</option>
                                                <option value=" Ration Card"> Ration Card</option>
                                                <option value="Indian Passport">Indian Passport</option>
                                                <option value="Overseas Citizenship of India">Overseas Citizenship of India</option>
                                                <option value=" Driving Licencse in India"> Driving Licencse in India</option>
                                                <option value="Other Accepted ID as per Prospectus ">Other Accepted ID as per Prospectus </option>
                                            </select>

                                            <div className="invalid-feedback"></div>
                                        </div></div>
                                        <div className="col-md-6" id="id_proof_other" style={{ display: 'none' }}><div className="mb-3 field-jiuserpersonal-id_proof_other">
                                            <label className="form-label" for="jiuserpersonal-id_proof_other">Name of the other Govt. approved Identity Proof with address details</label>
                                            <input type="text" id="jiuserpersonal-id_proof_other" className="form-control" name="JIUserPersonal[id_proof_other]" maxlength="50" />

                                            <div className="invalid-feedback"></div>
                                        </div></div>
                                        <div className="col-md-6" id="id_proof_no" style={{ display: 'none' }}>
                                            <div className="mb-3 field-jiuserpersonal-id_proof_no">
                                                <label className="form-label" for="jiuserpersonal-id_proof_no">ID Proof No</label>
                                                <input type="text" id="jiuserpersonal-id_proof_no" className="form-control" name="JIUserPersonal[id_proof_no]" prompt="Address Proof ID No" />

                                                <div className="invalid-feedback"></div>
                                            </div>                        </div>
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
                                    <div className="col-md-6"><div className="mb-3 field-jiuserpersonal-placeofbirthvillage required">
                                        <label className="form-label" for="jiuserpersonal-placeofbirthvillage">Village/Town/City</label>
                                        <input type="text" id="jiuserpersonal-placeofbirthvillage" className="form-control" name="JIUserPersonal[placeOfBirthVillage]" maxlength="100" aria-required="true" />

                                        <div className="invalid-feedback"></div>
                                    </div></div>
                                    <div className="col-md-6"><div className="mb-3 field-jiuserpersonal-placeofbirthcountry required">
                                        <label className="form-label" for="jiuserpersonal-placeofbirthcountry">Country</label>
                                        <input type="text" id="jiuserpersonal-placeofbirthcountry" className="form-control" name="JIUserPersonal[placeOfBirthCountry]" maxlength="100" aria-required="true" />

                                        <div className="invalid-feedback"></div>
                                    </div></div>
                                    <div className="col-md-6"><div className="mb-3 field-jiuserpersonal-placeofbirthstate required">
                                        <label className="form-label" for="jiuserpersonal-placeofbirthstate">State</label>
                                        <input type="text" id="jiuserpersonal-placeofbirthstate" className="form-control" name="JIUserPersonal[placeOfBirthState]" maxlength="100" aria-required="true" />

                                        <div className="invalid-feedback"></div>
                                    </div></div>
                                    <div className="col-md-6"><div className="mb-3 field-jiuserpersonal-placeofbirthdistrict required">
                                        <label className="form-label" for="jiuserpersonal-placeofbirthdistrict">District</label>
                                        <input type="text" id="jiuserpersonal-placeofbirthdistrict" className="form-control" name="JIUserPersonal[placeOfBirthDistrict]" maxlength="100" aria-required="true" />

                                        <div className="invalid-feedback"></div>
                                    </div></div>
                                </div>
                            </div>
                        </div>
                        <div className="card mt-8">
                            <div className="card-header fw-bold border-bottom">
                                Family Details
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-6"><div className="mb-3 field-jiuserpersonal-mothername required">
                                        <label className="form-label" for="jiuserpersonal-mothername">Mother's Name</label>
                                        <input type="text" id="jiuserpersonal-mothername" className="form-control" name="JIUserPersonal[motherName]" aria-required="true" />

                                        <div className="invalid-feedback"></div>
                                    </div></div>
                                    <div className="col-md-6"><div className="mb-3 field-jiuserpersonal-guardian required">
                                        <label className="form-label" for="jiuserpersonal-guardian">Father's Name</label>
                                        <input type="text" id="jiuserpersonal-guardian" className="form-control" name="JIUserPersonal[guardian]" aria-required="true" />

                                        <div className="invalid-feedback"></div>
                                    </div></div>


                                    <div className="col-md-6"><div className="mb-3 field-jiuserpersonal-emergency_mobile_of_parent required">
                                        <label className="form-label" for="jiuserpersonal-emergency_mobile_of_parent">Emergency Contact Number</label>
                                        <input type="text" id="jiuserpersonal-emergency_mobile_of_parent" className="form-control" name="JIUserPersonal[emergency_mobile_of_parent]" aria-required="true" />

                                        <div className="invalid-feedback"></div>
                                    </div></div>
                                </div>
                            </div>
                        </div>
                       
                        


                        <div className="card mt-8">
                            <div className="card-header fw-bold border-bottom">
                                <strong>Other Category/Quota</strong>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-6"><div className="mb-3 field-jiuserpersonal-pwdcategory required">
                                        <label className="form-label" for="jiuserpersonal-pwdcategory">Person with Benchmark Disabilities (PwBD) Category</label>
                                        <select id="jiuserpersonal-pwdcategory" className="form-select" name="JIUserPersonal[pwdCategory]" aria-required="true">
                                            <option value="">Select</option>
                                            <option value="0">Not Applicable</option>
                                            <option value="1">Physical</option>
                                            <option value="2">Visual</option>
                                            <option value="3">Hearing</option>
                                            <option value="21">Any other as defined by Govt of India</option>
                                        </select>

                                        <div className="invalid-feedback"></div>
                                    </div></div>
                                    <div className="col-md-6" id="pwdother" style={{ display: 'none' }}>
                                        <div className="mb-3 field-jiuserpersonal-pwdcategory_other">
                                            <label className="form-label" for="jiuserpersonal-pwdcategory_other">Name of the Disability</label>
                                            <input type="text" id="jiuserpersonal-pwdcategory_other" className="form-control" name="JIUserPersonal[pwdCategory_other]" prompt="Specify PWD Category" />

                                            <div className="invalid-feedback"></div>
                                        </div>                                            </div>
                                    <div className="col-md-6" id="pwdpercent" style={{ display: 'none' }}><div className="mb-3 field-jiuserpersonal-pwdcategory_percentage">
                                        <label className="form-label" for="jiuserpersonal-pwdcategory_percentage">Disability Percentage</label>
                                        <input type="text" id="jiuserpersonal-pwdcategory_percentage" className="form-control" name="JIUserPersonal[pwdCategory_percentage]" prompt="Specify PWD Percentage" />

                                        <div className="invalid-feedback"></div>
                                    </div></div>
                                    <div className="col-md-6" style={{ display: 'none' }} id="pwdWar"><div className="mb-3 field-jiuserpersonal-pwd_war">

                                        <input type="hidden" id="jiuserpersonal-pwd_war" className="form-control" name="JIUserPersonal[pwd_war]" value="0" />

                                        <div className="invalid-feedback"></div>
                                    </div>
                                        <div className="mb-3 field-jiuserpersonal-pwd_uuid">

                                            <input type="hidden" id="jiuserpersonal-pwd_uuid" className="form-control" name="JIUserPersonal[pwd_uuid]" value="NA" />

                                            <div className="invalid-feedback"></div>
                                        </div></div>
                                </div>
                                <div className="row">

                                </div>
                            </div>
                        </div>


                        <div id="jiuser-address-form">

                            <div className="card mt-8">

                                <div className="card-header fw-bold border-bottom">
                                    Address
                                </div>

                                <div className="card-body jui-form-fieldset">
                                    <div className="row">
                                        <div className="jui-partition">
                                            <strong className="mb-3 d-block">Correspondence Address</strong>
                                            <div className="row">
                                                <div className="col-md-6"><div className="mb-3 field-jiuseraddress-addline1 required">
                                                    <label className="form-label" for="jiuseraddress-addline1">Address</label>
                                                    <input type="text" id="jiuseraddress-addline1" className="form-control" name="JIUserAddress[addLine1]" maxlength="128" aria-required="true" />

                                                    <div className="invalid-feedback"></div>
                                                </div></div>
                                                <div className="col-md-6"><div className="mb-3 field-jiuseraddress-addline2 required">
                                                    <label className="form-label" for="jiuseraddress-addline2">District</label>
                                                    <input type="text" id="jiuseraddress-addline2" className="form-control" name="JIUserAddress[addLine2]" maxlength="128" aria-required="true" />

                                                    <div className="invalid-feedback"></div>
                                                </div></div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div><div className="mb-3 field-jiuseraddress-country required">
                                                        <label className="form-label" for="jiuseraddress-country">Country</label>
                                                        <select id="jiuseraddress-country" className="form-control select2-hidden-accessible" name="JIUserAddress[country]" autocomplete="off1697489203" aria-required="true" data-s2-options="s2options_6cc131ae" data-krajee-select2="select2_9af09101" style={{ width: '1px', height: '1px', visibility: 'hidden' }} data-select2-id="jiuseraddress-country" tabindex="-1" aria-hidden="true">
                                                            <option value="" data-select2-id="2">Select</option>
                                                            <option value="101">India</option>
                                                           
                                                        </select><span className="select2 select2-container select2-container--bootstrap" dir="ltr" data-select2-id="1" style={{ width: 'auto' }}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-jiuseraddress-country-container"><span className="select2-selection__rendered" id="select2-jiuseraddress-country-container" role="textbox" aria-readonly="true"><span className="select2-selection__placeholder">Select</span></span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span>

                                                        <div className="invalid-feedback"></div>
                                                    </div></div>
                                                    <div id="o_country" style={{ display: 'none' }}> <div className="mb-3 field-jiuseraddress-othercountry">
                                                        <label className="form-label" for="jiuseraddress-othercountry"></label>
                                                        <input type="text" id="jiuseraddress-othercountry" className="form-control" name="JIUserAddress[otherCountry]" maxlength="128" placeholder="Enter Other Country" />

                                                        <div className="invalid-feedback"></div>
                                                    </div></div>
                                                </div>

                                                <div className="col-md-6"><input type="hidden" id="selected_id_state" name="selected_id_state" value="" /><div className="mb-3 field-jiuseraddress-state required">
                                                    <label className="form-label" for="jiuseraddress-state">State</label>
                                                    <select id="jiuseraddress-state" className="form-control select2-hidden-accessible" name="JIUserAddress[state]" aria-required="true" data-krajee-depdrop="depdrop_91c4b4ba" data-s2-options="s2options_6cc131ae" data-krajee-select2="select2_5d1b34f4" style={{ width: '1px', height: '1px', visibility: 'hidden' }} data-select2-id="jiuseraddress-state" tabindex="-1" aria-hidden="true">
                                                        <option value="" data-select2-id="4">Select State</option>
                                                        <option value=""></option>
                                                    </select><span className="select2 select2-container select2-container--bootstrap select2-container--disabled" dir="ltr" data-select2-id="3" style={{ width: 'auto' }}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-disabled="true" aria-labelledby="select2-jiuseraddress-state-container"><span className="select2-selection__rendered" id="select2-jiuseraddress-state-container" role="textbox" aria-readonly="true"><span className="select2-selection__placeholder">Select State</span></span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span>

                                                    <div className="invalid-feedback"></div>
                                                </div>                            <div id="o_state" style={{ display: 'none' }}><div className="mb-3 field-jiuseraddress-otherstate">
                                                    <label className="form-label" for="jiuseraddress-otherstate"></label>
                                                    <input type="text" id="jiuseraddress-otherstate" className="form-control" name="JIUserAddress[otherState]" maxlength="128" placeholder="Enter Other State" />

                                                    <div className="invalid-feedback"></div>
                                                </div></div>

                                                </div>
                                                <div className="col-md-6">
                                                    <div className="mb-3 field-jiuseraddress-city required">
                                                        <label className="form-label" for="jiuseraddress-city">City</label>
                                                        <input type="text" id="jiuseraddress-city" className="form-control" name="JIUserAddress[city]" maxlength="197" aria-required="true" />

                                                        <div className="invalid-feedback"></div>
                                                    </div>                        </div>
                                                <div className="col-md-6"><div className="mb-3 field-jiuseraddress-pincode required">
                                                    <label className="form-label" for="jiuseraddress-pincode">Pincode</label>
                                                    <input type="text" id="jiuseraddress-pincode" className="form-control" name="JIUserAddress[pincode]" maxlength="6" aria-required="true" />

                                                    <div className="invalid-feedback"></div>
                                                </div>                            <span style={{ color: '#a94442', marginTop: '5px', marginBottom: '10px', fontSize: '0.8em' }} id="ppincode"></span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <strong className="mt-6 mb-3">Permanent Address &nbsp; <input type="checkbox" id="add_checkbox" /> &nbsp;Click if Same As
                                                Correspondence Address</strong>
                                            <div className="col-md-6"><div className="mb-3 field-jiuseraddress-peraddline1 required">
                                                <label className="form-label" for="jiuseraddress-peraddline1">Address</label>
                                                <input type="text" id="jiuseraddress-peraddline1" className="form-control" name="JIUserAddress[perAddLine1]" maxlength="128" aria-required="true" />

                                                <div className="invalid-feedback"></div>
                                            </div></div>
                                            <div className="col-md-6"><div className="mb-3 field-jiuseraddress-peraddline2 required">
                                                <label className="form-label" for="jiuseraddress-peraddline2">District</label>
                                                <input type="text" id="jiuseraddress-peraddline2" className="form-control" name="JIUserAddress[perAddLine2]" maxlength="128" aria-required="true" />

                                                <div className="invalid-feedback"></div>
                                            </div></div>
                                            <div className="col-md-6"><div className="mb-3 field-jiuseraddress-percountry required">
                                                <label className="form-label" for="jiuseraddress-percountry">Country</label>
                                                <select id="jiuseraddress-percountry" className="form-control select2-hidden-accessible" name="JIUserAddress[perCountry]" autocomplete="off1697489203" aria-required="true" data-s2-options="s2options_6cc131ae" data-krajee-select2="select2_9af09101" style={{ width: '1px', height: '1px', visibility: 'hidden' }} data-select2-id="jiuseraddress-percountry" tabindex="-1" aria-hidden="true">
                                                    <option value="" data-select2-id="6">Select</option>
                                                    <option value="101">India</option>
                                                    
                                                </select><span className="select2 select2-container select2-container--bootstrap" dir="ltr" data-select2-id="5" style={{ width: 'auto' }}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-jiuseraddress-percountry-container"><span className="select2-selection__rendered" id="select2-jiuseraddress-percountry-container" role="textbox" aria-readonly="true"><span className="select2-selection__placeholder">Select</span></span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span>

                                                <div className="invalid-feedback"></div>
                                            </div>                        <div id="op_country" style={{ display: 'none' }}> <div className="mb-3 field-jiuseraddress-otherpercountry">
                                                <label className="form-label" for="jiuseraddress-otherpercountry"></label>
                                                <input type="text" id="jiuseraddress-otherpercountry" className="form-control" name="JIUserAddress[otherPerCountry]" maxlength="128" placeholder="Enter Other Residential Country" />

                                                <div className="invalid-feedback"></div>
                                            </div></div>
                                            </div>
                                            <div className="col-md-6"><input type="hidden" id="selected_id_per_state" name="selected_id_per_state" value="" /><div className="mb-3 field-jiuseraddress-perstate required">
                                                <label className="form-label" for="jiuseraddress-perstate">State</label>
                                                <select id="jiuseraddress-perstate" className="form-control select2-hidden-accessible" name="JIUserAddress[perState]" aria-required="true" data-krajee-depdrop="depdrop_a4fc7973" data-s2-options="s2options_6cc131ae" data-krajee-select2="select2_5d1b34f4" style={{ width: '1px', height: '1px', visibility: 'hidden' }} data-select2-id="jiuseraddress-perstate" tabindex="-1" aria-hidden="true">
                                                    <option value="" data-select2-id="8">Select State</option>
                                                    <option value=""></option>
                                                </select><span className="select2 select2-container select2-container--bootstrap select2-container--disabled" dir="ltr" data-select2-id="7" style={{ width: 'auto' }}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-disabled="true" aria-labelledby="select2-jiuseraddress-perstate-container"><span className="select2-selection__rendered" id="select2-jiuseraddress-perstate-container" role="textbox" aria-readonly="true"><span className="select2-selection__placeholder">Select State</span></span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span>

                                                <div className="invalid-feedback"></div>
                                            </div>                        <div id="op_state" style={{ display: 'none' }}><div className="mb-3 field-jiuseraddress-otherperstate">
                                                <label className="form-label" for="jiuseraddress-otherperstate"></label>
                                                <input type="text" id="jiuseraddress-otherperstate" className="form-control" name="JIUserAddress[otherPerState]" maxlength="128" placeholder="Enter Other Residential State" />

                                                <div className="invalid-feedback"></div>
                                            </div></div>
                                            </div>
                                            <div className="col-md-6"> <div className="mb-3 field-jiuseraddress-percity required">
                                                <label className="form-label" for="jiuseraddress-percity">City</label>
                                                <input type="text" id="jiuseraddress-percity" className="form-control" name="JIUserAddress[perCity]" maxlength="197" aria-required="true" />

                                                <div className="invalid-feedback"></div>
                                            </div>                    </div>
                                            <div className="col-md-6"><div className="mb-3 field-jiuseraddress-perpin required">
                                                <label className="form-label" for="jiuseraddress-perpin">Pin Code</label>
                                                <input type="text" id="jiuseraddress-perpin" className="form-control" name="JIUserAddress[perPin]" maxlength="6" aria-required="true" />

                                                <div className="invalid-feedback"></div>
                                            </div>                        <span style={{ color: '#a94442', marginTop: '5px', marginBottom: '10px', fontSize: '0.8em' }} id="oppincode"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div className="card my-12">
                            <div className="card-body text-center">
                                <button type="submit" id="confirmation-alert" className="btn btn-success w-full w-md-auto">Save and Next</button>                </div>
                        </div>

                    </form>
                </div>

            </div>

        </div>




    );
}

export default Registraton;