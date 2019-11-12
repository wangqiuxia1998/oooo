<template>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      prop="id"
      label="学号"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="age"
      label="年龄"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
  </el-table>
</template>

  <script>
    export default {
      data() {
        return {
          tableData: [
          	{
          		id:1001,
          		name:"terry",
          		age:21,
          		address:"山西省晋城市"
          	},
          	{
          		id:1002,
          		name:"larry",
          		age:21,
          		address:"河南省新郑市"
          	},{
          		id:1003,
          		name:"bob",
          		age:21,
          		address:"河南省新乡市"
          	}
          ]
        }
      }
    }
  </script>