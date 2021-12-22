import React, { Component } from 'react'
import {connect} from "react-redux"
import {datGheAction} from "./../redux/action/bookingAction"

class HangGhe extends Component {
    renderGhe = () => {
        return this.props.hangGhe.danhSachGhe.map((ghe,index) => {
            // ghế đã đặt
            let cssGheDaDat = '';
            let disable = false;
            
            // khi duyệt mảng, duyệt đến đã đặt = true thì đổi cssGheDaDat và chuyển disable
            if(ghe.daDat){
                cssGheDaDat = 'gheDuocChon';
                disable = true;
            }
            // ghế đang đặt
            let cssGheDangDat = '';
            // Nếu số ghế có trong giỏ hàng (danhSachGheDangDat.soGhe) === danhSachGhe đang duyệt(ghe) thì đổi thuộc tính button thành màu xanh
            let indexGioHang = this.props.danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.soGhe === ghe.soGhe);
            if (indexGioHang !== -1){
                cssGheDangDat = 'gheDangChon';
            }

            // Nếu có thuộc tính cursor: no-prop của CSS thôi thì không đủ, vì vẫn có thể bấm vào và chạy bình thường. Nên dùng disabled để chắc chắn ko chạy tác vụ. Có thể kiểm tra bằng onClick
            return <button 
            disabled={disable} 
            className={`ghe ${cssGheDaDat} ${cssGheDangDat}`} 
            onClick={() => {
                this.props.datGhe(ghe)
            }}
            key={index}>
                {ghe.soGhe}
            </button>
        })
    };

    renderHangGhe = () => {
        if(this.props.soHangGhe === 0){
            return <div className='ml-3'>
                {/* hàng đầu sẽ được css theo rowNumber (hàm ở dưới) */}
                {this.props.hangGhe.hang} {this.renderHangDau()}
            </div>
        }
        else{
            return <div>
                {this.props.hangGhe.hang} {this.renderGhe()}
            </div>
        }
    }

    renderHangDau = () => {
        return this.props.hangGhe.danhSachGhe.map((hang) => {
            return <button className='rowNumber'>
                {hang.soGhe}
            </button>
        })
    }

    render() {
        return (
            <div className='text-light ml-5 mt-3' style={{textAlign: 'left'}}>
                {this.renderHangGhe()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        danhSachGheDangDat: state.bookingMovieReducer.danhSachGheDangDat,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        datGhe: (ghe) => {
            dispatch(datGheAction(ghe))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (HangGhe)