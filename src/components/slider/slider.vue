<template>
	<div id="sliderContainer">
		<div id="sliderBox">
			<div id="sliderBtn" :style="{'top': top + 'px'}" @mouseover="tipStatus = true" @mouseout="tipStatus = false">
				<div id="sliderTip" v-if="tipStatus || moveStatus">{{ (value === null ? 0 : value) + '%' }}</div>
			</div>
		</div>
	</div>
</template>

<script>
  export default {
    name: 'slider',
    props: {
      progress: {
        type: Number,
        default: () => {
          return 0;
        },
      },
    },
    data() {
      return {
        top: 0,
        moveStatus: false,
        tipStatus: false,
      };
    },
    computed: {
      value: {
        get() {
          return this.progress;
        },
        set(value) {
          this.$emit('valueChange', value);
        },
      },
    },
    methods: {
      init() {
        let slider = document.getElementById('sliderBtn');
        this.moveStatus = false;
        let topHeight = slider.offsetParent.offsetTop;
        let maxHeight = slider.offsetParent.offsetHeight;
        slider.addEventListener('mousedown', e => {
          this.moveStatus = true;
          topHeight = e.pageY - slider.offsetTop;
        });
        document.addEventListener('mousemove', e => {
          if (this.moveStatus) {
            let diffL = e.pageY - topHeight;
            if (diffL >= 0 && diffL <= maxHeight - 36) {
              let num = parseInt(diffL / (maxHeight - 36) * 100);
              this.value = num;
              this.top = diffL;
            }
          }
        });
        document.addEventListener('mouseup', e => {
          this.moveStatus = false;
          this.$emit('change', this.value);
        });
      },
    },
    mounted() {
      this.$nextTick(function() {
        this.init();
      });
    },
  };
</script>

<style scoped rel="stylesheet/scss" lang="scss">
	#sliderContainer {
		width: 21px;
		height: calc(100% - 56px);
		position: fixed;
		right: 30px;
		top: 56px;
		margin: auto;
		z-index: 1000;

		#sliderBox {
			width: 1px;
			height: 100%;
			position: relative;
			margin: 0 10px;
			background: rgba(34, 36, 48, 0.2);


			#sliderBtn {
				width: 9px;
				height: 36px;
				position: absolute;
				left: -4px;
				cursor: pointer;
				border-radius: 10px;
				background-color: #CCCCCC;
				border: 1px solid #999999;

				#sliderTip {
					display: block;
					width: 40px;
					position: absolute;
					top: -2px;
					left: -50px;
					color: #fff;
					font-size: 12px;
					text-align: center;
					line-height: 40px;
					background-color: #000;
					border-radius: 4px;
					user-select: none;

					#sliderTip:before {
						content: '';
						position: absolute;
						top: 15px;
						right: -10px;
						width: 0;
						height: 0;
						border: 5px solid transparent;
						border-left-color: #000;
					}
				}
			}
		}
	}

	@media (min-width: 600px) {
		#sliderContainer {
			height: calc(100vh - 64px);
			top: 64px;
		}
	}
</style>
