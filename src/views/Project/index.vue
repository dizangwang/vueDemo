<template>
  <div class="login">
    <div class="content">
      <div class="searchCon">
        <Form ref="searchForm" :model="searchForm" inline>
          <FormItem :show-message="false" prop="searchInput">
            <Select v-model="model1">
              <Option
                v-for="item in cityList"
                :value="item.value"
                :key="item.value"
                >{{ item.label }}</Option
              >
            </Select>
          </FormItem>
          <FormItem :show-message="false" prop="beginDate">
            <DatePicker
              :clearable="true"
              type="date"
              placeholder="开始时间"
              @on-change="
                (date) => {
                  searchForm.beginDate = date;
                }
              "
              v-model="searchForm.beginDate"
            ></DatePicker>
          </FormItem>
          <FormItem :show-message="false" prop="endDate">
            <DatePicker
              :clearable="true"
              type="date"
              @on-change="
                (date) => {
                  searchForm.endDate = date;
                }
              "
              placeholder="结束时间"
              v-model="searchForm.endDate"
            ></DatePicker>
          </FormItem>
          <FormItem :show-message="false">
            <Button @click="searchClick" type="primary">查询</Button>
          </FormItem>
          <FormItem :show-message="false">
            <Button @click="reset">清空</Button>
          </FormItem>
          <FormItem :show-message="false">
            <Button type="success" @click="addClick">
              <Icon type="md-add" />新增简单表单
            </Button>
          </FormItem>
          <FormItem :show-message="false">
            <Button type="success" @click="addComplexClick">
              <Icon type="md-add" />新增复杂表单
            </Button>
          </FormItem>
          <FormItem :show-message="false">
            <Button type="success" @click="addModelClick">
              <Icon type="md-add" />新增弹窗表单
            </Button>
          </FormItem>
        </Form>
      </div>
      <div class="tableCon">
        <Table
          height="436"
          stripe
          size="small"
          border
          :columns="columns"
          :data="dataList"
        >
          <template slot-scope="{ row }" slot="sex">
            {{ row.sex | sexFilter }}
          </template>
          <template slot-scope="{ row }" slot="status">
            {{ row.status | statusFilter }}
          </template>
          <template slot-scope="{ row }" slot="action">
            <span class="lineButton">审核</span>
            <span class="lineButton" @click="editItem(row)">修改</span>
            <span class="lineButton" @click="deleteItem(row)">删除</span>
          </template>
        </Table>
      </div>
      <div class="pageCon">
        <Page
          :total="page.total"
          :current="page.current"
          :page-size="page.pageSize"
          @on-change="pageChange"
          @on-page-size-change="pageSizeChange"
          show-elevator
          show-sizer
          show-total
        />
      </div>
    </div>
    <Modal v-model="isAddShow" :footer-hide="true" title="审核入职信息">
      <Add ref="add" @success="addSuccess" />
    </Modal>
    <Modal v-model="isEditShow" :footer-hide="true" title="审核入职信息">
      <Edit ref="edit" @success="addSuccess" />
    </Modal>
    <Modal
      width="1200"
      v-model="isAddComplexShow"
      :footer-hide="true"
      title="审核入职信息"
    >
      <Complex />
    </Modal>

    <Modal
      width="1200"
      v-model="isAddModalShow"
      :footer-hide="true"
      title="审核入职信息"
    >
      <Complex1 />
    </Modal>
  </div>
</template>

<script>
/*
 *@description:注册核实组件
 *@author: 刘浩
 *@date: 2020-08-24 11:49:45
 */

