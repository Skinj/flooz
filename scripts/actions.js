$(document).ready(function(){

/*HOME*/
$('.login').click(function(){
	$('.login-page').css('right',0);
})
$('.login-page .top .back').click(function(){
	$('.login-page').css('right','100%');
})
$('.signup').click(function(){
	$('.signup-page').css('left',0);
})
$('.signup-page .top .back').click(function(){
	$('.signup-page').css('left','100%');
})

/*TIMELINE*/
$('.hamburger').click(function(){
	$('.timeline').toggleClass('nav-open');
	$('.account').toggleClass('nav-open');
})
$('.filter').click(function(){
	$('.filter').removeClass('active');
	$(this).addClass('active');
	$('.content').removeClass('active');
	$('#content-'+$(this).attr('id')).addClass('active');
})
$('.new-event .new img').click(function(){
	$('footer').toggleClass('new-event-open');
})

/*ACCOUNT*/
$('.account .edit-link').click(function(){
	$('.edit-account-page').css('left',0);
})
$('.account .edit-account-page .back').click(function(){
	$('.edit-account-page').css('left','100%');
})
$('.account .edit-account-page #edit-security-password').click(function(){
	$('.edit-password-page').css('left',0);
})
$('.account .edit-password-page .back').click(function(){
	$('.edit-password-page').css('left','100%');
})

/*SETTINGS*/
$('.settings .settings-content #setting-notification').click(function(){
	$('.notifications-page').css('left',0);
})
$('.settings .notifications-page .back').click(function(){
	$('.notifications-page').css('left','100%');
})
$('.settings .settings-content #setting-secure-code').click(function(){
	$('.secure-code-page').css('left',0);
})
$('.settings .secure-code-page .back').click(function(){
	$('.secure-code-page').css('left','100%');
})
$('.settings .rib-page .edit').click(function(){
	$(this).css('display','none');
	$('.rib-page .validate').css('display','block');
	$('.rib-page input').attr('readonly',false).addClass('edit');
})
$('.settings .settings-content #setting-rib').click(function(){
	$('.rib-page').css('left',0);
})
$('.settings .rib-page .back').click(function(){
	$('.rib-page').css('left','100%');
	setTimeout(function(){
		$('.rib-page .edit').css('display','block');
		$('.rib-page .validate').css('display','none');
		$('.rib-page input').attr('readonly',true).removeClass('edit');
	},500)
})

/*INFORMATIONS*/
$('.informations-page .informations-content #information-faq').click(function(){
	$('.faq-page').css('left',0);
})
$('.faq-page .back').click(function(){
	$('.faq-page').css('left','100%');
})

/*CARD*/
$('.card-page .card-content .card').click(function(){
	$('.card-details-page').css('left',0);
})
$('.card-page .card-details-page .back').click(function(){
	$('.card-page .card-details-page').css('left','100%');
})

})