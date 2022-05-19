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
            </div>
          </div>
          <!---- END Child/Children's Information ---->
        </fieldset>
      </form>
    </div>
  </div>
</template>

<style>
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
</style>
