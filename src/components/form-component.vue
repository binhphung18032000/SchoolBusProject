<template>
  <div class="container">
    <div id="schoolBusForm" class="col-md-12">
      <form
        role="form"
        id="registerForm"
        novalidate="novalidate"
        @submit.prevent="submit"
        v-if="!isSuccess"
      >
        <fieldset>
          <!-- Parent's Information -->
          <legend>
            <p>Parent's Information</p>
            <i></i>
          </legend>
          <div class="col-md-12 wp-content">
            <div
              class="col-md-4"
              v-for="(parent, index) in dataForm.parents"
              :key="index"
            >
              <label for="">{{ index + 1 }}. {{ parent.title }}</label>
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
                    v-model="parent.family_name"
                    :class="
                      typesubmit &&
                      v$.dataForm.parents[index] &&
                      v$.dataForm.parents[index].family_name.$error
                        ? 'is-invalid'
                        : ''
                    "
                  />
                  <div
                    class="invalid-feedback"
                    v-if="
                      typesubmit &&
                      v$.dataForm.parents[index] &&
                      v$.dataForm.parents[index].family_name.$error
                    "
                  >
                    <span
                      v-if="
                        v$.dataForm.parents[index] &&
                        v$.dataForm.parents[index].family_name.required
                      "
                      >Please input family name!</span
                    >
                  </div>
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
                    v-model="parent.first_name"
                    :class="
                      typesubmit &&
                      v$.dataForm.parents[index] &&
                      v$.dataForm.parents[index].first_name.$error
                        ? 'is-invalid'
                        : ''
                    "
                  />
                  <div
                    class="invalid-feedback"
                    v-if="
                      typesubmit &&
                      v$.dataForm.parents[index] &&
                      v$.dataForm.parents[index].first_name.$error
                    "
                  >
                    <span
                      v-if="
                        v$.dataForm.parents[index] &&
                        v$.dataForm.parents[index].first_name.required
                      "
                      >Please input first name!</span
                    >
                  </div>
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
                    v-model="parent.mobile_phone"
                    :class="
                      typesubmit &&
                      v$.dataForm.parents[index] &&
                      v$.dataForm.parents[index].mobile_phone.$error
                        ? 'is-invalid'
                        : ''
                    "
                  />
                  <div
                    class="invalid-feedback"
                    v-if="
                      typesubmit &&
                      v$.dataForm.parents[index] &&
                      v$.dataForm.parents[index].mobile_phone.$error
                    "
                  >
                    <span
                      v-if="
                        v$.dataForm.parents[index] &&
                        v$.dataForm.parents[index].mobile_phone.required
                      "
                      >Please input mobile phone!</span
                    >
                  </div>
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
                    v-model="parent.office_phone"
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
                    v-model="parent.email"
                    :class="
                      typesubmit &&
                      v$.dataForm.parents[index] &&
                      v$.dataForm.parents[index].email.$error
                        ? 'is-invalid'
                        : ''
                    "
                  />
                  <div
                    class="invalid-feedback"
                    v-if="
                      typesubmit &&
                      v$.dataForm.parents[index] &&
                      v$.dataForm.parents[index].email.$error
                    "
                  >
                    <span
                      v-if="
                        v$.dataForm.parents[index].email.required &&
                        v$.dataForm.parents[index].email.required.$invalid
                      "
                      >Please input email address!</span
                    >
                    <span
                      v-if="
                        v$.dataForm.parents[index].email.email &&
                        v$.dataForm.parents[index].email.email.$invalid
                      "
                      >Email address is invalid!</span
                    >
                  </div>
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
                        v-model="dataForm.people_contact"
                      />
                      Father
                    </label>
                    <label class="pl-15"
                      ><input
                        value="mother"
                        type="radio"
                        class="form-check-input"
                        name="parent-pick"
                        v-model="dataForm.people_contact"
                      />
                      Mother</label
                    >
                    <label class="pl-15"
                      ><input
                        value="authorized_person"
                        type="radio"
                        class="form-check-input"
                        name="parent-pick"
                        v-model="dataForm.people_contact"
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
                  v-model="dataForm.location.block"
                  :class="
                    typesubmit && v$.dataForm.location.block.$error
                      ? 'is-invalid'
                      : ''
                  "
                />
                <div
                  class="invalid-feedback"
                  v-if="typesubmit && v$.dataForm.location.block.$error"
                >
                  <span v-if="v$.dataForm.location.block.required"
                    >Please input block/ house number!</span
                  >
                </div>
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
                  v-model="dataForm.location.street"
                  :class="
                    typesubmit && v$.dataForm.location.street.$error
                      ? 'is-invalid'
                      : ''
                  "
                />
                <div
                  class="invalid-feedback"
                  v-if="typesubmit && v$.dataForm.location.street.$error"
                >
                  <span v-if="v$.dataForm.location.street.required"
                    >Please input street name!</span
                  >
                </div>
              </div>
              <div class="form-group col-md-3">
                <label for="postal-code"
                  >Postal Code <span class="label-required">*</span></label
                >
                <input
                  id="postal-code"
                  type="number"
                  class="form-control"
                  placeholder="eg: 123456"
                  v-model="dataForm.location.postal_code"
                  :class="
                    typesubmit && v$.dataForm.location.postal_code.$error
                      ? 'is-invalid'
                      : ''
                  "
                />
                <div
                  class="invalid-feedback"
                  v-if="typesubmit && v$.dataForm.location.postal_code.$error"
                >
                  <span
                    v-if="
                      v$.dataForm.location.postal_code.required &&
                      v$.dataForm.location.postal_code.required.$invalid
                    "
                    >Please input postal code!</span
                  >
                  <span
                    v-if="
                      v$.dataForm.location.postal_code.maxLength &&
                      v$.dataForm.location.postal_code.maxLength.$invalid
                    "
                    >Max length of postal code is 6 numbers!</span
                  >
                </div>
              </div>
            </div>
            <div class="col-md-12">
              <div class="form-group col-md-3">
                <label for="unit-number">Unit Number </label>
                <input
                  id="unit-number"
                  type="number"
                  class="form-control"
                  placeholder="eg: 01-15"
                  v-model="dataForm.location.unit"
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
                  v-model="dataForm.location.building"
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
                    v-model="dataForm.company.same_as_above"
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
                      v-model="dataForm.payment_bill"
                      @click="dataForm.company.same_as_above = true"
                    />
                    Father
                  </label>
                  <label class="pl-15"
                    ><input
                      value="mother"
                      type="radio"
                      class="form-check-input"
                      name="billing-pick"
                      v-model="dataForm.payment_bill"
                      @click="dataForm.company.same_as_above = true"
                    />
                    Mother</label
                  >
                  <label class="pl-15"
                    ><input
                      value="other"
                      type="radio"
                      class="form-check-input"
                      name="billing-pick"
                      v-model="dataForm.payment_bill"
                      @click="dataForm.company.same_as_above = false"
                    />
                    Details below</label
                  >
                </div>
              </ul>
            </div>
            <div class="col-md-3"></div>
            <div class="col-md-12">
              <div class="form-group col-md-6">
                <label for="name-company"
                  >Name of Company <span class="label-required">*</span></label
                >
                <input
                  id="name-company"
                  type="text"
                  class="form-control"
                  placeholder="Please fill in full name. eg: Tree Pte Ltd"
                  v-model="dataForm.company.company_name"
                  :disabled="dataForm.company.same_as_above"
                  :class="
                    typesubmit && v$.dataForm.company.company_name.$error
                      ? 'is-invalid'
                      : ''
                  "
                />
                <div
                  class="invalid-feedback"
                  v-if="typesubmit && v$.dataForm.company.company_name.$error"
                >
                  <span v-if="v$.dataForm.company.company_name.required"
                    >Please input name company!</span
                  >
                </div>
              </div>
              <div class="form-group col-md-6">
                <label for="attention-to"
                  >Attention to <span class="label-required">*</span></label
                >
                <input
                  id="attention-to"
                  type="text"
                  class="form-control"
                  placeholder="eg: John"
                  v-model="dataForm.company.attention_to"
                  :disabled="dataForm.company.same_as_above"
                  :class="
                    typesubmit && v$.dataForm.company.attention_to.$error
                      ? 'is-invalid'
                      : ''
                  "
                />
                <div
                  class="invalid-feedback"
                  v-if="typesubmit && v$.dataForm.company.attention_to.$error"
                >
                  <span v-if="v$.dataForm.company.attention_to.required"
                    >Please input attention to!</span
                  >
                </div>
              </div>
            </div>
            <div class="col-md-12">
              <div class="form-group col-md-6">
                <label for="billing-address"
                  >Billing Address <span class="label-required">*</span></label
                >
                <input
                  id="billing-address"
                  type="text"
                  class="form-control"
                  placeholder="Please fill in full address. eg: 3 Orchard Road, 01-15 Orchard Tower, Singapore 123456"
                  v-model="dataForm.company.address"
                  :disabled="dataForm.company.same_as_above"
                  :class="
                    typesubmit && v$.dataForm.company.address.$error
                      ? 'is-invalid'
                      : ''
                  "
                />
                <div
                  class="invalid-feedback"
                  v-if="typesubmit && v$.dataForm.company.address.$error"
                >
                  <span v-if="v$.dataForm.company.address.required"
                    >Please input billing address!</span
                  >
                </div>
              </div>
              <div class="form-group col-md-6">
                <label for="billing-email-address"
                  >Email Address <span class="label-required">*</span></label
                >
                <input
                  id="billing-email-address"
                  type="text"
                  class="form-control"
                  placeholder="eg: example@gmail.com"
                  v-model="dataForm.company.email_address"
                  :disabled="dataForm.company.same_as_above"
                  :class="
                    typesubmit && v$.dataForm.company.email_address.$error
                      ? 'is-invalid'
                      : ''
                  "
                />
                <div
                  class="invalid-feedback"
                  v-if="typesubmit && v$.dataForm.company.email_address.$error"
                >
                  <span
                    v-if="
                      v$.dataForm.company.email_address.required &&
                      v$.dataForm.company.email_address.required.$invalid
                    "
                    >Please input email address!</span
                  >
                  <span
                    v-if="
                      v$.dataForm.company.email_address.email &&
                      v$.dataForm.company.email_address.email.$invalid
                    "
                    >Email address is invalid!</span
                  >
                </div>
              </div>
            </div>
          </div>
          <!------- END Billing Address -------->
          <!---- Child/Children's Information ---->
          <legend id="children_information">
            <p>Child/Children's Information</p>
            <i></i>
          </legend>
          <div class="col-md-12 wp-content">
            <!-- add more form children if needed -->
            <div
              class="add-more-form"
              v-for="(child, index) in dataForm.child_info"
              :key="child.ref_id"
            >
              <div class="col-md-8">
                <div class="pl-13 font-weght-700">
                  <li style="list-style-type: none">
                    {{ index + 1 }}. {{ child.title }}
                  </li>
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
                    v-model="child.family_name"
                    :class="
                      typesubmit &&
                      v$.dataForm.child_info[index].family_name.$error
                        ? 'is-invalid'
                        : ''
                    "
                  />
                  <div
                    class="invalid-feedback"
                    v-if="
                      typesubmit &&
                      v$.dataForm.child_info[index].family_name.$error
                    "
                  >
                    <span
                      v-if="v$.dataForm.child_info[index].family_name.required"
                      >Please input family name!</span
                    >
                  </div>
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
                    v-model="child.given_name"
                    :class="
                      typesubmit &&
                      v$.dataForm.child_info[index].given_name.$error
                        ? 'is-invalid'
                        : ''
                    "
                  />
                  <div
                    class="invalid-feedback"
                    v-if="
                      typesubmit &&
                      v$.dataForm.child_info[index].given_name.$error
                    "
                  >
                    <span
                      v-if="v$.dataForm.child_info[index].given_name.required"
                      >Please input given name!</span
                    >
                  </div>
                </div>
                <div class="form-group col-md-12">
                  <label for="child-birth"
                    >Date of Birth <span class="label-required">*</span></label
                  >
                  <DatePicker
                    v-model="child.date_of_birth"
                    :inputFormat="format_date_picker"
                    class="form-control"
                    placeholder="eg: dd/mm/yyyy"
                    :class="
                      typesubmit &&
                      v$.dataForm.child_info[index].date_of_birth.$error
                        ? 'is-invalid'
                        : ''
                    "
                    :disabledDates="{
                      dates: [],
                      predicate: (Date) => Date > nowDay,
                    }"
                  ></DatePicker>
                  <div
                    class="invalid-feedback"
                    v-if="
                      typesubmit &&
                      v$.dataForm.child_info[index].date_of_birth.$error
                    "
                  >
                    <span
                      v-if="
                        v$.dataForm.child_info[index].date_of_birth.required
                      "
                      >Please input date of birth!</span
                    >
                  </div>
                </div>
                <div class="form-group col-md-12">
                  <label for="child-student-id">Student ID</label>
                  <input
                    id="child-student-id"
                    type="text"
                    class="form-control"
                    placeholder="eg: 99985610001"
                    v-model="child.school_code"
                    :class="
                      typesubmit &&
                      v$.dataForm.child_info[index].school_code.$error
                        ? 'is-invalid'
                        : ''
                    "
                  />
                  <div
                    class="invalid-feedback"
                    v-if="
                      typesubmit &&
                      v$.dataForm.child_info[index].school_code.$error
                    "
                  >
                    <span
                      v-if="
                        v$.dataForm.child_info[index].school_code.maxLength &&
                        v$.dataForm.child_info[index].school_code.maxLength
                          .$invalid
                      "
                      >Max length of student id is 10 characters!</span
                    >
                  </div>
                </div>
                <div class="form-group col-md-12">
                  <label for="child-grade">Grade</label>
                  <input
                    id="child-grade"
                    type="text"
                    class="form-control"
                    placeholder="eg: G1"
                    v-model="child.grade"
                    :class="
                      typesubmit && v$.dataForm.child_info[index].grade.$error
                        ? 'is-invalid'
                        : ''
                    "
                  />
                  <div
                    class="invalid-feedback"
                    v-if="
                      typesubmit && v$.dataForm.child_info[index].grade.$error
                    "
                  >
                    <span
                      v-if="
                        v$.dataForm.child_info[index].grade.maxLength &&
                        v$.dataForm.child_info[index].grade.maxLength.$invalid
                      "
                      >Max length of grade is 10 characters!</span
                    >
                  </div>
                </div>
                <div class="form-group col-md-12">
                  <label for=""
                    >Gender <span class="label-required">*</span></label
                  >
                  <label class="gender font-weight-label">
                    <input
                      type="radio"
                      class="form-check-input"
                      :name="'gender_' + index"
                      value="male"
                      v-model="child.gender"
                    />
                    Male
                  </label>
                  <label class="gender font-weight-label">
                    <input
                      type="radio"
                      class="form-check-input"
                      :name="'gender_' + index"
                      value="female"
                      v-model="child.gender"
                    />
                    Female
                  </label>
                </div>
                <div class="form-group col-md-12">
                  <label for="child-date-service">Start date of service </label>
                  <select
                    id="child-date-service"
                    class="form-control"
                    v-model="child.type_of_service"
                  >
                    <option value="first_day_of_semester">
                      First day of semester
                    </option>
                    <option value="choose_date">Choose date</option>
                  </select>
                </div>
                <div
                  class="form-group col-md-12"
                  v-if="child.type_of_service == 'choose_date'"
                >
                  <DatePickerCustom
                    :input="child.date_start"
                    :inputFormat="format_date_picker"
                    @change-date="showDateStartModalClose($event, index)"
                    :disabledDates="{
                      dates: [],
                      predicate: (Date) => Date <= nowDay,
                    }"
                    :class="
                      typesubmit &&
                      v$.dataForm.child_info[index].date_start.$error
                        ? 'is-invalid'
                        : ''
                    "
                  >
                  </DatePickerCustom>
                  <div
                    class="invalid-feedback"
                    v-if="
                      typesubmit &&
                      v$.dataForm.child_info[index].date_start.$error
                    "
                  >
                    <span
                      v-if="v$.dataForm.child_info[index].date_start.required"
                      >Please choose date start!</span
                    >
                  </div>
                </div>
                <!-- MODAL START DAY OF SERVICES -->
                <div
                  v-show="showModalClose"
                  class="modal fade show"
                  id="resetModal"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby=""
                  aria-hidden="true"
                  style="display: block; background-color: rgba(0, 0, 0, 0.5)"
                >
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-body">
                        <strong
                          >Please refer to
                          <a
                            href="T&amp;C-Chatsworth.pdf"
                            class="text-green"
                            target="_blank"
                            >Terms and Conditions</a
                          >
                          regarding the processing of applications and bus
                          service charges.</strong
                        >
                      </div>
                      <div class="modal-footer border-top">
                        <button
                          type="button"
                          class="btn btn-default button-close m-0"
                          @click="showModalClose = false"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- END MODAL START DAY OF SERVICES -->
                <div class="form-group col-md-12">
                  <strong class="d-block">For Regular Bus Service:</strong>
                  <label class="ml-2" for="Route"
                    >Route <span class="label-required">*</span></label
                  >
                  <ul class="list-route">
                    <label class="label-route d-block">
                      <input
                        value="two-ways-1"
                        type="radio"
                        class="form-check-input"
                        :name="'route_' + index"
                        v-model="child.route_service"
                        :class="
                          typesubmit &&
                          v$.dataForm.child_info[index].route_service.$error
                            ? 'is-invalid'
                            : ''
                        "
                      />
                      2 Ways
                    </label>
                    <label class="label-route d-block">
                      <input
                        value="am-way-1"
                        type="radio"
                        class="form-check-input"
                        :name="'route_' + index"
                        v-model="child.route_service"
                        :class="
                          typesubmit &&
                          v$.dataForm.child_info[index].route_service.$error
                            ? 'is-invalid'
                            : ''
                        "
                      />
                      1 Way (AM)
                    </label>
                    <label class="label-route d-block">
                      <input
                        value="pm-way-1"
                        type="radio"
                        class="form-check-input"
                        :name="'route_' + index"
                        v-model="child.route_service"
                        :class="
                          typesubmit &&
                          v$.dataForm.child_info[index].route_service.$error
                            ? 'is-invalid'
                            : ''
                        "
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
                        @click="showModalConfirm = true"
                        value="two-ways-2"
                        type="radio"
                        class="form-check-input"
                        :name="'route_' + index"
                        v-model="child.route_service"
                        :class="
                          typesubmit &&
                          v$.dataForm.child_info[index].route_service.$error
                            ? 'is-invalid'
                            : ''
                        "
                      />
                      2 Ways
                    </label>
                    <label class="label-route d-block">
                      <input
                        @click="showModalConfirm = true"
                        value="am-way-2"
                        type="radio"
                        class="form-check-input"
                        :name="'route_' + index"
                        v-model="child.route_service"
                        :class="
                          typesubmit &&
                          v$.dataForm.child_info[index].route_service.$error
                            ? 'is-invalid'
                            : ''
                        "
                      />
                      1 Way (AM)
                    </label>
                    <label class="label-route d-block">
                      <input
                        @click="showModalConfirm = true"
                        value="pm-way-2"
                        type="radio"
                        class="form-check-input"
                        :name="'route_' + index"
                        v-model="child.route_service"
                        :class="
                          typesubmit &&
                          v$.dataForm.child_info[index].route_service.$error
                            ? 'is-invalid'
                            : ''
                        "
                      />
                      1 Way (PM)
                    </label>
                  </ul>
                  <div
                    class="invalid-feedback message_block"
                    v-if="
                      typesubmit &&
                      v$.dataForm.child_info[index].route_service.$error
                    "
                  >
                    <span
                      v-if="
                        v$.dataForm.child_info[index].route_service.required
                      "
                      >Please choose route!</span
                    >
                  </div>
                </div>
                <!-- MODAL ROUTE SERVICES -->
                <div
                  v-show="showModalConfirm"
                  class="modal fade show"
                  id="resetModal"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby=""
                  aria-hidden="true"
                  style="display: block; background-color: rgba(0, 0, 0, 0.5)"
                >
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div
                        class="modal-header text-center justify-content-center"
                      >
                        <h4 class="modal-title" id="resetModalLabel">
                          Cairnhill 9 Shuttle Bus Fare - Academic Year 2021/2022
                        </h4>
                      </div>
                      <div class="modal-body p-0">
                        <div
                          class="form-group col-md-12 custom-table"
                          style="margin-top: 15px"
                        >
                          <table
                            width="100%"
                            style="
                              border: solid 1px;
                              font-size: 14px;
                              line-height: 1.5;
                              text-align: center;
                            "
                            class="shuttle-price"
                          >
                            <thead
                              style="background-color: #e2e2e2; color: #000000"
                            >
                              <tr>
                                <th style="text-align: center">S/NO</th>
                                <th style="text-align: center">Route Type</th>
                                <th style="text-align: center">
                                  Up to 30 seater
                                </th>
                                <th style="text-align: center">
                                  &gt;30 seater
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>One Way</td>
                                <td>$535.00</td>
                                <td>$500.00</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>Two Ways</td>
                                <td>$1,020.00</td>
                                <td>$950.00</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div class="form-group col-md-12 mb-0">
                          <label for="postal_code">Remarks:</label>
                          <p style="text-align: justify">
                            - The above pricing is dependent on sufficient
                            uptake for the service.<br />
                            - Price includes GST and is chargeable for the
                            semester (2 semesters in an academic year).<br />
                            - Transport charges are payable twice a year, before
                            the start of the semester and service.
                          </p>
                        </div>
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-primary"
                          @click="showModalConfirm = false"
                        >
                          Confirm
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- END MODAL ROUTE SERVICES -->
                <div class="form-group col-md-12">
                  <p>
                    Remarks: Invoice will be sent to parents once bus seat can
                    be confirmed. Transport charges are paid twice a year,
                    before the start of each semester.
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
                    v-model="child.descriptions"
                  ></textarea>
                </div>
              </div>
              <!-- UPLOAD IMAGE -->

              <div class="col-md-4">
                <div class="col-md-12">
                  <button
                    style="border: 0; background: none"
                    type="button"
                    class="pull-right btn-remove removeChild"
                    @click="remove(index)"
                    v-if="dataForm.child_info.length > 1"
                  >
                    <span
                      class="glyphicon glyphicon-remove"
                      id="iconRemoveChild"
                      ><i class="fas fa-trash-alt"></i
                    ></span>
                  </button>
                  &nbsp;
                </div>
                <div class="text-center">
                  <label for="photo" class="padding-left-7"
                    >Recent photo of child</label
                  >
                </div>
                <div class="profile-container text-center">
                  <!-- {{ child.ref_id }} -->
                  <CroppieImage
                    :ref="`croppieRef_` + child.ref_id"
                    :refID="`croppieRef_` + child.ref_id"
                    :image_result="child.image_result"
                  ></CroppieImage>
                  <input
                    class="hidden"
                    @change="changeImage($event, child.ref_id, index)"
                    type="file"
                    :ref="`fileInput_${child.ref_id}`"
                  />
                  <a
                    class="btn btn-info btnUpload"
                    @click="onPickFile(child.ref_id)"
                    >Upload Image</a
                  >
                  <!-- <button
                  type="button"
                  @click="resetImage"
                  class="btn btn-primary"
                >
                  Reset Image
                </button> -->
                </div>
              </div>
              <!-- END UPLOAD IMAGE -->

              <div class="col-md-12"><hr class="green-line" /></div>
            </div>

            <div class="col-md-12 text-center">
              <a class="btn btn-add-more-child" id="addMoreChild" @click="add"
                >Add more children</a
              >
              <hr />
            </div>
          </div>
          <!-- add more form children if needed -->
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
              security feature that allows us to ascertain your child's location
              when he is a rider on the bus on the bus. The yearly subscription
              of $25 (before GST) will be charged to your child's transport
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
                    v-model="dataForm.agree_service"
                    :class="
                      typesubmit && v$.dataForm.agree_service.$error
                        ? 'is-invalid binh'
                        : ''
                    "
                  />
                  I agree to the
                  <a
                    href="T&C-Chatsworth.pdf"
                    class="text-green"
                    target="_blank"
                  >
                    terms of service</a
                  >
                  <div
                    class="invalid-feedback"
                    v-if="typesubmit && v$.dataForm.agree_service.$error"
                  >
                    <span v-if="v$.dataForm.agree_service.required"
                      >Please agree Terms and Conditions & Bus Regulations
                      before submit!</span
                    >
                  </div>
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
                    v-model="dataForm.read_understood"
                    :class="
                      typesubmit && v$.dataForm.read_understood.$error
                        ? 'is-invalid binh'
                        : ''
                    "
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
                  <div
                    class="invalid-feedback"
                    v-if="typesubmit && v$.dataForm.read_understood.$error"
                  >
                    <span v-if="v$.dataForm.read_understood.required"
                      >Please read and confirm the Data Protection Notice before
                      submit!</span
                    >
                  </div>
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
            <div v-if="errors" class="is-invalid">
              <div v-for="(error, index) in errors" :key="index">
                <div
                  style="width: 700px; white-space: pre-wrap; left: 17%"
                  class="alert alert-danger text-uppercase text-danger"
                  role="alert"
                >
                  {{ Array.isArray(error) ? error.join("\n ") : error }}
                </div>
              </div>
            </div>
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
      <div v-else class="alert alert-success" role="alert">
        <span class="alert-heading m-2 text-success">
          Thank you for registering with Tong Tar Transport Service PTE LTD.
        </span>
      </div>
    </div>
  </div>
