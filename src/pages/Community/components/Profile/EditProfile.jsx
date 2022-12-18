import React from 'react'

function EditProfile() {
  return (
    <div class="modal fade" id="editProfile" tabindex="-1" role="dialog" aria-labelledby="editProfile" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header shadow">
            <h5 class="modal-title">
              Edit Profile</h5>
            <img src="/images/profile/cancel.png" title='Add Cover Image' alt="" data-dismiss="modal" className='link' aria-label="Close" />
          </div>


          <div class="modal-body p-0">
            <div className="imgbox_container ">
              <div className='img' >
                <img src="/images/profile/add.png" title='Add Cover Image' alt="" />
              </div>
            </div>

            <div className="avatarBox">
              <img src="/images/profile/profile.png" classname='avatar' alt="" />
            </div>
            <form action="" className=' text-left editProfileForm'>
              <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" name="name" id="" aria-describedby="helpId" placeholder="" />
                <small id="helpId" class="form-text text-danger d-none">Help text</small>
              </div>
              <div class="form-group">
                <label for="bio">Bio</label>
                <textarea name="" id="" cols="30" rows="10" class="form-control" placeholder="" ></textarea>
                <small id="helpId" class="form-text text-danger d-none">Help text</small>
              </div>
              <div class="form-group">
                <label for="location">Location</label>
                <input type="text" class="form-control" name="location" id="" aria-describedby="helpId" placeholder="" />
                <small id="helpId" class="form-text text-danger d-none">Help text</small>
              </div>
              <div class="form-group">
                <label for="">Name</label>
                <select type="text" class="form-control" name="name" id="" aria-describedby="helpId" placeholder="" >
                  <option value="" selected>Select club</option>

                </select>
                <small id="helpId" class="form-text text-danger d-none">Help text</small>
              </div>
              <div class="form-group text-right">
                <button type="button" className='btn btn-blue ' >
                  Update Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditProfile
