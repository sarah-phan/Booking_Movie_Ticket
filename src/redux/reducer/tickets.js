import { DAT_GHE, HUY_GHE } from "../type/bookingType"

const stateDefault = {
    danhSachGheDangDat: [
        // {soGhe: "A1", gia: 100}
    ]
}

const bookingMovieReducer = (state = stateDefault, action) => {
    switch(action.type){
        case DAT_GHE: {
            let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat]
            // check ghế đó người dùng từng chọn chưa, nếu rồi thì xóa, nếu chưa thì push vào mảng danhSachGheDangDat
            let index = danhSachGheDangDatUpdate.findIndex(gheDangDat => gheDangDat.soGhe === action.ghe.soGhe)
            if (index !== -1){
                danhSachGheDangDatUpdate.splice(index,1)
            }
            else{
                danhSachGheDangDatUpdate.push(action.ghe)
            }
            state.danhSachGheDangDat = danhSachGheDangDatUpdate
            return {...state}
        }
        case HUY_GHE: {
            let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat]
            // check ghế đó người dùng từng chọn chưa, nếu rồi thì xóa, nếu chưa thì push vào mảng danhSachGheDangDat
            let index = danhSachGheDangDatUpdate.findIndex(gheDangDat => gheDangDat.soGhe === action.soGhe)
            if (index !== -1){
                danhSachGheDangDatUpdate.splice(index,1)
            }
            else{
                danhSachGheDangDatUpdate.push(action.ghe)
            }
            state.danhSachGheDangDat = danhSachGheDangDatUpdate
            return {...state}
        }
            
        default: return {...state}
    }
}

export default bookingMovieReducer;