</template>

<script>
if (document.querySelectorAll('[src="/croppie/jquery.min.js"]').length < 1) {
  const pluginJquery = document.createElement("script");
  pluginJquery.setAttribute("src", "/croppie/jquery.min.js");
  document.head.appendChild(pluginJquery);
}
if (document.querySelectorAll('[src="/croppie/croppie.min.js"]').length < 1) {
  const pluginJqueryCroppie = document.createElement("script");
  pluginJqueryCroppie.setAttribute("src", "/croppie/croppie.min.js");
  document.head.appendChild(pluginJqueryCroppie);
}
import CroppieImage from "./CroppieImage.vue";
import DatePickerCustom from "./DatePickerCustom.vue";
import { required, email, maxLength } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import $ from "jquery";
import DatePicker from "vue3-datepicker";
import "bootstrap/dist/css/bootstrap.min.css";
import moment from "moment";
import { watch } from "vue-demi";

export default {
  components: {
    CroppieImage,
    DatePicker,
    DatePickerCustom,
  },
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  data() {
    return {
      nowDay: moment()._d,
      isSuccess: false,
      errors: null,
      format_date_picker: "dd/MM/yyyy",
      typesubmit: false,
      imageUrl: "",
      image: null,
      dataForm: {
        parents: [
          {
            type: "father",
            title: "Father/Guardian",
            family_name: "",
            first_name: "",
            mobile_phone: "",
            office_phone: "",
            email: "",
          },
          {
            type: "mother",
            title: "Mother/Guardian",
            family_name: "",
            first_name: "",
            mobile_phone: "",
            office_phone: "",
            email: "",
          },
          {
            type: "authorized_person",
            title: "Authorized Person (for Afternoon pick ups, if necessary)",
            family_name: "",
            first_name: "",
            mobile_phone: "",
            office_phone: "",
            email: "",
          },
        ],
        people_contact: "father",
        location: {
          block: "",
          street: "",
          postal_code: "",
          unit: "",
          building: "",
        },
        payment_bill: "father",
        company: {
          same_as_above: true,
          company_name: "",
          attention_to: "",
          address: "",
          email_address: "",
        },
        child_info: [
          {
            ref_id: Math.random().toString(36).substring(2, 15),
            title: "Child",
            family_name: "",
            given_name: "",
            date_of_birth: null,
            school_code: "",
            grade: "",
            gender: "male",
            type_of_service: "first_day_of_semester",
            date_start: null,
            route_service: "",
            descriptions: "",
            image_result: null,
            image: null,
          },
        ],
        agree_service: false,
        read_understood: false,
      },
      showModalConfirm: false,
      showModalClose: false,
      flagShowModalClose: false,
    };
  },
  validations() {
    let requiredParent = [
      this.dataForm.people_contact,
      this.dataForm.payment_bill,
    ];

    let ValidateDataForm = {
      parents: [],
      people_contact: {
        required,
      },
      location: {
        block: {
          required,
        },
        street: {
          required,
        },
        postal_code: {
          required,
          maxLength: maxLength(6),
        },
      },
      company: {
        company_name: {},
        attention_to: {},
        address: {},
        email_address: {},
      },
      child_info: [],
      agree_service: {
        required(val) {
          return val;
        },
      },
      read_understood: {
        required(val) {
          return val;
        },
      },
    };

    if (!this.dataForm.company.same_as_above) {
      ValidateDataForm.company = {
        company_name: {
          required,
        },
        attention_to: {
          required,
        },
        address: {
          required,
        },
        email_address: {
          required,
          email,
        },
      };
    }
    if (this.dataForm) {
      if (this.dataForm.parents) {
        Object.entries(this.dataForm.parents).forEach(([key, parent]) => {
          let valid = {
            family_name: {},
            first_name: {},
            mobile_phone: {},
            office_phone: {},
            email: {},
          };
          if (requiredParent.includes(parent.type)) {
            valid = {
              family_name: {
                required,
              },
              first_name: {
                required,
              },
              mobile_phone: {
                required,
              },
              office_phone: {
                required,
              },
              email: {
                required,
                email,
              },
            };
          }
          ValidateDataForm.parents[key] = valid;
        });
      }
      if (this.dataForm.child_info) {
        Object.entries(this.dataForm.child_info).forEach(([key, child]) => {
          let validChild = {
            family_name: {
              required,
            },
            given_name: {
              required,
            },
            date_of_birth: {
              required,
            },
            date_start: {},
            route_service: {
              required,
            },
            school_code: {
              maxLength: maxLength(10),
            },
            grade: {
              maxLength: maxLength(10),
            },
          };
          if (child.type_of_service == "choose_date") {
            validChild.date_start = {
              required,
            };
          }
          ValidateDataForm.child_info[key] = validChild;
        });
      }
    }
    return {
      dataForm: ValidateDataForm,
    };
  },
  methods: {
    add: function () {
      this.dataForm.child_info.push({
        ref_id: Math.random().toString(36).substring(2, 15),
        title: "Child",
        family_name: "",
        given_name: "",
        date_of_birth: null,
        school_code: "",
        grade: "",
        gender: "male",
        type_of_service: "first_day_of_semester",
        date_start: null,
        route_service: "",
        descriptions: "",
        image_result: null,
      });
    },
    remove: function (index) {
      const vm = this;
      this.dataForm.child_info.splice(index, 1);
      this.$forceUpdate();
      $("html,body").animate({ scrollTop: 1400 }, "slow");
      setTimeout(() => {
        Object.entries(this.dataForm.child_info).forEach(([key, child]) => {
          if (child.image) {
            vm.$refs["croppieRef_" + child.ref_id][0].bindCroppie(
              JSON.parse(JSON.stringify(child.image))
            );
          } else {
            vm.$refs["croppieRef_" + child.ref_id][0].refreshCroppie();
          }
        });
      }, 200);
    },
    resetImage(index) {
      this.$refs["croppieRef_" + index][0].refreshCroppie();
    },
    changeImage(input, ref_id, index) {
      const vm = this;
      if (input.target.files && input.target.files[0]) {
        let reader = new FileReader();
        reader.readAsDataURL(input.target.files[0]);
        reader.onload = function (e) {
          let image = e.target.result;
          vm.dataForm.child_info[index].image = image;
          vm.$refs["croppieRef_" + ref_id][0].bindCroppie(
            JSON.parse(JSON.stringify(image))
          );
        };
      }
    },
    onPickFile(index) {
      this.$refs[`fileInput_${index}`][0].click();
    },
    onFilePicked(event) {
      const files = event.target.files;
      let filename = files[0].name;
      if (filename.lastIndexOf(".") <= 0) {
        return alert("Please add a valid file!");
      }
      const fileReader = new FileReader();
      fileReader.addEventListener("load", () => {
        this.imageUrl = fileReader.result;
      });
      fileReader.readAsDataURL(files[0]);
      this.image = files[0];
    },
    showDateStartModalClose(event, key) {
      this.dataForm.child_info[key].date_start = event.date ?? null;
      if (!this.flagShowModalClose) {
        this.flagShowModalClose = true;
        this.showModalClose = true;
      }
    },
    submit() {
      this.typesubmit = true;
      this.v$.$validate();
      const vm = this;

      if (!this.v$.$invalid) {
        let dataForm = JSON.parse(JSON.stringify(this.dataForm));
        dataForm.child_info = dataForm.child_info.map((student) => {
          student.image = vm.$refs[`croppieRef_${student.ref_id}`][0].imageSrc;
          student.date_of_birth = moment(student.date_of_birth).format(
            "DD/MM/YYYY"
          );
          if (student.type_of_service == "choose_date") {
            student.date_start = moment(student.date_start).format(
              "DD/MM/YYYY"
            );
          } else {
            delete student.date_start;
          }

          return student;
        });
        vm.axios
          .post("/api/v1/send-data", { dataAll: dataForm })
          .then(function (response) {
            if (response.status !== 200 || !response.data.success)
              throw response.data;
            vm.isSuccess = true;
          })
          .catch(function (error) {
            console.log(error);
            vm.errors = error.message;
          });
      } else {
        setTimeout(() => {
          $(".is-invalid")[0].scrollIntoView();
          window.scrollBy(0, -100);
        }, 200);
      }
      console.log(this.dataForm);
    },
  },
};
</script>

<style>
@import "../assets/scss/form-component.css";
@import "@/assets/scss/croppie.min.css";
</style>
