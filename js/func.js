$(document).ready(function(){
	
	require(['js/dados'], function( $ ) {	
		listItems();
	});

});

function showDrop(){
	$("#dropCarrinho").toggleClass("hidden");
}

function listItems(){
	for( var i = 0; i < elements.items.length; i ++ ){

		$("#corpoItems").append(templateList( elements.items[i], i ));

	}


}

function templateList( obj, indice ){
	var template = "";
		template += '<div id="'+obj.product.alias+'" class="col-sm-6 col-md-4 paddingDivList">';
		template += '	<div class="panel panel-white no-radius text-center marginPanel">';
		template += '		<div class="panel-body no-padding alturaPanel">';
		template += '			<div class="col-sm-6 col-xs-6 no-padding paddingR20">';
		template += '				<ul class="carrousel pull-left">';
		for( var x = 0; x < obj.product.images.length; x ++ ){
			template += '				    <li class="paddingLiImg" onclick="changeImage('+x+','+indice+')">';
			template += '				    	<img class="formatImgLi" alt="" src="' + obj.product.images[x] + '" width="15%">';
			template += '				    </li>';
		}
		template += '				</ul>';
		template += '				<img class="pull-right alturaImgList" id="imgProduto_'+indice+'" alt="" src="' + obj.product.images[0] + '">';
		template += '			</div>';
		template += '			<div class="col-xs-6 col-sm-6 no-padding">';
		template += '				<div class="col-xs-12 col-sm-12 col-md-12 text-left ellipsis no-padding-left" >';
		template += '					<span class="fontProductName">' + obj.product.name + '&nbsp<i class="fa fa-heart-o colorFavorite" aria-hidden="true"></i></span>';
		template += '				</div>';
		template += '				<div class="col-xs-12 col-sm-12 col-md-12 text-center">';
		template += '					<hr class="hrItems"/>';
		template += '				</div>';
		template += '				<div class="col-xs-12 col-sm-12 col-md-12 no-padding no-padding-left">';
		template += '					<div class="col-xs-9 col-sm-5 col-md-9 col-lg-5 text-left no-padding center no-padding-left marginDivInfoValue">';
		template += '						<span class="formatFont visible-sm visible-xs formatValueInstallmentsSm">'+obj.product.price.installments+'x R$</span><span class="formatFont visible-xs visible-sm formatValueInstallmentValueSm"> '+obj.product.price.installmentValue+'</span>';
		template += '						<span class="formatFont visible-md visible-lg formatValueInstallmentsLg">'+obj.product.price.installments+'x R$</span><span class="formatFont  visible-md visible-lg formatValueInstallmentValueLg"> '+obj.product.price.installmentValue+'</span>';
		template += '					</div>';
		template += '					<div class="col-xs-3 col-sm-7 col-md-3 col-lg-7 text-left no-padding">';
		template += '						<span class="fa-stack fa-sm visible-xs visible-md" onclick="showCarrinho('+indice+')">';
		template += '						  <i class="fa fa-circle fa-stack-2x iconCarrinhoSm"></i>';
		template += '						  <i class="fa fa-cart-plus fa-stack-1x"></i>';
		template += '						</span>';
		template += '						<button onclick="showCarrinho('+indice+')" type="button" class="btn btn-xs visible-lg btn-addCarrinho-lg">Adicionar ao carrinho <i class="fa fa-angle-right" aria-hidden="true"></i></button>';
		template += '						<button onclick="showCarrinho('+indice+')" type="button" class="btn btn-xs visible-sm btn-addCarrinho-sm">Adicionar ao carrinho <i class="fa fa-angle-right" aria-hidden="true"></i></button>';
		template += '					</div>';
		template += '				</div>';
		template += '				<div class="col-xs-12 col-sm-12 col-md-12 no-padding no-padding-left">';
		template += '					<div class="col-xs-12 col-sm-12 col-md-12 text-left no-padding center no-padding-left">';
		template += '						<span class="formatFont visible-xs visible-sm fontLabelOrSm">ou&nbsp</span><span class="formatFont visible-xs visible-sm fontLabelValueSm"> R$ '+obj.product.price.value+'</span><span class="formatFont visible-xs visible-sm fontLabelVistaSm">&nbspá vista</span>';
		template += '						<span class="formatFont visible-md visible-lg fontLabelOrLg">ou&nbsp</span><span class="formatFont  visible-md visible-lg fontLabelValueLg"> R$ '+obj.product.price.value+'</span><span class="formatFont visible-md visible-lg fontLabelVistaLg">&nbspá vista</span>';
		template += '					</div>';
		template += '				</div>';
		template += '			</div>';
		template += '		</div>';
		template += '	</div>';
		template += '</div>';

		return template;
}

