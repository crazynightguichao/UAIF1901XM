window.onload=function(){

	// 导航栏
	let box1 = document.getElementsByClassName("nav-erwei")[0]
	let box2 = document.getElementsByClassName("nav-erweima")[0]
	box2.style.display = "none"
	box1.onmouseover = function(){
	    box2.style.display = "block"
	}
	box1.onmouseout = function(){
	    box2.style.display = "none"
	}

    // 购物车
	let box3 = document.getElementsByClassName("shopping-car")[0]
	let box4 = document.getElementsByClassName("shopping-carcar")[0]
	box4.style.display = "none"
	box3.onmouseover = function(){
	    box4.style.display = "block"
		box4.style.height = "83px"
	}
	box3.onmouseout = function(){
	    box4.style.display = "none"
		
	}
	
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
	
}