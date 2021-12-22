import React, { Component } from 'react'
import {connect} from "react-redux"
import { huyGheAction } from '../redux/action/bookingAction'

class ThongTinGhe extends Component {
    render() {
        const {danhSachGheDangDat} = this.props
        return (
            <div>
                <div className='mt-4'>
                    <button className='gheDuocChon'></button> <span style={{ fontSize: 16, color: 'white' }}>Ghế đã đặt</span>
                    <br />
                    <button className='gheDangChon'></button> <span style={{ fontSize: 16, color: 'white' }}>Ghế đang chọn</span>
                    <br />
                    <button className='ghe' style={{ marginLeft: '0' }}></button> <span style={{ fontSize: 16, color: 'white' }}>Ghế chưa đặt</span>
                </div>
                <div className="mt-4">
                    <table className="table" border="2">
                        <thead>
                            <tr className='text-light' style={{fontSize: 20}}>
                                <th>Số ghế</th>
                                <th>Giá</th>
                                <th>Hủy</th>
                            </tr>
                        </thead>
                        <tbody>
                            {danhSachGheDangDat.map((gheDangDat,index) => {
                                return <tr key={index} className='text-warning'>
                                    <td>{gheDangDat.soGhe}</td>
                                    <td>{gheDangDat.gia.toLocaleString()}</td>
                                    <td>
                                        <button 
                                        className='btn btn-warning'
                                        onClick={() => {
                                            this.props.dispatch(huyGheAction(gheDangDat.soGhe))
                                        }}
                                        >
                                            Huỷ
                                        </button>
                                    </td>
                                </tr>
                            })}
                        </tbody>
                        <tfoot>
                            <tr className='text-warning'>
                                <td></td>
                                <td>Tổng tiền</td>
                                <td>
                                    {danhSachGheDangDat.reduce((tongTien, gheDangDat) => {
                                        return tongTien += gheDangDat.gia
                                    },0)}
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        danhSachGheDangDat: state.bookingMovieReducer.danhSachGheDangDat
    }
}
export default connect(mapStateToProps,null) (ThongTinGhe)
