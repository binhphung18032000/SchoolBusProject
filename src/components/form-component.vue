<template>
  <div class="container">
    <div id="schoolBusForm" class="col-md-12">
      <form role="form" id="registerForm" novalidate="novalidate">
        <fieldset>
          <!-- Parent's Information -->
          <legend>
            <p>Parent's Information</p>
            <i></i>
          </legend>
          <div class="col-md-12 wp-content">
            <div class="col-md-4">
              <label for="">1. Father/Guardian</label>
              <div class="col-md-12">
                <div class="form-group">
                  <label for="family-name"
                    >Family Name <span class="label-required">*</span></label
                  >
                  <input
                    id="family-name"
                    type="text"
                    class="form-control"
                    placeholder="eg: Waston"
                  />
                </div>
                <div class="form-group">
                  <label for="first-name"
                    >First Name <span class="label-required">*</span></label
                  >
                  <input
                    id="first-name"
                    type="text"
                    class="form-control"
                    placeholder="eg: John"
                  />
                </div>
                <div class="form-group">
                  <label for="mobile-phone"
                    >Mobile Phone (+65)
                    <span class="label-required">*</span></label
                  >
                  <input
                    id="mobile-phone"
                    type="text"
                    class="form-control"
                    placeholder="eg: 9876 5883"
                  />
                </div>
                <div class="form-group">
                  <label for="office-phone"
                    >Office Phone (+65)<span class="label-required"></span
                  ></label>
                  <input
                    id="office-phone"
                    type="text"
                    class="form-control"
                    placeholder="eg: 6273 8885 / 9876 5484"
                  />
                </div>
                <div class="form-group">
                  <label for="email-address"
                    >Email Address <span class="label-required">*</span></label
                  >
                  <input
                    id="email-address"
                    type="text"
                    class="form-control"
                    placeholder="eg: example@gmail.com"
                  />
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <label for="">2. Mother/Guardian</label>
              <div class="col-md-12">
                <div class="form-group">
                  <label for="mom-family-name"
                    >Family Name <span class="label-required">*</span></label
                  >
                  <input
                    id="mom-family-name"
                    type="text"
                    class="form-control"
                    placeholder="eg: Waston"
                  />
                </div>
                <div class="form-group">
                  <label for="mom-first-name"
                    >First Name <span class="label-required">*</span></label
                  >
                  <input
                    id="mom-first-name"
                    type="text"
                    class="form-control"
                    placeholder="eg: John"
                  />
                </div>
                <div class="form-group">
                  <label for="mom-mobile-phone"
                    >Mobile Phone (+65)
                    <span class="label-required">*</span></label
                  >
                  <input
                    id="mom-mobile-phone"
                    type="text"
                    class="form-control"
                    placeholder="eg: 9876 5883"
                  />
                </div>
                <div class="form-group">
                  <label for="mom-office-phone"
                    >Office Phone (+65)<span class="label-required"></span
                  ></label>
                  <input
                    id="mom-office-phone"
                    type="text"
                    class="form-control"
                    placeholder="eg: 6273 8885 / 9876 5484"
                  />
                </div>
                <div class="form-group">
                  <label for="mom-email-address"
                    >Email Address <span class="label-required">*</span></label
                  >
                  <input
                    id="mom-email-address"
                    type="text"
                    class="form-control"
                    placeholder="eg: example@gmail.com"
                  />
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <label for=""
                >3. Authorized Person (for Afternoon pick ups, if
                necessary)</label
              >
              <div class="col-md-12">
                <div class="form-group">
                  <label for="author-family-name"
                    >Family Name <span class="label-required">*</span></label
                  >
                  <input
                    id="author-family-name"
                    type="text"
                    class="form-control"
                    placeholder="eg: Waston"
                  />
                </div>
                <div class="form-group">
                  <label for="author-first-name"
                    >First Name <span class="label-required">*</span></label
                  >
                  <input
                    id="author-first-name"
                    type="text"
                    class="form-control"
                    placeholder="eg: John"
                  />
                </div>
                <div class="form-group">
                  <label for="author-mobile-phone"
                    >Mobile Phone (+65)
                    <span class="label-required">*</span></label
                  >
                  <input
                    id="author-mobile-phone"
                    type="text"
                    class="form-control"
                    placeholder="eg: 9876 5883"
                  />
                </div>
                <div class="form-group">
                  <label for="author-office-phone"
                    >Office Phone (+65)<span class="label-required"></span
                  ></label>
                  <input
                    id="author-office-phone"
                    type="text"
                    class="form-control"
                    placeholder="eg: 6273 8885 / 9876 5484"
                  />
                </div>
                <div class="form-group">
                  <label for="author-email-address"
                    >Email Address <span class="label-required"></span
                  ></label>
                  <input
                    id="author-email-address"
                    type="text"
                    class="form-control"
                    placeholder="eg: example@gmail.com"
                  />
                </div>
              </div>
            </div>
            <div class="col-md-12">
              <div class="form-group">
                <p class="text-center text-bold">
                  Please indicate the first point of contact for all matters,
                  include emergencies:
                </p>
                <ul class="text-center">
                  <div class="text-center">
                    <label>
                      <input
                        value="father"
                        type="radio"
                        class="form-check-input"
                        name="parent-pick"
                        checked
                      />
                      Father
                    </label>
                    <label class="pl-15"
                      ><input
                        value="mother"
                        type="radio"
                        class="form-check-input"
                        name="parent-pick"
                      />
                      Mother</label
                    >
                    <label class="pl-15"
                      ><input
                        value="guardian"
                        type="radio"
                        class="form-check-input"
                        name="parent-pick"
                      />
                      Guardian</label
                    >
                  </div>
                </ul>
              </div>
            </div>
          </div>
          <!------- END Parent's Information -------->
          <!------ Pick up/ Drop off Address ------->
          <legend>
            <p>
              Pick up/ Drop off Address (for Shuttle service riders, this will
              be your billing address)
            </p>
            <i></i>
          </legend>
          <div class="col-md-12 wp-content">
            <div class="col-md-12">
              <div class="form-group col-md-3">
                <label for="house-number"
                  >Block/ House Number
                  <span class="label-required">*</span></label
                >
                <input
                  id="house-number"
                  type="text"
                  class="form-control"
                  placeholder="eg: 123 / 123B"
                />
              </div>
              <div class="form-group col-md-6">
                <label for="street-name"
                  >Street Name <span class="label-required">*</span></label
                >
                <input
                  id="street-name"
                  type="text"
                  class="form-control"
                  placeholder="eg: Orchard Road"
                />
              </div>
              <div class="form-group col-md-3">
                <label for="postal-code"
                  >Postal Code <span class="label-required">*</span></label
                >
                <input
                  id="postal-code"
                  type="text"
                  class="form-control"
                  placeholder="eg: 123456"
                />
              </div>
            </div>
            <div class="col-md-12">
              <div class="form-group col-md-3">
                <label for="unit-number">Unit Number </label>
                <input
                  id="unit-number"
                  type="text"
                  class="form-control"
                  placeholder="eg: 01-15"
                />
              </div>
              <div class="form-group col-md-6">
                <label for="name-building"
                  >Name of Building / Condominium</label
                >
                <input
                  id="name-building"
                  type="text"
                  class="form-control"
                  placeholder="eg: Orchard Tower"
                />
              </div>
            </div>
          </div>
          <!------ END Pick up/ Drop off Address ------->
          <!------- Billing Address -------->
          <legend>
            <p>Billing Address</p>
            <i></i>
          </legend>
          <div class="col-md-12 wp-content">
            <div class="col-md-3">
              <div class="form-group col-md-12">
                <label class="text-center">
                  <input
                    id="father"
                    value="father"
                    type="checkbox"
                    class="form-check-input"
                    name="person-pick"
                  />
                  Same as above
                </label>
              </div>
            </div>
            <div class="col-md-6">
              <p class="text-center text-bold">
                Please tick the appropriate box regarding payment:
              </p>
              <ul class="text-center">
                <div class="text-center">
                  <label>
                    <input
                      value="father"
                      type="radio"
                      class="form-check-input"
                      name="billing-pick"
                      checked
                    />
                    Father
                  </label>
                  <label class="pl-15"
                    ><input
                      value="mother"
                      type="radio"
                      class="form-check-input"
                      name="billing-pick"
                    />
                    Mother</label
                  >
                  <label class="pl-15"
                    ><input
                      id="father"
                      value="father"
                      type="radio"
                      class="form-check-input"
                      name="billing-pick"
                    />
                    Details below</label
                  >
                </div>
              </ul>
            </div>
            <div class="col-md-3"></div>
            <div class="col-md-12">
              <div class="form-group col-md-6">
                <label for="name-company">Name of Company</label>
                <input
                  id="name-company"
                  type="text"
                  class="form-control"
                  placeholder="Please fill in full name. eg: Tree Pte Ltd"
                />
              </div>
              <div class="form-group col-md-6">
                <label for="attention-to">Attention to</label>
                <input
                  id="attention-to"
                  type="text"
                  class="form-control"
                  placeholder="eg: John"
                />
              </div>
            </div>
            <div class="col-md-12">
              <div class="form-group col-md-6">
                <label for="billing-address">Billing Address</label>
                <input
                  id="billing-address"
                  type="text"
                  class="form-control"
                  placeholder="Please fill in full address. eg: 3 Orchard Road, 01-15 Orchard Tower, Singapore 123456"
                />
              </div>
              <div class="form-group col-md-6">
                <label for="billing-email-address">Email Address</label>
                <input
                  id="billing-email-address"
                  type="text"
                  class="form-control"
                  placeholder="eg: example@gmail.com"
                />
              </div>
            </div>
          </div>
          <!------- END Billing Address -------->
          <!---- Child/Children's Information ---->
          <legend>
            <p>Child/Children's Information</p>
            <i></i>
          </legend>
          <div class="col-md-12 wp-content">
            <div class="col-md-8">
              <div class="pl-13 font-weght-700">
                <li style="list-style-type: decimal">Child</li>
              </div>
              <div class="form-group col-md-12">
                <label for="child-family-name"
                  >Family name <span class="label-required">*</span></label
                >
                <input
                  id="child-family-name"
                  type="text"
                  class="form-control"
                  placeholder="eg: Waston"
                />
              </div>
              <div class="form-group col-md-12">
                <label for="child-given-name"
                  >Given name <span class="label-required">*</span></label
                >
                <input
                  id="child-given-name"
                  type="text"
                  class="form-control"
                  placeholder="eg: Alice"
                />
              </div>
              <div class="form-group col-md-12">
                <label for="child-birth"
                  >Date of Birth <span class="label-required">*</span></label
                >
                <input
                  id="child-birth"
                  type="text"
                  class="form-control"
                  placeholder="eg: dd/mm/yyyy"
                />
              </div>
              <div class="form-group col-md-12">
                <label for="child-student-id">Student ID</label>
                <input
                  id="child-student-id"
                  type="text"
                  class="form-control"
                  placeholder="eg: 99985610001"
                />
              </div>
              <div class="form-group col-md-12">
                <label for="child-grade">Grade</label>
                <input
                  id="child-grade"
                  type="text"
                  class="form-control"
                  placeholder="eg: G1"
                />
              </div>
              <div class="form-group col-md-12">
                <label for=""
                  >Gender <span class="label-required">*</span></label
                >
                <label class="gender font-weight-label">
                  <input
                    type="radio"
                    class="form-check-input"
                    name="gender"
                    value="male"
                    checked
                  />
                  Male
                </label>
                <label class="gender font-weight-label">
                  <input
                    type="radio"
                    class="form-check-input"
                    name="gender"
                    value="female"
                  />
                  Female
                </label>
              </div>
              <div class="form-group col-md-12">
                <label for="child-date-service">Start date of service </label>
                <select id="child-date-service" class="form-control">
                  <option value="First day of semester">
                    First day of semester
                  </option>
                  <option value="data">Choose date</option>
                </select>
              </div>
              <div class="form-group col-md-12">
                <input
                  type="text"
                  class="form-control"
                  placeholder="eg: dd/mm/yyyy"
                />
              </div>
              <div class="form-group col-md-12">
                <strong class="d-block">For Regular Bus Service:</strong>
                <label class="ml-2" for="Route"
                  >Route <span class="label-required">*</span></label
                >
                <ul class="list-route">
                  <label class="label-route d-block">
                    <input
                      type="radio"
                      class="form-check-input"
                      name="route[1]"
                    />
                    2 Ways
                  </label>
                  <label class="label-route d-block">
                    <input
                      type="radio"
                      class="form-check-input"
                      name="route[1]"
                    />
                    1 Way (AM)
                  </label>
                  <label class="label-route d-block">
                    <input
                      type="radio"
                      class="form-check-input"
                      name="route[1]"
                    />
                    1 Way (PM)
                  </label>
                </ul>
              </div>
              <div class="form-group col-md-12">
                <strong class="d-block"
                  >For Cairnhill 9 Shuttle Service (Shuttle bus fees
                  apply):</strong
                >
                <label class="ml-2" for="Route"
                  >Route <span class="label-required">*</span></label
                >
                <ul class="list-route">
                  <label class="label-route d-block">
                    <input
                      type="radio"
                      class="form-check-input"
                      name="route[1]"
                    />
                    2 Ways
                  </label>
                  <label class="label-route d-block">
                    <input
                      type="radio"
                      class="form-check-input"
                      name="route[1]"
                    />
                    1 Way (AM)
                  </label>
                  <label class="label-route d-block">
                    <input
                      type="radio"
                      class="form-check-input"
                      name="route[1]"
                    />
                    1 Way (PM)
                  </label>
                </ul>
              </div>
              <div class="form-group col-md-12">
                <p>
                  Remarks: Invoice will be sent to parents once bus seat can be
                  confirmed. Transport charges are paid twice a year, before the
                  start of each semester.
                </p>
              </div>
              <div class="form-group col-md-12">
                <strong>
                  <u>Shuttle Services:</u>
                </strong>
                <div class="form-group col-md-12 mt-3">
                  <table class="shuttle-table">
                    <thead class="shuttle-thead-table">
                      <tr>
                        <th class="text-center">Shuttle Services</th>
                        <th class="text-center">Estimated Departure Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <u class="d-block">Morning</u>
                          From Cairnhill 9
                        </td>
                        <td>8:00 am</td>
                      </tr>
                      <tr>
                        <td>
                          <u class="d-block">Afternoon</u>
                          From School
                        </td>
                        <td>3:45 pm</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <strong>
                  <p>
                    Please be at the pick up point 10 minutes before the
                    estimated departure time. For afternoon arrivals, please
                    note that there is a no waiting policy for the shuttle
                    buses.
                  </p>
                  <p>
                    Parents who wish to ensure that their child will be
                    accompanied when they alight from the bus must ensure that
                    they are present and waiting before the bus arrives. The
                    Shuttle buses will not wait for parents to pick up their
                    children.
                  </p>
                </strong>
              </div>
              <div class="form-group col-md-12">
                <label for="medical-conditions">Medical conditions</label>
                <textarea
                  name="medical[1]"
                  id="medical-conditions"
                  class="form-control medical-conditions"
                  placeholder="Please include any medical condition that we need to take note of"
                ></textarea>
              </div>
            </div>

            <div class="col-md-4"></div>

            <div class="col-md-12"><hr class="green-line" /></div>
            <div class="col-md-12 text-center">
              <a class="btn btn-add-more-child" id="addMoreChild"
                >Add more children</a
              >
              <hr />
            </div>
          </div>
          <!---- END Child/Children's Information ---->
          <div class="col-md-10 col-md-offset-1 term">
            <p>
              Please read the
              <a href="T&C-Chatsworth.pdf" class="text-green" target="_blank"
                ><strong>Terms and Conditions & Bus Regulations</strong></a
              >
              carefully. This forms an integral part of our agreement in respect
              to bus transportation for your child. By submitting this form, you
              confirm that you agree to the terms and conditions contained
              herein and undertake to take responsibility for your child's
              adherence to the same.
            </p>
            <p>
              Applications must be received within the deadlines stipulated.
              <strong class="text-green"
                >Your application will take between 2 to 4 weeks to be
                processed.</strong
              >
              During high traffic periods, your application may take a little
              longer to be processed. You will be informed of the results of
              your application by email. Bus information will be sent to the
              email indicated by you to be the first point of contact. Please
              note that a seat for your child can only be confirmed when full
              payments has been received.
            </p>
            <p>
              All students are required to purchase a beacon. The beacon is a
              security feature that allows us to ascertain your child’s location
              when he is a rider on the bus on the bus. The yearly subscription
              of $25 (before GST) will be charged to your child’s transport
              fares. Replacement beacons are charged at $25 (before GST) a
              piece. These beacons are
              <strong class="text-green">non-transferable.</strong> Students on
              Shuttle buses do not need a beacon for travel.
            </p>
            <p>
              Bus Details will be provided to you via email. Please ensure that
              the email addresses provided to us are valid and are readily
              accessible by you.
            </p>
            <p>
              When using the School Bus Transport Service, the use of Child
              Safety Restraint (CSR)- (Ride Safer Vest) for all students up to
              Year 1 is strongly encouraged. Students who are less than 1.35
              meters in height are recommended to use the approved Ride Safer
              Vest or Mifold booster seat (as per School Safety standard).
            </p>
            <p>
              School approved CSR products are available and can be purchased
              directly from Taxi Baby :<a
                href="https://sg.taxibaby.com/"
                target="_blank"
                >https://sg.taxibaby.com/</a
              >
            </p>
            <p>
              You can contact us at
              <a href="mailto:chatsworth@tongtar.com">chatsworth@tongtar.com</a>
              or approach the Transport Coordinator in school. Alternatively,
              you can also ring us at
              <a href="tel:6261 5537">6261 5537</a> during office hours (8.30am
              to 4.00pm) and ask to speak with the School Transport Team.
            </p>
          </div>
          <div class="col-md-12 text-center">
            <ul class="agreeTermContainer text-center">
              <div>
                <label class="text-center">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    name="agreeTerm"
                    id="agreeTerm"
                    value="1"
                  />
                  I agree to the
                  <a
                    href="T&C-Chatsworth.pdf"
                    class="text-green"
                    target="_blank"
                  >
                    terms of service</a
                  >
                </label>
              </div>
            </ul>
          </div>
          <div
            class="col-md-8 col-md-offset-2 text-center"
            style="padding: unset"
          >
            <ul class="agreePDPAContainer text-center" style="padding: unset">
              <div>
                <label class="text-center">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    name="agreePDPA"
                    id="agreePDPA"
                    value="1"
                  />
                  I acknowledge that I have read and understood the
                  <a
                    href="../project/PDPA.pdf"
                    class="text-green"
                    target="_blank"
                    >Data Protection Notice</a
                  >, and consent to the collection, use and disclosure of my
                  personal data by Tong Tar Transport Service Pte Ltd for the
                  purposes set out in the Notice.
                </label>
              </div>
            </ul>
          </div>
          <div class="col-md-12 text-center">
            <div
              class="alert alert-danger hidden"
              role="alert"
              id="errorEmailAlert"
            >
              <strong>Parent email does not match the previous email!</strong>
            </div>
          </div>
          <div class="col-md-12 text-center">
            <button type="submit" class="btn btn-add-more-child" id="submit">
              Submit
            </button>
          </div>

          <div class="col-md-12 text-center copyright">
            <p>
              Copyright &copy; 2017 Tong Tar Transport Service Pte Ltd | 8 Soon
              Lee Road Singapore 628073 Tel:
              <a href="tel:6261 5537">6261 5537</a> Fax: 6268 6620 Email:
              <a href="mailto:chatsworth@tongtar.com">chatsworth@tongtar.com</a>
              Website:
              <a href="http://www.tongtar.com/" target="_black"
                >www.tongtar.com</a
              ><br />
              All rights reserved.
            </p>
          </div>
        </fieldset>
      </form>
    </div>
  </div>
