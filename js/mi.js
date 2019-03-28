window.onload=function(){

	// 导航栏
	let box1 = document.getElementsByClassName("nav-erwei")[0]
	let box2 = document.getElementsByClassName("nav-erweima")[0]
	// box2.style.display = "none"
	box1.onmouseover = function(){
	    box2.style.display = "block"
	}
	box1.onmouseout = function(){
	    box2.style.display = "none"
	}

	// 导航栏下选项卡
	let links = document.querySelectorAll(".search-list .nav .link")
	let boxs3 = document.querySelectorAll(".search-list .nav .link .list-box")
    links.forEach(function(item,i){
		item.onmouseenter = function(){
			boxs3.forEach(function(item){
				item.style.zIndex = 0
			})
			boxs3[i].style.zIndex = 10
		}

    })
	
	
	// 搜索
	let search = document.querySelector(".search-bar")
	let search_btn =document.querySelector(".submit-btn")
	let search_input = document.querySelector(".search-input")
	let keyword_list1 = document.querySelector(".keyword-list")
	let flag = true
	keyword_list1.style.display="none"
	search.onmouseenter = function(){
		if(!flag){
			return
		}
		search_input.style.borderColor="#333"
		search_btn.style.borderColor="#333"
	}	
	search.onmouseleave = function(){
		if(!flag){
			return
		}
		search_input.style.borderColor=""
		search_btn.style.borderColor=""
	}
	search_btn.onmouseenter = function(){
		if(!flag){
			return
		}
		search_input.style.borderColor="#333"
		search_btn.style.borderColor="#ff6700"
		search_btn.style.backgroundColor="#ff6700"
		search_btn.style.color="#fff"
	}
	search_btn.onmouseleave = function(){
		if(!flag){
			return
		}
		search_btn.style.borderColor="#333"
		search_btn.style.backgroundColor=""
		search_btn.style.color=""
	}
	search_input.onfocus = function(){
		flag = false
		search_input.style.borderColor="#ff6700"
		search_btn.style.borderColor="#ff6700"
		keyword_list1.style.display="block"
	}
	search_input.onblur = function(){
		flag = true
		search_input.style.borderColor=""
		search_btn.style.borderColor=""
		keyword_list1.style.display="none"
	}
	
	// 选项卡
	let boxs = document.querySelectorAll(".bannerList-item")
	let cons = document.querySelectorAll(".bannerList-r")
	boxs.forEach(function(v,i){
		v.onmouseenter = function(){
			cons[i].style.display = "block"
		}
		v.onmouseleave = function(){
			cons[i].style.display = "none"
		}
	})

	//轮播图开始
	let index = 0
    let pages = document.querySelectorAll(".banner-imgs .imgBox a")
    let banner = document.querySelector(".banner-imgs")
    let pre = document.querySelector(".banner-imgs .left")
    let next = document.querySelector(".banner-imgs .right")
    let dot = document.querySelectorAll(".dot")
    //事件 触发才调用 （异步）
    banner.onmouseenter = function(){
        clearInterval(t)
    }
    banner.onmouseleave = function(){
        t = setInterval(run,3000)
    }
    function run(status='next'){  //默认next
        //轮播一次
        if(status=='next'){
            index+=1
        }else if(status=='pre'){
            index-=1
        }
        if(index<0){
            index=4
        }
        if(index>4){
            index=0
        }
        pages.forEach(function(item,i){
            item.classList.remove("active")
        })
		pages[index].classList.add("active")
		
		dot.forEach(function(item,i){
            item.classList.remove("active")
        })
        dot[index].classList.add("active")
        

    }
    t = setInterval(run,3000)


    next.onclick = function(){
        run()
    }
    pre.onclick = function(){
        run('pre')
	}

	dot.forEach(function(item,i){
        item.onclick = function(){
            pages.forEach(function(item,i){
                item.classList.remove("active")
            })
            pages[i].classList.add("active")
            dot.forEach(function(item,i){
                item.classList.remove("active")
            })
			dot[i].classList.add("active")
		}
		
	})
	// dot.onfocus = function(){
	// 	dot.style.backgroundColor="#000000"
	// }
	// dot.onblur = function(){
	// 	dot.style.backgroundColor="#fff"
	// }
	
	

	// 家电开始(选项卡功能函数)
    function select(n,b) {
        let navs = document.querySelectorAll(n)
        let boxs = document.querySelectorAll(b)
        // alert(boxs.length)
        navs.forEach(function (item, i) {
            item.onmouseenter = function () {
                // nav
                navs.forEach(function (item2) {
                    item2.classList.remove("active")
                })
                this.classList.add("active")
                // box
                boxs.forEach(function (item) {
                    item.classList.remove("active")
                })
                boxs[i].classList.add("active")
            }
        })
    }
    select(".pop1 .ls",".con1 .furni-right")
    select(".pop2 .ls",".con2 .furni-right")
    select(".pop3 .ls",".con3 .furni-right")
    select(".pop4 .ls",".con4 .furni-right")
    select(".pop5 .ls",".con5 .furni-right")
    // 家电结束
    

    // //内容开始
	// let pagess = document.querySelectorAll(".nei-bdone .nei-bigbox .nei-box")
    // let banners = document.querySelector(".nei-bdone")
    // let dots = document.querySelectorAll("nei-bdone .slider .slider-dot")
    // let sprev = document.querySelector(".nei-bdone .zuo")
    // let snext = document.querySelector(".nei-bdone .you")
    // let prevs = 0;
    // let nows = 0;
    // pagess.forEach(function(item,i){
    //     if(i == 0){
    //         return;
    //     }
    //     item.style.left = "296px";
    // })
    // // 切换
    // function run4(status = 'next'){
    //     if(status == "next"){
    //         nows += 1;
    //         if(nows>2){
    //             nows = 0;
    //         }
    //         pagess[nows].style.left = '296px';
    //         animate(pagess[nows],{'left':0});
    //         animate(pagess[prevs],{'left':-296});
    //         dots.forEach(function(item){
    //             item.classList.remove("sdot-active")
    //         })
    //         dots[nows].classList.add("sdot-active")
    //     }else if(status == "pre"){
    //         nows -= 1;
    //         if(nows<0){
    //             nows = 2;
    //         }
    //         pagess[nows].style.left = '-296px';
    //         animate(pagess[nows],{'left':0});
    //         animate(pagess[prevs],{'left':296});
    //         dots.forEach(function(item){
    //             item.classList.remove("sdot-active")
    //         })
    //         dots[nows].classList.add("sdot-active")
    //     }
    //     prevs = nows;
    // }
    // let s = setInterval(run4,4000);
    // // 左右箭头
    // sprev.onclick = function(){
    //     run4()
    // }
    // snext.onclick = function(){
    //     run4("pre")
    // }
    // // 移入停止
    // banners.onmouseenter = function(){
    //     clearInterval(s)
    // }
    // banners.onmouseleave = function(){
    //     s = setInterval(run4,4000)
    // }
    // // 轮播点点击事件
    // dots.forEach(function(item,i){
    //     item.onmouseenter = function(){
    //         if(i===nows){
    //             return;
    //         }
    //         if(i>nows){
    //             pagess[i].style.left = '296px';
    //             animate(pagess[i],{'left':0});
    //             animate(pagess[prevs],{'left':-296});
    //             dots.forEach(function(item){
    //                 item.classList.remove("sdot-active")
    //             })
    //             dots[i].classList.add("sdot-active")
    //             prevs = i;
    //             nows = i;
    //         }else if(i<nows){
    //             pagess[i].style.left = '-296px';
    //             animate(pagess[i],{'left':0});
    //             animate(pagess[prevs],{'left':296});
    //             dots.forEach(function(item){
    //                 item.classList.remove("sdot-active")
    //             })
    //             dots[i].classList.add("sdot-active")
    //             prevs = i;
    //             nows = i;
    //         }
    //     }
    // })
    // 图书
	wfeng(".ones .nei-bigbox .nei-box",".ones .slider .slider-dot",".ones .you",".ones .zuo")
	wfeng(".two .nei-bigbox .nei-box",".two .slider .slider-dot",".two .you",".two .zuo")
	wfeng(".three .nei-bigbox .nei-box",".three .slider .slider-dot",".three .you",".three .zuo")
	wfeng(".four .nei-bigbox .nei-box",".four .slider .slider-dot",".four .you",".four .zuo")
    function wfeng(box,dot,zuo,you,active="active1",width1="296px",width2="-296px",width3=296,width4=-296){
        let xx = document.querySelectorAll(box)
        let dian = document.querySelectorAll(dot)
        let left = document.querySelector(you)
        let right = document.querySelector(zuo)
        // let box = document.querySelector(boxx)
		// console.log(dian)
        // console.log(right)
        // let t = setInterval(move,2000)
        let now = 0
        let next = 0
        xx[0].style.left = 0
        
		dian[0].style.backgroundColor = "#ff6700"
		// 点击点
		for(let i=0;i<dian.length;i++){
            dian[i].onclick = function(){
                next = i
                if(i>now && i!=0){
                    xx[now].style.left = 0
                    xx[next].style.left = width1
                    animate(xx[now],{left: width4},function(){
                        dian[now].style.backgroundColor = "#ff6700";
                    })
                    dian[now].classList.add(active);
                     animate(xx[i],{left: 0},function(){
                        for (let i = 0; i < dian.length; i++) {//遍历其他的轮播点移除动画效果
                        dian[i].style.backgroundColor = "#B0B0B0"
                        }
                        dian[i].style.backgroundColor = "#ff6700"
                     })
                     now = i
                    next = i
                }else if(i<now && i!=dian.length){
                    xx[now].style.left = 0
                    xx[next].style.left = width2
                    animate(xx[now],{left: width3},function(){
                        dian[now].style.backgroundColor = "#ff6700";
                    })
                     animate(xx[i],{left: 0},function(){
                        for (let i = 0; i < dian.length; i++) {//遍历其他的轮播点移除动画效果
							dian[i].style.backgroundColor = "#B0B0B0"
                        }
                        
                        dian[i].style.backgroundColor = "#ff6700"
                     })
                     now = i
                     next = i
                }
            }
        
        }
        // 鼠标点击左
        left.onclick = function(){
            // if(next == 0){
            //     next= xx.length
            // }
            next--
            xx[now].style.left = 0
            xx[next].style.left = width2
            animate(xx[now],{left: width3},function(){
                dian[now].style.backgroundColor = "#B0B0B0"
            })
            animate(xx[next],{left: 0},function(){
            for (let i = 0; i < dian.length; i++) {//遍历其他的轮播点移除动画效果
            dian[i].style.backgroundColor = "#B0B0B0"
            }
            dian[next].style.backgroundColor = "#ff6700"
            })
            now = next 
        }
		// 右点击
        right.onclick = function(){
            next++
            // if(next == xx.length){
            //     next= 0
            // }
            xx[now].style.left = 0
            xx[next].style.left = width1
            animate(xx[now],{left: -width3},function(){
                dian[now].style.backgroundColor = "#B0B0B0"
            })
            dian[now].classList.add(active);
            animate(xx[next],{left: 0},function(){
                for (let i = 0; i < dian.length; i++) {//遍历其他的轮播点移除动画效果
                dian[i].style.backgroundColor = "#B0B0B0"
                }
                dian[next].style.backgroundColor = "#ff6700"
            })
            now = next 
        }
    }

}