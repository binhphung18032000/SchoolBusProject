<template>
  <div class="container">
    <div id="schoolBusForm" class="col-md-12">
      <form
        role="form"
        id="registerForm"
        novalidate="novalidate"
        @submit.prevent="submit"
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
                    v-model="parent.email_address"
                    :class="
                      typesubmit &&
                      v$.dataForm.parents[index] &&
                      v$.dataForm.parents[index].email_address.$error
                        ? 'is-invalid'
                        : ''
                    "
                  />
                  <div
                    class="invalid-feedback"
                    v-if="
                      typesubmit &&
                      v$.dataForm.parents[index] &&
                      v$.dataForm.parents[index].email_address.$error
                    "
                  >
                    <span
                      v-if="
                        v$.dataForm.parents[index] &&
                        v$.dataForm.parents[index].email_address.required
                      "
                      >Please input email address!</span
                    >
                    <span
                      v-if="
                        v$.dataForm.parents[index] &&
                        !v$.dataForm.parents[index].email_address.required &&
                        v$.dataForm.parents[index].email_address.email
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
                        v-model="dataForm.first_contact"
                      />
                      Father
                    </label>
                    <label class="pl-15"
                      ><input
                        value="mother"
                        type="radio"
                        class="form-check-input"
                        name="parent-pick"
                        v-model="dataForm.first_contact"
                      />
                      Mother</label
                    >
                    <label class="pl-15"
                      ><input
                        value="authorized_person"
                        type="radio"
                        class="form-check-input"
                        name="parent-pick"
                        v-model="dataForm.first_contact"
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
                  v-model="dataForm.pick_drop_address.block_house_number"
                  :class="
                    typesubmit &&
                    v$.dataForm.pick_drop_address.block_house_number.$error
                      ? 'is-invalid'
                      : ''
                  "
                />
                <div
                  class="invalid-feedback"
                  v-if="
                    typesubmit &&
                    v$.dataForm.pick_drop_address.block_house_number.$error
                  "
                >
                  <span
                    v-if="
                      v$.dataForm.pick_drop_address.block_house_number.required
                    "
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
                  v-model="dataForm.pick_drop_address.street_name"
                  :class="
                    typesubmit &&
                    v$.dataForm.pick_drop_address.street_name.$error
                      ? 'is-invalid'
                      : ''
                  "
                />
                <div
                  class="invalid-feedback"
                  v-if="
                    typesubmit &&
                    v$.dataForm.pick_drop_address.street_name.$error
                  "
                >
                  <span
                    v-if="v$.dataForm.pick_drop_address.street_name.required"
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
                  type="text"
                  class="form-control"
                  placeholder="eg: 123456"
                  v-model="dataForm.pick_drop_address.postal_code"
                  :class="
                    typesubmit &&
                    v$.dataForm.pick_drop_address.postal_code.$error
                      ? 'is-invalid'
                      : ''
                  "
                />
                <div
                  class="invalid-feedback"
                  v-if="
                    typesubmit &&
                    v$.dataForm.pick_drop_address.postal_code.$error
                  "
                >
                  <span
                    v-if="v$.dataForm.pick_drop_address.postal_code.required"
                    >Please input postal code!</span
                  >
                </div>
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
                  v-model="dataForm.pick_drop_address.unit_number"
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
                  v-model="
                    dataForm.pick_drop_address.name_of_building_condominium
                  "
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
                    v-model="dataForm.billing_address.same_as_above"
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
                      v-model="dataForm.billing_address.regard_payment"
                      @click="dataForm.billing_address.same_as_above = true"
                    />
                    Father
                  </label>
                  <label class="pl-15"
                    ><input
                      value="mother"
                      type="radio"
                      class="form-check-input"
                      name="billing-pick"
                      v-model="dataForm.billing_address.regard_payment"
                      @click="dataForm.billing_address.same_as_above = true"
                    />
                    Mother</label
                  >
                  <label class="pl-15"
                    ><input
                      value="details-below"
                      type="radio"
                      class="form-check-input"
                      name="billing-pick"
                      v-model="dataForm.billing_address.regard_payment"
                      @click="dataForm.billing_address.same_as_above = false"
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
                  v-model="dataForm.billing_address.name_company"
                  :disabled="dataForm.billing_address.same_as_above"
                  :class="
                    typesubmit &&
                    v$.dataForm.billing_address.name_company.$error
                      ? 'is-invalid'
                      : ''
                  "
                />
                <div
                  class="invalid-feedback"
                  v-if="
                    typesubmit &&
                    v$.dataForm.billing_address.name_company.$error
                  "
                >
                  <span v-if="v$.dataForm.billing_address.name_company.required"
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
                  v-model="dataForm.billing_address.attention_to"
                  :disabled="dataForm.billing_address.same_as_above"
                  :class="
                    typesubmit &&
                    v$.dataForm.billing_address.attention_to.$error
                      ? 'is-invalid'
                      : ''
                  "
                />
                <div
                  class="invalid-feedback"
                  v-if="
                    typesubmit &&
                    v$.dataForm.billing_address.attention_to.$error
                  "
                >
                  <span v-if="v$.dataForm.billing_address.attention_to.required"
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
                  v-model="dataForm.billing_address.billing_address_input"
                  :disabled="dataForm.billing_address.same_as_above"
                  :class="
                    typesubmit &&
                    v$.dataForm.billing_address.billing_address_input.$error
                      ? 'is-invalid'
                      : ''
                  "
                />
                <div
                  class="invalid-feedback"
                  v-if="
                    typesubmit &&
                    v$.dataForm.billing_address.billing_address_input.$error
                  "
                >
                  <span
                    v-if="
                      v$.dataForm.billing_address.billing_address_input.required
                    "
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
                  v-model="dataForm.billing_address.email_address"
                  :disabled="dataForm.billing_address.same_as_above"
                  :class="
                    typesubmit &&
                    v$.dataForm.billing_address.email_address.$error
                      ? 'is-invalid'
                      : ''
                  "
                />
                <div
                  class="invalid-feedback"
                  v-if="
                    typesubmit &&
                    v$.dataForm.billing_address.email_address.$error
                  "
                >
                  <span
                    v-if="v$.dataForm.billing_address.email_address.required"
                    >Please input email address!</span
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
              v-for="(child, index) in dataForm.children"
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
                      v$.dataForm.children[index].family_name.$error
                        ? 'is-invalid'
                        : ''
                    "
                  />
                  <div
                    class="invalid-feedback"
                    v-if="
                      typesubmit &&
                      v$.dataForm.children[index].family_name.$error
                    "
                  >
                    <span
                      v-if="v$.dataForm.children[index].family_name.required"
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
                      v$.dataForm.children[index].given_name.$error
                        ? 'is-invalid'
                        : ''
                    "
                  />
                  <div
                    class="invalid-feedback"
                    v-if="
                      typesubmit &&
                      v$.dataForm.children[index].given_name.$error
                    "
                  >
                    <span v-if="v$.dataForm.children[index].given_name.required"
                      >Please input given name!</span
                    >
                  </div>
                </div>
                <div class="form-group col-md-12">
                  <label for="child-birth"
                    >Date of Birth <span class="label-required">*</span></label
                  >
                  <!-- <input
                    id="child-birth"
                    type="text"
                    class="form-control"
                    placeholder="eg: dd/mm/yyyy"
                    v-model="child.date_of_birth"
                    :class="
                      typesubmit &&
                      v$.dataForm.children[index].date_of_birth.$error
                        ? 'is-invalid'
                        : ''
                    "
                  /> -->
                  <DatePicker
                    v-model="child.date_of_birth"
                    :inputFormat="format_date_picker"
                    class="form-control"
                    placeholder="eg: dd/mm/yyyy"
                    :class="
                      typesubmit &&
                      v$.dataForm.children[index].date_of_birth.$error
                        ? 'is-invalid'
                        : ''
                    "
                  ></DatePicker>
                  <div
                    class="invalid-feedback"
                    v-if="
                      typesubmit &&
                      v$.dataForm.children[index].date_of_birth.$error
                    "
                  >
                    <span
                      v-if="v$.dataForm.children[index].date_of_birth.required"
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
                    v-model="child.student_id"
                  />
                </div>
                <div class="form-group col-md-12">
                  <label for="child-grade">Grade</label>
                  <input
                    id="child-grade"
                    type="text"
                    class="form-control"
                    placeholder="eg: G1"
                    v-model="child.grade"
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
                      v-model="child.gender"
                    />
                    Male
                  </label>
                  <label class="gender font-weight-label">
                    <input
                      type="radio"
                      class="form-check-input"
                      name="gender"
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
                    v-model="child.start_date_of_service"
                  >
                    <option value="first_day_of_semester">
                      First day of semester
                    </option>
                    <option value="choose_date">Choose date</option>
                  </select>
                </div>
                <div
                  class="form-group col-md-12"
                  v-if="child.start_date_of_service == 'choose_date'"
                >
                  <!-- <input
                    type="text"
                    class="form-control"
                    placeholder="eg: dd/mm/yyyy"
                  /> -->
                  <DatePicker
                    :inputFormat="format_date_picker"
                    v-model="child.start_date"
                    class="form-control"
                    placeholder="eg: dd/mm/yyyy"
                  ></DatePicker>
                </div>
                <div class="form-group col-md-12">
                  <strong class="d-block">For Regular Bus Service:</strong>
                  <label class="ml-2" for="Route"
                    >Route <span class="label-required">*</span></label
                  >
                  <ul class="list-route">
                    <label class="label-route d-block">
                      <input
                        value="two-way"
                        type="radio"
                        class="form-check-input"
                        name="route[1]"
                        v-model="child.regular_bus_service"
                        :class="
                          typesubmit &&
                          v$.dataForm.children[index].regular_bus_service.$error
                            ? 'is-invalid'
                            : ''
                        "
                      />
                      2 Ways
                    </label>
                    <label class="label-route d-block">
                      <input
                        value="am-way"
                        type="radio"
                        class="form-check-input"
                        name="route[1]"
                        v-model="child.regular_bus_service"
                        :class="
                          typesubmit &&
                          v$.dataForm.children[index].regular_bus_service.$error
                            ? 'is-invalid'
                            : ''
                        "
                      />
                      1 Way (AM)
                    </label>
                    <label class="label-route d-block">
                      <input
                        value="pm-way"
                        type="radio"
                        class="form-check-input"
                        name="route[1]"
                        v-model="child.regular_bus_service"
                        :class="
                          typesubmit &&
                          v$.dataForm.children[index].regular_bus_service.$error
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
                        value="two-way"
                        type="radio"
                        class="form-check-input"
                        name="route[1]"
                        v-model="child.shuttle_service"
                        :class="
                          typesubmit &&
                          v$.dataForm.children[index].shuttle_service.$error
                            ? 'is-invalid'
                            : ''
                        "
                      />
                      2 Ways
                    </label>
                    <label class="label-route d-block">
                      <input
                        value="am-way"
                        type="radio"
                        class="form-check-input"
                        name="route[1]"
                        v-model="child.shuttle_service"
                        :class="
                          typesubmit &&
                          v$.dataForm.children[index].shuttle_service.$error
                            ? 'is-invalid'
                            : ''
                        "
                      />
                      1 Way (AM)
                    </label>
                    <label class="label-route d-block">
                      <input
                        value="pm-way"
                        type="radio"
                        class="form-check-input"
                        name="route[1]"
                        v-model="child.shuttle_service"
                        :class="
                          typesubmit &&
                          v$.dataForm.children[index].shuttle_service.$error
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
                      v$.dataForm.children[index].regular_bus_service.$error &&
                      v$.dataForm.children[index].shuttle_service.$error
                    "
                  >
                    <span
                      v-if="
                        v$.dataForm.children[index].regular_bus_service
                          .required &&
                        v$.dataForm.children[index].shuttle_service.required
                      "
                      >Please choose route!</span
                    >
                  </div>
                </div>
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
                    v-model="child.medical_conditions"
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
                    v-if="dataForm.children.length > 1"
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
import { required, email } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import $ from "jquery";
import DatePicker from "vue3-datepicker";

