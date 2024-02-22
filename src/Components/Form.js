import React from 'react'

const Form = () => {
  return (
    <div>
            <div class="page-content">
    <div class="container" id="sell_scrap_container">
       <div class="sell_scrap_w" style="margin-bottom:165px;">
          <div class="sell_scrap_pos">
                                                             <div class="step1" id="step1_form"  >
                <form action="" id="form_0" method="post" accept-charset="utf-8">
                   <div class="step_tbs">
                      <p class="steps active"><b>01</b><span>Mobile No. </span></p>
                      <p class="steps"><b>02</b><span>Address </span></p>
                      <p class="steps"><b>03</b><span>Schedule </span></p>
                      <p class="steps"><b>04</b><span>Load</span></p>
                   </div>
                   <div class="row">
                      <div class="col-12 col-lg-3">
                         <div class="sell_scrap_hed">
                            Request for your waste 
                         </div>
                         <p class="sml_text mt-2 poppins">In just 4 simple steps...</p>
                      </div>
                      <div class="col-12 col-lg-6">
                         <div class="sell_scrap_input">
                            <div class="form-group" style="margin-bottom: 0px;">
                               <input type="text" class="form-control" id="phone" name="mobile_number" placeholder="Enter Your Mobile Number *" aria-describedby="prepend1" value="" style="height: 50px;" required="" pattern="[0-9]+" maxlength="10" minlength="10">
                            </div>
                            <p class="input_sml_txt mt-2 poppins">Service Available in all places</p>
                         </div>
                      </div>
                      <div class="col-12 col-lg-3">
                         <div>
                            <input id="Submit1" type="submit" value="Proceed" class="sell_button">
                         </div>
                      </div>
                   </div>
                </form>
             </div>
             <div class="step2 dn" id="step2_form" style="display:none" >
                <a href="#sell_1" id="sell_1"></a>
                <form action="" id="form_2" method="post" accept-charset="utf-8">
                   <div class="step_tbs">
                      <p class="steps active"><b>01</b><span>Mobile No. </span></p>
                      <p class="steps active"><b>02</b><span>Address </span></p>
                      <p class="steps"><b>03</b><span>Schedule </span></p>
                      <p class="steps"><b>04</b><span>Load</span></p>
                   </div>
                   <div class="row">
                      <div class="col-12 col-lg-3">
                         <p class="back_btn"><a href="#" onclick="$('.step1').show();$('.step2').hide()"></a></p>
                         <div class="sell_scrap_hed">Request for your waste</div>
                         <p class="sml_text mt-2 poppins">In just 4 easy steps...</p>
                      </div>
                      <div class="col-12 col-lg-6">
                         <div class="sell_scrap_input form-row">
                            <div class="col-sm-4">
                               <div class="form-group">
                                  <input type="text" class="form-control" name="name" id="name" placeholder="Name *" value=""style="height: 50px;" required="">
                               </div>
                            </div>
                            <div class="col-sm-4">
                               <div class="form-group">
                                  <input type="text" class="form-control" name="flat_number" id="house_no" placeholder="Flat/House Number *" value=""style="height: 50px;" required="">
                               </div>
                            </div>
                            <div class="col-sm-4">
                               <div class="form-group">
                                  <input name="address" required class="form-control" type="text" placeholder="Street/Area *" value=""style="height: 50px;"> 
                               </div>
                            </div>
                            <div class="col-sm-4">
                               <div class="form-group">
                                  <input type="text" name="landmark" required value="" class="form-control" id="city" placeholder="Landmark *"style="height: 50px;"> 
                               </div>
                            </div>
                            <div class="col-sm-4">
                               <div class="form-group">
                                  <select name="state_id" required onchange="bind_data(this.value,'home/bind_city','city_list','loader_city','neighborhood_country');" class="form-control" id="state_id" style="height: 50px;">
                                     <option value="" selected="selected">Select State *</option>
                                     <option value="Delhi">Delhi</option>
                                     <option value="Uttar Pradesh">Uttar Pradesh</option>
                                     
                                  </select>
                               </div>
                            </div>
                            <div class="col-sm-4">
                               <div class="form-group">
                                  <span id="loader_city"></span>
                                  <span id="city_list">
                                     <select name="city_id" id="city_id" required class="form-control state" style="height: 50px;">
                                        <option value="" selected="selected">Select City *</option>
                                        <option value="Noida">Noida</option>
										<option value="Greater Noida">Greater Noida</option>
										<option value="Delhi">Delhi</option>
                                        <option value="Ayodhya">Ayodhya</option>
                                        <option value="Lucknow">Lucknow</option>
                                        <option value="Kanpur">Kanpur</option>
                                     </select>
                                  </span>
                               </div>
                            </div>
                            <div class="col-sm-4">
                               <div class="form-group">
                                  <input name="pin_code" type="text" class="form-control" required id="pin_code" placeholder="Pin Code *" value="" style="height: 50px;"> 
                               </div>
                            </div>
                            <div class="col-sm-8">
                               <div class="form-group">
                                  <p class="input_sml_txt mt-2 poppins">Service Available all places</p>
                               </div>
                            </div>
                         </div>
                      </div>
                      <div class="col-12 col-lg-3">
                         <div>
                            <input id="Submit2" type="submit" value="Proceed" class="sell_button">
                         </div>
                      </div>
                   </div>
                </form>
             </div>
             <div class="step3 dn" id="step3_form" style="display:none">
                <a href="#sell_3" id="sell_3"></a>
                <form action="" id="form_3" method="post" accept-charset="utf-8">
                   <div class="step_tbs">
                      <p class="steps active"><b>01</b><span>Mobile No. </span></p>
                      <p class="steps active"><b>02</b><span>Address </span></p>
                      <p class="steps active"><b>03</b><span>Schedule </span></p>
                      <p class="steps"><b>04</b><span>Load </span></p>
                   </div>
                   <div class="row">
                      <div class="col-12 col-lg-3">
                         <p class="back_btn"><a href="#" onclick="$('.step2').show();$('.step3').hide()"></a></p>
                         <div class="sell_scrap_hed">
                            Request for your waste
                         </div>
                         <p class="sml_text mt-2 poppins">In just 4 easy steps...</p>
                      </div>
                      <!-- <div class="col-12 col-lg-2">
                         <div class="sell_scrap_input">
                            <div class="form-group input_group_2">
                               <input type="date" class="start_date1 form-control" name="from_date" value="" id="from" placeholder="Pickup date *" aria-describedby="prepend1" required="" style="height: 50px;">
                            </div>
                         </div>
                      </div> -->
                      <div class="col-12 col-lg-2">
                         <div class="form-group">
                            <select name="from_time" class="form-control select-slot" style="font-size:14px;height: 50px; ">
                               <option value="" selected="">Select Pickup Time</option>
                               <option value="9AM to 7PM">9AM to 7PM</option>
                            </select>
                         </div>
                      </div>
                      <div class="col-12 col-lg-2">
                         <div class="form-group">
                            <input type="text" class="form-control" name="email"  required id="email" placeholder="Email *" style="padding: 11px;height: 50px;" value="">
                         </div>
                      </div>
                      <div class="col-12 col-lg-3">
                         <div>
                            <input name="submit3" type="submit" value="Proceed" class="sell_button">
                         </div>
                      </div>
                   </div>
                </form>
             </div>
             <div class="step4 dn" id="step4_form" style="display:none">
                <a href="#sell_4" id="sell_4"></a>
                <form action="" id="form_4" method="post" accept-charset="utf-8">
                   <div class="step_tbs">
                      <p class="steps active"><b>01</b><span>Mobile No. </span></p>
                      <p class="steps active"><b>02</b><span>Address </span></p>
                      <p class="steps active"><b>03</b><span>Schedule </span></p>
                      <p class="steps active"><b>04</b><span> </span></p>
                   </div>
                   <div class="row">
                      <div class="col-12 col-lg-3">
                         <p class="back_btn"><a href="#" onclick="$('.step2').show();$('.step3').hide()"></a></p>
                         <div class="sell_scrap_hed">
                            Request for your waste
                         </div>
                         <p class="sml_text mt-2 poppins">In just 4 easy steps...</p>
                      </div>
                      <div class="col-12 col-lg-4">
                         <div class="form-group">  
                            <input type="text" class="form-control" name="cat" id="cat" placeholder="Type Of Scrap *" style="padding: 11px;" value="">  
                         </div>
                      </div>
                      <div class="col-12 col-lg-2">
                         <div class="mt-2 text-left">
                            <div class=" form-check">
                               <label class="mr-2">
                               
                            </div>
                         </div>
                      </div>
                      <div class="col-12 col-lg-3">
                         <div>
                            <input id="submit4" type="submit" value="Submit" class="sell_button">
                         </div>
                      </div>
                   </div>
                </form>
             </div>
          </div>
       </div>
    </div>
 
    </div>
  )
}

export default Form