function showCarrinho( indice ){
	$("#modalMsgBody").html("Deseja adicionar o item <b>" + elements.items[indice].product.name + "</b> em seu carrinho?" );
	$("#confirmaCompra").modal("show");
	
	$("#indiceItem").val( indice );

}

function addCarrinho( ){

	var indice = $("#indiceItem").val( );

	var valorAtual = $("#totalCompra").html();
		valorAtual = Math.round( parseFloat( valorAtual ) + parseFloat( elements.items[indice].product.price.value ) );
	var valorParcelado = Math.round( valorAtual/10 );

	$("#parcelaCompra").html( valorParcelado );
	$("#totalCompra").html( valorAtual );

	$(".itemcarrinho").prepend( templateCarrinho( elements.items[indice], indice ) );
	$(".semItem").addClass("hidden");
	$("#totalCarrinho").removeClass("hidden");

	$("#countCarrinho").removeClass("hidden");
	$("#countCarrinho").html($( ".itemcarrinho li" ).length);

	$("#confirmaCompra").modal("hide");

}

function changeImage(img, indice){

	$("#imgProduto_"+indice).attr('src', elements.items[indice].product.images[img] );

}

function removeCarrinho(alias, indice){

	var valorAtual     = $("#totalCompra").html();
		valorAtual     = Math.round( parseFloat( valorAtual ) - parseFloat( elements.items[indice].product.price.value ) );
	var valorParcelado = Math.round( valorAtual/10 );
	$("#parcelaCompra").html( valorParcelado );
	$("#totalCompra").html( valorAtual );

	$("#"+alias).remove();

	if( $( ".itemcarrinho li" ).length === 0 ){
		$(".semItem").removeClass("hidden");
		$("#totalCarrinho").addClass("hidden");
		$("#countCarrinho").addClass("hidden");
	}else{
		$("#countCarrinho").removeClass("hidden");
		$("#countCarrinho").html($( ".itemcarrinho li" ).length);
	}
}

function templateCarrinho( obj, indice ){
	var template  = "";
		template += '<li id="'+obj.product.alias+'">';
	    template += '	<div class="col-sm-12 col-xs-12 text-center linhaCarrinho">';
		template += '    	<div class="col-sm-3 col-xs-3 text-center alturaImgCarrinho">';
		template += '			<img class="img-responsive borderImgCarrinho" alt="" src="' + obj.product.images[0] + '">';
		template += '		</div>';
		template += '    	<div class="col-xs-8 col-sm-8">';
		template += '			<div class="col-xs-12 col-sm-12 col-md-12 text-left  no-padding no-padding-left">';
		template += '				<span class="formatFont visible-xs visible-sm fontProductNameCarrinhoSm">' + obj.product.name + '</span>';
		template += '				<span class="formatFont visible-md visible-lg fontProductNameCarrinhoLg">' + obj.product.name + '</span>';
		template += '			</div>';
		template += '			<div class="col-xs-12 col-sm-12 col-md-12 text-left no-padding center no-padding-left">';
		template += '				<span class="formatFont visible-xs visible-sm formatInstallmentCarrinhoSm">'+obj.product.price.installments+'x R$</span><span class="formatFont visible-xs visible-sm formatInstallmentValueCarrinho"> '+obj.product.price.installmentValue+'</span>';
		template += '				<span class="formatFont visible-md visible-lg formatInstallmentCarrinhoLg">'+obj.product.price.installments+'x R$</span><span class="formatFont visible-md visible-lg formatInstallmentValueCarrinho"> '+obj.product.price.installmentValue+'</span>';
		template += '			</div>';
		template += '			<div class="col-xs-12 col-sm-12 col-md-12 text-left no-padding center no-padding-left">';
		template += '				<span class="formatFont fontLabelVistaLg">ou&nbsp</span><span class="formatFont fontLabelVistaCarrinho"> R$ '+obj.product.price.value+'</span><span class="formatFont fontLabelVistaSm">&nbspá vista</span>';
		template += '			</div>';
		template += '		</div>';
		template += '    	<div class="col-sm-1 col-xs-1 text-center no-padding"onclick="removeCarrinho(\''+obj.product.alias+'\', '+indice+')">';
		template += '			<i class="fa fa-times" aria-hidden="true"></i>';
		template += '		</div>';
		template += '	</div>';
	    template += '</li>';

	return template;
}