</template>

<style>
#schoolBusForm {
  font-size: 14px;
  color: #333;
}

p {
  margin: 0 0 10px !important;
}
/* Responsive */
@media (min-width: 992px) {
  .col-md-1,
  .col-md-10,
  .col-md-11,
  .col-md-12,
  .col-md-2,
  .col-md-3,
  .col-md-4,
  .col-md-5,
  .col-md-6,
  .col-md-7,
  .col-md-8,
  .col-md-9 {
    float: left;
  }
}

/* Responsive */
legend {
  position: relative;
  margin-bottom: 0 !important;
  letter-spacing: 0.25px;
  background: #006d29;
  overflow: hidden;
  height: 50px;
  border-bottom: 0 !important;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
}

legend p {
  font-size: 20px;
  padding-left: 12px;
  margin: 0;
  color: #ffffff;
  padding-top: 10px;
}

legend i {
  background: url(../assets/images/icon-car.png) no-repeat left;
  display: inline-block;
  width: 54px;
  height: 55px;
  position: absolute;
  top: -5px;
  right: 6px;
}

.wp-content {
  border: 1px solid #006d29;
  margin-bottom: 15px;
  padding-top: 20px;
}

.pl-15 {
  padding-left: 30px;
}

label {
  display: inline-block;
  max-width: 100%;
  margin-bottom: 5px;
  font-weight: 700;
  font-size: 14px;
}

