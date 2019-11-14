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
        name: null,
        date1: '',                 //生日
        phone: null,               //科学号
        nickname: null,            //昵称
        sex: null,                 //性别
        education: null,           //学历
        password: null,            //密码
        password2: null,           //确认密码
        status: [],               //状态
        way: '1',
        scope: '1'
      },
      listQuery: {         //查询中的参数
        pageNumber: 1,
        pageSize: 10,
        total: 0,
      },
      rules: {
        phone: [
          {required: true, message: '请输入', trigger: 'blur'},
        ],
        imageUrl: [
          {required: true, message: '请上传', trigger: 'change'},
        ],
        name: [
          {required: true, message: '请输入', trigger: 'blur'},
        ],
        nickname: [
          {required: true, message: '请输入', trigger: 'blur'},
        ],
        sex: [
          {required: true, message: '请选择', trigger: 'change'}
        ],
        status: [
          {required: true, message: '请选择', trigger: 'change'}
        ],
        scope: [
          {required: true, message: '请选择', trigger: 'change'}
        ],
        way: [
          {required: true, message: '请选择', trigger: 'change'}
        ],
        password: [
          {required: true, message: '请输入', trigger: 'blur'},
        ],
        password2: [
          {required: true, message: '请输入', trigger: 'blur'},
        ],
        date1: [
          {type: 'date', required: true, message: '请选择', trigger: 'change'}
        ],
        role_type: [
          {required: true, message: '请选择', trigger: 'change'}
        ],
        username: [
          {required: true, message: '请输入', trigger: 'blur'}
        ],
      },
      status: 1,   //1是添加 2是编辑
      imageUrl: null,
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
      currentPage: 1
    };
  },

  created(){
    if (this.$route.params.id) {
      //如果有$route.params.id,代表是编辑状态
      this.id = this.$route.params.id;
      this.getData(this.$route.params.id);
      this.status = 2;
    } else {
      this.status = 1;
    }
    this.getList(1);
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
        console.log(res.data.items);
        this.detail = res.data.items;
        this.ruleForm = res.data.items;
        this.ruleForm.way = '1';
        this.ruleForm.scope = '1';
        this.ruleForm.status = [];
        this.ruleForm.password2 = res.data.items.password;
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
    /**
     * 上传
     * @method
     * @param {string}
     * @returns {Object}
     */
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    //发送方式变更
    wayChange(item){
      console.log(item);
    }
  }
};
