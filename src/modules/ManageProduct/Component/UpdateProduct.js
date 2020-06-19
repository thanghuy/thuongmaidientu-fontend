// import React, { useState,useEffect } from 'react';
// import imgUpload from '../../../assets/images/icons8-plus-64.png';
// import FetchData from '../../../utils/ApiController';
// import { useForm } from "react-hook-form";
// import * as message from '../../../constant/messageAdmin';
// import MesageSuccess from './MessageAddProduct';
// import LoadingUpdate from '../../../common/loading/loadingUpdate';
// import CallApi from '../../../utils/ApiController';
// import Button from '@material-ui/core/Button';
// import SaveIcon from '@material-ui/icons/Save';
// import DeleteIcon from '@material-ui/icons/Delete';
// import AppBar from '@material-ui/core/AppBar';
// import {withRouter} from 'react-router-dom';
// import * as Url from '../../../constant/config';
// const AddNewProduct = (props) => {
//     const [listImg, setListImg] = useState({ 
//         imageMain : "",
//         image1 : "",
//         image2 : "",
//         image3 : "",
//         image4 : "",
//         loading : false,
//         addSuccess : false,
//         slug : ""
//     })
//     const [Product,setProduct] = useState(null);
//     const getDataDetail = () =>{
//         var {match} = props;
//         let idBook = match.params.idProduct;
//         CallApi("/book/"+idBook,"GET",null).then(resp =>{
//             setListImg(prev => ({ 
//                 ...prev,
//                 imageMain: Url.urlImg + resp.data.data.imagePath,
//                 image1 : Url.urlImg + resp.data.data.imagePaths[1],
//                 image2 : Url.urlImg + resp.data.data.imagePaths[2],
//                 image3 : Url.urlImg + resp.data.data.imagePaths[3],
//                 image4 : Url.urlImg + resp.data.data.imagePaths[4]
//             }))
//             setProduct(resp.data.data);
//         })
//     }
//     const [category,setCategory] = useState(null);
//     const { register, handleSubmit, errors } = useForm();
//     const getData = () =>{
//         CallApi("/category","GET",null).then(resp =>{
//             setCategory(resp.data.data)
//         })
//     }
//     useEffect(() => {
//         getData()
//     },[])
//     useEffect(() => {
//         getDataDetail()