import Add from "./add";
import Edit from "./edit";
import Complex from "./complex";
import Complex1 from "./complex1";
export default {
  name: "Login",
  components: {
    Add,
    Edit,
    Complex,
    Complex1,
  },
  data() {
    return {
      isAddModalShow: false,
      isAddComplexShow: false,
      //编辑弹窗展示
      isEditShow: false,
      //新增弹窗展示
      isAddShow: false,
      //分页器相关
      page: {
        //数据总数
        total: 0,
        //当前页码
        current: 1,
        //每页条数
        pageSize: 10,
      },
      model1: "",
      cityList: [
        {
          value: "1",
          label: "New York",
        },
        {
          value: "2",
          label: "London",
        },
        {
          value: "3",
          label: "Sydney",
        },
        {
          value: "4",
          label: "Ottawa",
        },
      ],
      //查询表单
      searchForm: {
        userName: "",
        orgId: "",
        beginDate: "",
        endDate: "",
        searchInput: "",
        selectMore: [],
        selectTable: "",
      },
      dataListADD: [],
      columnsADD: [
        {
          title: "姓名",
          slot: "userName",
          width: 0,
        },
        {
          title: "年龄",
          slot: "age",
          width: 0,
        },
        {
          title: "省",
          slot: "province",
          width: 0,
        },
        {
          title: "市",
          key: "city",
          width: 0,
        },

        {
          title: "多选",
          key: "moreSelect",
          width: 0,
        },
        {
          title: "删除",
          slot: "action",
          resizable: true,
          width: 0,
        },
      ],
      //表格的列值
      columns: [
        {
          title: "姓名",
          key: "userName",
          sortable: true,
          resizable: true,
          width: 0,
        },

        {
          title: "性别",
          slot: "sex",
          width: 100,
          align: "center",
          filters: [
            {
              label: "男",
              value: 1,
            },
            {
              label: "女",
              value: 2,
            },
          ],
          filterMultiple: false,
          filterMethod(value, row) {
            if (value === 1) {
              return row.sex == 1;
            } else if (value === 2) {
              return row.sex == 0;
            }
          },
          resizable: true,
        },
        {
          title: "部门",
          key: "orgName",
          ellipsis: true,
          tooltip: true,
          resizable: true,
          sortable: true,
          width: 0,
        },
        {
          title: "手机号",
          key: "phone",
          resizable: true,
          sortable: true,
          width: 0,
        },
        {
          title: "注册时间",
          key: "addDate",
          resizable: true,
          sortable: true,
          width: 0,
        },
        {
          title: "状态",
          slot: "status",
          resizable: true,
          sortable: true,
          width: 0,
        },
        {
          title: "操作",
          slot: "action",
          resizable: true,
          width: 0,
        },
      ],
      //表格的填充值
      dataList: [],
      selectArr: [],
      selectTableArr: [],
    };
  },
  mounted() {
    this.search();
  },
  watch: {},
  filters: {
    //性别过滤器
    sexFilter(sex) {
      if (sex === 1) {
        return "男";
      } else {
        return "女";
      }
    },
    //状态的过滤器
    statusFilter(status) {
      var str = "";
      switch (+status) {
        case 0:
          str = "未完成";
          break;
        case 1:
          str = "进行中";
          break;
        case 2:
          str = "已完成";
          break;
        case 3:
          str = "已审核";
          break;
      }
      return str;
    },
  },
  methods: {
    provinceChange(val, index) {
      console.log("provinceChange-----", val, index);
      this.dataListADD[index]["province"] = val;
      console.log("dataListADD-----", JSON.stringify(this.dataListADD));
    },
    userNameInput(val, index) {
      this.dataListADD[index]["userName"] = val;
      console.log("dataListADD-----", JSON.stringify(this.dataListADD));
    },
    ageInput(val, index) {
      this.dataListADD[index]["age"] = val;
      console.log("dataListADD-----", JSON.stringify(this.dataListADD));
    },
    add() {
      this.dataListADD.push({
        userName: "",
        age: "",
        province: "",
        city: "",
        area: "",
        moreSelect: "",
      });
    },

    // 编辑表单
    editItem(item) {
      var that = this;
      that.isEditShow = true;
      that.$refs.edit.reset();
      that.$refs.edit.init(item);
    },
    // 删除表单
    deleteItem(item) {
      var that = this;
      that.$Modal.info({
        title: "确定要删除吗？",
        onOk() {
          that
            .ajax({
              method: "get",
              url: "/delete",
              data: {
                id: item.id,
              },
            })
            .then((res) => {
              let code = res.data.code;
              let msg = res.data.msg;
              //let data = res.data.data;
              if (code === 200) {
                console.log(res);
                that.$Message.success("删除成功!");
                that.search();
              } else {
                // todo 登录失败处理
                that.$Message.error(msg);
              }
            })
            .catch(function () {
              //todo 接口访问异常处理
              that.$Message.error("Fail!");
            });
        },
      });
    },
    //点击增加
    addClick() {
      this.isAddShow = true;
      this.$refs.add.reset();
    },
    addComplexClick() {
      this.isAddComplexShow = true;
    },
    addModelClick() {
      this.isAddModalShow = true;
    },
    //表单提交成功
    addSuccess() {
      this.isAddShow = false;
      this.isEditShow = false;
      this.search();
      console.log("表单提交成功");
    },
    //查询
    search() {
      var that = this;
      var param = {
        pageSize: that.page.pageSize,
        pageNumber: that.page.current,
        userName: that.searchForm.userName,
        orgId: that.searchForm.orgId,
        beginDate: that.searchForm.beginDate,
        endDate: that.searchForm.endDate,
      };
      that
        .ajax({
          method: "get",
          url: "/list",
          data: param,
        })
        .then((res) => {
          let code = res.data.code;
          let msg = res.data.msg;
          let data = res.data.data;
          if (code === 200) {
            console.log(res);
            that.dataList = data.list;
            that.page.total = data.count;
          } else {
            // todo 登录失败处理
            that.$Message.error(msg);
          }
        })
        .catch(function () {
          //todo 接口访问异常处理
          that.$Message.error("Fail!");
        });
    },
    //清空
    reset() {
      this.$refs["searchForm"].resetFields();
    },
    //点击查询按钮
    searchClick() {
      this.page.current = 1;
      this.search();
    },
    //分页器页码变动监听
    pageChange(page) {
      this.page.current = page;
      this.search();
    },
    //分页器记录数大小变动监听
    pageSizeChange(size) {
      this.page.pageSize = size;
      this.page.current = 1;
      this.search();
    },
  },
};
</script>

<style scoped>
.searchCon {
  background: white;
  padding: 10px;
}
.lineButton {
  color: blue;
  text-decoration: underline;
  margin-right: 5px;
}
</style>
