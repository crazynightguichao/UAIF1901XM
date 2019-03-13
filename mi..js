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
        t = setInterval(run,2000)
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
        

    }
    t = setInterval(run,2000)


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

}