//     })
//     const addNewProduct = (data) =>{
//         setListImg(prev =>({
//             ...prev,
//             loading : true
//         }))
//         var token = localStorage.getItem("token");
//         FetchData("/book","POST","multipart/form-data",token,data).then(resp =>{
//             setListImg(prev =>({
//                 ...prev,
//                 loading : false,
//                 addSuccess : true
//             }))
//         })
//     }
//     const onSubmitProduct = data => {
//         var {imageMain,image1,image2,image3,image4} = listImg;
//         var dataForm = new FormData();
//         var dataImg = [];
//         dataImg.push(imageMain,image1,image2,image3,image4);
//         dataForm.append("name",data.name);
//         dataForm.append("slug",data.slug);
//         dataForm.append("price",data.price);
//         dataForm.append("amount",data.amount);
//         dataForm.append("author",data.author);
//         dataForm.append("publisher",data.publisher);
//         dataForm.append("content",data.content);
//         dataForm.append("images",imageMain);
//         dataForm.append("images",image1);
//         dataForm.append("images",image2);
//         dataForm.append("images",image3);
//         dataForm.append("images",image4);
//         dataForm.append("categoryId",data.categoryId);
//         addNewProduct(dataForm);
//     };
//     const onImageChange = event => {
//         if (event.target.files && event.target.files[0]) {
//             var name = event.target.name;
//             let img = event.target.files[0];
//             setListImg(prev => ({ 
//                 ...prev,
//                 [name]: URL.createObjectURL(img),
//             }))
//         }
//     };
//     const setSlug =(e)=>{
//         var data = e.target.value.split(" ");
//         var slug = data.join("-");
//         setListImg(prev => ({ 
//             ...prev,
//             slug: slug
//         }))
//     }
//     var {imageMain,image1,image2,image3,image4,addSuccess,loading} = listImg;
//     var img0 = imageMain === "" ? imageMain : imageMain;
//     var img1 = image1 === Url.urlImg + "undefined" ? imgUpload : image1;
//     var img2 = image2 === Url.urlImg + "undefined" ? imgUpload : image2;
//     var img3 = image3 === Url.urlImg + "undefined" ? imgUpload : image3;
//     var img4 = image4 === Url.urlImg + "undefined" ? imgUpload : image4;
//     const showCategory = () =>{
//         var result = "";
//         if(category !== null){
//             result = category.map((category,index)=>{
//                 return (<option key={index} value={category.categoryId}>{category.name}</option>)
//             })
//         }
//         return result
//     }
//     if(!addSuccess && Product !== null){
//     return (
//         <div className="product_admin">
//             <LoadingUpdate load={loading ? "block" : "none"}/>
//             <form onSubmit={handleSubmit(onSubmitProduct)}>
//                 <div className="row">
//                     <div className="col-lg-12 add-new-main">
//                     <h4>Thông tin cơ bản</h4>
//                         <div className="form-group row">
//                             <label className="col-sm-2 col-form-label title-admin-addnew"  htmlFor="exampleFormControlInput1">* Tên sản phẩm</label>
//                             <div className="col-sm-10">
//                                 <input
//                                 name="name"
//                                 type="text"
//                                 defaultValue={Product.name}
//                                 onChange={setSlug}
//                                 ref={register({required : true ,minLength: 10})}
//                                 className="form-control"
//                                 />
//                                 {errors.name && errors.name.type === "required" &&(
//                                 <div className="is-invalid-feedback">
//                                     {message.EmptyInput}
//                                 </div>
//                                 )}
//                                 {errors.name && errors.name.type === "minLength" &&(
//                                 <div className="is-invalid-feedback">
//                                     {message.RuleNameProduct}
//                                 </div>
//                                 )}
//                             </div>
//                         </div>
//                         <div className="form-group row">
//                             <label className="col-sm-2 col-form-label title-admin-addnew"  htmlFor="exampleFormControlInput1">* Link sản phẩm</label>
//                             <div className="col-sm-10">
//                                 <input
//                                 name="slug"
//                                 type="text"
//                                 defaultValue={Product.slug}
//                                 ref={register({required : true ,minLength: 10})}
//                                 className="form-control"
//                                 />
//                                 {errors.slug && errors.slug.type === "required" &&(
//                                 <div className="is-invalid-feedback">
//                                     {message.EmptyInput}
//                                 </div>
//                                 )}
//                                 {errors.slug && errors.slug.type === "minLength" &&(
//                                 <div className="is-invalid-feedback">
//                                     {message.RuleNameProduct}
//                                 </div>
//                                 )}
//                             </div>
//                         </div>
//                         <div className="form-group row">
//                             <label className="col-sm-2 col-form-label title-admin-addnew" htmlFor="exampleFormControlTextarea1">* Mô tả sản phẩm</label>
//                             <div className="col-sm-10">
//                                 <textarea
//                                 className="form-control"
//                                 rows={8}
//                                 defaultValue={Product.content}
//                                 name="content"
//                                 ref={register({required : true ,minLength: 0})}
//                                 />
//                                 {errors.content && errors.content.type === "minLength" &&(
//                                 <div className="is-invalid-feedback">
//                                     {message.RuleDescription}
//                                 </div>
//                                 )}
//                             </div>
//                         </div>
//                         <div className="form-group row">
//                             <label className="col-sm-2 col-form-label title-admin-addnew" htmlFor="exampleFormControlSelect1">* Danh mục sách</label>
//                             <div className="col-sm-10">
//                                 <select className="form-control" id="exampleFormControlSelect1"
//                                     name="categoryId" ref={register}>
//                                     {showCategory()}
//                                 </select>
//                             </div>
//                         </div>
//                         <div className="form-group row">
//                             <label className="col-sm-2 col-form-label title-admin-addnew" htmlFor="exampleFormControlInput1">* Nhà xuất bản</label>
//                             <div className="col-sm-10">
//                                 <input
//                                 type="text"
//                                 className="form-control"
//                                 name="publisher"
//                                 defaultValue={Product.publisher}
//                                 ref={register({required : true})}
//                                 />
//                                 {errors.publisher && errors.publisher.type === "required" &&(
//                                 <div className="is-invalid-feedback">
//                                     {message.EmptyInput}
//                                 </div>
//                                 )}
//                             </div>
//                         </div>
//                         <div className="form-group row">
//                             <label className="col-sm-2 col-form-label title-admin-addnew" htmlFor="exampleFormControlInput1">* Tác giả</label>
//                             <div className="col-sm-10">
//                                 <input
//                                 type="text"
//                                 name="author"
//                                 defaultValue={Product.author}
//                                 className="form-control"
//                                 ref={register({required : true})}
//                                 />
//                                 {errors.author && errors.author.type === "required" &&(
//                                 <div className="is-invalid-feedback">
//                                     {message.EmptyInput}
//                                 </div>
//                                 )}
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-lg-12 add-new-main">
//                         <h4>Thông tin bán hàng</h4>
//                         <div className="form-group row">
//                             <label className="col-sm-2 col-form-label title-admin-addnew" htmlFor="exampleFormControlInput1">* Số lượng</label>
//                             <div className="col-sm-10">
//                                 <input
//                                 type="text"
//                                 className="form-control"
//                                 name="amount"
//                                 defaultValue={Product.amount}
//                                 ref={register({required : true})}
//                                 />
//                                 {errors.amount && errors.amount.type === "required" &&(
//                                 <div className="is-invalid-feedback">
//                                     {message.EmptyInput}
//                                 </div>
//                                 )}
//                             </div>
//                         </div>
//                         <div className="form-group row">
//                             <label className="col-sm-2 col-form-label title-admin-addnew" htmlFor="exampleFormControlInput1">* Giá sản phẩm</label>
//                             <div className="col-sm-10">
//                                 <input
//                                 type="text"
//                                 className="form-control"
//                                 name="price"
//                                 defaultValue={Product.price}
//                                 ref={register({required : true})}
//                                 />
//                                  {errors.price && errors.price.type === "required" &&(
//                                 <div className="is-invalid-feedback">
//                                     {message.EmptyInput}
//                                 </div>
//                                 )}
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-lg-12 add-new-main">
//                     <h4>Quản lý hình ảnh</h4>
//                     <div className="form-group row image-main-admin col-2">
//                             <label className="custom-file-upload fas">
//                                 <div className="img-wrap img-upload" >
//                                     <img src={img0} alt="upload"/>
//                                 </div>
//                                 <input type="file" className="photo-upload" onChange={onImageChange} name="imageMain"
//                                      ref={register({required : true})}
//                                 />
//                             </label>
//                             <span>*&ensp;Ảnh bìa</span>
//                                 {errors.imageMain && errors.imageMain.type === "required" &&(
//                                 <div className="is-invalid-feedback">
//                                     {message.ImageMain}
//                                 </div>
//                             )}
//                         </div>
//                         <div className="form-group row image-main-admin col-2">
//                             <label className="custom-file-upload fas">
//                                 <div className="img-wrap img-upload" >
//                                     <img src={img1} alt="upload"/>
//                                 </div>
//                                 <input type="file" className="photo-upload" onChange={onImageChange} name="image1"
//                                 />
//                             </label>
//                             <span>image 1</span>
//                         </div>
//                         <div className="form-group row image-main-admin col-2">
//                             <label className="custom-file-upload fas">
//                                 <div className="img-wrap img-upload" >
//                                     <img src={img2} alt="upload"/>
//                                 </div>
//                                 <input type="file" className="photo-upload" onChange={onImageChange} name="image2"
//                                 />
//                             </label>
//                             <span>image 2</span>
//                         </div>
//                         <div className="form-group row image-main-admin col-2">
//                             <label className="custom-file-upload fas">
//                                 <div className="img-wrap img-upload" >
//                                     <img src={img3} alt="upload"/>
//                                 </div>
//                                 <input type="file" className="photo-upload" onChange={onImageChange} name="image3"
//                                 />
//                             </label>
//                             <span>image 3</span>
//                         </div>
//                         <div className="form-group row image-main-admin col-2 ">
//                             <label className="custom-file-upload fas">
//                                 <div className="img-wrap img-upload" >
//                                     <img src={img4} alt="upload"/>
//                                 </div>
//                                 <input type="file" className="photo-upload" onChange={onImageChange} name="image4"
//                                 />
//                             </label>
//                             <span>image 4</span>
//                         </div>
//                     </div>
//                     <AppBar position="sticky" style={{top: "auto", bottom: 0,padding : 20}}>
//                         <div className="col-lg-12">
//                             <div className="col-4 float-right" >
//                                 <Button
//                                     variant="outlined"
//                                     className="mr-3"
//                                     startIcon={<DeleteIcon />}
//                                 >
//                                     Hủy
//                                 </Button>
//                                 <Button
//                                     variant="contained"
//                                     color="primary"
//                                     type="submit"
//                                     className="mr-3"
//                                     startIcon={<SaveIcon />}
//                                 >Cập nhập</Button>
//                             </div>
//                         </div>
//                     </AppBar>
//                 </div>
//             </form>
//         </div>
//     );
//     }
//     else{
//         return (
//             <div>
//                 <LoadingUpdate load={loading ? "block" : "none"}/>
//             </div>
//         )
//     }
// };

// export default withRouter(AddNewProduct);
import React from 'react';

const UpdateProduct = () => {
    return (
        <div>
            Chua xu ly
        </div>
    );
};

export default UpdateProduct;