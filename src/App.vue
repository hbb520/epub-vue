<template>
	<div id="app">
		<router-view/>
	</div>
</template>

<script>

  export default {
    name: 'App',
    data() {
      return {};
    },
    mounted: function() {

    },
    methods: {},
  };
</script>
<style>
	#app {
		width: 100%;
		height: 100%;
		font-size: 14px;
		font-family: MicrosoftYaHei;
		color: rgba(51, 51, 51, 1);
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		display: block;
		background: rgba(235, 235, 235, 1);
		overflow-y: auto;
	}
</style>
