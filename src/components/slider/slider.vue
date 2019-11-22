<template>
	<div id="sliderContainer">
		<div id="sliderBox">
			<div id="sliderBtn" :style="{'top': top + 'px'}" @mouseover="tipStatus = true"
			     @mouseout="tipStatus = false">
				<div id="sliderTip" v-if="tipStatus || moveStatus" :style="{'top': tipTop + 'px'}"
				     :class="value < 1 ? 'top' : value > 96 ? 'bottom' : '' ">
					<p class="wordOverflow2">第一章 分子与细胞分子与细胞分子与细胞分子与细胞</p>
					<span>{{ (value === null ? 0 : value) + '%' }}</span>
				</div>
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
      }
    },
    data() {
      return {
        top: 0,
        moveStatus: false,
        tipStatus: false,
        tipTop: 0,
      };
    },
    computed: {
      value: {
        get() {
          return this.progress;
        },
        set(value) {
          if (value <= 1) {
            this.tipTop = 0;
          } else if (value > 96) {
            this.tipTop = -47;
          } else {
            this.tipTop = -12;
          }
          this.$emit('valueChange', value);
        },
      }
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
            this.$emit('change', this.value);
          }
        });
        document.addEventListener('mouseup', e => {
          this.moveStatus = false;
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
		right: 20px;
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
					width: 160px;
					/*height:60px;*/
					padding: 10px 20px;
					position: absolute;
					left: -170px;
					color: #fff;
					user-select: none;
					background: rgba(0, 0, 0, 1);
					border-radius: 6px;
					box-shadow: 0px 0px 6px 0px rgba(0, 1, 24, 0.4);
					opacity: 0.5;
					transition: top 0.3s;

					p {
						width: 100%;
						font-size: 14px;
						line-height: 20px;
					}

					span {
						margin-top: 4px;
						font-size: 12px;
						line-height: 16px;
					}

					&:before {
						content: '';
						position: absolute;
						top: 24px;
						right: -12px;
						width: 0;
						height: 0;
						border: 6px solid transparent;
						border-left-color: #000;
						transition: top 0.3s;
					}

					&.top {
						&:before {
							top: 12px;
						}
					}

					&.bottom {
						&:before {
							top: 56px;
						}
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
