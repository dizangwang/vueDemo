<template>
  <div class="login">
    <Form
      ref="handleSubmit"
      :model="form"
      :rules="ruleValidate"
      :label-width="100"
    >
      <FormItem label="部门" prop="orgName">
        <Input
          class="inputWidth"
          :clearable="true"
          v-model="form.orgName"
          placeholder="部门"
        />
      </FormItem>
      <FormItem label="姓名" prop="userName">
        <Input
          class="inputWidth"
          :clearable="true"
          v-model="form.userName"
          placeholder="姓名"
        />
      </FormItem>
      <FormItem label="性别" prop="sex">
        <RadioGroup v-model="form.sex">
          <Radio label="male" value="1">男</Radio>
          <span class="span"></span>
          <Radio label="female" value="0">女</Radio>
        </RadioGroup>
      </FormItem>
      <FormItem label="手机号" prop="mobile">
        <Input
          class="inputWidth"
          :clearable="true"
          v-model="form.mobile"
          placeholder="姓名"
        />
      </FormItem>
    </Form>
    <div class="center">
      <Button type="primary" @click="handleSubmit('handleSubmit')">添加</Button>
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
    // 校验手机号
    const validatePhone = (rule, value, callback) => {
      if (!/^1[3456789]\d{9}$/.test(value)) {
        callback(new Error("请输入正确格式的手机号"));
      } else {
        callback();
      }
    };
    return {
      // 表单
      form: {
        orgName: "",
        userName: "",
        sex: "",
        mobile: "",
      },
      // 校验规则
      ruleValidate: {
        orgName: [
          {
            required: true,
            message: "请输入部门",
            trigger: "blur",
          },
        ],
        userName: [
          {
            required: true,
            message: "请输入姓名",
            trigger: "blur",
          },
        ],
        sex: [
          {
            required: true,
            message: "请选择性别",
            trigger: "change",
          },
        ],
        mobile: [
          {
            required: true,
            message: "请输入手机号",
            trigger: "change",
          },
          {
            validator: validatePhone,
            trigger: "blur",
          },
        ],
      },
    };
  },
  mounted() {},
  methods: {
    // 提交
    handleSubmit(name) {
      var that = this;
      this.$refs[name].validate((valid) => {
        if (valid) {
          that
            .ajax({
              method: "post",
              url: "/add",
              data: that.form,
            })
            .then((res) => {
              let code = res.data.code;
              let msg = res.data.msg;
              //let data = res.data.data;
              console.log(res);
              if (code === 200) {
                that.$emit("success");
                that.$Message.success("创建成功");
              } else {
                // todo 登录失败处理
                that.$Message.error(msg);
              }
            })
            .catch(function () {
              //todo 接口访问异常处理
              that.$Message.error("Fail!");
            });
        } else {
          this.$Message.error("Fail!");
        }
      });
    },
    //清空
    reset() {
      this.$refs["handleSubmit"].resetFields();
    },
  },
};
</script>

<style scoped>
.inputWidth {
  width: 310px;
}

.span {
  display: inline-block;
  width: 50px;
}

.center {
  text-align: center;
}
</style>
