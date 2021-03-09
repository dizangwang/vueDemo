<template>
  <div class="login">
    <div class="module">
      <div class="title">
        <span>基本信息</span>
        <Button v-show="viewShow" style="float: right" @click="edit"
          >编辑</Button
        >
        <Button v-show="!viewShow" style="float: right" @click="add"
          >+添加基本信息</Button
        >
      </div>
      <div class="view" v-show="viewShow">
        <table class="viewTable">
          <tr>
            <td>主体客户：</td>
            <td>主体客户</td>
            <td>是否已招标：</td>
            <td>招标</td>
            <td>货品类型：</td>
            <td>货品类型</td>
            <td>采购方式：</td>
            <td>采购方式</td>
          </tr>
          <tr>
            <td>投标名称：</td>
            <td>投标名称</td>
            <td>合同总金额：</td>
            <td>100000</td>
            <td>合同类型：</td>
            <td>合同类型</td>
            <td>签订人：</td>
            <td>签订人</td>
          </tr>
          <tr>
            <td>签订部门：</td>
            <td>签订部门</td>
            <td>合同归属：</td>
            <td>众阳健康</td>
          </tr>
        </table>
      </div>
      <div class="form" v-show="formShow">
        <Form ref="handleSubmit" inline :label-width="90">
          <div>
            <FormItem label="主体客户" prop="orgName">
              <Input class="inputWidth" placeholder="主体客户" />
            </FormItem>
            <FormItem label="是否已招标" prop="orgName">
              <Input class="inputWidth" placeholder="招标" />
            </FormItem>
            <FormItem label="货品类型" prop="orgName">
              <Input class="inputWidth" placeholder="货品类型" />
            </FormItem>
            <FormItem label="采购方式" prop="orgName">
              <Input class="inputWidth" placeholder="采购方式" />
            </FormItem>
          </div>
          <div>
            <FormItem label="投标名称" prop="orgName">
              <Input class="inputWidth" placeholder="投标名称" />
            </FormItem>
            <FormItem label="合同总金额" prop="orgName">
              <Input class="inputWidth" placeholder="合同总金额" />
            </FormItem>
            <FormItem label="合同类型" prop="orgName">
              <Input class="inputWidth" placeholder="合同类型" />
            </FormItem>
            <FormItem label="签订人" prop="orgName">
              <Input class="inputWidth" placeholder="签订人" />
            </FormItem>
          </div>
          <div>
            <FormItem label="签订部门" prop="orgName">
              <Input class="inputWidth" placeholder="签订部门" />
            </FormItem>
            <FormItem label="合同归属" prop="orgName">
              <Input class="inputWidth" placeholder="合同归属" />
            </FormItem>
          </div>
          <div style="text-align: center">
            <FormItem>
              <Button type="primary" @click="submit">提交</Button>
              <Button style="margin-left: 8px">重置</Button>
            </FormItem>
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>

<script>
/*
 *@description:注册核实增加组件
 *@author: 刘浩
 *@date: 2020-08-24 14:20:27
 */
export default {
  name: "RegisterCheckAdd",
  data() {
    return {
      formShow: false,
      viewShow: false,
      payColumns: [
        {
          title: "付款方名称",
          key: "age",
        },
        {
          title: "纳税人识别号",
          key: "age",
        },
        {
          title: "开户行",
          key: "age",
        },
        {
          title: "银行账号",
          key: "age",
        },
        {
          title: "地址",
          key: "age",
        },
        {
          title: "联系电话",
          key: "age",
        },
        {
          title: "付款额",
          key: "age",
        },
        {
          title: "操作",
          slot: "action",
        },
      ],
      payData: [],
    };
  },
  mounted() {},
  methods: {
    add() {
      this.viewShow = false;
      this.formShow = true;
    },
    edit() {
      this.viewShow = true;
      this.formShow = true;
    },
    submit() {
      this.viewShow = true;
      this.formShow = false;
    },
  },
};
</script>

<style scoped>
.title {
  overflow: hidden;
  padding: 10px;
}
.viewTable {
  width: 100%;
}
.viewTable td {
  padding: 5px;
  text-align: left;
}
.form {
  padding: 20px 10px;
  background: #f8f8f8;
}
</style>
