import React, { Component } from 'react';
import bannerH from '../../assets/images/banner.jpg';
import banner1 from '../../assets/images/baner1.jpg';
import banner2 from '../../assets/images/baner2.jpg';
import banner3 from '../../assets/images/baner3.jpg';
import banner4 from '../../assets/images/baner4.jpg';
import bannerex1 from '../../assets/images/banner1.jpg';
import bannerex2 from '../../assets/images/banner2.jpg';
const img = [bannerH,banner1,banner2,banner3,banner4]
class BannerHome extends Component {
    constructor(props){
        super(props)
        this.state = {
            slideIndex : 0,
            pause : false,
            prev : false,
            next : false,
            myInterval : ""
        }
    }
    setSlideIndex = (index)=>{
        this.setState({
          slideIndex: index,
        })
      }
    goto = (direction)=>{
        switch(direction){
            case "prev" : this.getNewSlideIndex(-1);this.setState({pause : true,prev : true,next : false}); break;
            case "next" : this.getNewSlideIndex(1);this.setState({pause : true , prev : false,next : true});break;
            case "auto" : this.getNewSlideIndex(1);this.setState({next : true});break;
            default : break;
        }
    }
    getNewSlideIndex(step) {
        const slideIndex = this.state.slideIndex;
        const numberSlide = img.length;
    
        let newSlideIndex = slideIndex + step;
    
        if (newSlideIndex >= numberSlide) newSlideIndex = 0;
        else if (newSlideIndex < 0) newSlideIndex = numberSlide - 1;
        this.setSlideIndex(newSlideIndex);
        return newSlideIndex;
    }
    listIndicators = ()=>{
        var {slideIndex} = this.state;
        var a = img.map((img,index)=>{
            var active = slideIndex === index ? "activedot" : null;
            return(
            <span className={`dot ${active}`} key={index} onClick={()=>this.setSlideIndex(index)}/>
            );
        })
        return a;
    }
    listImg = ()=>{
        var {slideIndex,prev,next} = this.state;
        var goto = prev === true && next === false ? "divaobentrai" : "divaobenphai";
        var golose = prev === true && next === false ? "matbentrai" : "matbenphai";
        let result = img.map((img,index) => {
            var active = slideIndex === index ? `fade ${goto}` : `fade ${golose}`;
                return(
                    <div key={index} className={`mySlides ${active}`}>
                        <img src={img} alt={index}/>  
                    </div>
                );
        })
        return result;
    }
    sliderHome =()=>{
        var that = this;
        let myInterval = setInterval(()=>{
            if(this.state.pause){
                clearInterval(myInterval);
                this.setState({
                    pause : false
                })
            }
            else{
                that.goto('auto');
            }   
        },4000)
        this.setState({
            myInterval
        })
    }
    componentDidMount() {
        setInterval(this.sliderHome())
    }
    componentWillUnmount() {
        clearInterval(this.state.myInterval);
      }
    render() {
        return (
            <div className="container">
                <div className="banner">
                    <div className="slideshow-container">
                        {this.listImg()}
                        <span className="prev" onClick={() => this.goto("prev")}>
                        ❮
                        </span>
                        <span className="next" onClick={() => this.goto("next")}>
                        ❯
                        </span>
                        <div className="Alldot" style={{ textAlign: "center" }}>
                            {this.listIndicators()}
                        </div>
                    </div>
                </div>
                <div className="categoryBaner">
                    <div className="banner1">
                        <img src={bannerex1} alt="bn"/>
                    </div>
                    <div className="banner2">
                        <img src={bannerex2}alt="bn2"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default BannerHome;