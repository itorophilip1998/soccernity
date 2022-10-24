import React from 'react'

const PlayerInfo = ({ item }) => {
    return (
        <div class="modal-dialog playerInfo" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">{item?.name} {item?.number && <b>({item?.number})</b>}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="container-fluid">
                        Add rows here love
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PlayerInfo
