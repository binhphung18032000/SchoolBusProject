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
            <div
              class="col-md-4"
              v-for="(parent, index) in dataForm.parents"
              :key="index"
            >
              <label for="">{{ index + 1 }}.{{ parent.title }}</label>
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
                    v-model="parent.first_name"
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
                    v-model="parent.mobile_phone"
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
                        value="guardian"
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
                  v-model="dataForm.pick_drop_address.street_name"
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
                  v-model="dataForm.pick_drop_address.postal_code"
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
                  v-model="dataForm.billing_address.name_Company"
                />
              </div>
              <div class="form-group col-md-6">
                <label for="attention-to">Attention to</label>
                <input
                  id="attention-to"
                  type="text"
                  class="form-control"
                  placeholder="eg: John"
                  v-model="dataForm.billing_address.attention_to"
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
                  v-model="dataForm.billing_address.billing_address"
                />
              </div>
              <div class="form-group col-md-6">
                <label for="billing-email-address">Email Address</label>
                <input
                  id="billing-email-address"
                  type="text"
                  class="form-control"
                  placeholder="eg: example@gmail.com"
                  v-model="dataForm.billing_address.email_address"
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
            <!-- add more form children if needed -->
            <div
              class="add-more-form"
              v-for="(child, index) in dataForm.Children"
              :key="index"
            >
              <div class="col-md-8">
                <div class="pl-13 font-weght-700">
                  <!-- <li style="list-style-type: decimal">Child</li> -->
                  <li style="list-style-type: decimal">dsadasd</li>
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
                        value="two-way"
                        type="radio"
                        class="form-check-input"
                        name="route[1]"
                      />
                      2 Ways
                    </label>
                    <label class="label-route d-block">
                      <input
                        value="am-way"
                        type="radio"
                        class="form-check-input"
                        name="route[1]"
                      />
                      1 Way (AM)
                    </label>
                    <label class="label-route d-block">
                      <input
                        value="pm-way"
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
                        value="two-way"
                        type="radio"
                        class="form-check-input"
                        name="route[2]"
                      />
                      2 Ways
                    </label>
                    <label class="label-route d-block">
                      <input
                        value="am-way"
                        type="radio"
                        class="form-check-input"
                        name="route[2]"
                      />
                      1 Way (AM)
                    </label>
                    <label class="label-route d-block">
                      <input
                        value="pm-way"
                        type="radio"
                        class="form-check-input"
                        name="route[2]"
                      />
                      1 Way (PM)
                    </label>
                  </ul>
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
                  ></textarea>
                </div>
              </div>

              <!-- UPLOAD IMAGE -->
              <div class="col-md-4">
                <div class="col-md-12">
                  <a href="#" class="pull-right btn-remove removeChild hidden">
                    <span
                      class="glyphicon glyphicon-remove"
                      id="iconRemoveChild"
                    ></span>
                  </a>
                  &nbsp;
                </div>
                <div class="text-center">
                  <label for="photo" class="padding-left-7"
                    >Recent photo of child</label
                  >
                </div>
                <div class="profile-container text-center">
                  <CroppieImage
                    :ref="`croppieRef1`"
                    :refID="`croppieRef1`"
                  ></CroppieImage>
                  <input
                    class="hidden"
                    @change="changeImage"
                    type="file"
                    ref="fileInput"
                  />
                  <a class="btn btn-info btnUpload" @click="onPickFile"
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
              <a class="btn btn-add-more-child" id="addMoreChild"
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
export default {
  components: {
    CroppieImage,
  },
  data() {
    return {
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
          block_house_number: "bình",
          street_name: "hưng",
          postal_code: "anh trần",
          unit_number: "duy",
          name_of_building_condominium: "thịnh",
        },
        billing_address: {
          same_as_above: false,
          regard_payment: "mother",
          name_Company: "antking",
          attention_to: "CVPM Quang Trung",
          billing_address: "Tòa nhà SBI 305",
          email_address: "antking@gmail.com",
        },
        Children: [
          {
            title: "Child",
            family_name: "Ngô",
            given_name: "Dương",
            date_of_birth: "18-03-2000",
            Student_id: "2001180224",
            grade: "11",
            gender: "male",
            start_date: ["23-03-2022"],
            regular_bus_service: "two-way",
            shuttle_service: "two-way",
            medical_conditions: "hello mấy cưng. Cỗ dũ cho anh nào!",
            image_result: "",
          },
        ],
      },
      // count: 1,
    };
  },
  methods: {
    // add: function () {
    //   this.count++;
    // },
    // remove: function () {
    //   this.count--;
    // },
    resetImage() {
      this.$refs["croppieRef1"].refreshCroppie();
    },
    changeImage(input) {
      const vm = this;
      if (input.target.files && input.target.files[0]) {
        let reader = new FileReader();
        reader.readAsDataURL(input.target.files[0]);
        reader.onload = function (e) {
          let rawImg = e.target.result;
          vm.$refs["croppieRef1"].bindCroppie(
            JSON.parse(JSON.stringify(rawImg))
          );
        };
      }
    },
    onPickFile() {
      this.$refs.fileInput.click();
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
  },
};
</script>

