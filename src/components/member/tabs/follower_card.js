import React from 'react'

const Follower_card = () => {
    return (
        <div class="card container row mb-3">
            <div class="card-body row align-items-center justify-content-center">
                <div class="col-8 text_container">
                    <h5 class="text-center card-title">${'apple' + "-" + 'apple'}</h5>
                    <p class="text-center card-text">團購時間:~${'2023/05/19'}</p>
                    <div class="state_div text-center">
                        <span class="state">${"已出貨"}</span>
                        <button class="btn btn_state" onclick="follower_order(${response.data[i].product_id})">詳細訂單</button>
                    </div>
                </div>
                <div class="col-4 justify-content-center img_container" >
                    <img onclick="store_product_id(${response.data[i].product_id})" src="${response.data[i].pic_url1}" style="max-width: 100%; cursor: pointer;" alt="${response.data[i].shop_name + response.data[i].product}" />
                </div>

            </div>
        </div>

    )
}

export default Follower_card