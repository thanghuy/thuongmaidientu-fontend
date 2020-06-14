import React, { useState} from 'react';
import callApi from '../../utils/api5003';
import { useForm } from "react-hook-form";
import LoadingUpdate from '../../common/loading/loadingUpdate';
import * as message from '../../constant/message';
const FormAddress =(props)=> {
    const [state,setState] = useState({
        activeList : false,
        activeDi : false,
        activeWa : false,
        CityList : "",
        fullname : "",
        phoneNumber : "",
        detailAddress : "",
        DistrictList : "",
        WardList : "",
        provinceOrCity : "",
        district : "",
        ward : "",
        idTinh : "",
        QuanHuyenID : "",
        loading : false
    })
    const { register, handleSubmit, errors } = useForm();
    const getDataprovinceOrCity = async () =>{
        var resp = await callApi("/city","GET",null,null)
        setState(prev=>({
            ...prev,
            CityList : resp.data.data.ltsItem
        }));
    }
    const getDataDistrict = async (id) =>{
        if(id !== ""){
            var resp = await callApi("/city/"+id+"/district","GET",null,null)
            setState(prev=>({
                ...prev,
                DistrictList : resp.data.data
            }))
        }
    }
    const getDataWard = async (id) =>{
        if(id !== ""){
            var resp = await callApi("/district/"+id+"/ward","GET",null,null)
            setState(prev=>({
                ...prev,
                WardList : resp.data.data
            }))
        }
    }
    const showList = () =>{
        var {activeList} = state;
        if(activeList){
            setState(prev=>({
                ...prev,
                activeList : false
            }))
        }
        else{
            setState(prev=>({
                ...prev,
                activeList : true,
                activeDi : false,
                activeWa : false
            }))
        }
    }

    const showDi = () =>{
        var {activeDi} = state;
        if(activeDi){
            setState(prev=>({
                ...prev,
                activeDi : false
            }))
        }
        else{
            setState(prev=>({
                ...prev,
                activeDi : true,
                activeList : false,
                activeWa : false
            }))
        }
    }
    const showWa = () =>{
        var {activeWa} = state;
        if(activeWa){
            setState(prev=>({
                ...prev,
                activeWa : false
            }))
        }
        else{
            setState(prev=>({
                ...prev,
                activeWa : true,
                activeList : false,
                activeDi : false,
            }))
        }
    }
    const getValue = (value,id) =>{
        setState(prev=>({
            ...prev,
            provinceOrCity : value,
            district : "Chọn quận/huyện",
            ward : "Chọn phường/xã",
            idTinh : id
        }))
        getDataDistrict(id)
    }
    const getWard = (value) =>{
        setState(prev=>({
            ...prev,
            ward : value,
        }))
    }
    const getDistrict = (value,id) =>{
        setState(prev=>({
            ...prev,
           district : value,
           QuanHuyenID : id,
           ward : "Chọn phường/xã",
        }))
        getDataWard(id)
    }
    const showProvince =  () =>{
        var {CityList} = state;
        var result = "";
        if(CityList === ""){
            result = "";
            getDataprovinceOrCity();
        }
        else{
            result = CityList.map((tinh,index) =>{
                return (
                    <li key={index} className="dropdown-item" onClick={() => getValue(tinh.title,tinh.id)}>{tinh.title}</li>
                )
            })
        }
        return result;
    }
    const showHuyen = ()=>{
        var {idTinh,DistrictList} = state;
        if(DistrictList === ""){
            getDataDistrict(idTinh)
        }
        else{
            var result = "";
            result = DistrictList.map((di,index)=>{
                if(parseInt(di.tinhThanhID) === idTinh){
                    return (
                        <li key={index} className="dropdown-item" onClick={() => getDistrict(di.title,di.id)}>{di.title}</li>
                    )
                }
                return result;
            })
            return result;
        }
    }
    const showXaPhuong = ()=>{
        var {QuanHuyenID,WardList} = state;
        if(WardList === ''){
            getDataWard(QuanHuyenID)
        }
        else{
            var result = "";
            result = WardList.map((di,index)=>{
                if(parseInt(di.quanHuyenID)=== QuanHuyenID){
                    return (
                        <li key={index} className="dropdown-item" onClick={() => getWard(di.title)}>{di.title}</li>
                    )
                }
                return result;
            })
            return result;
        }
    }
    const changeAddress = async (id,token) =>{
        try {
            setState(prev=>({
                ...prev,
                loading : true
            }))
            var resp = await callApi("/addressuser/changedefault/"+id,"PUT",token,null)
            setState(prev=>({
                ...prev,
                loading : false
            }))
            props.setAddress(resp.data.success)
        } catch (error) {
            props.setAddress(true);
            setState(prev=>({
                ...prev,
                id : null,
                loading : false
            }))
        }
        
    }
    const putAddress = async (dataA) =>{
        var token = localStorage.getItem("token");
        var username = JSON.parse(localStorage.getItem("userName"));
        var data = {
            UserId : username.sub,
            FullName : dataA.fullname,
            PhoneNumber : dataA.phoneNumber,
            City : dataA.provinceOrCity,
            Ward : dataA.ward,
            District : dataA.district,
            Street : dataA.detailAddress 
        }
        var result = await callApi("/addressuser","POST",token,data)
        if(result !== ""){
            changeAddress(result.data.data.id,token)
        }
    }
    var {activeList,activeDi,activeWa,district,provinceOrCity,ward,loading} = state;
    var activeListA = activeList ? "block" : "none";
    var activeListB = activeDi ? "block" : "none";
    var activeListC = activeWa ? "block" : "none";
    var showTinh = provinceOrCity === "" ? "Chọn tỉnh" : provinceOrCity;
    var showHuyens = district === "" ? "Chọn quận/huyện" : district;
    var showXa = ward === "" ? "Chọn phường/xã" : ward;
    var load = loading ? "block" :"none"
    return (
        <form onSubmit={handleSubmit(putAddress)}>
            <LoadingUpdate load={load}/>
            <div className="container">
                <div className="form-left">
                    <label htmlFor="uname">
                        <span>Họ và tên</span>
                    </label>
                    <input className="username" type="text" placeholder="Nhập họ tên" name="fullname" 
                           ref={register({required : true})} 
                    />
                    {errors.fullname && errors.fullname.type === "required" &&(
                    <div className="is-invalid-feedback">
                        {message.EmptyInput}
                    </div>
                    )}
                    <label htmlFor="psw">
                        <span>Số diện thoại</span>
                    </label>
                    <input className="pass" type="text" placeholder="Nhập số diện thoại" name="phoneNumber" 
                        ref={register({required : true,pattern : /^[0][1-9][0-9]{8}$/})} 
                    />
                    {errors.phoneNumber && errors.phoneNumber.type === "required" &&(
                    <div className="is-invalid-feedback">
                        {message.EmptyInput}
                    </div>
                    )}
                    {errors.phoneNumber && errors.phoneNumber.type === "pattern" &&(
                    <div className="is-invalid-feedback">
                        {message.RulePhoneNumber}
                    </div>
                    )}
                </div>
                <div className="form-right">
                    <label htmlFor="psw">
                        <span>Tỉnh</span>
                    </label>
                    <span className="select-address" onClick={showList}>{showTinh}
                        <div className="dropdown-address" style={{display : activeListA}}>
                            {showProvince()}
                        </div>
                    </span>
                    <input className="pass" type="hidden" defaultValue={provinceOrCity} placeholder="Nhập địa chỉ" 
                        name="provinceOrCity" 
                        ref={register({required : true})} 
                    />
                    {errors.provinceOrCity && errors.provinceOrCity.type === "required" &&(
                    <div className="is-invalid-feedback">
                        {message.EmptyInput}
                    </div>
                    )}
                    <label htmlFor="psw">
                        <span>Huyện/Quận</span>
                    </label>
                    <span className="select-address" onClick={showDi}>{showHuyens}
                        <div className="dropdown-address" style={{display : activeListB}}>
                            {showHuyen()}
                        </div>
                    </span>
                    <input className="pass" type="hidden" defaultValue={district} 
                        name="district"
                        ref={register({required : true})}
                    />
                    {errors.district && errors.district.type === "required" &&(
                    <div className="is-invalid-feedback">
                        {message.EmptyInput}
                    </div>
                    )}
                    <label htmlFor="psw">
                        <span>Xã/Phường</span>
                    </label>
                    <span className="select-address" onClick={showWa}>{showXa}
                        <div className="dropdown-address" style={{display : activeListC}}>
                            {showXaPhuong()}
                        </div>
                    </span>
                    <input className="pass" type="hidden" name="ward" placeholder="Nhập địa chỉ"
                        defaultValue={ward}
                        ref={register({required : true})} 
                    />
                    {errors.ward && errors.ward.type === "required" &&(
                    <div className="is-invalid-feedback">
                        {message.EmptyInput}
                    </div>
                    )}
                    <label htmlFor="psw">
                        <span>Số nhà/Tên Đường</span>
                    </label>
                    <input className="pass" type="text" placeholder="Nhập địa chỉ" name="detailAddress" 
                        ref={register({required : true})} 
                    />
                    {errors.detailAddress && errors.detailAddress.type === "required" &&(
                    <div className="is-invalid-feedback">
                        {message.EmptyInput}
                    </div>
                    )}
                </div>
                    <button className="login" type="submit">Lưu thông tin</button>
            </div>
        </form>
    );
}

export default FormAddress;