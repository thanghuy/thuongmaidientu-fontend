import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import * as action from '../../action/address';
import callApi from '../../utils/api5003';
import LoadingUpdate from '../../common/loading/loadingUpdate';
class FormShowAddress extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataAddress : "",
            id : null,
            loading : false
        }
    }
    toggleChange = (e) => {
        var target = e.target;
        this.setState({
            id : target.value
        })
    }
    changeAddress = async (id) =>{
        try {
            this.setState({
                loading : true
            })
            var token = localStorage.getItem("token");
            var resp = await callApi("/addressuser/changedefault/"+id,"PUT",token,null);
            this.setState({
                loading : false
            })
            this.props.setAddress(resp.data.success)
        } catch (error) {
            this.props.setAddress(true);
            this.setState({
                id : null,
                loading : false
            })
        }
        
    }
    saveAddress =()=>{
        var {id} = this.state;
        if(id !== null){
           this.changeAddress(id)
        }
        else{
            this.setState({
                loading : false
            })
        }
    }
    showAddress(){
        var {dataAddress} = this.props;
        var result = "";
        if(dataAddress !== ""){
            result = dataAddress.map((address,index)=>{
                return(
                    <tr key={index} className="order-detaile-cf">
                        <td>{address.fullName}</td>
                        <td>{address.fullAddress}</td>
                        <td>{address.phoneNumber}</td>
                        <td>
                            <input onChange={this.toggleChange} value={address.id} 
                            
                            name="check" className="input-address-user" 
                            type="radio" aria-label="Checkbox for following text input" 
                            defaultChecked={address.isDefault}/>
                        </td>
                    </tr>
                )
            })
        }
        else{
            return null;
        }
        return result;
    }
    render() {
        var {loading} = this.state;
        var load = loading ? "block" :"none"
        return (
            <div className="container">
                <LoadingUpdate load={load} />
                <table className="table list-order-client">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">Họ tên</th>
                            <th scope="col">Địa chỉ</th>
                            <th scope="col">Số điện thoại</th>
                            <th scope="col" style={{textAlign : "center"}}>Thao tác</th>
                        </tr>
                    </thead>
                </table>
                <div className="tableFixHead">
                    <table className="table list-order-client">
                        <tbody className="list-order-comfirm">{this.showAddress()}</tbody>
                    </table>
                </div>
                <button className="login" type="button" onClick={this.saveAddress}>Lưu thông tin</button>
            </div>
        );
    }
}
// const mapStateToProps = state => {
//     return {
//         dataAddress : state.dataAddress
//     }
// }
// const mapDispatchToProps = (dispatch,props)=>{
//     return {
//         getDataAddress : (data) => {
//             dispatch(action.Address(data))
//         }
//     }
// }
export default FormShowAddress;