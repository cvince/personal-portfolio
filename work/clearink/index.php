<meta charset="UTF-8" />
<?php include('../../config.php'); ?>
<link href='<?php echo ROOT.'css/global.css'?>' rel='stylesheet' type='text/css'>

<article id="case-study-article" class="open scrollable">
	<div id="close-bar"></div>
	<section class="page">
	<div class="header">

		<a href="<?php echo ROOT ?>" class="logo close-case">
			<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
				 width="66.813px" height="40.313px" viewBox="0 0 66.813 40.313" enable-background="new 0 0 66.813 40.313" xml:space="preserve">
			<g>
				<circle r="4" cx="4" cy="34" fill="#000">
					<animate attributeName="r" from="12" to="4" dur="0.1s"></animate>					
					<animate attributeName="cx" from="42" to="14" dur="0.2s"></animate>
					<animate id="ani1" attributeName="cy" from="12" to="22" dur="0.2s"></animate>
					<animate attributeName="cx" begin="0.2s" dur="0.6s" values="14;10;6;4"></animate>
					<animate attributeName="cy" begin="0.2s" dur="0.6s" values="22;34;30;34"></animate>					
				</circle>

				<path d="M9.848,4.423c0-0.751,0.432-1.379,1.297-1.885c0.865-0.506,1.771-0.759,2.718-0.759c1.208,0,1.926,0.424,2.155,1.273
					l7.493,26.542l7.443-26.542c0.228-0.849,0.947-1.273,2.155-1.273c0.914,0,1.812,0.262,2.693,0.783
					c0.881,0.523,1.322,1.144,1.322,1.861c0,0.066-0.033,0.229-0.098,0.49l-9.403,30.803c-0.196,0.687-0.685,1.217-1.469,1.591
					c-0.784,0.376-1.665,0.563-2.644,0.563c-2.253,0-3.624-0.717-4.113-2.155L9.945,4.913C9.879,4.653,9.848,4.489,9.848,4.423z"/>
				<path d="M40.16,26.657V12.994c0-3.852,1.044-6.685,3.134-8.497c2.089-1.812,4.816-2.718,8.178-2.718
					c3.428,0,6.228,0.85,8.398,2.547c2.171,1.698,3.257,3.95,3.257,6.758c0,1.208-0.246,2.032-0.736,2.473
					c-0.489,0.441-1.305,0.662-2.447,0.662c-2.091,0-3.152-0.669-3.184-2.008c-0.033-0.424-0.073-0.791-0.122-1.102
					c-0.049-0.31-0.18-0.718-0.392-1.224c-0.213-0.506-0.482-0.931-0.808-1.273c-0.327-0.343-0.816-0.637-1.469-0.881
					c-0.654-0.245-1.42-0.367-2.301-0.367c-3.428,0-5.142,1.878-5.142,5.632v13.663c0,3.754,1.746,5.63,5.24,5.63
					c1.045,0,1.918-0.162,2.62-0.489c0.701-0.327,1.207-0.792,1.518-1.395c0.31-0.604,0.522-1.142,0.637-1.617
					c0.114-0.473,0.187-1.053,0.22-1.739c0.098-1.338,1.142-2.007,3.134-2.007c1.142,0,1.967,0.219,2.474,0.66s0.76,1.266,0.76,2.474
					c0,2.938-1.087,5.29-3.257,7.051c-2.171,1.764-4.988,2.645-8.447,2.645c-3.363,0-6.081-0.906-8.154-2.718
					C41.196,33.342,40.16,30.51,40.16,26.657z"/>
			</g>
			</svg>
		</a>
		<a class="close-button close-case" href="<?php echo ROOT ?>">
			<span>CLOSE CASE STUDY</span>
			<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
				 width="40px" height="40px" viewBox="0 0 40 40" enable-background="new 0 0 40 40" xml:space="preserve">
				<circle fill="none" stroke="#000000" stroke-width="3" stroke-miterlimit="10" cx="20.333" cy="20.683" r="16.333"/>
				<line fill="none" stroke="#000000" stroke-width="3" stroke-miterlimit="10" x1="13.333" y1="28.683" x2="28.333" y2="13.683"/>
				<line fill="none" stroke="#000000" stroke-width="3" stroke-miterlimit="10" x1="13.333" y1="13.683" x2="28.333" y2="28.683"/>
			</svg>
		</a>
	</div>

	<div id="case-content" class="content">
		<?php include('case.html'); ?>
	</div>

	</section>
</article>