import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { getSingleBlog } from '../../../../store/Blog';
import { toast } from 'react-toastify';
import { addReplyReq } from '../../../../utils/request';

function RepliesForm({ article_id, item }) {
    const dispatch = useDispatch()
    const queryId = window.location.pathname.slice(6);
    const [value, setformValue] = useState();
    const [isload, setLoading] = useState(false);
    const comment_input = document.querySelector("#body")

    const addValue = (e) => {
        setformValue({ ...value, [e.target.name]: e.target.value, article_id })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        // setError(null)
        const res = await addReplyReq(value);
        if (res && res.data) {
            toast.success(res.data?.message)
            comment_input.value = ""
            setLoading(false)
            dispatch(getSingleBlog(queryId))
        }
        else if (res && res?.response) {
            toast.error(res?.response?.data?.message)
            setLoading(false)
            if (res?.response?.data?.message === 'Unauthenticated.') {
                window.location.href = "/auth/signin"
            }
        }
        else {
            toast.info('Oops something went wrong')
            setLoading(false)
        }

    }
    return (
        <div class="modal fade" id={`reply${item?.id}`} tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content mt-5">
                    {/* <div class="modal-header">
                        <h5 class="modal-title">Modal title</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div> */}
                    <div class="modal-body p-1 ">

                        <form onSubmit={(e) => handleSubmit(e)}>

                            <div className="form-group">
                                <textarea name="body" id="body" cols="30" rows="10" className='form-control' placeholder='Enter your message here'
                                    onChange={(e) => addValue(e)}
                                    required></textarea>
                                {/* <small id="emailHelpId" className="form-text text-muted">Help text</small> */}
                            </div>
                            <div className="form-group mb-0">
                                <button className="btn " disabled={isload === true ? true : false}>
                                    {isload ? 'Replying...' : "Reply"}</button>
                            </div>
                        </form>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default RepliesForm
