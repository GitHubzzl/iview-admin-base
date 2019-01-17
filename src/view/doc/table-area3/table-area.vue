<template>
  <div class="tableArea">
    <Table border :columns="tableColumns" :data="tableData"></Table>
    <h3>说明：相比于tableAreaV1.0.1，添加了复选框类型，修改了mock数据结构</h3>
  </div>
</template>
<script>
  import MOCK from './mock.json'
  export default {
    name: 'tableArea',
    props: {
      areaInfo: {
        type: Object,
        default: ()=>{
          return {}
        }
      }
    },
    computed: {
      tableData () {
        return MOCK.data
      }
    },
    data () {
      return {
        tableColumns:[],
        formList:{
          form1:{
            field1:'',
            field2:''
          }
        },
        formRules:{
          rules1:{
            field1:''
          }
        },
        actionModel:''
      }
    },
    created () {
      this.computTableColumns()
      this.computActionModel()
    },
    methods: {
      /**
       * 计算table的操作项的数据
       * @returns
       */
      computActionModel(){
        let len = MOCK.data.length
        let arr = []
        for(let i=0; i<len; i++){
          let m = new Map();
          for(let j=0; j < MOCK.operation.length; j++){
            let mKey = MOCK.operation[j].type + j
            m.set(mKey,'')
          }
          arr.push(m)
        }
        this.actionModel = arr
        console.log(arr)
      },
      /**
       * 计算table的每列数据
       * @returns
       */
      computTableColumns () {
        let columns = []
        let arr = MOCK.tableHeader
        arr.forEach(item=>{
          if (item.key === 'action') {
            let actionWidth = MOCK.operation.length * 110
            let obj = {
              title: '操作',
              key: 'action',
              align: 'center',
              width: actionWidth
            }
            columns.push(Object.assign({}, obj, {render: (h, row)=>{
                let renderArr = []
                let operation = MOCK.operation
                operation.forEach(item=>{
                  let renderItem = ''
                  if (item.type === 'select') {
                    // render select
                    renderItem = this.renderSelect(h,row,item)
                  }
                  else if (item.type === 'button') {
                    // render button
                    renderItem = this.renderButton(h,row,item)
                  }
                  else if (item.type === 'input') {
                    // render input
                    renderItem = this.renderInput(h,row,item)
                  }
                  else if (item.type === 'radio') {
                    // render radio
                    renderItem = this.renderRadio(h,row,item)
                  }
                  else if (item.type === 'checkbox') {
                    // render checkbox
                    renderItem = this.renderCheckbox(h,row,item)
                  }
                  renderArr.push(renderItem)
                })
                return h('div', [renderArr])
              }}))
          }
          else {
            columns.push({
              title: item.title,
              key: item.key,
              align: 'center'})
          }
        })
        // return columns
        this.tableColumns = columns
      },
      /**
       * render select
       * @param h {Function} 创建节点函数
       * @param params {Object} 当前行的信息
       * @param item {Object} 当前元素的信息
       * @returns
       */
      renderSelect(h,row,item){
        let _this = this
        return h('Select', {
          style: {'width': '100px', 'margin-right': '5px'},
          on: {
            'on-change' (value) {
              _this.setActionModel(row,item,value)
              //item.value = event
              //_this.actionHandle(item)
            }
          }
        }, item.option.map((optionItem)=>{
          return h('Option', {
            props: {
              value: optionItem.value,
              label: optionItem.name
            }
          })
        }))
      },
      /**
       * render input
       * @param h {Function} 创建节点函数
       * @param params {Object} 当前行的信息
       * @param item {Object} 当前元素的信息
       * @returns
       */
      renderInput(h,row,item){
        let _this = this
        return h('Input', {
          style: {
            'width': '80px',
            'margin-right': '5px'
          },
          on: {
            'on-blur' (event) {
              let value = event.target.value
              _this.setActionModel(row,item,value)
              //_this.actionHandle(item)
            }
          }
        }, '')
      },
      /**
       * render radio
       * @param h {Function} 创建节点函数
       * @param params {Object} 当前行的信息
       * @param item {Object} 当前元素的信息
       * @returns
       */
      renderRadio(h,row,item){
        let _this = this
        return h('RadioGroup',{
          on:{
            "on-change":(value)=>{
              _this.setActionModel(row,item,value)
            }
          }
        }, item.label.map((radioOption)=>{
          return h('Radio',{
            props:{
              "label":radioOption
            }
          },radioOption)
        }))
      },
      /**
       * render checkbox
       * @param h {Function} 创建节点函数
       * @param params {Object} 当前行的信息
       * @param item {Object} 当前元素的信息
       * @returns
       */
      renderCheckbox(h,row,item){
        let _this = this
        return h('CheckboxGroup',{
          style: {
            'display': 'inline-block'
          },
          on:{
            "on-change":(value)=>{
              _this.setActionModel(row,item,value)
            }
          }
        }, item.label.map((checkboxItem)=>{
          return h('Checkbox',{
            props:{
              "label":checkboxItem
            },
            style: {
              'margin-right': '15px'
            },
          },checkboxItem)
        }))
      },
      /**
       * render button
       * @param h {Function} 创建节点函数
       * @param params {Object} 当前行的信息
       * @param item {Object} 当前元素的信息
       * @returns
       */
      renderButton(h,row,item) {
        return h('Button', {
          props: {
            type: 'primary',
            size: 'small'
          },
          style: { 'margin-right': '5px'},
          on: {
            click: () => {
              this.actionHandle(row,item)
            }
          }
        }, item.name)
      },
      /**
       * render button
       * @param h {Function} 创建节点函数
       * @param params {Object} 当前行的信息
       * @param item {Object} 当前元素的信息
       * @returns
       */
      setActionModel (row,item,value) {
        //行索引
        let index = row.index
        //需要修改的key
        let key = item.type + item.index
        //需要修改的单行信息，{map}
        let m = this.actionModel[index]
        //修改单行
        m.set(key,value)
        //set该行
        this.$set(this.actionModel,index,m)

        console.log(this.actionModel)
        this.actionModel.forEach(item=>{
          console.log(item.values())
        })

      },
      actionHandle (row,item) {
        console.log(item)
        console.log(MOCK)
      }
    }
  }
</script>
<style lang="less" scoped>
  .tableArea{
    width: 1200px;
    padding: 20px;
  }
</style>