.label-required {
  color: #ed7878;
}

/* .font-weight-lable {
  font-weight: 500 !important;
  background-color: rebeccapurple !important;
} */

.gender {
  padding-left: 30px;
}

.shuttle-table {
  border: solid 1px;
  width: 100%;
  font-size: 14px;
  line-height: 1.5;
  text-align: center;
}

.shuttle-table tr th,
.shuttle-table tr td {
  padding-top: 5px;
  padding-bottom: 5px;
}

.shuttle-table tr td {
  border: 1px solid;
}

.shuttle-thead-table {
  background-color: #e2e2e2;
  color: #000000;
}

.medical-conditions {
  min-height: 70px;
}

.profile-container {
  position: relative;
}

.hidden {
  display: none !important;
}

.term {
  text-align: justify;
}

.col-md-offset-1 {
  margin-left: 8.33333333%;
}

.text-green {
  color: #006d29;
}

.col-md-offset-2 {
  margin-left: 16.66666667%;
}

.btn-add-more-child {
  width: 200px;
  background-color: #3c3e3c;
  color: #ffffff !important;
  font-weight: 700 !important;
}
.btn-add-more-child:hover {
  width: 200px;
  background-color: #006d29;
  color: #ffffff !important;
  font-weight: 700;
}

.copyright {
  font-size: 11px;
  padding-top: 20px;
  margin-bottom: 0px;
  font-family: "Trebuchet MS", Helvetica, sans-serif;
}
</style>
