<template>
  <div class="tableArea">
    <Table border :columns="tableColumns" :data="tableData"></Table>
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
      tableColumns () {
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
            columns.push(Object.assign({}, obj, {render: (h, column)=>{
                let renderArr = []
                let operation = MOCK.operation
                operation.forEach(item=>{
                  let renderItem = ''
                  if (item.type === 'select') {
                    // render select
                    renderItem = this.renderSelect(h,column,item)
                  }
                  else if (item.type === 'button') {
                    // render button
                    renderItem = this.renderButton(h,column,item)
                  }
                  else if (item.type === 'input') {
                    // render input
                    renderItem = this.renderInput(h,column,item)
                  }
                  else if (item.type === 'radio') {
                    // render radio
                    renderItem = this.renderRadio(h,column,item)
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
        return columns
      },
      tableData () {
        return MOCK.data
      }
    },
    data () {
      return {
      }
    },
    mounted () {

    },
    methods: {
      actionHandle (column,item) {
        console.log(item)
        console.log(MOCK)
      },
      /**
       * render radio
       * @param h {Function} 创建节点函数
       * @param params {Object} 当前行的信息
       * @param item {Object} 当前元素的信息
       * @returns
       */
      renderRadio(h,column,item){
        let _this = this
        return h('RadioGroup',{
          props:{
            vModel:item.value,
            "value":item.value,
          },
          on:{
            "on-change":(event)=>{
              item.value = event
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
       * render select
       * @param h {Function} 创建节点函数
       * @param params {Object} 当前行的信息
       * @param item {Object} 当前元素的信息
       * @returns
       */
      renderSelect(h,column,item){
        let _this = this
        return h('Select', {
          style: {'width': '100px', 'margin-right': '5px'},
          on: {
            'on-change' (event) {
              // 值改变时,将渲染后的值重新赋值给单元格值
              item.value = event
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
       * render button
       * @param h {Function} 创建节点函数
       * @param params {Object} 当前行的信息
       * @param item {Object} 当前元素的信息
       * @returns
       */
      renderButton(h,column,item) {
        return h('Button', {
          props: {
            type: 'primary',
            size: 'small'
          },
          style: { 'margin-right': '5px'},
          on: {
            click: () => {
              this.actionHandle(column,item)
            }
          }
        }, item.name)
      },
      /**
       * render input
       * @param h {Function} 创建节点函数
       * @param params {Object} 当前行的信息
       * @param item {Object} 当前元素的信息
       * @returns
       */
      renderInput(h,column,item){
        let _this = this
        return h('Input', {
          props: {
            // 将单元格的值给Input
            value: item.value
          },
          style: {
            'width': '80px',
            'margin-right': '5px'
          },
          on: {
            'on-change' (event) {
              // 值改变时,将渲染后的值重新赋值给单元格值
              item.value = event.target.value
              //_this.actionHandle(item)
            }
          }
        }, '')
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
