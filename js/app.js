	
	function openTab(evt, myTab) {
		let i, tabcontent, tablink;
		
		tabcontent = document.getElementsByClassName("tabcontent");
		for(i = 0; i < tabcontent.length; i++) {
			tabcontent[i].style.display = "none";
		}
		
		tablink = document.getElementsByClassName("tablink");
		for(i = 0; i < tablink.length; i++) {
			tablink[i].className = tablink[i].className.replace("active", "");
		}
		
		document.getElementById(myTab).style.display = "block";
		evt.currentTarget.className += "active";
	}
	document.getElementById("defaultOpen").click();
	
	$("#nav_toggle").on("click", function(event) {
		event.preventDefault();
		
		$(this).toggleClass("active");
		$("#nav").toggleClass("active");
	})
	
	$("[data-scroll]").on("click", function(event) {
		event.preventDefault();
		
		let $this = $(this),
			blockId = $this.data("scroll"),
			blockOffset = $(blockId).offset().top;
			
			$("html, body").animate({
				scrollTop: blockOffset
			}, 700);
	})
	
	$("[data-collapse]").on("click", function(event) {
		event.preventDefault();
		
		let $this = $(this),
			blockId = $this.data("collapse");
			
			$this.toggleClass("active");
	})
	
	const modal = document.querySelector("#my-modal");
	const modalBtn = document.querySelector("#btn-login");
	const modalClose = document.querySelector(".close");
	
	modalBtn.addEventListener("click", openModal);
	modalClose.addEventListener("click", clickModal);
	window.addEventListener("click", closeModal);
	
	function openModal() {
		modal.style.display = "block";
	}
	
	function clickModal() {
		modal.style.display = "none";
	}
	
	function closeModal(e) {
		if(e.target == modal) {
			modal.style.display = "none";
		}
	}s
