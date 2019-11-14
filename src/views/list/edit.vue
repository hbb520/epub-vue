<template>
  <div class="app-container table-detail-container">
    <el-card class="box-card search-card" shadow="never" style="margin-bottom: 24px">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" size="default" label-width="40%" class="demo-ruleForm">
        <el-form-item label="消息标题:" prop="nickname">
          <el-input v-model="ruleForm.nickname" style="width: 320px;"
                    placeholder="请输入消息标题" maxlength="20"></el-input>
          <span class="text-9 f12 m-l-16">最多20个字</span>
        </el-form-item>
        <el-form-item label="消息内容:" prop="phone">
          <el-input type="textarea" :rows="8" v-model="ruleForm.phone" style="width: 320px;"
                    placeholder="请输入消息内容" show-word-limit maxlength="300"></el-input>
        </el-form-item>
        <el-form-item label="跳转地址:">
          <el-input v-model="ruleForm.username" style="width: 320px;" placeholder="http://"></el-input>
        </el-form-item>
        <el-form-item label="发送设备:" prop="status">
          <el-checkbox-group v-model="ruleForm.status">
            <el-checkbox label="1">Ios设备</el-checkbox>
            <el-checkbox label="2">Android设备</el-checkbox>
            <el-checkbox label="3">硬件大屏</el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="发送方式:" prop="way">
          <el-radio-group v-model="ruleForm.way" @change="wayChange">
            <el-radio label="1">立即发送</el-radio>
            <el-radio label="2">定时发送</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="发送时间:" v-if="ruleForm.way == 2">
          <el-date-picker
            v-model="ruleForm.date1"
            type="datetime"
            placeholder="选择发送时间"
            align="right"
            :picker-options="pickerOptions">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="发送范围:" prop="scope">
          <el-radio-group v-model="ruleForm.scope">
            <el-radio label="1">全部用户</el-radio>
            <el-radio label="2">部分用户</el-radio>
          </el-radio-group>
        </el-form-item>
        <div class="search-box search-box-scope" v-if="ruleForm.scope==2">
          <el-form :inline="true" class="demo-form-inline ">
            <el-form-item label="手机号:">
              <el-input v-model="formInline.phone" placeholder="请输入手机号"
                        @keyup.native.enter="getData(1)"></el-input>
            </el-form-item>
            <el-form-item label="充值金额:">
              <el-input v-model="formInline.username" placeholder="请输入充值金额"
                        @keyup.native.enter="getData(1)"></el-input>
            </el-form-item>
            <el-form-item label="消费金额:">
              <el-input v-model="formInline.tag" placeholder="请输入消费金额"
                        @keyup.native.enter="getData(1)"></el-input>
            </el-form-item>

            <el-form-item label="会员来源:">
              <el-select v-model="formInline.memberType" placeholder="请选择会员来源" @change="getData(1)">
                <el-option label="全部" :value="null"></el-option>
                <el-option label="全额购买" :value="1"></el-option>
                <el-option label="会员现金券" :value="2"></el-option>
                <el-option label="赠送会员" :value="2"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="会员类型:">
              <el-select v-model="formInline.memberSource" placeholder="请选择会员类型" @change="getData(1)">
                <el-option label="全部" :value="null"></el-option>
                <el-option label="类型1" :value="1"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="注册时间:">
              <el-date-picker
                v-model="formInline.startTime"
                type="daterange"
                align="right"
                unlink-panels
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :picker-options="pickerOptions">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="登录时间:">
              <el-date-picker
                v-model="formInline.startTime"
                type="daterange"
                align="right"
                unlink-panels
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :picker-options="pickerOptions">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="充值时间:">
              <el-date-picker
                v-model="formInline.startTime"
                type="daterange"
                align="right"
                unlink-panels
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :picker-options="pickerOptions">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="消费时间:">
              <el-date-picker
                v-model="formInline.startTime"
                type="daterange"
                align="right"
                unlink-panels
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :picker-options="pickerOptions">
              </el-date-picker>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="getData(1)" round icon="el-icon-search" class="search-box-btn">查询
              </el-button>
            </el-form-item>
          </el-form>
        </div>
        <div v-if="ruleForm.scope==2">
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
            <el-table-column
              type="selection"
              width="45">
            </el-table-column>
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
          <div class="table-bottom">
            <el-checkbox v-model="allSelection" @change="toggleAllSelection(list)">全选</el-checkbox>
          </div>
          <el-pagination
            :current-page.sync="currentPage"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            background
            :page-size="listQuery.pageSize"
            layout="total, prev, pager, next, jumper"
            :total="listQuery.total">
          </el-pagination>
        </div>
        <el-form-item label="" class="page-btn-bottom-box">
          <el-button type="info" @click="$goLink('/operations-management/message')" round
                     class="width-120 border-none ">取消
          </el-button>
          <el-button type="primary" @click="submitForm('ruleForm')" round class="width-120 border-none">提交</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
  import index from './edit'

  export default index

</script>
<style rel="stylesheet/scss" lang="scss">
  @import "src/styles/mixin.scss";
  @import "./index.scss";

  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }

  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }

  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
