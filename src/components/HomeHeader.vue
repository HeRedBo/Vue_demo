<template>
	<header class="header">
		<div class="header_inner">
			<div class="header_cont">主页</div>
		</div>
	</header>
</template>

<style type="text/css">
	.header {
		height: 0.088rem;
	}
	.header_inner {
		position: fixed;
		top :0;
		left :0;
		left :0;
		z-index : 99;
		max-width: 640px;
		height: 0.88rem;
		box-sizing: border-box;
		margin: 0 auto;
		padding:0 0.24rem;
		border-bottom: 0.02rem solid #80ccd6
	}
	.header_cont {
		text-align: center;
		padding: 0 0.24rem;
		line-height: 0.86rem;
		font-size: 15px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
</style>