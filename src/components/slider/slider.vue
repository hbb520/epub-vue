<template>
	<div id="sliderContainer">
		<div id="sliderBox">
			<div id="sliderBtn" :style="{'top': top + 'px'}" @mouseover="tipStatus = true"
			     @mouseout="tipStatus = false" :class="tipStatus || moveStatus ? 'arise' : ''">
				<div id="sliderTip" v-if="tipStatus || moveStatus" :style="{'top': tipTop + 'px'}">
					<p id="word" class="wordOverflow2">{{ tips }}</p>
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
      },
      tips: {
        type: String,
        default: () => {
          return null;
        },
      },
    },
    data() {
      return {
        width: document.body.clientWidth,
        height: document.body.clientHeight,
        moveStatus: false,
        tipStatus: false,
        tipTop: 0,
      };
    },
    computed: {
      value: {
        get() {
          let value = Math.round(this.progress);
          this.setTipTop(value);
          return value;
        },
        set(value) {
          this.$emit('update:progress', value);
          this.setTipTop(value);
        },
      },
      top: {
        get() {
          let headerHeight = this.width < 600 ? 56 : 64;
          return this.progress * (this.height - headerHeight - 36) / 100;
        },
        set(value) {},
      },
    },
    methods: {
      setTipTop(value) {
        let headerHeight = this.width < 600 ? 56 : 64;
        this.tipTop = headerHeight + value * (this.height - 80 - headerHeight) / 100;
      },
      wheelHander(e) {
        let oEvent = e || window.event;
        //非火狐
        if (oEvent.wheelDelta) {
          //向上滚动
          if (oEvent.wheelDelta > 0) {
            this.$emit('prev')
          } else {//向下滚动
            this.$emit('next');
          }
        } else if (oEvent.detail) {
          //向下滚动
          if (oEvent.detail > 0) {
            this.$emit('next');
          } else {//向上滚动
            this.$emit('prev');
          }
        }
      },
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
          if (this.moveStatus) {
            this.$emit('change', this.value);
            this.moveStatus = false;
          }
        });
        document.onmousewheel = this.wheelHander;//非火狐
        document.addEventListener('DOMMouseScroll', this.wheelHander, false);//火狐
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
		height: calc(100vh - 64px);
		position: absolute;
		top: 64px;
		right: 20px;
		margin: auto;
		z-index: 1200;

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

				&:before {
					display: none;
					content: '';
					position: absolute;
					top: 11px;
					left: -11px;
					width: 0;
					height: 0;
					opacity: 0.5;
					border: 6px solid transparent;
					border-left-color: #000;
				}

				&.arise:before {
					display: block;
				}

				#sliderTip {
					display: block;
					width: 160px;
					height: 80px;
					padding: 10px 20px;
					position: fixed;
					right: 45px;
					color: #fff;
					user-select: none;
					background: rgba(0, 0, 0, 1);
					border-radius: 6px;
					box-shadow: 0px 0px 6px 0px rgba(0, 1, 24, 0.4);
					opacity: 0.5;

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
</style>