<style>
@import "@/assets/scss/croppie.min.css";
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

.profile-container:hover .image {
  opacity: 0.3;
}

.profile-container:hover .middle {
  opacity: 1;
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

.btn-info {
  color: #fff !important;
  background-color: #5bc0de !important;
  border-color: #46b8da !important;
}

.btn-info:hover {
  color: #fff !important;
  background-color: #31b0d5 !important;
  border-color: #269abc !important;
}

.upload-demo {
  height: 330px !important;
}
.upload-demo .cr-boundary {
  max-width: 300px;
  width: 100%;
}
.old_profile_img {
  min-width: 200px;
  max-width: 20px;
  padding-bottom: 20px;
}

/*==================================== Croppie test */
.croppie-container {
  width: 100%;
  height: 100%;
}

.croppie-container .cr-image {
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  transform-origin: 0 0;
  max-height: none;
  max-width: none;
}

.croppie-container .cr-boundary {
  position: relative;
  overflow: hidden;
  margin: 0 auto;
  z-index: 1;
  width: 100%;
  height: 100%;
}

.croppie-container .cr-viewport {
  position: absolute;
  border: 2px solid #fff;
  margin: auto;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  box-shadow: 0 0 2000px 2000px rgba(0, 0, 0, 0.5);
  z-index: 0;
}

.croppie-container .cr-original-image {
  display: none;
}

.croppie-container .cr-vp-circle {
  border-radius: 50%;
}

.croppie-container .cr-overlay {
  z-index: 1;
  position: absolute;
  cursor: move;
}

.croppie-container .cr-slider-wrap {
  width: 75%;
  margin: 15px auto;
  text-align: center;
}

.croppie-result {
  position: relative;
  overflow: hidden;
}

.croppie-result img {
  position: absolute;
}

.croppie-container .cr-image,
.croppie-container .cr-overlay,
.croppie-container .cr-viewport {
  -webkit-transform: translateZ(0);
  -moz-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
}

/*************************************/
/***** STYLING RANGE INPUT ***********/
/*************************************/
/*http://brennaobrien.com/blog/2014/05/style-input-type-range-in-every-browser.html */
/*************************************/

.cr-slider {
  -webkit-appearance: none;
  /*removes default webkit styles*/
  /*border: 1px solid white; */ /*fix for FF unable to apply focus style bug */
  width: 300px;
  /*required for proper track sizing in FF*/
  max-width: 100%;
}

.cr-slider::-webkit-slider-runnable-track {
  width: 100%;
  height: 3px;
  background: rgba(0, 0, 0, 0.5);
  border: 0;
  border-radius: 3px;
}

.cr-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  border: none;
  height: 16px;
  width: 16px;
  border-radius: 50%;
  background: #ddd;
  margin-top: -6px;
}

.cr-slider:focus {
  outline: none;
}
/*
.cr-slider:focus::-webkit-slider-runnable-track {
background: #ccc;
}
*/

.cr-slider::-moz-range-track {
  width: 100%;
  height: 3px;
  background: rgba(0, 0, 0, 0.5);
  border: 0;
  border-radius: 3px;
}

.cr-slider::-moz-range-thumb {
  border: none;
  height: 16px;
  width: 16px;
  border-radius: 50%;
  background: #ddd;
  margin-top: -6px;
}

/*hide the outline behind the border*/
.cr-slider:-moz-focusring {
  outline: 1px solid white;
  outline-offset: -1px;
}

.cr-slider::-ms-track {
  width: 100%;
  height: 5px;
  background: transparent;
  /*remove bg colour from the track, we'll use ms-fill-lower and ms-fill-upper instead */
  border-color: transparent; /*leave room for the larger thumb to overflow with a transparent border */
  border-width: 6px 0;
  color: transparent; /*remove default tick marks*/
}
.cr-slider::-ms-fill-lower {
  background: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
}
.cr-slider::-ms-fill-upper {
  background: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
}
.cr-slider::-ms-thumb {
  border: none;
  height: 16px;
  width: 16px;
  border-radius: 50%;
  background: #ddd;
  margin-top: 1px;
}
.cr-slider:focus::-ms-fill-lower {
  background: rgba(0, 0, 0, 0.5);
}
.cr-slider:focus::-ms-fill-upper {
  background: rgba(0, 0, 0, 0.5);
}
/*******************************************/

/***********************************/
/* Rotation Tools */
/***********************************/
.cr-rotate-controls {
  position: absolute;
  bottom: 5px;
  left: 5px;
  z-index: 1;
}
.cr-rotate-controls button {
  border: 0;
  background: none;
}
.cr-rotate-controls i:before {
  display: inline-block;
  font-style: normal;
  font-weight: 900;
  font-size: 22px;
}
.cr-rotate-l i:before {
  content: "â†º";
}
.cr-rotate-r i:before {
  content: "â†»";
}

[src=""] {
  width: 0 !important;
  height: 0 !important;
}
/* end Croppie test */
</style>
