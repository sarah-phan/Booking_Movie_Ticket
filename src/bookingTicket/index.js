import React, { Component } from 'react';
import "./BaiTapBookingTicket.css";
import ThongTinGhe from './ThongTinGhe';
import danhSachGheData from "./../Data/danhSachGhe.json"
import HangGhe from './HangGhe';


export default class BookingTicket extends Component {
    
    renderHangGhe = () => {
        return danhSachGheData.map((hangGhe, index) => {
            return <div key={index} >
                {/* render ra từng hàng ghế */}
                <HangGhe hangGhe = {hangGhe} soHangGhe={index}/>
            </div>
        })
    }

    render() {
        return (
            <div className='bookingMovie' style={{ position: "fixed", width: "100%", height: "100%", backgroundImage: "url('./img/bgmovie.jpg')", backgroundSize: "100%" }}>
                <div style={{ position: "fixed", width: "100%", height: "100%", backgroundColor: "rgba(0,0,0,0.8)" }}>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-8 text-center'>
                                <div style={{ fontSize: 30, color: '#16C0DB' }}>ĐẶT VÉ XEM PHIM CYBERLEARN.VN</div>
                                <div style={{ fontSize: 20 }} className='text-light mt-2'>Màn hình</div>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }} className='mt-2'>
                                    <div className='screen'></div>
                                </div>
                                {this.renderHangGhe()}
                            </div>
                            <div className='col-4'>
                                <div style={{ fontSize: 25, color: '#16C0DB'}}>DANH SÁCH GHẾ BẠN CHỌN</div>
                                <ThongTinGhe />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
