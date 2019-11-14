<template>
  <div class="app-container table-detail-container">
    <el-card class="box-card search-card" shadow="never" style="margin-bottom: 24px">
      <el-form ref="ruleForm" label-width="50%" class="demo-ruleForm">
        <el-form-item label="消息标题:">
          {{detail.nickname}}
        </el-form-item>
        <el-form-item label="消息内容:">
          {{detail.nickname}}
        </el-form-item>
        <el-form-item label="跳转地址:">
          {{detail.nickname}}
        </el-form-item>
        <el-form-item label="发送设备:">
          <span class="m-r-32" style="display: inline-block">Ios设备</span> Android设备
        </el-form-item>
        <el-form-item label="发送方式:">
          立即发送
        </el-form-item>
        <el-form-item label="发送范围:">
          全部用户
        </el-form-item>
        <div style="border-top: 1px solid #E9E9E9;padding-top: 24px">
          <el-table
            size="medium"
            :data="list"
            v-loading.body="listLoading"
            element-loading-text="加载中.."
            element-loading-spinner="el-icon-loading"
            style="width: 100%"
            ref="multipleTable"
            :stripe="true"
            header-align="center"
            @selection-change="handleSelectionChange"
            fit highlight-current-row>
            <el-table-column label="手机号" align="center">
              <template slot-scope="scope">
                {{scope.row.phone}}
              </template>
            </el-table-column>
            <el-table-column label="累计充值" align="center">
              <template slot-scope="scope">
                ￥10.0
              </template>
            </el-table-column>
            <el-table-column label="充值时间" align="center">
              <template slot-scope="scope">
                {{scope.row.create_time}}
              </template>
            </el-table-column>
            <el-table-column label="累计消费" align="center">
              <template slot-scope="scope">
                ￥10.0
              </template>
            </el-table-column>
            <el-table-column label="消费时间" align="center">
              <template slot-scope="scope">
                {{scope.row.create_time}}
              </template>
            </el-table-column>
            <el-table-column label="会员来源" align="center">
              <template slot-scope="scope">
                <span v-if="scope.row.role_type == 1">赠送会员</span>
                <span v-if="scope.row.role_type == 2">全额购买</span>
                <span v-if="scope.row.role_type > 2">全额购买</span>
              </template>
            </el-table-column>
            <el-table-column label="会员类型" align="center">
              <template slot-scope="scope">
                <span v-if="scope.row.role_type == 1">科普会员</span>
                <span v-if="scope.row.role_type == 2">会员活动</span>
                <span v-if="scope.row.role_type > 2">会员活动</span>
              </template>
            </el-table-column>

            <el-table-column label="注册时间" align="center">
              <template slot-scope="scope">
                {{scope.row.create_time}}
              </template>
            </el-table-column>
            <el-table-column label="登录时间" align="center">
              <template slot-scope="scope">
                {{scope.row.create_time}}
              </template>
            </el-table-column>
          </el-table>
          <!--<div class="table-bottom">-->
          <!--<el-checkbox v-model="allSelection" @change="toggleAllSelection(list)">全选</el-checkbox>-->
          <!--</div>-->
          <!--<el-pagination-->
          <!--:current-page.sync="currentPage"-->
          <!--@size-change="handleSizeChange"-->
          <!--@current-change="handleCurrentChange"-->
          <!--background-->
          <!--:page-size="listQuery.pageSize"-->
          <!--layout="total, prev, pager, next, jumper"-->
          <!--:total="listQuery.total">-->
          <!--</el-pagination>-->
        </div>
        <div class="text-center page-btn-bottom-box">
          <el-button type="info" @click="$goLink('/operations-management/message')" round
                     class="width-120 border-none ">返回
          </el-button>
        </div>
      </el-form>
    </el-card>
  </div>
</template>

<script>
  import {getDetail, getList} from '@/api/systemSettings';

  export default {
    data() {
      return {
        listLoading: false,
        id: null,
        detail: {},
        formInline: {        //筛选查询中表单数据
          username: null,
          phone: null,
          startTime: null,
          memberType: null,
          memberSource: null,
          tag: null,
          status: null,
          endTime: null,
        },
        ruleForm: {                  //会员表单
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {                  //会员表单验证
          name: [
            {required: false, message: '请输入活动名称', trigger: 'blur'},
          ],
          region: [
            {required: true, message: '请选择活动区域', trigger: 'change'}
          ],
          date1: [
            {type: 'date', required: true, message: '请选择日期', trigger: 'change'}
          ],
          date2: [
            {type: 'date', required: true, message: '请选择时间', trigger: 'change'}
          ],
          type: [
            {type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change'}
          ],
          resource: [
            {required: true, message: '请选择活动资源', trigger: 'change'}
          ],
          desc: [
            {required: true, message: '请填写活动形式', trigger: 'blur'}
          ]
        },
        pickerOptions: {
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '明天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() + 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周后',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() + 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        allSelection: [],
        list: [],
        currentPage: 1,
        listQuery: {         //查询中的参数
          pageNumber: 1,
          pageSize: 10,
          total: 0,
        },
      }
    },

    created(){
      if (this.$route.params.id) {
        this.id = this.$route.params.id
        this.getData(this.$route.params.id)
      } else {
        this.$router.push({
          "path": "/users/user-list"
        })
      }
      this.getList(1)
    },
    methods: {
      /**
       * 获取数据
       * @method
       * @param {string}
       * @returns {Object}
       */
      getData(id) {
        this.listLoading = true;
        let listQuery = {
          id: id
        };
        getDetail(listQuery).then(res => {
          console.log(res.data.items)
          this.detail = res.data.items;
          this.listLoading = false;
        }).catch(err => {
          this.listLoading = false;
        });
      },
      /**
       * 获取数据
       * @method
       * @param {string}
       * @returns {Array}
       */
      getList(pageNumber) {
        this.listLoading = true;
        this.currentPage = pageNumber;
        let listQuery = {
          pageNum: pageNumber,
          pageSize: this.listQuery.pageSize,
          phone: this.formInline.phone,
          startTime: this.formInline.startTime,
        };
        getList(listQuery).then(res => {
          console.log(res);
          this.list = res.data.items;
          this.listQuery.total = res.total;
          this.listLoading = false;
        }).catch(err => {
          this.listLoading = false;
        });
      },
      //pageSize改变时候出发
      handleSizeChange(val) {
        this.listQuery.pageSize = val;
        this.getData(1);
      },
      //点击分页时候出发
      handleCurrentChange(val) {
        this.getData(val);
      },
      //多选按钮
      toggleAllSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleAllSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      //多选操作
      handleSelectionChange(val){
        let multipleSelection = [];
        for (let i = 0; i < val.length; i++) {
          multipleSelection.push(val[i]);
        }
        this.multipleSelection = multipleSelection;
      },
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss">
  @import "src/styles/mixin.scss";
  @import "./index.scss";
</style>
