import React from 'react'

function PopupPost() {
    return (
        <div class="modal fade shadow" id="loadPopup" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header ">
                        <h5 class="modal-title ">Create a Post</h5>
                    </div>
                    <div class="modal-body pb-0">
                        <div className='postBox '>
                            <div className="row m-0">
                                <div className="col-2 text-center p-0">
                                    <img src="/images/profile.png" alt="" />
                                </div>
                                <div className="col-9 p-md-0">
                                    <textarea name="" placeholder="What’s happening?"></textarea>

                                    <div className="postBottom">
                                        <div className='f-img'>
                                            <img src="/images/box/picture.png" alt="" />
                                            <img src="/images/box/video.png" alt="" />
                                            <img src="/images/box/gif.png" alt="" />
                                            <img src="/images/box/more.png" alt="" />
                                            <img src="/images/box/emoji.png" alt="" />
                                        </div>
                                        <div className='s-img'>
                                            <img src="/images/box/add.png" className='link' alt="" />
                                            <button className="btn add-post ">Post</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default PopupPost