export default {
  components: {
    CroppieImage,
    DatePicker,
  },
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  data() {
    return {
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
            email_address: "",
          },
          {
            type: "mother",
            title: "Mother/Guardian",
            family_name: "",
            first_name: "",
            mobile_phone: "",
            office_phone: "",
            email_address: "",
          },
          {
            type: "authorized_person",
            title: "Authorized Person (for Afternoon pick ups, if necessary)",
            family_name: "",
            first_name: "",
            mobile_phone: "",
            office_phone: "",
            email_address: "",
          },
        ],
        first_contact: "father",
        pick_drop_address: {
          block_house_number: "",
          street_name: "",
          postal_code: "",
          unit_number: "",
          name_of_building_condominium: "",
        },
        billing_address: {
          same_as_above: true,
          regard_payment: "father",
          name_company: "",
          attention_to: "",
          billing_address_input: "",
          email_address: "",
        },
        children: [
          {
            ref_id: Math.random().toString(36).substring(2, 15),
            title: "Child",
            family_name: "",
            given_name: "",
            date_of_birth: null,
            student_id: "",
            grade: "",
            gender: "male",
            start_date_of_service: "first_day_of_semester",
            start_date: null,
            regular_bus_service: "",
            shuttle_service: "",
            medical_conditions: "",
            image_result: null,
            rawImg: null,
          },
        ],
        agree_service: false,
        read_understood: false,
      },
    };
  },
  validations() {
    let requiredParent = [
      this.dataForm.first_contact,
      this.dataForm.billing_address.regard_payment,
    ];

    let ValidateDataForm = {
      parents: [],
      first_contact: {
        required,
      },
      pick_drop_address: {
        block_house_number: {
          required,
        },
        street_name: {
          required,
        },
        postal_code: {
          required,
        },
      },
      billing_address: {
        name_company: {},
        attention_to: {},
        billing_address_input: {},
        email_address: {},
      },
      children: [],
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

    if (!this.dataForm.billing_address.same_as_above) {
      ValidateDataForm.billing_address = {
        name_company: {
          required,
        },
        attention_to: {
          required,
        },
        billing_address_input: {
          required,
        },
        email_address: {
          required,
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
            email_address: {},
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
              email_address: {
                required,
                email,
              },
            };
          }
          // if (this.dataForm.first_contact == parent.type) {
          //   valid = {
          //     family_name: {
          //       required,
          //     },
          //     first_name: {
          //       required,
          //     },
          //     mobile_phone: {
          //       required,
          //     },
          //     office_phone: {
          //       required,
          //     },
          //     email_address: {
          //       required,
          //     },
          //   };
          // }
          ValidateDataForm.parents[key] = valid;
        });
      }
      if (this.dataForm.children) {
        Object.entries(this.dataForm.children).forEach(([key, child]) => {
          child = {
            family_name: {
              required,
            },
            given_name: {
              required,
            },
            date_of_birth: {
              required,
            },
            student_id: {
              required,
            },
            grade: {
              required,
            },
            start_date: {
              required,
            },
            regular_bus_service: {
              required,
            },
            shuttle_service: {
              required,
            },
            medical_conditions: {
              required,
            },
            image_result: {
              required,
            },
          };
          ValidateDataForm.children[key] = child;
        });
      }
    }
    return {
      dataForm: ValidateDataForm,
    };
  },
  methods: {
    add: function () {
      this.dataForm.children.push({
        ref_id: Math.random().toString(36).substring(2, 15),
        title: "Child",
        family_name: "",
        given_name: "",
        date_of_birth: "",
        student_id: "",
        grade: "",
        gender: "male",
        start_date_of_service: "first_day_of_semester",
        start_date: "",
        regular_bus_service: "",
        shuttle_service: "",
        medical_conditions: "",
        image_result: null,
      });
    },
    remove: function (index) {
      const vm = this;
      this.dataForm.children.splice(index, 1);
      this.$forceUpdate();
      console.log(this.dataForm.children);
      $("html,body").animate({ scrollTop: 1400 }, "slow");
      setTimeout(() => {
        Object.entries(this.dataForm.children).forEach(([key, child]) => {
          if (child.rawImg) {
            vm.$refs["croppieRef_" + child.ref_id][0].bindCroppie(
              JSON.parse(JSON.stringify(child.rawImg))
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
          let rawImg = e.target.result;
          vm.dataForm.children[index].rawImg = rawImg;
          vm.$refs["croppieRef_" + ref_id][0].bindCroppie(
            JSON.parse(JSON.stringify(rawImg))
          );
        };
      }
      console.log(vm.dataForm.children);
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
    submit() {
      this.typesubmit = true;
      this.v$.$validate();
      if (!this.v$.$invalid) {
        this.dataForm.children.map((student, index) => {
          student.image_result = this.$refs[`croppieRef_${index}`].imageSrc;
        });
      } else {
        setTimeout(() => {
          $(".is-invalid")[0].scrollIntoView();
          window.scrollBy(0, -100);
        }, 200);
      }
      console.log(this.dataForm.parents[0].family_name);
      // this.dataForm.parents.family_name =
      //   e.target.dataForm.parents.family_name.value;
    },
  },
};
</script>

<style>
@import "../assets/scss/form-component.css";
@import "@/assets/scss/croppie.min.css";
</style>
